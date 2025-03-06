
import React, { useState, useEffect } from "react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

export type ChartType = "line" | "area" | "bar" | "pie";

interface DataChartProps {
  data: any[];
  type: ChartType;
  dataKey: string;
  nameKey?: string;
  colors?: string[];
  height?: number;
  className?: string;
  showGrid?: boolean;
  animate?: boolean;
}

const DataChart: React.FC<DataChartProps> = ({
  data,
  type,
  dataKey,
  nameKey = "name",
  colors = ["#0070F3", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"],
  height = 300,
  className,
  showGrid = true,
  animate = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data} className={animate ? "opacity-0 animate-fade-in" : ""} style={animate ? { animationDelay: '300ms' } : {}}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />}
              <XAxis 
                dataKey={nameKey} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }}
                dx={-10}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '0.5rem', 
                  border: 'none', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                  padding: '12px' 
                }} 
              />
              <Line 
                type="monotone" 
                dataKey={dataKey} 
                stroke={colors[0]} 
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
                isAnimationActive={animate}
              />
            </LineChart>
          </ResponsiveContainer>
        );
        
      case "area":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={data} className={animate ? "opacity-0 animate-fade-in" : ""} style={animate ? { animationDelay: '300ms' } : {}}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />}
              <XAxis 
                dataKey={nameKey} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }}
                dx={-10}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '0.5rem', 
                  border: 'none', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                  padding: '12px' 
                }} 
              />
              <Area 
                type="monotone" 
                dataKey={dataKey} 
                stroke={colors[0]} 
                fill={`url(#colorGradient)`}
                strokeWidth={2}
                isAnimationActive={animate}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors[0]} stopOpacity={0.2}/>
                  <stop offset="95%" stopColor={colors[0]} stopOpacity={0}/>
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        );
        
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data} className={animate ? "opacity-0 animate-fade-in" : ""} style={animate ? { animationDelay: '300ms' } : {}}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />}
              <XAxis 
                dataKey={nameKey} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 12 }}
                dx={-10}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '0.5rem', 
                  border: 'none', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                  padding: '12px' 
                }} 
              />
              <Bar 
                dataKey={dataKey} 
                fill={colors[0]} 
                radius={[4, 4, 0, 0]}
                isAnimationActive={animate}
              />
            </BarChart>
          </ResponsiveContainer>
        );
        
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart className={animate ? "opacity-0 animate-fade-in" : ""} style={animate ? { animationDelay: '300ms' } : {}}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                innerRadius={40}
                fill="#8884d8"
                dataKey={dataKey}
                nameKey={nameKey}
                isAnimationActive={animate}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '0.5rem', 
                  border: 'none', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                  padding: '12px' 
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        );
        
      default:
        return <div>Unsupported chart type</div>;
    }
  };
  
  return (
    <div className={cn("w-full", className)}>
      {renderChart()}
    </div>
  );
};

export default DataChart;
