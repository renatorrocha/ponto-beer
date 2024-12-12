import { TRPCError } from "@trpc/server";
import { db } from "./db";

export interface VerifyUser {
  message: string;
  user: {
    id: string;
    email: string;
  };
}

export const verifyUserId = async (userId: string): Promise<VerifyUser> => {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Usuário não encontrado.",
    });
  }

  return {
    message: "Autenticação bem-sucedida!",
    user: {
      id: user.id,
      email: user.email,
    },
  };
};
