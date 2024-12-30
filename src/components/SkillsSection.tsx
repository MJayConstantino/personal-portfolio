"use client";

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
import { motion } from "framer-motion";

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
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                key={skill.name}
                className={`hover:shadow-md transition-shadow ${
                  ["React/React Native", "Next.js", "TypeScript"].includes(
                    skill.name,
                  )
                    ? "border-primary"
                    : ""
                }`}
              >
                <CardContent className="flex flex-col items-center justify-center p-4 h-full">
                  <skill.icon className="w-8 h-8 mb-2 text-primary" />
                  <span className="text-sm text-center">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
