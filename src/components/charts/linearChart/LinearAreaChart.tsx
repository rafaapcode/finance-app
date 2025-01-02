"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type LinearAreaChartProps = {
  config: ChartConfig;
  data: any[];
  keysConfig: {
    dataKey: string;
    nameKey: string;
  };
  title?: string;
  description?: string;
};

export function LinearAreaChart({
  config,
  data,
  keysConfig,
  description,
  title,
}: LinearAreaChartProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title && "Area Chart"}</CardTitle>
        {description && (
          <CardDescription>
            Showing total visitors for the last 6 months
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="h-full">
        <ChartContainer config={config} className="h-[80%] w-full">
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={keysConfig.dataKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey={keysConfig.nameKey}
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
