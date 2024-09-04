import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import { ModalProvider } from "@/components/modals/modalProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Découvrir votre domaine de service",
  description:
    "Découvrez votre domaine de service en répondant à quelques questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ModalProvider />
        <main>{children}</main>
        <Toaster position="top-center" duration={5000} richColors />
      </body>
    </html>
  );
}
