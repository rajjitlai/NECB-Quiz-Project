"use client";

import { motion } from "framer-motion";
import { Target, Trophy, Clock, Zap, ArrowRight, PlayCircle, Flame } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const RECENT_ACTIVITY = [
  { id: 1, title: "Frontend Mastery", score: "9/10", time: "2 hours ago", xp: "+150" },
  { id: 2, title: "React Hooks Deep Dive", score: "8/10", time: "5 hours ago", xp: "+120" },
  { id: 3, title: "System Architecture", score: "7/10", time: "Yesterday", xp: "+100" },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
      >
        <div>
          <h1 className="text-4xl font-black mb-2">Welcome back, <span className="gradient-text">JD!</span></h1>
          <p className="text-foreground/60">Ready to conquer new challenges today?</p>
        </div>
        <Link href="/categories" className="inline-flex h-12 px-6 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all items-center justify-center gap-2 cursor-pointer w-full md:w-auto">
          <PlayCircle size={20} />
          Start Quick Quiz
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total XP", value: "24.5k", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10" },
              { label: "Global Rank", value: "#42", icon: Trophy, color: "text-primary", bg: "bg-primary/10" },
              { label: "Accuracy", value: "92%", icon: Target, color: "text-emerald-500", bg: "bg-emerald-500/10" },
              { label: "Day Streak", value: "12", icon: Flame, color: "text-orange-500", bg: "bg-orange-500/10" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-4 rounded-2xl flex flex-col items-center text-center group hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className={cn("w-10 h-10 rounded-xl mb-3 flex items-center justify-center transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                  <stat.icon size={20} />
                </div>
                <div className="text-2xl font-black mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recommended for You</h2>
              <Link href="/categories" className="text-primary text-sm font-bold flex items-center gap-1 hover:text-primary/80 transition-colors cursor-pointer">
                Explore All <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Advanced TypeScript", category: "Frontend", time: "15 mins", xp: 200, id: "frontend" },
                { title: "Docker Networking", category: "DevOps", time: "20 mins", xp: 250, id: "devops" },
              ].map((quiz, i) => (
                <Link key={i} href={`/quiz/${quiz.id}`} className="glass bg-white/5 border-white/10 p-5 rounded-2xl hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden block">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-xs text-primary font-bold uppercase tracking-wider mb-2">{quiz.category}</div>
                  <h3 className="font-bold text-lg mb-4">{quiz.title}</h3>
                  <div className="flex items-center justify-between text-sm text-foreground/60">
                    <div className="flex items-center gap-1"><Clock size={14} /> {quiz.time}</div>
                    <div className="flex items-center gap-1 text-amber-500 font-bold"><Zap size={14} /> {quiz.xp} XP</div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 glass rounded-3xl p-8 h-fit"
        >
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {RECENT_ACTIVITY.map((activity) => (
              <div key={activity.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold group-hover:text-primary transition-colors">{activity.title}</h4>
                  <span className="text-xs font-bold text-success bg-success/10 px-2 py-1 rounded-md">{activity.xp}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-foreground/40">
                  <span>Score: {activity.score}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {activity.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 h-12 rounded-xl border border-white/10 text-sm font-bold hover:bg-white/5 active:scale-[0.98] transition-all cursor-pointer">
            View Full History
          </button>
        </motion.div>
      </div>
    </div>
  );
}