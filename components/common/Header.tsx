import Link from "next/link";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">

      <div className="relative z-10 container mx-auto flex h-14 items-center justify-between gap-4 bg-background px-4 sm:px-6">

        {/* 🔹 LEFT - LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/chris.png"
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-300 dark:ring-gray-700"
          />

          <h1 className="text-lg font-semibold tracking-wide bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Niño
          </h1>
        </div>

        {/* 🔹 CENTER - NAV */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-10 text-sm font-medium">

            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/projects" className="hover:text-blue-500 transition">
                Projects
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>

          </ul>
        </nav>

        {/* 🔹 RIGHT - THEME */}
        <div>
          <ThemeToggle />
        </div>

      </div>

    </header>
  );
}