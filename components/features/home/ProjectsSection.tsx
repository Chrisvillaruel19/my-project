"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react"; 
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Lost and Found",
      description: "A Lost and Found web app built as a mini capstone project, allowing users to post and search for lost or found items.",
      image: "/project1.PNG",
      link: "https://github.com/yourusername/project-one",
      tech: ["Next.js", "Tailwind"]
    },
    {
      id: 2,
      title: "Project Two",
      description: "My first Next.js project showcasing a basic layout with a navigation bar and background design, built to practice fundamental concepts of React and Next.js.",
      image: "/projt2.PNG",
      link: "https://github.com/yourusername/project-two",
      tech: ["React", "Chadcn"]
    },
    {
      id: 3,
      title: "E-Commerce",
      description: "A beginner ecommerce application developed with React and CSS, showcasing core features like product listing, cart functionality, and responsive design.",
      image: "/project3.PNG",
      link: "https://github.com/yourusername/project-three",
      tech: ["React", "CSS"]
    }
  ];

  return (
    <Section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        
        <SectionHeading 
        
          title="3 Most Recent Work" 
          description="Here are some of my latest projects I've worked on" 
          
        />
               
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group rounded-2xl border bg-card text-card-foreground overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 w-80 hover:-translate-y-2"
            >
          
              <div className="relative h-56 overflow-hidden  ">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill 
                  className=" p-5 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

          
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

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

                
                <Link href="https://github.com/" target="_blank">
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-3"
      >
        GitHub
        <Github className="h-4 w-4" />
      </Button>
    </Link>
              </div>
            </div>
          ))}
            <Link href="/project" className="block">    
            </Link>
        </div>
           <Link
  href="/project"
  className="flex items-center group text-black hover:text-gray-500 transition-colors duration-300"
>
  <p className="m-0">All Projects</p>
  <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
</Link>
      </div>
    </Section>
  );
}