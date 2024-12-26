import { LinearAreaChart } from "@/components/charts/linearChart/LinearAreaChart";
import { PieChartComponent } from "@/components/charts/pieChart/PieChart";

function InvestmentsPage() {
  return (
    <main className="h-full flex-1 overflow-y-auto scrollbar-none">
      <div className="w-full max-h-[400px] flex justify-between">
        <div className="w-[60%] max-h-[400px]">
          <LinearAreaChart />
        </div>
        <div className="w-[35%] max-h-[400px]">
          <PieChartComponent />
        </div>
      </div>
      <div className="flex-1 pt-5">
        <h1>teste</h1>
      </div>
    </main>
  );
}

export default InvestmentsPage;
