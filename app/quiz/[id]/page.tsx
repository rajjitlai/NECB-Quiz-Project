"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  Timer,
  CheckCircle2,
  XCircle,
  Trophy,
  ArrowLeft
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Mock Questions Data
const MOCK_QUESTIONS = [
  {
    id: 1,
    question: "Which hook is used to handle side effects in React?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: "useEffect",
  },
  {
    id: 2,
    question: "What is the default port for a Next.js development server?",
    options: ["3000", "8080", "5000", "4200"],
    answer: "3000",
  },
  {
    id: 3,
    question: "Which CSS property is used for Glassmorphism effects?",
    options: ["filter", "backdrop-filter", "opacity", "blur"],
    answer: "backdrop-filter",
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const handleNext = useCallback(() => {
    setCurrentQuestion((prev) => {
      if (prev < MOCK_QUESTIONS.length - 1) {
        setSelectedOption(null);
        setTimeLeft(30);
        return prev + 1;
      }
      setIsFinished(true);
      return prev;
    });
  }, []);

  useEffect(() => {
    if (isFinished) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Use setTimeout to defer the state updates to the next tick,
      // avoiding synchronous setState calls during render phase.
      const timer = setTimeout(() => {
        handleNext();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isFinished, handleNext]);

  const handleOptionSelect = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    if (option === MOCK_QUESTIONS[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  if (isFinished) {
    // Redirect to results with score (using a timeout for a smooth transition)
    setTimeout(() => router.push(`/results?score=${score}&total=${MOCK_QUESTIONS.length}`), 500);
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <Trophy className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-2">Quiz Complete!</h2>
          <p className="text-foreground/60">Calculating your performance...</p>
        </motion.div>
      </div>
    );
  }

  const question = MOCK_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / MOCK_QUESTIONS.length) * 100;

  return (
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="mb-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
            <Timer className={cn("w-4 h-4", timeLeft < 10 ? "text-destructive animate-pulse" : "text-primary")} />
            <span className="font-mono font-bold">{timeLeft}s</span>
          </div>
          <div className="text-sm font-bold">
            Question <span className="text-primary">{currentQuestion + 1}</span> / {MOCK_QUESTIONS.length}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-white/5 rounded-full mb-12 overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold leading-tight">
            {question.question}
          </h2>

          <div className="grid gap-4">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              const isCorrect = selectedOption && option === question.answer;
              const isWrong = isSelected && option !== question.answer;

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!selectedOption}
                  className={cn(
                    "glass p-6 rounded-2xl text-left transition-all relative overflow-hidden group",
                    !selectedOption ? "cursor-pointer hover:border-primary/50 hover:bg-white/10 active:scale-[0.98]" : "cursor-default opacity-80",
                    isSelected && !isCorrect && "border-destructive/50 bg-destructive/10",
                    isCorrect && "border-success/50 bg-success/10",
                    selectedOption && option === question.answer && "border-success/50 bg-success/10"
                  )}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <span className="font-medium text-lg">{option}</span>
                    {selectedOption && option === question.answer && (
                      <CheckCircle2 className="w-6 h-6 text-success" />
                    )}
                    {isWrong && (
                      <XCircle className="w-6 h-6 text-destructive" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex justify-end">
        {selectedOption && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleNext}
            className="h-12 px-8 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
          >
            {currentQuestion === MOCK_QUESTIONS.length - 1 ? "Finish Quiz" : "Next Question"}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        )}
      </div>
    </div>
  );
}
