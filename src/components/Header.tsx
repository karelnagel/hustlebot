"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between">
      <h1>HustleBot</h1>
      {session ? (
        <button onClick={() => void signOut()}>{session.user.name}</button>
      ) : (
        <button onClick={() => void signIn("google")}>Signin</button>
      )}
    </div>
  );
};
