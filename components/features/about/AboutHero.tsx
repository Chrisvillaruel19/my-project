import Image from "next/image";
import { Section } from "@/components/common/Section";

export function AboutHero() {
  return (
    <Section className="pt-24 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          
          <div className="flex justify-center">
            <div className="relative w-[360px] h-[360px]">
              <Image
                src="/profile.jpg"
                alt="Nino Christopher Villaruel"
                fill
                className="rounded-full object-cover shadow-2xl border-8 border-background"
                priority
              />
            </div>
          </div>

          {/* About Me Content */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-6 text-foreground">About Me</h2>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Hi, I `&apos;`m <span className="font-semibold text-foreground">Nino Christopher Villaruel</span>, 
                  24 years old, born on January 19, 2002.
                </p>
                <p>
                  I am a <span className="font-semibold text-foreground">3rd Year BSIT Student</span> and a passionate 
                  <span className="font-semibold text-foreground">Frontend Developer</span>.
                </p>
                <p>
                  I love turning ideas into clean, modern, and user-friendly websites and applications. 
                  With strong skills in React, Next.js, and Tailwind CSS, I strive to create beautiful digital experiences.
                </p>
                <p>
                  I also enjoy teaching and sharing my knowledge with fellow students and aspiring developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}