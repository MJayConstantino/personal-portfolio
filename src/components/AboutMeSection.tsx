"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaUnity } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiGodotengine } from "react-icons/si";

const coreSkills = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Python", icon: FaPython },
  { name: "Unity", icon: FaUnity },
  { name: "Godot", icon: SiGodotengine },
];

const AboutMeSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-primary/10 h-full">
                <CardContent className="p-6">
                  <p className="text-lg text-foreground">
                    👋 Hey there! I'm Michael, a second-year Software
                    Engineering student at Central Philippine University with a
                    passion for building exceptional digital experiences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground">
                    💻 From Arduino beginnings to full-stack development, I
                    craft solutions across web, mobile, and game platforms,
                    focusing on user experience and technical excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Core Technologies
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {coreSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <skill.icon className="w-8 h-8 mb-2 text-primary" />
                      <span className="text-sm text-center text-muted-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
