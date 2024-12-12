import { createUserSchema } from "~/lib/validations";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(createUserSchema)
    .mutation(async ({ ctx, input }) => {
      const newUser = await ctx.db.users.create({
        data: {
          name: input.name,
          email: input.email,
        },
      });

      return newUser;
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.users.findMany();

    return users;
  }),
});
