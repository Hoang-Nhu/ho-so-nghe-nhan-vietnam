/**
 * Application Footer with Student Author Credentials, Legal Disclaimer, and Official Sources
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React from 'react';
import { Language } from '../types';
import { I18N } from '../data/i18n';
import { OFFICIAL_REFERENCES } from '../data/artisans';
import { Landmark, GraduationCap, ShieldAlert, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = I18N[language];

  return (
    <footer className="bg-[#1c120c] text-[#e5d8c5] pt-14 pb-8 border-t-2 border-[#d4af37]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid: Brand & Student Info | Legal Disclaimer | Official Reference Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Student Author Credentials (md:span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#881337] to-[#4c0519] border border-[#d4af37] flex items-center justify-center text-[#fef3c7] shadow-sm">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold font-serif-culture text-[#fef3c7]">
                {t.appTitle}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#c7b9ac] leading-relaxed">
              {t.appSubtitle}
            </p>

            {/* Prominent Student Author Credentials Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-[#d4af37]/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#facc15] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>{t.footer.authorSection}</span>
              </div>
              <div className="text-xs sm:text-sm space-y-1 text-[#e5d8c5]">
                <div>Họ và tên sinh viên: <strong className="text-white font-bold">Nguyễn Văn Hoàng</strong></div>
                <div>Mã số sinh viên: <strong className="text-[#facc15] font-mono font-bold">PH64335</strong></div>
                <div>Lớp / Nhóm: <strong className="text-white font-bold">Lớp B03 — Nhóm 2</strong></div>
              </div>
            </div>
          </div>

          {/* Col 2: Mandatory Legal Disclaimer (md:span-4) */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#fb7185] uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-[#f43f5e]" />
              <span>{t.footer.legalSection}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#881337]/20 border border-[#be123c]/40 text-xs sm:text-sm text-[#fecdd3] leading-relaxed space-y-2">
              <p>
                {t.footer.legalDisclaimerText}
              </p>
            </div>
          </div>

          {/* Col 3: Official References List (md:span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
              {t.footer.linksTitle}
            </h4>

            <ul className="space-y-2 text-xs">
              {OFFICIAL_REFERENCES.slice(0, 5).map((ref, idx) => (
                <li key={idx}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[#c7b9ac] hover:text-[#fde68a] transition-colors py-1 group"
                  >
                    <span className="truncate pr-2">{ref.name[language]}</span>
                    <ExternalLink className="w-3 h-3 shrink-0 opacity-70 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Cultural Respect */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a8998c]">
          <div>
            {t.footer.rights}
          </div>

          <div className="flex items-center gap-1.5 text-center">
            <span>Tôn vinh và trao truyền Di sản Dân tộc</span>
            <Heart className="w-3.5 h-3.5 text-[#fb7185] fill-[#fb7185]" />
            <span>Việt Nam</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
