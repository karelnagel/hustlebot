"use client";

import { trpc } from "~/providers/TRPCProvider";

export default function Bot({ params: { id } }: { params: { id: string } }) {
  const { data: bot } = trpc.bots.getOne.useQuery({ id });
  if (!bot) {
    return <div>Bot not found</div>;
  }
  return (
    <div className="grid gap-2 md:grid-cols-2">
      <div>
        <div className="tabs tabs-boxed">
          <a className="tab">Info</a>
          <a className="tab tab-active">Style</a>
          <a className="tab">Knowledge</a>
        </div>
        <p>Bot</p>
        <p>{bot.name}</p>
      </div>
      <iframe src={`/chat/${bot.id}`} className="h-96" />
    </div>
  );
}
