"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { PROJECTS } from "@/constants/project";

export function ProjectsList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <Section className="py-20 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <SectionHeading
          title="All Projects"
          description="Here are all of my projects I've worked on so far"
        />

      
        <div className="relative w-full md:w-64 mt-6 mb-10">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        
        <div className="grid md:grid-cols-3 gap-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl border bg-card text-card-foreground overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 w-80 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="p-5 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href={project.link} target="_blank">
                    <Button className="w-full mt-3 flex items-center justify-center gap-2">
                      GitHub
                      <Github className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No projects found.
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}