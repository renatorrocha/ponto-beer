import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/pontobeer/"
              className="text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/pontobeer/"
              className="text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-300">
            © {currentYear} Ponto Beer. Todos os direitos reservados.
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            Feito com ❤️ por{" "}
            <Link
              href="https://renatodev.com/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer font-medium transition-colors duration-200 hover:underline"
            >
              @renatorrocha
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
