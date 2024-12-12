import { z } from "zod";

export const magicLinkSchema = z.object({
  email: z
    .string()
    .email("Por favor insira um email valido.")
    .min(1, "Email é obrigatório."),
});

export const verifyTokenSchema = z.object({
  token: z.string().min(1, "Token é obrigatório"),
});

export type MagicLinkInput = z.infer<typeof magicLinkSchema>;
export type VerifyTokenInput = z.infer<typeof verifyTokenSchema>;
