import Hero from "@/components/Hero";
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";

export default function Home() {
  return (
    <>
      <main className="pt-8">
        <Hero />
        <AboutMeSection />
        <ProjectsSection />
        <AchievementsSection />
      </main>
    </>
  );
}
