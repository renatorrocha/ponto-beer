import { createUserSchema } from "~/lib/validations";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createUserSchema)
    .mutation(async ({ ctx, input }) => {
      const newUser = await ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
        },
      });

      return newUser;
    }),
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.user.findMany();

    return users;
  }),
});
