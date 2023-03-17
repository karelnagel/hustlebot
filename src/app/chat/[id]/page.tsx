import { prisma } from "~/server/db";

export default async function Chat({
  params: { id },
}: {
  params: { id: string };
}) {
  const bot = await prisma.bot.findUnique({ where: { id: id } });
  if (!bot) {
    return <div>Bot not found</div>;
  }
  return <div>{bot.name}</div>;
}
