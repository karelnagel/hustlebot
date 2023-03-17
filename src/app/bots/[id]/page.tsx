"use client";

import { trpc } from "~/providers/TRPCProvider";

export default function Bot({ params: { id } }: { params: { id: string } }) {
  const { data: bot } = trpc.bots.getOne.useQuery({ id });
  return (
    <div>
      <p>Bot</p>
      <p>{bot?.name}</p>
    </div>
  );
}
