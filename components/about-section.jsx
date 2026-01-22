import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code is my priority",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams and stakeholders",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-20 h-1 bg-primary mb-8" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm a passionate full stack web developer with 1 year of
              hands-on experience creating web applications. My journey in web
              development started when I discovered my love for turning ideas
              into reality through code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building responsive, user-friendly applications
              using modern technologies. I enjoy working on both the frontend
              and backend, which allows me to create seamless experiences from
              start to finish.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or writing technical blog
              posts to share my learnings with the community.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
