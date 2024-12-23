"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          About Me
        </h2>
        <Tabs defaultValue="about" className="w-full max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardContent className="flex flex-col md:flex-row items-center p-6">
                <div className="w-64 h-64 md:w-80 md:h-80 relative mb-6 md:mb-0 md:mr-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Michael Constantino"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-muted-foreground">
                    I am a software engineering student at Central Philippine
                    University with a passion for creating intuitive and
                    efficient web applications. My journey in coding began in
                    Grade 6 with Arduino, and since then, I have expanded my
                    skills to include full-stack development. I love turning
                    ideas into reality and continuously learning new
                    technologies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="education">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Central Philippine University
                </h3>
                <p className="text-muted-foreground mb-4">
                  Bachelor of Science in Software Engineering
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    Currently in 2nd year, focusing on TypeScript and advanced
                    project development
                  </li>
                  <li>
                    1st year: Learned Python extensively and developed a game
                    using C# and Unity
                  </li>
                  <li>
                    Created a collaborative project management tool using React
                    Native
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutMeSection;
