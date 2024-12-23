import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    year: "2024-present",
    title: "2nd Year Software Engineering Student",
    description:
      "Focusing on TypeScript and advanced project development, project management and functional programming",
  },
  {
    id: 2,
    year: "2022-2023",
    title: "1st Year Software Engineering Student",
    description:
      "Learned Python extensively and leaned the fundamentals of OOP",
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
          My Journey
        </h2>
        <div className="relative border-l border-primary">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-8 ml-4">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-background"></div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <time className="mb-1 sm:mb-0 text-sm font-normal leading-none text-muted-foreground w-20">
                  {exp.year}
                </time>
                <Card className="ml-0 sm:ml-6 w-full">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {exp.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
