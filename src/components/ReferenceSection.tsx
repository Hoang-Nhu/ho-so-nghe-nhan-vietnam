/**
 * Official Reference Portals Section with Verified Government and UNESCO Links
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React from 'react';
import { Language } from '../types';
import { I18N } from '../data/i18n';
import { OFFICIAL_REFERENCES } from '../data/artisans';
import { ShieldCheck, ExternalLink, Globe } from 'lucide-react';

interface ReferenceSectionProps {
  language: Language;
}

export const ReferenceSection: React.FC<ReferenceSectionProps> = ({ language }) => {
  const t = I18N[language];

  return (
    <section id="references" className="py-14 bg-white border-t border-[#e5d8c5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#065f46] text-xs font-bold border border-[#a7f3d0]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>NGUỒN DỮ LIỆU ĐỐI CHIẾU CHÍNH THỨC</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-culture text-[#2c1810]">
            {t.references.heading}
          </h2>

          <p className="text-sm sm:text-base text-[#574438] leading-relaxed">
            {t.references.subheading}
          </p>
        </div>

        {/* 6 Official Reference Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {OFFICIAL_REFERENCES.map((item, index) => (
            <div
              key={index}
              className="bg-[#faf7f2] rounded-2xl border border-[#ebdccb] p-5 flex flex-col justify-between hover:border-[#d4af37] hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#fffbeb] text-[#92400e] text-[11px] font-bold border border-[#fde68a]">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#786b62]">
                    <Globe className="w-3.5 h-3.5 text-[#b45309]" />
                    <span className="font-mono font-medium">{item.domain}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#2c1810] font-serif-culture group-hover:text-[#881337] transition-colors leading-snug">
                  {item.name[language]}
                </h3>

                <p className="text-xs sm:text-sm text-[#574438] leading-relaxed">
                  {item.description[language]}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#f0e6d8]">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#881337] group-hover:text-[#9f1239] transition-colors"
                >
                  <span>{t.references.visitLink}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
