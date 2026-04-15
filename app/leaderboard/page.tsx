"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Crown, ArrowUpRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const LEADERBOARD_DATA = [
  { rank: 1, name: "Alex Rivers", score: 12450, accuracy: "98%", avatar: "AR", trend: "up" },
  { rank: 2, name: "Sarah Chen", score: 11200, accuracy: "96%", avatar: "SC", trend: "up" },
  { rank: 3, name: "Mike Ross", score: 10850, accuracy: "94%", avatar: "MR", trend: "down" },
  { rank: 4, name: "Jordan Lee", score: 9400, accuracy: "92%", avatar: "JL", trend: "up" },
  { rank: 5, name: "Emma Wilson", score: 8900, accuracy: "91%", avatar: "EW", trend: "stable" },
  { rank: 6, name: "David Park", score: 8200, accuracy: "89%", avatar: "DP", trend: "up" },
  { rank: 7, name: "Sophie Taylor", score: 7800, accuracy: "88%", avatar: "ST", trend: "down" },
];

export default function LeaderboardPage() {
  const topThree = LEADERBOARD_DATA.slice(0, 3);
  const others = LEADERBOARD_DATA.slice(3);

  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black mb-4"
        >
          Global <span className="gradient-text">Legends</span>
        </motion.h1>
        <p className="text-foreground/60">The best of the best. Can you reach the top?</p>
      </div>

      {/* Podium Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-end">
        {/* Silver - 2nd */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="order-2 md:order-1"
        >
          <div className="glass rounded-3xl p-8 pt-12 text-center relative border-white/5 bg-gradient-to-b from-white/5 to-transparent">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-slate-400 flex items-center justify-center shadow-lg">
              <Medal className="text-white" size={24} />
            </div>
            <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center text-2xl font-bold border-2 border-slate-400/50">
              {topThree[1].avatar}
            </div>
            <h3 className="font-bold text-xl mb-1">{topThree[1].name}</h3>
            <div className="text-primary font-black text-2xl mb-4">{topThree[1].score.toLocaleString()}</div>
            <div className="text-xs uppercase tracking-widest text-foreground/40 font-bold">Runner Up</div>
          </div>
        </motion.div>

        {/* Gold - 1st */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="order-1 md:order-2"
        >
          <div className="glass rounded-3xl p-10 pt-16 text-center relative border-primary/20 bg-gradient-to-b from-primary/10 to-transparent scale-110">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center shadow-xl shadow-amber-500/20">
              <Crown className="text-white" size={32} />
            </div>
            <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center text-3xl font-bold border-4 border-amber-500/50">
              {topThree[0].avatar}
            </div>
            <h3 className="font-bold text-2xl mb-1">{topThree[0].name}</h3>
            <div className="text-primary font-black text-3xl mb-4">{topThree[0].score.toLocaleString()}</div>
            <div className="text-xs uppercase tracking-widest text-foreground/40 font-bold">Grand Champion</div>
          </div>
        </motion.div>

        {/* Bronze - 3rd */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="order-3"
        >
          <div className="glass rounded-3xl p-8 pt-12 text-center relative border-white/5 bg-gradient-to-b from-white/5 to-transparent">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-orange-700 flex items-center justify-center shadow-lg">
              <Medal className="text-white" size={24} />
            </div>
            <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center text-2xl font-bold border-2 border-orange-700/50">
              {topThree[2].avatar}
            </div>
            <h3 className="font-bold text-xl mb-1">{topThree[2].name}</h3>
            <div className="text-primary font-black text-2xl mb-4">{topThree[2].score.toLocaleString()}</div>
            <div className="text-xs uppercase tracking-widest text-foreground/40 font-bold">Third Place</div>
          </div>
        </motion.div>
      </div>

      {/* Table Section */}
      <div className="glass rounded-3xl overflow-hidden mb-20">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-xl font-bold">Top Competitors</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" size={18} />
            <input 
              type="text" 
              placeholder="Search players..." 
              className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 w-full md:w-64 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs uppercase tracking-widest text-foreground/40 font-bold">
                <th className="px-8 py-4">Rank</th>
                <th className="px-8 py-4">Player</th>
                <th className="px-8 py-4 text-right">Accuracy</th>
                <th className="px-8 py-4 text-right">Total Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {LEADERBOARD_DATA.map((player, idx) => (
                <motion.tr 
                  key={player.rank}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-8 py-4">
                    <span className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold",
                      player.rank === 1 ? "bg-amber-500 text-white" : 
                      player.rank === 2 ? "bg-slate-400 text-white" :
                      player.rank === 3 ? "bg-orange-700 text-white" : "bg-white/5 text-foreground/60"
                    )}>
                      {player.rank}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs border border-white/10 group-hover:border-primary/50 transition-colors">
                        {player.avatar}
                      </div>
                      <span className="font-bold group-hover:text-primary transition-colors">{player.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-right font-medium text-foreground/60">
                    {player.accuracy}
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="font-black text-lg">{player.score.toLocaleString()}</span>
                      <ArrowUpRight size={16} className="text-success opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
