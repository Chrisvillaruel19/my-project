import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ContactHero() {
  return (
    <Section className="pt-24 pb-16 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <SectionHeading 
          title="Let's Get In Touch" 
          description="Have a project in mind? Feel free to reach out!" 
        />
      </div>
    </Section>
  );
}