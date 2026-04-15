"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  index: number;
}

export function CategoryCard({ id, title, description, icon: Icon, color, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link 
        href={`/quiz/${id}`}
        className="group relative block glass glass-hover rounded-2xl p-6 h-full overflow-hidden"
      >
        {/* Glow effect */}
        <div 
          className={cn(
            "absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl transition-opacity opacity-20 group-hover:opacity-40",
            color
          )} 
        />
        
        <div className="relative z-10">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
            "bg-white/5 border border-white/10"
          )}>
            <Icon className="w-6 h-6 text-foreground" />
          </div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-foreground/60 text-sm leading-relaxed">
            {description}
          </p>
          
          <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Start Quiz →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
