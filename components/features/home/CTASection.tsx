"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <Section>

      <div className="bg-muted p-10 rounded-xl text-center space-y-4">

        <h2 className="text-2xl font-bold">
          Interested to collaborate?
        </h2>

        <Button>Contact Me</Button>

      </div>

    </Section>
  );
}