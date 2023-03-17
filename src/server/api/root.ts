import { createTRPCRouter } from "~/server/api/trpc";
import { bots } from "~/server/api/routers/bots";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  bots,
});

// export type definition of API
export type AppRouter = typeof appRouter;
