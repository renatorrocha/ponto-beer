import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-1 grid-cols-2 justify-center border md:grid">
      <div className="hidden h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground md:flex">
        <Link
          href={"/"}
          className="flex items-center gap-3 text-lg text-foreground"
        >
          {/* todo: Logo no futuro */}
          <span className="font-semibold">Ponto Beer</span>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center gap-12">
        <Link
          href={"/"}
          className="flex items-center gap-3 rounded-lg border border-primary p-4 text-lg text-foreground shadow-md md:hidden"
        >
          {/* todo: Logo no futuro */}
          <span className="font-semibold">Ponto Beer</span>
        </Link>

        {children}
      </div>
    </main>
  );
}
