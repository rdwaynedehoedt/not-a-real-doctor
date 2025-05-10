"use client";

import React, { useMemo } from "react";
import { Brain, Sparkles, Zap, Lightbulb, Laugh, Music } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const phrases = useMemo(() => [
    "Finding your inner peace...",
    "Creating a mindful space...",
    "Preparing good vibes only...",
    "Taking a deep breath...",
    "Gathering positive thoughts...",
    "Brewing mental wellness...",
    "Manifesting happiness...",
    "Channeling good energy...",
    "Silencing inner critics...",
    "Activating chill mode...",
    "Loading therapy jokes...",
    "Scanning for happy chemicals...",
  ], []);
  
  const [phrase, setPhrase] = React.useState(phrases[0]);
  
  React.useEffect(() => {
    if (!isLoading) return;
    
    const interval = setInterval(() => {
      setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isLoading, phrases]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-200 dark:from-slate-900 dark:to-blue-950 transition-opacity duration-500",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-200 dark:bg-blue-900/30 opacity-75"></div>
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-slate-800 shadow-lg">
            <Brain className="h-12 w-12 text-blue-500 dark:text-blue-400 animate-wiggle" />
          </div>
          <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-sparkle" />
          <Zap className="h-5 w-5 text-blue-400 absolute -bottom-1 -left-1 animate-bounce-rotate" />
          <Lightbulb className="h-5 w-5 text-yellow-400 absolute -top-1 -left-2 animate-sparkle animation-delay-2000" />
          <Music className="h-5 w-5 text-blue-400 absolute -bottom-2 -right-1 animate-float animation-delay-4000" />
        </div>
        
        <div className="text-center space-y-3">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
            Not A Real Doctor
          </div>
          <div className="text-sm text-blue-600 dark:text-blue-400">Your AI mental health buddy</div>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-300 to-blue-500 dark:from-blue-600 dark:to-blue-500 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4 font-medium animate-fade-in-out">{phrase}</p>
        </div>
        
        <div className="flex justify-center items-center space-x-3">
          <Laugh className="h-6 w-6 text-blue-400/40 dark:text-blue-400/30 animate-bounce-rotate" />
          <div className="text-xs text-blue-500/70 dark:text-blue-400/50 font-semibold animate-fade-in-out">Laughter is the best therapy</div>
        </div>
      </div>
    </div>
  );
} 