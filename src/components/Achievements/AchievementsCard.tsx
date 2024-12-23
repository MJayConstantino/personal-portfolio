import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface AchievementsCardProps {
  title: string;
  description: string;
}

const AchievementsCard: React.FC<AchievementsCardProps> = ({
  title,
  description,
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center space-x-4">
        <Trophy className="h-8 w-8 text-primary" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AchievementsCard;
