"use client";

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const electrolyteData = [
  { metric: "Sodium (mEq/L)", KinderFarms: 45, WHO_Standard: 45, Pedialyte: 45, Gatorade: 20 },
  { metric: "Potassium (mEq/L)", KinderFarms: 20, WHO_Standard: 20, Pedialyte: 20, Gatorade: 3 },
  { metric: "Chloride (mEq/L)", KinderFarms: 35, WHO_Standard: 35, Pedialyte: 35, Gatorade: 11 },
  { metric: "Zinc Absorption", KinderFarms: 95, WHO_Standard: 90, Pedialyte: 85, Gatorade: 10 },
  { metric: "Osmolarity Balance", KinderFarms: 98, WHO_Standard: 100, Pedialyte: 92, Gatorade: 40 },
];

export default function OsmolarityRadar() {
  return (
    <div className="w-full h-[320px] pt-2">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={electrolyteData}>
          <PolarGrid stroke="#ffffff15" />
          <PolarAngleAxis dataKey="metric" stroke="#ffffff70" fontSize={11} />
          <PolarRadiusAxis stroke="#ffffff30" angle={30} domain={[0, 100]} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="p-3 bg-[#0E1320] border border-white/20 rounded-lg shadow-xl backdrop-blur-md">
                    <p className="font-semibold text-white text-xs mb-1">
                      {payload[0].payload.metric}
                    </p>
                    {payload.map((p, i) => (
                      <p key={i} className="text-xs" style={{ color: p.color }}>
                        {p.name}: <span className="font-bold">{p.value}</span>
                      </p>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
          <Radar
            name="KinderFarms®"
            dataKey="KinderFarms"
            stroke="#1A6DFF"
            fill="#1A6DFF"
            fillOpacity={0.45}
          />
          <Radar
            name="WHO Standard"
            dataKey="WHO_Standard"
            stroke="#3E9B57"
            fill="#3E9B57"
            fillOpacity={0.2}
          />
          <Radar
            name="Gatorade"
            dataKey="Gatorade"
            stroke="#F27A1A"
            fill="#F27A1A"
            fillOpacity={0.15}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
