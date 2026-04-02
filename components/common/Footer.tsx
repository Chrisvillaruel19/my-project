import Link from "next/link";
import { MapPin, Facebook, Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* LEFT */}
          <div className="space-y-3">
            <h2 className="font-m text-xl tracking-widest uppercase">
              Niño Villaruel
            </h2>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin size={16} />
              <p className="text-sm">Cebu City</p>
            </div>
          </div>

          {/* CENTER */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
            <ul className="flex flex-col gap-3 text-gray-600 dark:text-gray-400">
              {[
                { name: "Home", link: "/" },
                { name: "About", link: "/about" },
                { name: "Projects", link: "/project" },
                { name: "Contact", link: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="relative group text-sm transition-colors duration-300 hover:text-black dark:hover:text-white"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Follow Me</h2>

            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/villaruelchris191"
                target="_blank"
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300"
              >
                <Facebook className="text-blue-500" size={18} />
              </Link>

              <Link
                href="https://github.com/Chrisvillaruel19"
                target="_blank"
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <Github className="text-gray-900 dark:text-white" size={18} />
              </Link>

              <Link
                href="https://www.instagram.com/villaruel.chris/"
                target="_blank"
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:scale-110 hover:bg-pink-100 dark:hover:bg-pink-900 transition-all duration-300"
              >
                <Instagram className="text-pink-500" size={18} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}