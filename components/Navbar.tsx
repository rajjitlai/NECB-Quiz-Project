"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrainCircuit, Trophy, User, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Explore", href: "/categories", icon: BrainCircuit },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Profile", href: "/profile", icon: User },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none"
    >
      <nav className="glass rounded-2xl px-6 py-2 flex items-center gap-8 pointer-events-auto">
        <Link href="/" className="flex items-center gap-2 group mr-4">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <BrainCircuit size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight gradient-text">Quizzies</span>
        </Link>
        
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium",
                "text-foreground/70 hover:text-foreground hover:bg-white/10 transition-all"
              )}
            >
              <item.icon size={16} />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
