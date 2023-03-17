import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Hustle Bot </h1>
      <Link href="/bots/new" className="btn">
        Create Your Own
      </Link>
    </div>
  );
}
