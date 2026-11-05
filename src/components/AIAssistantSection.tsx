/**
 * Interactive Heritage AI Scholar with Bring Your Own Key (BYOK)
 * Role: Senior Vietnamese Cultural Heritage Preservation Specialist
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React, { useState, useEffect, useRef } from 'react';
import { Language, ChatMessage } from '../types';
import { I18N } from '../data/i18n';
import { 
  getSavedApiKey, saveApiKey, clearApiKey, askHeritageScholar 
} from '../services/geminiService';
import { 
  Sparkles, Key, Eye, EyeOff, Check, Trash2, Send, Bot, User, 
  HelpCircle, AlertCircle, Shield
} from 'lucide-react';

interface AIAssistantSectionProps {
  language: Language;
}

export const AIAssistantSection: React.FC<AIAssistantSectionProps> = ({ language }) => {
  const t = I18N[language];
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [savedKey, setSavedKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [isKeySavedToast, setIsKeySavedToast] = useState(false);

  const [inputQuestion, setInputQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize saved key and welcome message
  useEffect(() => {
    const key = getSavedApiKey();
    if (key) {
      setSavedKey(key);
      setApiKeyInput(key);
    }

    setMessages([
      {
        id: 'welcome',
        role: 'model',
        content: t.ai.welcomeMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [language]);

  // Scroll chat to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSaveKey = () => {
    if (!apiKeyInput.trim()) return;
    saveApiKey(apiKeyInput.trim());
    setSavedKey(apiKeyInput.trim());
    setIsKeySavedToast(true);
    setErrorMessage(null);
    setTimeout(() => setIsKeySavedToast(false), 3000);
  };

  const handleClearKey = () => {
    clearApiKey();
    setSavedKey('');
    setApiKeyInput('');
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const questionText = (customPrompt || inputQuestion).trim();
    if (!questionText) return;

    const keyToUse = savedKey || apiKeyInput.trim();
    if (!keyToUse) {
      setErrorMessage(t.ai.noKeyWarning);
      return;
    }

    // Save key automatically if entered
    if (apiKeyInput.trim() && apiKeyInput.trim() !== savedKey) {
      handleSaveKey();
    }

    setErrorMessage(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: questionText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuestion('');
    setIsLoading(true);

    try {
      const responseText = await askHeritageScholar(questionText, language, keyToUse);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        content: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err: any) {
      setErrorMessage(err.message || 'Error occurred while contacting Gemini API');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-14 bg-gradient-to-b from-[#faf7f2] via-[#f7f2ea] to-[#faf7f2] border-t border-[#e5d8c5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef2f2] text-[#9f1239] text-xs font-bold border border-[#fecdd3]">
            <Sparkles className="w-3.5 h-3.5 text-[#e11d48]" />
            <span>GEMINI 2.5 FLASH • BYOK ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-culture text-[#2c1810]">
            {t.ai.title}
          </h2>
          <p className="text-sm sm:text-base text-[#574438] leading-relaxed">
            {t.ai.subtitle}
          </p>
        </div>

        {/* Bring Your Own Key (BYOK) Management Card */}
        <div className="bg-white rounded-2xl border-2 border-[#d4af37]/70 p-5 sm:p-6 mb-6 shadow-sm space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#fef3c7] text-[#92400e] flex items-center justify-center">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#2c1810]">
                  {t.ai.byokTitle}
                </h3>
                <p className="text-xs text-[#786b62]">
                  {t.ai.byokDesc}
                </p>
              </div>
            </div>

            {savedKey && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#ecfdf5] text-[#065f46] text-xs font-semibold self-start sm:self-auto border border-[#a7f3d0]">
                <Shield className="w-3.5 h-3.5" />
                <span>{language === 'vi' ? 'Key đã lưu an toàn' : 'Key securely stored'}</span>
              </span>
            )}
          </div>

          {/* Key Input & Actions */}
          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <div className="relative flex-1">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder={t.ai.keyPlaceholder}
                className="w-full px-4 py-2.5 pr-10 text-xs sm:text-sm font-mono rounded-xl bg-[#faf7f2] border border-[#d4af37]/60 text-[#2c1810] focus:outline-hidden focus:border-[#9f1239] focus:ring-2 focus:ring-[#9f1239]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9c8979] hover:text-[#2c1810]"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSaveKey}
                disabled={!apiKeyInput.trim()}
                className="px-4 py-2.5 rounded-xl bg-[#881337] hover:bg-[#9f1239] disabled:opacity-50 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                {isKeySavedToast ? <Check className="w-4 h-4 text-[#facc15]" /> : <Key className="w-4 h-4" />}
                <span>{isKeySavedToast ? t.ai.saved : t.ai.saveKey}</span>
              </button>

              {savedKey && (
                <button
                  onClick={handleClearKey}
                  className="px-3 py-2.5 rounded-xl bg-[#fee2e2] text-[#991b1b] hover:bg-[#fecaca] font-semibold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                  title={t.ai.clearKey}
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">{t.ai.clearKey}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 3 Quick Prompt Buttons */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#78350f] uppercase tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 text-[#b45309]" />
            <span>{t.ai.quickPromptsTitle}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {t.ai.quickPrompts.map((promptText, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(promptText)}
                className="text-left p-3 rounded-xl bg-white hover:bg-[#fffbeb] border border-[#e5d8c5] hover:border-[#d4af37] text-xs text-[#574438] hover:text-[#881337] font-medium transition-all shadow-2xs cursor-pointer group flex flex-col justify-between"
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
        <div className="bg-white rounded-3xl border border-[#d4af37]/60 shadow-lg overflow-hidden flex flex-col h-[520px]">
          
          {/* Chat Messages Scrollable Box */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#fbf9f5]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
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
                  <Bot className="w-4 h-4 animate-spin" />
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
              <div className="p-3 rounded-xl bg-[#fef2f2] border border-[#fecdd3] text-xs text-[#991b1b] flex items-start gap-2">
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
