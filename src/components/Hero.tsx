"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="relative bg-background min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <div className="w-full md:w-1/2 mt-10 md:mt-0 order-2 md:order-1">
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <Link
                href="https://github.com/MJayConstantino"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center space-x-2"
                >
                  <FaGithub size={24} />
                  <span>GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/michael-constantino-2751b4313/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin size={24} />
                  <span>LinkedIn</span>
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-10 text-foreground leading-tight">
              <span className="block">Hello, I am</span>
              <span className="block h-[1.2em]">Michael Constantino</span>
            </h1>
            <p className="text-2xl font-semibold mb-6 text-muted-foreground">
              Full Stack Developer
            </p>
            <p className="text-xl mb-10 text-muted-foreground leading-relaxed">
              A passionate software engineer specializing in building
              exceptional digital experiences. With expertise in full-stack
              development, I craft scalable solutions across web, mobile, and
              game platforms. Currently focused on creating innovative
              applications that solve real-world problems while delivering
              intuitive user experiences.
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link href="/CV-Constantino.pdf" download>
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-full h-[300px] md:h-[500px] max-w-[300px] md:max-w-[500px]">
              <Image
                src="/mypic.jpg"
                alt="Michael Constantino"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
