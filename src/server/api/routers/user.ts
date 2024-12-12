import { createUserSchema } from "~/lib/validations";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  create: publicProcedure
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
  getAll: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.user.findMany();

    return users;
  }),
});
