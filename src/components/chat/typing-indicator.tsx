"use client";

import * as React from "react";
import { Bot } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
        <Bot className="h-4 w-4 text-blue-700 dark:text-blue-400" />
      </div>
      
      <div className="flex items-center space-x-1 px-4 py-3 rounded-2xl rounded-tl-none bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400 shadow-sm">
        <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
      </div>
    </div>
  );
} 