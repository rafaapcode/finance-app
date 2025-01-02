import BarChartComponent from "@/components/charts/barChart/BarChart";
import { PieChartComponent } from "@/components/charts/pieChart/PieChart";

function GeneralPage() {
  return (
    <main className="h-full flex-1 overflow-y-auto scrollbar-none">
      <div className="w-full h-1/2 max-h-[430px]">
        <BarChartComponent />
      </div>
      <div className="flex gap-4 mt-2 h-1/2">
        <div className="w-1/2 h-full">
          <PieChartComponent />
        </div>
        <div className="w-1/2 h-full">
          <BarChartComponent />
        </div>
      </div>
    </main>
  );
}

export default GeneralPage;
