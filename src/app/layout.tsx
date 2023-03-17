import { AuthProvider } from "../providers/AuthProvider";
import { TRPCProvider } from "../providers/TRPCProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { Header } from "~/components/Header";

const inter = Inter({ subsets: ["latin"] });
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <AuthProvider session={session}>
        <TRPCProvider>
          <body style={inter.style}>
            <Header />
            {children}
          </body>
        </TRPCProvider>
      </AuthProvider>
    </html>
  );
}
