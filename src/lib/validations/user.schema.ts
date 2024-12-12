import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres."),
  email: z.string().email("Insira um E-mail valido."),
});

export const userSchema = createUserSchema.extend({
  id: z.string().cuid2(),
});

export type User = z.infer<typeof userSchema>;
export type CreateUser = z.infer<typeof createUserSchema>;
