import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A React-based task organizer",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather data visualization",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
