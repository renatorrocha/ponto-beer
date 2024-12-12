import { initTRPC, TRPCError } from "@trpc/server";
import { decodeJwt } from "jose";
import superjson from "superjson";
import { ZodError } from "zod";

import { db } from "~/server/db";
import { verifyUserId } from "../auth";

export const createTRPCContext = async (opts: { headers: Headers }) => {
  const cookieHeader = opts.headers.get("cookie");

  const token =
    cookieHeader
      ?.split(";")
      .find((cookie) => cookie.trim().startsWith("jwt="))
      ?.split("=")[1] ?? null;

  let user = null;

  if (token) {
    try {
      const decoded = decodeJwt<{ userId: string }>(token);

      user = await verifyUserId(decoded.userId);
    } catch (error) {
      console.error(
        "[AUTH] Falha na autenticação:",
        error instanceof Error ? error.message : error,
      );
    }
  }
  return {
    db,
    user,
    ...opts,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createCallerFactory = t.createCallerFactory;

export const createTRPCRouter = t.router;

const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (t._config.isDev) {
    // artificial delay in dev
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();

  const end = Date.now();
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

  return result;
});

const authMiddleware = t.middleware(async ({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Usuário não autenticado.",
    });
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

export const publicProcedure = t.procedure.use(timingMiddleware);

export const protectedProcedure = t.procedure
  .use(timingMiddleware)
  .use(authMiddleware);
