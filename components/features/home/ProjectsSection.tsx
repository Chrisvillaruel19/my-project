"use client";

import { Section } from "@/components/common/Section";

type Project = {
  title: string;
  description: string;
};

export function ProjectsSection() {
  const projects: Project[] = [
    { title: "Project 1", description: "Short description" },
    { title: "Project 2", description: "Short description" },
    { title: "Project 3", description: "Short description" },
  ];

  return (
    <Section>

      <h2 className="text-2xl font-semibold text-center mb-6">
        Recent Work
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">

        {projects.map((proj, i) => (
          <div key={i} className="w-72 border rounded-lg p-4">

            <div className="h-40 bg-muted mb-3 flex items-center justify-center">
              Screenshot
            </div>

            <h3 className="font-semibold">
              {proj.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {proj.description}
            </p>

          </div>
        ))}

      </div>

    </Section>
  );
}