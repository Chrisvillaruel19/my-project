"use client";

import { Section } from "@/components/common/Section";

export function SkillsSection() {
  const skills = ["HTML", "CSS", "JavaScript", "Next.js"];

  return (
    <Section className="text-center">

      <h2 className="text-2xl font-semibold mb-6">
        Skills & Expertise
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {skills.map((skill, i) => (
          <div key={i} className="border px-6 py-3 rounded-lg">
            {skill}
          </div>
        ))}
      </div>

    </Section>
  );
}