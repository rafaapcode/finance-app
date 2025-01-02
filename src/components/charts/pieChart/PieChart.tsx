"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

type PieChartProps = {
  config: ChartConfig;
  data: any[];
  keysConfig: {
    dataKey: string;
    nameKey: string;
  };
  title?: string;
  description?: string;
}

export function PieChartComponent({config, data, keysConfig, description, title}: PieChartProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title && "Pie Chart"}</CardTitle>
        {description && <CardDescription>January - June 2024</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1 pb-0 h-full">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square h-[80%]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={data} dataKey={keysConfig.dataKey} nameKey={keysConfig.nameKey} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
