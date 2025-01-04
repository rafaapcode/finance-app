import BarChartComponent from "@/components/charts/barChart/BarChart";
import { PieChartComponent } from "@/components/charts/pieChart/PieChart";
import { ChartConfig } from "@/components/ui/chart";

const chartDataPie = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfigPie = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

function GeneralPage() {
  return (
    <main className="h-full flex-1 overflow-y-auto scrollbar-none">
      <div className="w-full h-1/2 max-h-[430px]">
        <BarChartComponent />
      </div>
      <div className="flex gap-4 mt-2 h-1/2">
        <div className="w-1/2 h-full">
          <PieChartComponent title="Pie Chart" config={chartConfigPie} data={chartDataPie} keysConfig={{dataKey: 'visitors', nameKey: 'browser'}}/>
        </div>
        <div className="w-1/2 h-full">
          <BarChartComponent />
        </div>
      </div>
    </main>
  );
}

export default GeneralPage;
