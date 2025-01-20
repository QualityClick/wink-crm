import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { leadsData } from "@/data/leadsData";

export default function LeadsChart() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">Leads</h2>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            {/* Pie principal */}
            <Pie
              data={leadsData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={(entry) => `${entry.name}: ${entry.value}`} // Etiquetas personalizadas
              fill="#8884d8"
            >
              {leadsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {/* Tooltip para detalles al pasar el mouse */}
            <Tooltip />
            {/* Leyenda para mostrar categorías */}
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span className="text-sm text-gray-700">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
