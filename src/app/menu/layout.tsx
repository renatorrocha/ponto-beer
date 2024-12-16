import { type Metadata } from "next";
import { ScrollToTopButton } from "~/components/ui/scroll-to-top-button";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "Ponto Beer - Menu",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function MenuLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
