import { type Metadata } from "next";
import { ScrollToTopButton } from "~/components/ui/scroll-to-top-button";

export const metadata: Metadata = {
  title: "Ponto Beer - Menu",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function MenuLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container mx-auto flex-1">
      {children}
      <ScrollToTopButton />
    </div>
  );
}
