import { NavigationBar } from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
}
