"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { ChatContainer } from "@/components/chat/chat-container";
import { LoadingScreen } from "@/components/loading-screen";
import { Brain, Coffee, Moon, Music, HeartPulse, Smile, CloudSun, Sparkles, Zap, Lightbulb, Laugh, Dumbbell, Pill, Siren } from "lucide-react";

// Create decorative floating elements with mental health themes
const FloatingElements = () => {
  return (
    <>
      {/* Background blobs - only on sides */}
      <div className="fixed left-[5%] top-[10%] hidden lg:block">
        <div className="w-32 h-32 rounded-full bg-blue-400/5 dark:bg-blue-400/5 animate-blob animation-delay-4000"></div>
      </div>
      <div className="fixed right-[5%] top-[65%] hidden lg:block">
        <div className="w-48 h-48 rounded-full bg-blue-400/5 dark:bg-blue-400/5 animate-blob animation-delay-2000"></div>
      </div>
      <div className="fixed left-[7%] bottom-[5%] hidden lg:block">
        <div className="w-40 h-40 rounded-full bg-blue-400/5 dark:bg-blue-400/5 animate-blob"></div>
      </div>
      
      {/* Left side decorations - evenly spaced */}
      <div className="fixed left-[5%] top-[20%] hidden lg:block">
        <Brain className="h-12 w-12 text-blue-400/40 dark:text-blue-400/30 animate-wiggle" />
        <div className="mt-4 text-xs text-blue-500/70 dark:text-blue-400/50 font-semibold animate-fade-in-out">Think Positive</div>
      </div>
      
      <div className="fixed left-[8%] top-[35%] hidden lg:block">
        <Laugh className="h-10 w-10 text-blue-400/40 dark:text-blue-400/30 animate-bounce-rotate" />
        <div className="mt-2 text-xs text-blue-500/70 dark:text-blue-400/50 font-semibold animate-fade-in-out">Laugh More</div>
      </div>
      
      <div className="fixed left-[6%] top-[50%] hidden lg:block">
        <Lightbulb className="h-10 w-10 text-yellow-400/60 dark:text-yellow-400/40 animate-sparkle" />
        <div className="mt-2 text-xs text-blue-500/70 dark:text-blue-400/50 font-semibold">New Ideas</div>
      </div>
      
      <div className="fixed left-[9%] top-[65%] hidden lg:block">
        <Coffee className="h-10 w-10 text-blue-400/40 dark:text-blue-400/30 animate-float" />
        <div className="mt-2 text-xs text-blue-500/70 dark:text-blue-400/50 font-semibold animate-fade-in-out">Self Care</div>
      </div>
      
      <div className="fixed left-[7%] top-[80%] hidden lg:block">
        <Music className="h-10 w-10 text-blue-400/40 dark:text-blue-400/30 animate-wiggle animation-delay-4000" />
      </div>
      
      <div className="fixed left-[4%] top-[95%] hidden lg:block">
        <Pill className="h-9 w-9 text-blue-400/40 dark:text-blue-400/30 rotate-45 animate-wiggle animation-delay-2000" />
        <div className="mt-2 text-xs text-blue-500/70 dark:text-blue-400/50 font-semibold animate-fade-in-out">Chill Pill</div>
      </div>
      
      {/* Right side decorations - evenly spaced */}
      <div className="fixed right-[5%] top-[20%] hidden lg:block">
        <Moon className="h-10 w-10 text-blue-400/40 dark:text-blue-400/30 animate-float" />
        <div className="mt-2 text-xs text-right text-blue-500/70 dark:text-blue-400/50 font-semibold animate-fade-in-out">Rest Well</div>
      </div>
      
      <div className="fixed right-[8%] top-[35%] hidden lg:block">
        <HeartPulse className="h-12 w-12 text-blue-400/40 dark:text-blue-400/30 animate-pulse" />
        <Sparkles className="h-5 w-5 text-yellow-400/70 absolute top-0 right-0 animate-sparkle" />
      </div>
      
      <div className="fixed right-[6%] top-[50%] hidden lg:block">
        <Zap className="h-8 w-8 text-yellow-400/70 animate-sparkle animation-delay-4000" />
      </div>
      
      <div className="fixed right-[9%] top-[65%] hidden lg:block">
        <CloudSun className="h-12 w-12 text-blue-400/40 dark:text-blue-400/30 animate-float animation-delay-2000" />
        <div className="mt-2 text-xs text-right text-blue-500/70 dark:text-blue-400/50 font-semibold animate-fade-in-out">Brighter Days</div>
      </div>
      
      <div className="fixed right-[7%] top-[80%] hidden lg:block">
        <Smile className="h-10 w-10 text-blue-400/40 dark:text-blue-400/30 animate-bounce-rotate animation-delay-2000" />
      </div>
      
      <div className="fixed right-[5%] top-[95%] hidden lg:block">
        <Siren className="h-8 w-8 text-red-400/40 dark:text-red-400/30 animate-pulse" />
        <div className="mt-2 text-xs text-right text-blue-500/70 dark:text-blue-400/50 font-semibold animate-fade-in-out">Drama Alert</div>
      </div>
      
      <div className="fixed right-[7%] top-[5%] hidden lg:block">
        <Dumbbell className="h-8 w-8 text-blue-400/40 dark:text-blue-400/30 animate-float animation-delay-6000" />
        <div className="mt-2 text-xs text-right text-blue-500/70 dark:text-blue-400/50 font-semibold animate-fade-in-out">Stay Active</div>
      </div>
    </>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 dark:from-slate-900 dark:to-blue-950">
      <LoadingScreen isLoading={isLoading} />
      <Header />
      <FloatingElements />
      <div className="flex-1 flex items-center justify-center p-0 sm:p-4 md:p-8">
        <div className="w-full h-[calc(100vh-64px)] sm:h-[80vh] sm:max-w-3xl bg-white dark:bg-slate-900 sm:rounded-2xl shadow-xl overflow-hidden border-0 sm:border sm:border-blue-100 dark:sm:border-blue-800">
          <ChatContainer />
        </div>
      </div>
    </main>
  );
}
