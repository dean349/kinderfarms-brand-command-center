"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import { COMPETITORS } from "@/lib/tokens";

export default function CompetitorChart() {
  const data = COMPETITORS.map((c) => ({
    name: c.brand.replace("®", "").replace(" (Abbott)", "").replace(" (PepsiCo)", "").replace(" (Unilever)", ""),
    sugar: c.sugarPerServing,
    isKinderFarms: c.brand.includes("KinderFarms"),
    dyes: c.artificialDyes ? "Yes (Red 40 / Blue 1)" : "None (0%)",
    sucralose: c.sucralose ? "Yes (Synthetic)" : "None (0%)"
  }));

  return (
    <div className="w-full h-[320px] pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 25 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
          <XAxis
            dataKey="name"
            stroke="#ffffff60"
            fontSize={12}
            tickLine={false}
            interval={0}
            angle={-15}
            textAnchor="end"
          />
          <YAxis
            stroke="#ffffff60"
            fontSize={12}
            tickLine={false}
            unit="g"
            domain={[0, 16]}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const item = payload[0].payload;
                return (
                  <div className="p-3 bg-[#0E1320] border border-white/20 rounded-lg shadow-xl backdrop-blur-md">
                    <p className="font-semibold text-white text-sm">{item.name}</p>
                    <p className="text-xs text-white/80 mt-1">
                      Sugar per serving: <span className="font-bold text-kf-strawberry">{item.sugar}g</span>
                    </p>
                    <p className="text-xs text-white/60">Artificial Dyes: {item.dyes}</p>
                    <p className="text-xs text-white/60">Sucralose: {item.sucralose}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="sugar" radius={[6, 6, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.isKinderFarms ? "#1A6DFF" : "#E8416F90"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
