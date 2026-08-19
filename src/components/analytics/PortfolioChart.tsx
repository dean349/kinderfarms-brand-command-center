"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const portfolioData = [
  { name: "Hydration Solutions (RTD & Sticks)", value: 58, color: "#1A6DFF" },
  { name: "Infants' & Children's OTC Medicine", value: 26, color: "#D11994" },
  { name: "Daily Pediatric Nutrition (Sprout)", value: 16, color: "#3E9B57" },
];

export default function PortfolioChart() {
  return (
    <div className="w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const item = payload[0].payload;
                return (
                  <div className="p-3 bg-[#0E1320] border border-white/20 rounded-lg shadow-xl backdrop-blur-md">
                    <p className="font-semibold text-white text-xs">{item.name}</p>
                    <p className="text-xs font-bold mt-1" style={{ color: item.color }}>
                      {item.value}% of Catalog Volume
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Pie
            data={portfolioData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={5}
            dataKey="value"
          >
            {portfolioData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="#0E1320" strokeWidth={2} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
