import { TRPCError } from "@trpc/server";
import { randomUUID } from "crypto";
import { env } from "~/env";
import { createUserSchema, userSchema } from "~/lib/validations";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
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

      const MagicLink = `${env.NEXT_PUBLIC_BASE_URL}/auth/verify/${generatedToken}`;
    }),

  // verifyToken: publicProcedure
  //   .input(createUserSchema)
  //   .mutation(async ({ ctx, input }) => {}),
});
