import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Bringing Ideas to Life Through Code
          </h1>
          <p className="text-xl mb-6 text-muted-foreground">
            Hi, I'm [Your Name]. I craft elegant solutions to complex problems
            and build amazing web experiences.
          </p>
          <div className="space-x-4">
            <Button>View Projects</Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="Your Name"
            width={400}
            height={400}
            className="rounded-full border-4 border-primary shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
