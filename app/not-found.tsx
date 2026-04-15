"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="text-[120px] md:text-[180px] font-black leading-none gradient-text opacity-20 blur-lg absolute inset-0 flex items-center justify-center">
          404
        </div>
        <div className="text-[120px] md:text-[180px] font-black leading-none gradient-text relative z-10">
          404
        </div>
      </motion.div>
      
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold mt-4 mb-4"
      >
        Lost in Cyberspace?
      </motion.h2>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-foreground/60 max-w-md mb-8"
      >
        The page you are looking for has been moved, deleted, or possibly never existed. Let&apos;s get you back on track.
      </motion.p>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <Link href="/" className="w-full sm:w-auto h-12 px-8 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer">
          <Home size={18} />
          Go Home
        </Link>
        <Link href="/categories" className="w-full sm:w-auto h-12 px-8 rounded-xl glass glass-hover font-bold flex items-center justify-center gap-2 cursor-pointer hover:bg-white/10 active:scale-[0.98] transition-all">
          <Search size={18} />
          Explore
        </Link>
      </motion.div>
    </div>
  );
}