import StatsCard from "@/components/dashboard/StatsCard";
import ActivityLog from "@/components/dashboard/ActivityLog";
import ProjectsOverview from "@/components/dashboard/ProjectsOverview";
import LeadsChart from "@/components/dashboard/LeadsChart";

import { CreditCard, DollarSign, FileText, AlertCircle } from "lucide-react";

// Importar datos desde `src/data`
import { projects } from "@/data/projects";
import { activities } from "@/data/activities";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard icon={CreditCard} title="Pagos Hoy" value="$1,092.20" />
        <StatsCard icon={DollarSign} title="Pagos Mes" value="$1,092.20" />
        <StatsCard icon={FileText} title="Facturas Pendientes" value="$0.00" />
        <StatsCard
          icon={AlertCircle}
          title="Facturas Vencidas"
          value="$5,828.77"
        />
      </div>

      {/* Grillas principales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ActivityLog activities={activities} />
        <ProjectsOverview projects={projects} />
        <LeadsChart />
      </div>
    </div>
  );
}
