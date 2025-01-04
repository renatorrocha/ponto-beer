import { z } from "zod";
import { createProductSchema, productSchema } from "~/lib/validations";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const ProductRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createProductSchema)
    .mutation(async ({ ctx, input }) => {
      const newProduct = await ctx.db.product.create({
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
          image: input.image,
        },
      });

      return newProduct;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const products = await ctx.db.product.findMany();
    return products;
  }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.product.delete({
        where: { id: input.id },
      });
    }),

  update: protectedProcedure
    .input(productSchema)
    .mutation(async ({ ctx, input }) => {
      const updatedProduct = await ctx.db.product.update({
        where: { id: input.id },
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
          image: input.image,
        },
      });

      return updatedProduct;
    }),
});
