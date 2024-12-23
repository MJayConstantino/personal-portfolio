import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-background h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-start space-x-4 mb-8">
          <Link
            href="https://github.com/MJayConstantino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaGithub size={30} />
              <span className="sr-only">GitHub</span>
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/michael-constantino-2751b4313/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaLinkedin size={30} />
              <span className="sr-only">LinkedIn</span>
            </button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Bringing Ideas to Life Through Code
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Hi, I'm Michael Constantino. I am a Software Engineer and I craft
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
    </section>
  );
};

export default Hero;
