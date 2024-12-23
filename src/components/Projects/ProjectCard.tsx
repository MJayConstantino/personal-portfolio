import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  languages: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
      <Card className="h-full transition-transform hover:scale-105">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.languages.map((lang, index) => (
              <Badge key={index} variant="secondary">
                {lang}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
