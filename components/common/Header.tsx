import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">    
      <div className="container mx-auto flex h-16 items-center justify-between px-6">

        <div className="flex items-center gap-3">
          
          <Image
            src="/chris.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-cover ring-2 ring-border"
          />

          {/* Name + Role */}
          <div className="leading-tight">
            <h1 className="text-sm font-semibold tracking-wide bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
              Niño Villaruel
            </h1>
            <p className="text-[11px] text-muted-foreground">
              Frontend Developer
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Projects", href: "/project" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

        </nav>

       
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}