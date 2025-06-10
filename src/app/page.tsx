import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
//import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <main className="pt-8">
        <Hero />
        <SkillsSection />
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        {/* <TestimonialsSection /> */}
      </main>
    </>
  );
}
