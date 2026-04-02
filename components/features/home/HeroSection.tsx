"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-background pt-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <Image
              src="/profile.jpg"
              alt="Nino Christopher Villaruel"
              width={360}
              height={360}
              className="rounded-full shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-primary font-medium tracking-widest text-sm uppercase">
            FRONTEND DEVELOPER
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
            Niño Villaruel
          </h1>

          <p className="text-2xl text-muted-foreground">
            A passionate 3rd year college student
          </p>

          <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0 leading-relaxed">
            Dedicated to building clean, modern, and visually captivating websites and web applications. 
            I focus on creating user-friendly digital experiences using Next.js, React, and Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
            <Link href="/project">
              <Button size="lg" className="px-10 py-7 text-base">
                View My Projects
                <ArrowRight className="ml-3" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-10 py-7 text-base">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}