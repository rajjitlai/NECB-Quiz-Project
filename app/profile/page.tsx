"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Settings, 
  Award, 
  Flame, 
  Clock, 
  TrendingUp,
  ChevronRight
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";
import { cn } from "@/lib/utils";

const SKILL_DATA = [
  { subject: "Frontend", score: 85, color: "oklch(0.65 0.25 260)" },
  { subject: "Backend", score: 72, color: "oklch(0.7 0.2 300)" },
  { subject: "CS Basics", score: 90, color: "oklch(0.75 0.15 140)" },
  { subject: "DevOps", score: 65, color: "oklch(0.8 0.15 190)" },
  { subject: "AI/ML", score: 45, color: "oklch(0.6 0.2 25)" },
];

const RECENT_ACTIVITY = [
  { id: 1, title: "Frontend Mastery", score: "9/10", time: "2 hours ago", xp: "+150" },
  { id: 2, title: "React Hooks Deep Dive", score: "8/10", time: "5 hours ago", xp: "+120" },
  { id: 3, title: "System Architecture", score: "7/10", time: "Yesterday", xp: "+100" },
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar - User Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="glass rounded-3xl p-8 text-center">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-3xl bg-primary/20 flex items-center justify-center text-3xl font-bold border-2 border-primary/50">
                JD
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-success border-4 border-background flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-1">John Doe</h2>
            <p className="text-foreground/40 text-sm mb-6">Elite Quizzer • Lvl 42</p>
            
            <div className="flex items-center justify-center gap-4 py-4 border-y border-white/5 mb-6">
              <div>
                <div className="text-xl font-bold">1.2k</div>
                <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Followers</div>
              </div>
              <div className="w-px h-8 bg-white/5" />
              <div>
                <div className="text-xl font-bold">850</div>
                <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Following</div>
              </div>
            </div>

            <button className="w-full h-11 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <Settings size={16} />
              Edit Profile
            </button>
          </div>

          <div className="glass rounded-3xl p-6 space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest text-foreground/40">Achievements</h3>
            <div className="flex flex-wrap gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Award size={20} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass p-6 rounded-3xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                <Flame size={24} />
              </div>
              <div>
                <div className="text-xs text-foreground/40 font-bold uppercase tracking-wider">Current Streak</div>
                <div className="text-2xl font-black">12 Days</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-6 rounded-3xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <TrendingUp size={24} />
              </div>
              <div>
                <div className="text-xs text-foreground/40 font-bold uppercase tracking-wider">Total XP</div>
                <div className="text-2xl font-black">24,500</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass p-6 rounded-3xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center text-success">
                <Clock size={24} />
              </div>
              <div>
                <div className="text-xs text-foreground/40 font-bold uppercase tracking-wider">Time Spent</div>
                <div className="text-2xl font-black">48 Hours</div>
              </div>
            </motion.div>
          </div>

          {/* Skill Breakdown Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold mb-8">Skill Mastery</h3>
            <div className="h-[300px] w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={300}>
                <AreaChart data={SKILL_DATA}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="oklch(0.65 0.25 260)" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="oklch(0.65 0.25 260)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="subject" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} 
                  />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip 
                    cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2, fill: 'transparent' }}
                    contentStyle={{ 
                      backgroundColor: 'rgba(10, 10, 15, 0.8)', 
                      borderRadius: '16px', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="score" 
                    stroke="oklch(0.65 0.25 260)" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorScore)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Recent Quizzes</h3>
              <button className="text-primary text-sm font-bold flex items-center gap-1 cursor-pointer hover:text-primary/80 transition-colors">
                View All <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="grid gap-4">
              {RECENT_ACTIVITY.map((activity) => (
                <div key={activity.id} className="glass p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Clock size={20} className="text-foreground/40 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="font-bold group-hover:text-primary transition-colors">{activity.title}</div>
                      <div className="text-xs text-foreground/40">{activity.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm font-bold">{activity.score}</div>
                      <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Score</div>
                    </div>
                    <div className="text-primary font-black">{activity.xp}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
