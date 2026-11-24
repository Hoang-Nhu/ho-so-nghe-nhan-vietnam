/**
 * Top Navigation Bar with Multi-Page Tab Switching, Student Badge, and Bilingual Toggle
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React, { useState } from 'react';
import { ActivePage, Language } from '../types';
import { I18N } from '../data/i18n';
import { Languages, Sparkles, Menu, X, Landmark, GraduationCap } from 'lucide-react';

interface NavbarProps {
  language: Language;
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  activePage,
  onNavigate,
  onLanguageChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = I18N[language];

  const toggleLanguage = () => {
    onLanguageChange(language === 'vi' ? 'en' : 'vi');
  };

  const navLinks: Array<{ page: ActivePage; label: string; isAI?: boolean }> = [
    { page: 'home', label: t.nav.home },
    { page: 'artisans', label: t.nav.artisans },
    { page: 'ai-assistant', label: t.nav.aiAssistant, isAI: true },
    { page: 'references', label: t.nav.references },
    { page: 'about', label: t.nav.about }
  ];

  const handleNavClick = (e: React.MouseEvent, page: ActivePage) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#d4af37]/30 shadow-xs transition-colors">
      {/* Top micro banner for student identity */}
      <div className="bg-[#881337] text-[#fef3c7] text-xs py-1 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#9f1239]">
        <GraduationCap className="w-3.5 h-3.5 text-[#facc15] shrink-0" />
        <span>
          Dự án Học tập &amp; Bảo tồn Văn hóa: <strong className="text-white">Nguyễn Văn Hoàng (PH64335)</strong> — Lớp B03 — Nhóm 2
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Title */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
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
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activePage === link.page;
              return (
                <a
                  key={link.page}
                  href={`#${link.page}`}
                  onClick={(e) => handleNavClick(e, link.page)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#881337] text-[#fef3c7] shadow-xs border border-[#d4af37]/50'
                      : link.isAI
                        ? 'text-[#9f1239] hover:bg-[#ffe4e6]'
                        : 'text-[#374151] hover:text-[#9f1239] hover:bg-[#f3ece2]'
                  }`}
                >
                  {link.isAI && (
                    <Sparkles className={`w-4 h-4 ${isActive ? 'text-[#facc15]' : 'text-[#e11d48]'}`} />
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Switch Language"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg border border-[#d4af37]/60 bg-[#fffbeb] text-[#854d0e] hover:bg-[#fef3c7] hover:border-[#b45309] transition-all shadow-2xs cursor-pointer"
            >
              <Languages className="w-4 h-4 text-[#b45309]" />
              <span>{language === 'vi' ? 'VI' : 'EN'}</span>
              <span className="text-[10px] opacity-75 font-normal hidden sm:inline">
                ({language === 'vi' ? 'Chuyển sang EN' : 'Switch to VI'})
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden p-2 text-[#4b5563] hover:text-[#111827] rounded-lg hover:bg-[#f3ece2] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf7f2] border-b border-[#d4af37]/40 px-4 pt-2 pb-4 space-y-1.5 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <a
                key={link.page}
                href={`#${link.page}`}
                onClick={(e) => handleNavClick(e, link.page)}
                className={`block px-3.5 py-2.5 text-base font-semibold rounded-xl transition-colors ${
                  isActive
                    ? 'bg-[#881337] text-[#fef3c7]'
                    : 'text-[#374151] hover:text-[#9f1239] hover:bg-[#f3ece2]'
                }`}
              >
                <div className="flex items-center gap-2">
                  {link.isAI && (
                    <Sparkles className={`w-4 h-4 ${isActive ? 'text-[#facc15]' : 'text-[#e11d48]'}`} />
                  )}
                  <span>{link.label}</span>
                </div>
              </a>
            );
          })}
          <div className="pt-2 border-t border-amber-900/10 flex items-center justify-between">
            <span className="text-xs text-[#78350f]">{t.studentBadge}</span>
          </div>
        </div>
      )}
    </header>
  );
};
