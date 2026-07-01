"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Bot } from "lucide-react";
import { cn } from "~/lib/utils";

export default function AIInterface() {
  const messages = [
    {
      id: 1,
      role: "user",
      content: "What's the current status of our sales pipeline?",
      time: "10:32 AM",
    },
    {
      id: 2,
      role: "ai",
      content: "I've analyzed all 24 active leads. 8 are ready to close, 3 need follow-up, and 13 are in early stages. My recommended action is to focus on the 3 high-priority leads with demo in the next 24 hours.",
      time: "10:33 AM",
    },
  ];

  return (
    <div className="relative bg-dark-900 border border-white/10 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-gradient-to-r from-primary-900/20 to-accent-900/20">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-dark-900 rounded-full" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">AI Assistant</div>
            <div className="text-xs text-green-500">Online • Just now</div>
          </div>
        </div>
        <MessageSquare className="w-4 h-4 text-water-500" />
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 max-h-48 overflow-hidden">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, x: message.role === "user" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "flex gap-2",
              message.role === "ai" ? "justify-start" : "justify-end"
            )}
          >
            {message.role === "ai" && (
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 flex-shrink-0 flex items-center justify-center">
                <Bot className="w-3 h-3 text-white" />
              </div>
            )}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={cn(
                "px-3 py-2 rounded-lg text-sm max-w-[240px] backdrop-blur-sm",
                message.role === "ai"
                  ? "bg-dark-700 border border-white/10 text-white/90"
                  : "bg-primary-600 text-white"
              )}
            >
              {message.content}
            </motion.div>
            {message.role === "user" && (
              <div className="w-6 h-6 rounded-full bg-dark-700 flex-shrink-0 flex items-center justify-center border border-white/10">
                <div className="w-2 h-2 rounded-full bg-primary-500" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="px-4 py-3 border-t border-white/10"
      >
        <div className="flex items-center gap-2">
          <div className="flex-1 h-9 glass rounded-lg border border-white/10 flex items-center px-3">
            <span className="text-xs text-slate-500 animate-pulse">Thinking...</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}