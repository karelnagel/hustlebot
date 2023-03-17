"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { trpc } from "~/providers/TRPCProvider";

export default function New() {
  const { mutateAsync } = trpc.bots.create.useMutation();
  const [name, setName] = useState("");
  const [website, setWebsite] = useState<string>("");
  const router = useRouter();

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const bot = await mutateAsync({ name, website });
    router.push(`/bots/${bot.id}`);
  };

  return (
    <div>
      <h1>Create new bot</h1>
      <form onSubmit={(e) => void submit(e)}>
        <div>
          <label htmlFor="">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Website</label>
          <input value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
