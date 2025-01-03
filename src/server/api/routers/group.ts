import { createGroupSchema, groupSchema } from "~/lib/validations";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

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

  getById: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ctx, input}) => {
    const group = await ctx.db.group.findUnique({
      where: { id: input.id },
      include: { products: true },
    });

    return group;
  }),

  update: protectedProcedure
    .input(groupSchema)
    .mutation(async ({ ctx, input }) => {
      const updatedGroup = await ctx.db.group.update({
        where: { id: input.id },
        data: {
          name: input.name,
          products: {
            set: [],
            connect: input.products.map((product) => ({
              id: product.id,
            })),
          },
        },
      });

      return updatedGroup;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.group.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),
});
