import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Github, Instagram } from "lucide-react";

export function Footer() {
  return (
  <footer className="border-t border-gray-200 dark:border-gray-800 py-10 bg-white/70 dark:bg-black/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center justify-between px-6 py-3 ">

          
            <div>
              <h2 className="font-bold text-lg tracking-widest uppercase">
                Portfolio
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                © {new Date().getFullYear()}
              </p>

              <div className="flex items-center gap-2 mt-4 text-gray-600 dark:text-gray-400">
                <MapPin size={16} />
                <p>Cebu City</p>
              </div>

              
            </div>

         
            <div>
              <h2 className="font-bold text-lg mb-4">Quick Links</h2>
              <ul className="flex flex-col gap-3 text-gray-600 dark:text-gray-400">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/project">Projects</Link></li>
                <li><Link href="contact">Contact</Link></li>
              </ul>
            </div>

          
            <div>
              <h2 className="font-bold text-lg mb-4">Follow Me</h2>

              <div className="flex gap-4">
                <Facebook className="cursor-pointer text-blue-500" />
                <Github className="cursor-pointer text-gray-900" />
                <Instagram className="cursor-pointer text-pink-500" />
              </div>
            </div>

          </div>

        </div>
      </footer>
  );
}