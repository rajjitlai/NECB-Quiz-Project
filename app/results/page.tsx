"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Target, 
  Zap, 
  RotateCcw, 
  Home,
  Share2
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import Link from "next/link";
import { Suspense } from "react";

// Mock chart data
const performanceData = [
  { name: "Mon", score: 45 },
  { name: "Tue", score: 52 },
  { name: "Wed", score: 48 },
  { name: "Thu", score: 70 },
  { name: "Fri", score: 65 },
  { name: "Sat", score: 85 },
  { name: "Sun", score: 92 },
];

function ResultsContent() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score") || "0");
  const total = parseInt(searchParams.get("total") || "1");
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Main Score Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="glass rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-1">Great Job!</h2>
            <p className="text-foreground/60 mb-8">You&apos;ve mastered this quiz.</p>
            
            <div className="relative inline-flex items-center justify-center mb-8">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="58"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-white/5"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="58"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={364.4}
                  initial={{ strokeDashoffset: 364.4 }}
                  animate={{ strokeDashoffset: 364.4 - (364.4 * percentage) / 100 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-primary"
                />
              </svg>
              <span className="absolute text-3xl font-black">{percentage}%</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-2xl p-4">
                <div className="text-2xl font-bold">{score}</div>
                <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Correct</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <div className="text-2xl font-bold">{total - score}</div>
                <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Wrong</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/" className="flex-1">
              <button className="w-full h-12 rounded-xl glass glass-hover flex items-center justify-center gap-2 font-bold text-sm cursor-pointer hover:bg-white/10 active:scale-[0.98] transition-all">
                <Home size={18} />
                Home
              </button>
            </Link>
            <button className="flex-1 h-12 rounded-xl bg-primary text-white flex items-center justify-center gap-2 font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
              <RotateCcw size={18} />
              Retry
            </button>
          </div>
        </motion.div>

        {/* Analytics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Target size={24} />
              </div>
              <div>
                <div className="text-sm text-foreground/40 font-medium">Accuracy</div>
                <div className="text-xl font-bold">{percentage}%</div>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                <Zap size={24} />
              </div>
              <div>
                <div className="text-sm text-foreground/40 font-medium">Points Earned</div>
                <div className="text-xl font-bold">{score * 100} XP</div>
              </div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Performance Trend</h3>
              <button className="text-foreground/40 hover:text-foreground transition-colors cursor-pointer hover:scale-110 active:scale-95">
                <Share2 size={20} />
              </button>
            </div>
            
            <div className="h-[300px] w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={300}>
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="oklch(0.65 0.25 260)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="oklch(0.65 0.25 260)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} 
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(10, 10, 15, 0.8)', 
                      borderRadius: '16px', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="score" 
                    stroke="oklch(0.65 0.25 260)" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorScore)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
