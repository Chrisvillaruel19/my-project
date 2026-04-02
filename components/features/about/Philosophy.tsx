import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/common/Section";
import { Heart, Target, Star } from "lucide-react";

export function Philosophy() {
  const items = [
    { 
      icon: <Heart className="w-10 h-10 text-red-500" />,
      title: "God Centered", 
      desc: "I put God first in everything I do. My faith guides my decisions, work ethic, and purpose." 
    },
    { 
      icon: <Target className="w-10 h-10 text-blue-500" />,
      title: "Ambition & Discipline", 
      desc: "I believe in working hard with purpose. Ambition without discipline is just a dream." 
    },
    { 
      icon: <Star className="w-10 h-10 text-amber-500" />,
      title: "Keep Dreaming", 
      desc: "No matter how big the dream is, I keep pushing forward. Dreams become reality through consistent effort." 
    }
  ];

  return (
    <Section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">My Philosophy</h2>
          <p className="text-muted-foreground mt-3 text-lg">
            As a student and developer, these are the values I live by
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 border-border group"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex justify-center">
                  {item.icon}
                </div>
                <div className="text-5xl font-bold text-muted-foreground mb-2">
                  0{index + 1}
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}