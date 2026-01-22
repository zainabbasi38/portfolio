const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Prisma"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel", "Figma"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-primary mb-8" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
