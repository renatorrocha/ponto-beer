import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Ponto Beer",
  description: "Loja de Cervejas especiais, vinhos, carnes e muito mais.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <TRPCReactProvider>
          <div className="flex min-h-[100vh] w-full bg-muted/20">
            {children}
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
