import AchievementsCard from "@/components/Achievements/AchievementsCard";

const achievements = [
  {
    title: "2nd Place in Gamedev Hackathon",
    description:
      "Won 1st runner up in the Odyssey Festival game development hackathon with a team of 4.",
  },
  {
    title: "3rd Place in Engineering IED Competition",
    description:
      "Made a collaborative project management tool using React Native and won 3rd place in the competition.",
  },
  {
    title: "Dean's List",
    description:
      "Consistently maintained a place on the Dean's List for academic excellence throughout the degree program.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementsCard
              key={index}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
