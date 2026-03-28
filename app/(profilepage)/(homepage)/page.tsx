import { HeroSection } from "@/components/features/home/HeroSection";
import { SkillsSection } from "@/components/features/home/SkillsSection";
import { ProjectsSection } from "@/components/features/home/ProjectsSection";
import { CTASection } from "@/components/features/home/CTASection";

export default function HomePage() {
  return (
    <main>

      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CTASection />

    </main>
  );
}