import { TRPCError } from "@trpc/server";
import { randomUUID } from "crypto";
import { env } from "~/env";
import { userSchema } from "~/lib/validations";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { resend } from "../../resend";

export const AuthRouter = createTRPCRouter({
  login: publicProcedure
    .input(userSchema.pick({ email: true }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
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

  // verifyToken: publicProcedure
  //   .input(createUserSchema)
  //   .mutation(async ({ ctx, input }) => {}),
});
