import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-background min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex justify-start space-x-4 mb-8">
          <Link
            href="https://github.com/MJayConstantino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/michael-constantino-2751b4313/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Bringing Ideas to Life Through Code
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Hi, I am Michael Constantino. I am a Software Engineer and I craft
              amazing solutions through elegant web and mobile experiences.
            </p>
            <div className="space-x-4">
              <Button size="lg">Download CV</Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/placeholder.svg"
                alt="Michael Constantino"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-primary shadow-lg"
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
