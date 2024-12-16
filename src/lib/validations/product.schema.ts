import { z } from "zod";

export const createItemSchema = z.object({
  name: z.string().min(2, "O nome do item deve ter pelo menos 2 caracteres."),
  description: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres."),
  price: z.coerce.number().min(0, "O preço deve ser um número positivo."),
  image: z.string().url("Deve ser uma URL válida para a imagem."),
});

export const itemSchema = createItemSchema.extend({
  id: z.string().uuid(),
});

export type Item = z.infer<typeof itemSchema>;
export type CreateItem = z.infer<typeof createItemSchema>;

export const createGroupSchema = z.object({
  name: z.string().min(2, "O nome do grupo deve ter pelo menos 2 caracteres."),
  items: z.array(itemSchema).min(1, "Adicione pelo menos um item ao grupo."),
});

export const groupSchema = createGroupSchema.extend({
  id: z.string().uuid(),
});

export type Group = z.infer<typeof groupSchema>;
export type CreateGroup = z.infer<typeof createGroupSchema>;
