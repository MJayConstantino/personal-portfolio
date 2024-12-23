import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: "Senior Developer",
      company: "Tech Co",
      period: "2020 - Present",
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "Startup Inc",
      period: "2016 - 2018",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          My Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <CardTitle>{exp.role}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
