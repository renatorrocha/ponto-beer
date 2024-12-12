import { type Metadata } from "next";
import { Sidebar } from "./_components/sidebar";
import Header from "./_components/header";

export const metadata: Metadata = {
  title: "Ponto Beer - Admin",
  description: "Admin dashboard for your application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-[100vh] w-full bg-muted/40">
      <Sidebar />

      <main className="flex flex-1 flex-col">
        <Header />

        <div className="flex flex-1 p-4">{children}</div>
      </main>
    </div>
  );
}
