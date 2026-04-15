"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Palette,
  Globe2,
  Database,
  Cpu,
  Zap,
  ArrowRight
} from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";

const categories = [
  {
    id: "frontend",
    title: "Frontend Mastery",
    description: "Master React, Next.js, and modern CSS frameworks with interactive challenges.",
    icon: Palette,
    color: "bg-blue-500",
  },
  {
    id: "backend",
    title: "Backend Wizardry",
    description: "Node.js, databases, and system architecture questions for true engineers.",
    icon: Database,
    color: "bg-purple-500",
  },
  {
    id: "algorithms",
    title: "CS Fundamentals",
    description: "Classic algorithms, data structures, and computer science principles.",
    icon: Code2,
    color: "bg-emerald-500",
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description: "Docker, Kubernetes, CI/CD, and AWS infrastructure management.",
    icon: Globe2,
    color: "bg-orange-500",
  },
  {
    id: "ai",
    title: "AI & ML",
    description: "Deep dive into Neural Networks, LLMs, and data science concepts.",
    icon: Cpu,
    color: "bg-pink-500",
  },
  {
    id: "cybersec",
    title: "Cyber Security",
    description: "Test your knowledge on web security, encryption, and penetration testing.",
    icon: Zap,
    color: "bg-red-500",
  },
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="container mx-auto px-6">
      {/* Hero Section */}
      <section className="py-20 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-6 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New Quizzes Added Daily
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
            Level Up Your <br />
            <span className="gradient-text">IQ Game.</span>
          </h1>

          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            The ultimate platform for tech enthusiasts. Challenge yourself, compete
            globally, and master the world&apos;s most in-demand skills.
          </p>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Link href="/categories" className="h-12 px-8 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer">
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/leaderboard" className="h-12 flex items-center justify-center px-8 rounded-xl glass glass-hover font-bold cursor-pointer hover:bg-white/10 active:scale-[0.98] transition-all">
              View Leaderboard
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Category Grid */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Explore Categories</h2>
            <p className="text-foreground/60">Choose your path and start learning.</p>
          </div>
          <Link href="/categories" className="text-primary font-semibold flex items-center gap-2 hover:text-primary/80 transition-colors cursor-pointer group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
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
      </section>

      {/* Stats Section Placeholder */}
      <section className="py-20 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Users", value: "50k+" },
            { label: "Total Quizzes", value: "1,200" },
            { label: "Daily Plays", value: "15k" },
            { label: "Questions", value: "25k+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black mb-1 gradient-text">{stat.value}</div>
              <div className="text-foreground/40 font-medium uppercase text-xs tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
