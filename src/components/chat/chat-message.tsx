"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { User, Bot } from "lucide-react";

export interface ChatMessageProps {
  content: string;
  role: "user" | "assistant";
  isLoading?: boolean;
}

export function ChatMessage({ content, role, isLoading = false }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex w-full items-start gap-3 py-3",
        role === "user" ? "justify-end" : "justify-start"
      )}
    >
      {role === "assistant" && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <Bot className="h-4 w-4 text-blue-700 dark:text-blue-400" />
        </div>
      )}
      
      <div
        className={cn(
          "rounded-2xl px-4 py-2 max-w-[80%] sm:max-w-[70%] shadow-sm",
          role === "user"
            ? "bg-primary text-primary-foreground rounded-tr-none"
            : "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400 rounded-tl-none",
          isLoading && "animate-pulse"
        )}
      >
        {content}
      </div>
      
      {role === "user" && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center">
          <User className="h-4 w-4 text-primary dark:text-primary-foreground" />
        </div>
      )}
    </div>
  );
} 