import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import z from "zod";

export const bots = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const bots = await ctx.prisma.bot.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return bots;
  }),
  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const bot = await ctx.prisma.bot.findFirst({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
      });

      return bot;
    }),
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        website: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      console.log("input", ctx.session.user.id);
      const bot = await ctx.prisma.bot.create({
        data: {
          name: input.name,
          website: input.website,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });

      return bot;
    }),
});
