"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between">
      <Link href="/">HustleBot</Link>
      {session ? (
        <button onClick={() => void signOut()}>{session.user.name}</button>
      ) : (
        <button onClick={() => void signIn("google")}>Signin</button>
      )}
    </div>
  );
};
