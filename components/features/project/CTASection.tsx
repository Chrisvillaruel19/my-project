"use client";

import Link from "next/link";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <Section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Interested in collaborating?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          I’m always open to exciting projects and opportunities. Let’s create something amazing together!
        </p>
        <Link href="/contact">
          <Button className="px-8 py-3 text-lg">Go to Contact Page</Button>
        </Link>
      </div>
    </Section>
  );
}