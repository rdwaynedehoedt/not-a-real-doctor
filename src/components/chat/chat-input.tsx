"use client";

import * as React from "react";
import { Send, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [input, setInput] = React.useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center gap-2 border-t p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
      >
        <Smile className="h-5 w-5" />
      </Button>
      
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className={cn(
          "flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800/30",
          "bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-slate-700"
        )}
        disabled={disabled}
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={disabled || !input.trim()}
        className="rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-800/20 dark:text-blue-400 dark:hover:bg-blue-800/30"
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
} 