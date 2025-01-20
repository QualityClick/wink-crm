import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface Activity {
  user: string;
  action: string;
  link: string;
  time: string;
}

interface ActivityLogProps {
  activities: Activity[];
}

export default function ActivityLog({ activities }: ActivityLogProps) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">Última Actividad</h2>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex space-x-2">
              <img
                src="/img/profile_picture.jpeg"
                alt="Profile"
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="text-sm">
                  <span className="font-bold">{activity.user}</span>{" "}
                  {activity.action}
                </p>
                <a href={activity.link} className="text-blue-500 text-sm">
                  {activity.link}
                </a>
                <p className="text-gray-500 text-xs">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
