import Link from "next/link";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">


        <div className="flex items-center gap-3">
          <img
            src="/chris.png"
            alt="Logo"
            className="rounded-full w-11 h-11 object-cover ring-2 ring-gray-300 dark:ring-gray-700"
          />

          <h1 className="text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Ni
          </h1>
        </div>

      
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-20 text-sm font-medium">
            <li>
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/project" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

    
        <div>
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}