import { createGroupSchema } from "~/lib/validations";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const GroupRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createGroupSchema)
    .mutation(async ({ ctx, input }) => {
      const newGroup = await ctx.db.group.create({
        data: {
          name: input.name,
          products: {
            connect: input.products.map((product) => ({
              id: product.id,
            })),
          },
        },
      });

      return newGroup;
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const groups = await ctx.db.group.findMany({
      include: { products: true },
    });

    return groups;
  }),
});
