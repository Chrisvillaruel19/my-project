"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";

export function HeroSection() {
  const data = {
    name: "Your Name",
    description: "I am a passionate developer who loves building clean and user-friendly interfaces.",
  };

  return (
    <Section className="flex justify-center">

      <div className="flex flex-row items-center gap-12 max-w-4xl">

        {/* PROFILE */}
        <div className="w-44 h-44 bg-muted rounded-full flex items-center justify-center">
          Profile
        </div>

        {/* TEXT */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            {data.name}
          </h1>

          <p className="text-muted-foreground max-w-md">
            {data.description}
          </p>

          <div className="flex gap-4">
            <Link href="/projects">
              <Button>View Projects</Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline">Contact Me</Button>
            </Link>
          </div>
        </div>

      </div>

    </Section>
  );
}