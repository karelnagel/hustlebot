import { getServerSession } from "next-auth";
import { Header } from "~/components/Header";
import { AuthProvider } from "../../providers/AuthProvider";
import { TRPCProvider } from "../../providers/TRPCProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <AuthProvider session={session}>
      <TRPCProvider>
        <Header />
        {children}
      </TRPCProvider>
    </AuthProvider>
  );
}
