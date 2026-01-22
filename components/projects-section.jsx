import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Password Management App",
    description:
      "A password management application with user authentication, secure password storage, and encryption.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Firebase", "Material UI", "React DnD"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that displays current weather and forecasts for multiple locations with interactive charts and maps.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Mapbox"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A markdown-based blogging platform with SEO optimization, syntax highlighting, and a custom CMS for content management.",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
        <div className="w-20 h-1 bg-primary mb-8" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on GitHub
              <Github className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
