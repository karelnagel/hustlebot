"use client";
import Link from "next/link";
import { trpc } from "~/providers/TRPCProvider";

export default function App() {
  const { data: bots } = trpc.bots.getAll.useQuery();
  return (
    <div>
      <h1>My Bots</h1>
      <div>
        {bots?.map((bot) => (
          <div key={bot.id}>
            <h2>{bot.name}</h2>
            {bot.image && <img src={bot.image} alt="" />}
          </div>
        ))}
        <Link href="/bots/new" className="btn-primary btn">
          Create new
        </Link>
      </div>
    </div>
  );
}
