import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Globe, Monitor } from "lucide-react";
import { Section } from "@/components/common/Section";

const skills = [
  { icon: <Code2 className="w-10 h-10" />, title: "HTML", desc: "Semantic Markup" },
  { icon: <Palette className="w-10 h-10" />, title: "CSS", desc: "Tailwind & Styling" },
  { icon: <Monitor className="w-10 h-10" />, title: "JavaScript", desc: "Interactive Features" },
  { icon: <Globe className="w-10 h-10" />, title: "React / Next.js", desc: "Modern Development" },
];

export function SkillsSection() {
  return (
    <Section className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground">Technologies I use to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 border-border">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 text-primary">{skill.icon}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}