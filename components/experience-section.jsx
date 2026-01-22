import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tech Company",
    companyUrl: "https://example.com",
    location: "Remote",
    period: "Jan 2025 - Present",
    description: [
      "Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL",
      "Collaborated with design team to implement responsive UI components",
      "Improved application performance by 40% through code optimization",
      "Participated in code reviews and contributed to team best practices",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Startup Inc",
    companyUrl: "https://example.com",
    location: "Hybrid",
    period: "Jul 2024 - Dec 2024",
    description: [
      "Built reusable React components for the company's design system",
      "Integrated REST APIs and managed application state",
      "Wrote unit tests achieving 80% code coverage",
      "Mentored by senior developers in agile methodologies",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "Jest"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
        <div className="w-20 h-1 bg-primary mb-8" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {exp.location}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground text-sm flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5">-</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
