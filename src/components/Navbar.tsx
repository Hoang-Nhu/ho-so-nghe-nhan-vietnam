/**
 * Top Navigation Bar with Brand, Links, Student Badge, and Bilingual Toggle
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { I18N } from '../data/i18n';
import { Languages, Sparkles, Menu, X, Landmark, GraduationCap } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenAI
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = I18N[language];

  const toggleLanguage = () => {
    onLanguageChange(language === 'vi' ? 'en' : 'vi');
  };

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#artisans', label: t.nav.artisans },
    { href: '#ai-assistant', label: t.nav.aiAssistant, isAI: true },
    { href: '#references', label: t.nav.references },
    { href: '#about', label: t.nav.about }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#d4af37]/30 shadow-xs transition-colors">
      {/* Top micro banner for student identity */}
      <div className="bg-[#881337] text-[#fef3c7] text-xs py-1 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#9f1239]">
        <GraduationCap className="w-3.5 h-3.5 text-[#facc15]" />
        <span>Dự án Học tập & Bảo tồn Văn hóa: <strong className="text-white">Nguyễn Văn Hoàng (PH64335)</strong> — Lớp B03 — Nhóm 2</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Title */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#881337] to-[#4c0519] border-2 border-[#d4af37] flex items-center justify-center shadow-md shadow-[#881337]/15 group-hover:scale-105 transition-transform">
              <Landmark className="w-6 h-6 text-[#fef3c7]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-[#9f1239] font-bold">
                  {language === 'vi' ? 'Di sản Văn hóa Việt Nam' : 'Vietnamese Cultural Heritage'}
                </span>
                <span className="px-1.5 py-0.2 bg-[#fef3c7] text-[#92400e] text-[10px] font-semibold rounded border border-[#fde68a]">
                  NNND • NNƯT
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-[#1f2937] leading-tight font-serif-culture">
                {language === 'vi' ? 'Hồ sơ Nghệ nhân Di sản' : 'Cultural Artisan Archive'}
              </h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.isAI ? onOpenAI : undefined}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  link.isAI
                    ? 'text-[#9f1239] hover:bg-[#ffe4e6] flex items-center gap-1.5'
                    : 'text-[#374151] hover:text-[#9f1239] hover:bg-[#f3ece2]'
                }`}
              >
                {link.isAI && <Sparkles className="w-4 h-4 text-[#e11d48]" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Language Switcher & AI Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick AI Trigger Button */}
            <button
              onClick={onOpenAI}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-[#881337] text-white hover:bg-[#9f1239] shadow-sm transition-all hover:shadow-[#9f1239]/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
              <span>{t.nav.aiAssistant}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Switch Language"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg border border-[#d4af37]/60 bg-[#fffbeb] text-[#854d0e] hover:bg-[#fef3c7] hover:border-[#b45309] transition-all shadow-2xs"
            >
              <Languages className="w-4 h-4 text-[#b45309]" />
              <span>{language === 'vi' ? 'VI' : 'EN'}</span>
              <span className="text-[10px] opacity-75 font-normal">
                ({language === 'vi' ? 'Chuyển sang EN' : 'Switch to VI'})
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4b5563] hover:text-[#111827] rounded-lg hover:bg-[#f3ece2]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf7f2] border-b border-[#d4af37]/40 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setMobileMenuOpen(false);
                if (link.isAI) onOpenAI();
              }}
              className="block px-3 py-2 text-base font-medium text-[#374151] hover:text-[#9f1239] hover:bg-[#f3ece2] rounded-lg"
            >
              <div className="flex items-center gap-2">
                {link.isAI && <Sparkles className="w-4 h-4 text-[#e11d48]" />}
                {link.label}
              </div>
            </a>
          ))}
          <div className="pt-2 border-t border-amber-900/10 flex items-center justify-between">
            <span className="text-xs text-[#78350f]">{t.studentBadge}</span>
          </div>
        </div>
      )}
    </header>
  );
};
