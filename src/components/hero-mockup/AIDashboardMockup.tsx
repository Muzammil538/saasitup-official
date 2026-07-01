"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "~/components/ui/Badge";
import { WavePolygon, Activity, Check } from "lucide-react";
import { cn } from "~/lib/utils";

const chartData = [
  { month: "Jan", value: 45 },
  { month: "Feb", value: 62 },
  { month: "Mar", value: 78 },
  { month: "Apr", value: 95 },
  { month: "May", value: 112 },
  { month: "Jun", value: 140 },
];

export default function AIDashboardMockup() {
  return (
    <div className="relative bg-dark-900 border border-white/10 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-slate-400">Sales Dashboard</span>
        </div>
        <Badge variant="success" icon={Check}>
          Live
        </Badge>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          {[
            { label: "Total Revenue", value: "$1.2M", change: "+24%" },
            { label: "AI Efficiency", value: "87%", change: "+15%" },
            { label: "Active Users", value: "45K", change: "+18%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="glass-card p-4 rounded-lg border border-white/10"
            >
              <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-green-500">{stat.change}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-4 rounded-lg border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-white">Revenue Growth</span>
            <Badge variant="primary">AI Forecast</Badge>
          </div>
          <div className="h-40 relative">
            <svg className="w-full h-full" viewBox="0 0 400 150">
              {/* Grid lines */}
              <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              
              {/* Area fill */}
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
                  <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                d="M0,120 Q50,100 80,80 T160,60 T240,50 T320,40 T400,20 L400,150 L0,150 Z"
                fill="url(#chartGradient)"
              />
              
              {/* Line */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                d="M0,120 Q50,100 80,80 T160,60 T240,50 T320,40 T400,20"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </motion.path>
              
              {/* Data points */}
              {[0, 1, 2, 3, 4, 5].map((index) => {
                const x = index * 66;
                const y = 150 - chartData[index].value;
                return (
                  <motion.circle
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#6366f1"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                );
              })}
            </svg>
          </div>
          <div className="flex justify-between mt-4">
            {chartData.map((data) => (
              <span key={data.month} className="text-xs text-slate-500">{data.month}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}