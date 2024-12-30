import { createProductSchema } from "~/lib/validations";
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
});
