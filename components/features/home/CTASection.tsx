import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";

export function CTASection() {
  return (
    <Section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-muted-foreground mb-8">
          Interested in collaborating or have a project in mind?
        </p>
        <Link href="/contact">
          <Button size="lg" className="px-10 py-7 text-base">
            Say Hello
          </Button>
        </Link>
      </div>
    </Section>
  );
}