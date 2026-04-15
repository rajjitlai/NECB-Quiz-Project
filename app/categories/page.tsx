"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Globe2, 
  Database, 
  Cpu, 
  Zap,
  Search,
  Filter
} from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";

const categories = [
  { id: "frontend", title: "Frontend Mastery", description: "Master React, Next.js, and modern CSS frameworks.", icon: Palette, color: "bg-blue-500" },
  { id: "backend", title: "Backend Wizardry", description: "Node.js, databases, and system architecture.", icon: Database, color: "bg-purple-500" },
  { id: "algorithms", title: "CS Fundamentals", description: "Classic algorithms and data structures.", icon: Code2, color: "bg-emerald-500" },
  { id: "devops", title: "DevOps & Cloud", description: "Docker, Kubernetes, CI/CD, and AWS.", icon: Globe2, color: "bg-orange-500" },
  { id: "ai", title: "AI & ML", description: "Deep dive into Neural Networks and LLMs.", icon: Cpu, color: "bg-pink-500" },
  { id: "cybersec", title: "Cyber Security", description: "Web security, encryption, and pen-testing.", icon: Zap, color: "bg-red-500" },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-black mb-2">Explore <span className="gradient-text">Categories</span></h1>
          <p className="text-foreground/60">Discover new topics and challenge your knowledge.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 w-full md:w-auto"
        >
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <input 
              type="text" 
              placeholder="Search topics..." 
              className="w-full h-12 pl-11 pr-4 rounded-xl glass bg-white/5 border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
            />
          </div>
          <button className="h-12 px-4 rounded-xl glass glass-hover flex items-center justify-center gap-2 cursor-pointer hover:bg-white/10 active:scale-[0.98] transition-all">
            <Filter size={18} />
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((category, index) => (
          <CategoryCard 
            key={category.id}
            {...category}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}