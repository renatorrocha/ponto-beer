import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Ponto Beer - Menu",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex min-h-[100vh] w-full">{children}</div>;
}
