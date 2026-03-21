import Link from "next/link"
import { ThemeToggle } from "@/components/common/ThemeToggle"

export function Header() {
  return (
    <header className="border-b border-gray-800 py-5">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <img src="" alt="" />
          </div>
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blog">Contact</Link>
              </li>
            </ul>
          </nav>
    
          <div className="flex items-center gap-4">
            <ThemeToggle />

          </div>
        </div>
      </div>
    </header>
  )
}
