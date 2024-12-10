import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";

export default async function Home() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <p>Home Page</p>
        <Link href={"/menu"} className={buttonVariants()}>
          Cardápio Digital
        </Link>
      </div>
    </main>
  );
}
