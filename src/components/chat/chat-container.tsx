"use client";

import * as React from "react";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { TypingIndicator } from "./typing-indicator";
import { MessageSquareHeart, Sparkles } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
}

export function ChatContainer() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "welcome",
      content: "Hi there! I'm here to listen and support you. How are you feeling today?",
      role: "assistant",
    },
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Call the API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: content }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to get response");
      }
      
      const data = await response.json();
      
      // Add assistant message after a short delay to simulate typing
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            content: data.message,
            role: "assistant",
          },
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      
      // Add error message
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            content: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
            role: "assistant",
          },
        ]);
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 border-b border-blue-100 dark:border-blue-900/30 flex items-center gap-2">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30">
          <MessageSquareHeart className="h-4 w-4 text-blue-500 dark:text-blue-400" />
        </div>
        <h2 className="text-sm font-medium text-blue-800 dark:text-blue-300">Supportive Chat</h2>
        <div className="ml-auto flex items-center">
          <Sparkles className="h-4 w-4 text-yellow-500/70 dark:text-yellow-400/70 animate-sparkle" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-white/50 dark:bg-slate-900/50 bg-[url('/subtle-pattern.png')] bg-repeat bg-opacity-5">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400 dark:text-gray-600 text-center">
              Start a conversation to get support
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              content={message.content}
              role={message.role}
            />
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <TypingIndicator />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
} 