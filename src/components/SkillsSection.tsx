import { Card, CardContent } from "@/components/ui/card";
import {
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaNodeJs,
  FaReact,
  FaFigma,
  FaUnity,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiScala,
  SiGodotengine,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3 },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React/React Native", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Node.js", icon: FaNodeJs },
  { name: "PostgreSQL", icon: BiLogoPostgresql },
  { name: "Firebase", icon: IoLogoFirebase },
  { name: "Git", icon: FaGitAlt },
  { name: "Github", icon: FaGithub },
  { name: "Python", icon: FaPython },
  { name: "Scala", icon: SiScala },
  { name: "Unity", icon: FaUnity },
  { name: "Godot", icon: SiGodotengine },
  { name: "Figma", icon: FaFigma },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardContent className="flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow">
                <skill.icon size={20} />
                {skill.name}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
