
"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatAI() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed
          bottom-6
          right-6
          h-14
          w-14
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          text-white
          shadow-xl
          hover:scale-110
          transition-all
          duration-300
          flex
          items-center
          justify-center
          z-[999]
        "
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`
          fixed
          bottom-24
          right-6
          w-[340px]
          h-[470px]
          rounded-3xl
          bg-white
          shadow-[0_15px_45px_rgba(0,0,0,0.18)]
          overflow-hidden
          transition-all
          duration-300
          origin-bottom-right
          z-[998]

          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-5 pointer-events-none"
          }
        `}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 text-white">
          <h2 className="text-lg font-semibold">
            CogniCore AI
          </h2>

          <p className="text-xs opacity-90 mt-1">
            Your intelligent assistant
          </p>
        </div>

        {/* Messages */}
        <div className="h-[330px] overflow-y-auto bg-gray-50 p-4">
          <div className="max-w-[85%] rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
            <p className="text-sm leading-6">
              👋 Welcome to <strong>CogniCore AI</strong>.
            </p>

            <p className="text-sm mt-3 text-gray-600">
              Upload your company documents and ask questions in natural
              language.
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="border-t bg-white p-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything..."
              className="
                flex-1
                rounded-full
                border
                border-gray-300
                px-4
                py-2.5
                text-sm
                outline-none
                focus:border-cyan-500
              "
            />

            <button
              className="
                h-11
                w-11
                rounded-full
                bg-cyan-500
                text-white
                flex
                items-center
                justify-center
                hover:bg-cyan-600
                transition
              "
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}