"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { motion } from "framer-motion";

const projects = {
  webDev: [
    {
      id: 1,
      title: "NoteTube",
      description: "An AI-Powered Learning Web App",
      image: "/projects/webdev/notetube.png",
      githubUrl: "https://github.com/BB6-SE/se-2144-final-project",
      languages: [
        "PostgreSQl",
        "Express",
        "React",
        "Node.js",
        "Typescript",
        "Vite",
      ],
    },
    // {
    //   id: 2,
    //   title: "Calculator",
    //   description:
    //     "A Vite Project that is a simple calculator with basic operations",
    //   image: "/placeholder.svg?height=200&width=300",
    //   githubUrl: "https://github.com/MJayConstantino",
    //   languages: ["TypeScript", "Vite"],
    // },
  ],
  gameDev: [
    {
      id: 3,
      title: "Mix n Mash",
      description:
        "A 2D Brawler Platformer game with inspiration from Pokemon and Smash Bros",
      image: "/projects/gamedev/mixnmash.png",
      githubUrl:
        "https://github.com/FrancyAmada/Mix-and-Mash-Odyssey-Fest-2024",
      languages: ["Gdscript", "Godot"],
    },
    {
      id: 4,
      title: "Food Vendor Simulator",
      description:
        "A 2D drag and drop game where you simulate the life of a streetfood vendor",
      image: "/projects/gamedev/food-vendor-simulator.png",
      githubUrl: "https://github.com/FrancyAmada/Streetfood-Vendor-Simulator",
      languages: ["Gdscript", "Godot"],
    },
    {
      id: 5,
      title: "SE Knightmares",
      description: "A topdown 2D shooter game",
      image: "/projects/gamedev/se-knightmares.png",
      githubUrl: "https://github.com/MJayConstantino/SEKnightmares",
      languages: ["C#", "Unity"],
    },
  ],
  mobileDev: [
    {
      id: 6,
      title: "SyncUp",
      description: "A React Native app for collaborative",
      image: "/projects/mobiledev/syncup.png",
      githubUrl: "https://github.com/MJayConstantino/Sync_Up",
      languages: ["React Native", "JavaScript", "Firebase"],
    },
    // {
    //   id: 7,
    //   title: "QuikEats",
    //   description:
    //     "An mobile app using that provides food itineraries for locations",
    //   image: "/placeholder.svg?height=200&width=300",
    //   githubUrl: "https://github.com/MJayConstantino",
    //   languages: ["React Native", "Typescript"],
    // },
  ],
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          My Projects
        </h2>
        <Tabs defaultValue="webDev" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="webDev">Web Development</TabsTrigger>
            <TabsTrigger value="gameDev">Game Development</TabsTrigger>
            <TabsTrigger value="mobileDev">Mobile Development</TabsTrigger>
          </TabsList>
          {Object.entries(projects).map(([category, projectList]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectList.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProjectCard key={project.id} project={project} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
