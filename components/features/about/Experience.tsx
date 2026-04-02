import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/common/Section";

export function Experience() {
  return (
    <Section className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
 
        <div>
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Experience & Education
          </h2>
          
          <div className="space-y-6">

           
            <Card>
              <CardHeader>
                <CardTitle>Laundry Management System</CardTitle>
                <p className="text-sm text-muted-foreground">2026 - Present (Capstone Project)</p>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Currently developing a full-stack Laundry Management System as our BSIT Capstone Project. 
                Responsible for frontend development using Next.js and Tailwind CSS.
              </CardContent>
            </Card>
          
            <Card>
              <CardHeader>
                <CardTitle>School & Personal Projects</CardTitle>
                <p className="text-sm text-muted-foreground">2023 - 2025</p>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Developed multiple web applications including Lost and Found systems, 
                portfolio websites, and other small projects as part of my coursework.
              </CardContent>
            </Card>
 <Card>
              <CardHeader>
                <CardTitle>Juice Mixer - Uncle Brew</CardTitle>
                <p className="text-sm text-muted-foreground">2025</p>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Worked as a Juice Mixer at Uncle Brew. Gained experience in customer service, 
                teamwork, and working efficiently in a fast-paced environment.
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Tools & Technologies
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              "HTML", "CSS", "JavaScript", 
              "React", "Next.js", "Tailwind CSS", 
              "TypeScript", "Git", "Shadcn/UI"
            ].map((tech) => (
              <Card 
                key={tech} 
                className="hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <CardContent className="p-6 text-center font-medium">
                  {tech}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}