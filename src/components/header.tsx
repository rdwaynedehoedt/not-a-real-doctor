"use client";

import * as React from "react";
import { ThemeToggle } from "./ui/theme-toggle";
import { Brain, MessageSquare } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between p-3 md:px-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-blue-100/50 dark:border-blue-900/30 h-16">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100/50 dark:bg-blue-900/30">
            <Brain className="h-5 w-5 text-blue-500 dark:text-blue-400 animate-pulse" />
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
            Not A Real Doctor
          </h1>
        </div>
        <span className="ml-2 text-[10px] bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400 px-1.5 py-0.5 rounded-full hidden sm:inline-block">
          Beta
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1 text-xs text-blue-500 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
          <MessageSquare className="h-3 w-3" />
          <span>Feeling better today?</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
} 