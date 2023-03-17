"use client";

import { trpc } from "~/providers/TRPCProvider";

export default function Bot({ params: { id } }: { params: { id: string } }) {
  const { data: bot } = trpc.bots.getOne.useQuery({ id });
  return (
    <div className="grid gap-2 md:grid-cols-2">
      <div>
        <div className="tabs tabs-boxed">
          <a className="tab">Tab 1</a>
          <a className="tab tab-active">Tab 2</a>
          <a className="tab">Tab 3</a>
        </div>
        <p>Bot</p>
        <p>{bot?.name}</p>
      </div>
      <iframe src="/chat" className="h-96" />
    </div>
  );
}
