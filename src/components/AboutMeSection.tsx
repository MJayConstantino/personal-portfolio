"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-primary/10">
              <CardContent className="p-6">
                <p className="text-lg text-foreground">
                  👋 Hey there! I'm Michael, a second-year Software Engineering
                  student at Central Philippine University.
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
            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground">
                  💻 My coding journey started back in Grade 6 with Arduino, and
                  since then, I've grown into full-stack development. I love
                  building applications that solve real problems and create
                  amazing user experiences.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-primary/10">
              <CardContent className="p-6">
                <p className="text-lg text-foreground">
                  🎓 Currently mastering TypeScript and advanced web
                  development, while building multiple full-stack applications.
                  I've already completed projects with Next.js, React, and
                  various other modern technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground">
                  🚀 My first year gave me strong foundations in Python and game
                  development with C# and Unity. Now, I'm expanding my horizons
                  and working on exciting projects that combine both creativity
                  and technical excellence.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
