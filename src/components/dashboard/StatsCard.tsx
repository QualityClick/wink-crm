import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  color?: string;
}

export default function StatsCard({
  icon: Icon,
  title,
  value,
  color,
}: StatsCardProps) {
  return (
    <Card className="flex items-center p-4 space-x-4">
      <div className={`rounded-full p-3 ${color || "bg-blue-100"}`}>
        <Icon className={`w-6 h-6 ${color || "text-blue-600"}`} />
      </div>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <p className="text-xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
