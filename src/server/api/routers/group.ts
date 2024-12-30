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
          items: {
            create: input.items.map((item) => ({
              name: item.name,
              description: item.description,
              price: item.price,
              image: item.image,
            })),
          },
        },
      });

      return newGroup;
    }),
    
  getAll: publicProcedure.query(async ({ ctx }) => {
    const groups = await ctx.db.group.findMany({
      include: { items: true },
    });

    return groups;
  }),
});
