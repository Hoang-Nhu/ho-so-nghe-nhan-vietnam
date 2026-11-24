/**
 * Interactive Heritage AI Scholar powered by Server-Side Gemini API (/api/heritage-chat)
 * Role: Senior Vietnamese Cultural Heritage Preservation Specialist
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React, { useState, useEffect, useRef } from 'react';
import { Language, ChatMessage } from '../types';
import { I18N } from '../data/i18n';
import { askHeritageScholar } from '../services/geminiService';
import {
  Sparkles, Send, Bot, User, HelpCircle, AlertCircle, RotateCcw
} from 'lucide-react';

interface AIAssistantSectionProps {
  language: Language;
}

export const AIAssistantSection: React.FC<AIAssistantSectionProps> = ({ language }) => {
  const t = I18N[language];

  const [inputQuestion, setInputQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const createWelcomeMessage = (): ChatMessage => ({
    id: 'welcome',
    role: 'model',
    content: t.ai.welcomeMessage,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });

  useEffect(() => {
    setMessages([createWelcomeMessage()]);
    setErrorMessage(null);
  }, [language]);

  useEffect(() => {
    if (messages.length > 1 || isLoading) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages, isLoading]);

  const handleResetChat = () => {
    setMessages([createWelcomeMessage()]);
    setErrorMessage(null);
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const questionText = (customPrompt || inputQuestion).trim();
    if (!questionText || isLoading) return;

    setErrorMessage(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: questionText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const currentHistory = [...messages];
    setMessages((prev) => [...prev, userMsg]);
    setInputQuestion('');
    setIsLoading(true);

    try {
      const responseText = await askHeritageScholar(questionText, language, currentHistory);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        content: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      setErrorMessage(
        err?.message ||
          (language === 'vi'
            ? 'Đã xảy ra lỗi khi kết nối Trợ lý AI.'
            : 'An error occurred while contacting the AI Scholar.')
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="ai-assistant"
      className="py-14 bg-gradient-to-b from-[#faf7f2] via-[#f7f2ea] to-[#faf7f2] border-t border-[#e5d8c5]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef2f2] text-[#9f1239] text-xs font-bold border border-[#fecdd3]">
            <Sparkles className="w-3.5 h-3.5 text-[#e11d48]" />
            <span>
              {language === 'vi'
                ? 'CHUYÊN GIA NGHIÊN CỨU DI SẢN • TRỰC TUYẾN'
                : 'CULTURAL HERITAGE AI SCHOLAR • READY'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-culture text-[#2c1810]">
            {t.ai.title}
          </h2>
          <p className="text-sm sm:text-base text-[#574438] leading-relaxed">
            {t.ai.subtitle}
          </p>
        </div>

        {/* 3 Quick Prompt Buttons */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#78350f] uppercase tracking-wide">
              <HelpCircle className="w-3.5 h-3.5 text-[#b45309]" />
              <span>{t.ai.quickPromptsTitle}</span>
            </div>

            {messages.length > 1 && (
              <button
                onClick={handleResetChat}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white hover:bg-[#fef2f2] border border-[#e5d8c5] text-xs font-semibold text-[#881337] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.ai.resetChat}</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {t.ai.quickPrompts.map((promptText, idx) => (
              <button
                key={idx}
                disabled={isLoading}
                onClick={() => handleSendMessage(promptText)}
                className="text-left p-3.5 rounded-xl bg-white hover:bg-[#fffbeb] disabled:opacity-60 border border-[#e5d8c5] hover:border-[#d4af37] text-xs text-[#574438] hover:text-[#881337] font-medium transition-all shadow-2xs cursor-pointer group flex flex-col justify-between"
              >
                <span>"{promptText}"</span>
                <span className="text-[10px] text-[#9f1239] font-bold mt-2 group-hover:translate-x-0.5 transition-transform">
                  {language === 'vi' ? '→ Gửi câu hỏi này' : '→ Ask this prompt'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Thread Container */}
        <div className="bg-white rounded-3xl border-2 border-[#d4af37]/60 shadow-lg overflow-hidden flex flex-col h-[520px]">
          {/* Chat Messages Scrollable Box */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#fbf9f5]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[88%] ${
                  msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                {/* Avatar Icon */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                    msg.role === 'user'
                      ? 'bg-[#881337] text-[#fef3c7]'
                      : 'bg-[#b45309] text-white shadow-xs'
                  }`}
                >
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                    msg.role === 'user'
                      ? 'bg-[#881337] text-white rounded-tr-xs'
                      : 'bg-white text-[#2c1810] border border-[#e5d8c5] rounded-tl-xs whitespace-pre-line'
                  }`}
                >
                  {msg.content}
                  <div
                    className={`text-[10px] mt-2 opacity-70 text-right ${
                      msg.role === 'user' ? 'text-[#fef3c7]' : 'text-[#786b62]'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3 max-w-[85%] mr-auto">
                <div className="w-8 h-8 rounded-full bg-[#b45309] text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-pulse" />
                </div>
                <div className="bg-white border border-[#e5d8c5] rounded-2xl p-4 text-xs text-[#786b62] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9f1239] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#b45309] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-bounce [animation-delay:0.4s]" />
                  <span className="font-medium text-[#881337]">{t.ai.thinking}</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-[#fef2f2] border border-[#fecdd3] text-xs sm:text-sm text-[#991b1b] flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 sm:p-4 bg-white border-t border-[#e5d8c5]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuestion}
                onChange={(e) => setInputQuestion(e.target.value)}
                placeholder={t.ai.inputPlaceholder}
                disabled={isLoading}
                className="flex-1 px-4 py-3 text-xs sm:text-sm rounded-xl bg-[#faf7f2] border border-[#d4af37]/50 text-[#2c1810] placeholder:text-[#9c8979] focus:outline-hidden focus:border-[#9f1239] focus:ring-2 focus:ring-[#9f1239]/20 transition-all"
              />

              <button
                type="submit"
                disabled={isLoading || !inputQuestion.trim()}
                className="px-5 py-3 rounded-xl bg-[#881337] hover:bg-[#9f1239] disabled:opacity-50 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs shrink-0"
              >
                <span>{t.ai.send}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
