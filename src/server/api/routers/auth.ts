/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TRPCError } from "@trpc/server";
import { randomUUID } from "crypto";
import { env } from "~/env";
import { userSchema, verifyTokenSchema } from "~/lib/validations";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { resend } from "../../resend";
import { sign } from "jsonwebtoken";

export const AuthRouter = createTRPCRouter({
  login: publicProcedure
    .input(userSchema.pick({ email: true }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Usuário não encontrado.",
        });
      }

      const generatedToken = randomUUID();

      await ctx.db.magicLinkToken.create({
        data: {
          token: generatedToken,
          userId: user.id,
        },
      });

      const magicLink = `${env.NEXT_PUBLIC_BASE_URL}/auth/verify/${generatedToken}`;

      const sendEmail = await resend.emails.send({
        from: "Ponto-Beer <Ponto-Beer@renatodev.com>",
        to: [input.email],
        subject: "Link de Autentificação",
        html: `${magicLink}`,
      });

      if (sendEmail.error) {
        console.log(sendEmail.error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Não foi possível enviar o email.",
        });
      }

      return;
    }),

  verifyToken: publicProcedure
    .input(verifyTokenSchema)
    .mutation(async ({ ctx, input }) => {
      const token = await ctx.db.magicLinkToken.findFirst({
        where: {
          token: input.token,
        },
      });

      if (!token) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Token não encontrado.",
        });
      }

      if (token.used === true) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Token já foi utilizado.",
        });
      }

      const user = await ctx.db.user.findUnique({
        where: {
          id: token.userId,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Usuário não encontrado.",
        });
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const JWTtoken = sign(
        { userId: user.id, email: user.email },
        env.JWT_SECRET,
      );

      await ctx.db.magicLinkToken.update({
        where: {
          id: token.id,
          userId: user.id,
        },
        data: {
          used: true,
        },
      });

      return {
        token: JWTtoken,
        user,
      };
    }),
});
