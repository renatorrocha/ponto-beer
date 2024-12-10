import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Ponto Beer - Menu",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex min-h-screen w-full">{children}</div>
      </body>
    </html>
  );
}
