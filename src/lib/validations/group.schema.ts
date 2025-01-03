import { z } from "zod";
import { productSchema } from "./product.schema";

export const createGroupSchema = z.object({
  name: z.string().min(2, "O nome do grupo deve ter pelo menos 2 caracteres."),
  products: z
    .array(productSchema.pick({ id: true }))
    .min(1, "Adicione pelo menos um item ao grupo.")
    .refine((data) => data.every((item) => item.id), {
      message: "Adicione pelo menos um item ao grupo.",
    }),
});

export const groupSchema = createGroupSchema.extend({
  id: z.string().uuid(),
});

export type Group = z.infer<typeof groupSchema>;
export type CreateGroup = z.infer<typeof createGroupSchema>;
