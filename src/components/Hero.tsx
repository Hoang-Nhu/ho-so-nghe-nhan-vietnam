/**
 * Hero Banner Section with Master Cultural Artwork, Dong Son Bronze Motifs, and Key Stats
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React from 'react';
import { Language } from '../types';
import { I18N } from '../data/i18n';
import { MASTER_HERITAGE_BANNER } from '../data/artisans';
import { DongSonWatermark, AntiqueCornerBracket, RedLacquerSeal, DongSonFriezeDivider } from './CulturalMotifs';
import { Award, Compass, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

interface HeroProps {
  language: Language;
  onExploreClick: () => void;
  onOpenAI: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onExploreClick,
  onOpenAI
}) => {
  const t = I18N[language];

  return (
    <section id="home" className="relative overflow-hidden bg-parchment-pattern pt-8 pb-16 border-b border-[#d4af37]/30">
      
      {/* 1. Large Sacred Dong Son Bronze Drum Rotating Watermark in Background */}
      <DongSonWatermark className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.038] pointer-events-none" />

      {/* 2. Ambient Warm Golden / Cinnabar Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#fde68a]/30 via-[#fca5a5]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge & Tagline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fffbeb] border-2 border-[#d4af37]/60 text-[#854d0e] text-xs sm:text-sm font-semibold tracking-wider shadow-xs">
            <RedLacquerSeal text="DI SẢN" subtext="VIỆT NAM" size="sm" />
            <span className="font-serif-culture font-bold">{t.hero.tag}</span>
          </div>

          {/* Main Title with Vietnamese Calligraphic Grace */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2c1810] tracking-tight font-serif-culture leading-[1.2]">
            {t.hero.heading}
          </h1>

          {/* Subtitle / Cultural Mission */}
          <p className="text-base sm:text-lg md:text-xl text-[#574438] leading-relaxed max-w-3xl mx-auto font-sans-culture">
            {t.hero.desc}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#881337] via-[#9f1239] to-[#881337] text-[#fef3c7] font-bold shadow-lg hover:shadow-xl hover:from-[#9f1239] hover:to-[#be123c] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-[#f59e0b]/40"
            >
              <Compass className="w-5 h-5 text-[#fde68a]" />
              <span>{t.hero.exploreBtn}</span>
            </button>

            <button
              onClick={onOpenAI}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#fffbeb] border-2 border-[#d4af37] text-[#854d0e] font-bold hover:bg-[#fef3c7] hover:border-[#b45309] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-md"
            >
              <Sparkles className="w-5 h-5 text-[#b45309]" />
              <span>{t.hero.aiBtn}</span>
            </button>
          </div>
        </div>

        {/* 3. Featured Master Artwork Frame (Tranh Sơn Dầu & Sơn Mài Di Sản) */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-4 border-[#d4af37] shadow-2xl bg-[#2c1810] group">
            
            {/* Antique Corner Brackets */}
            <AntiqueCornerBracket position="top-left" />
            <AntiqueCornerBracket position="top-right" />
            <AntiqueCornerBracket position="bottom-left" />
            <AntiqueCornerBracket position="bottom-right" />

            {/* Master Painting Image with Fine Canvas Texture Overlay */}
            <div className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden oil-canvas-texture">
              <img
                src={MASTER_HERITAGE_BANNER}
                alt="Tranh nghệ thuật sơn dầu sơn mài: Các bậc nghệ nhân nắm giữ di sản văn hóa Việt Nam"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c120c]/90 via-black/20 to-transparent" />
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-white">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <RedLacquerSeal text="QUỐC BẢO" subtext="VIỆT NAM" size="sm" />
                  <span className="text-xs font-semibold text-[#facc15] uppercase tracking-wider font-serif-culture">
                    {language === 'vi' ? 'Họa phẩm Sơn Dầu & Sơn Mài Dân Tộc' : 'Masterpiece of Vietnamese Traditional Heritage'}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold font-serif-culture text-[#fef3c7]">
                  {language === 'vi'
                    ? '“Hồn cốt dân tộc ngàn năm trong tiếng đàn Đáy, điệu Ca trù và ngón gốm Bát Tràng”'
                    : '"The timeless national spirit echoed in the Dan Day lute, Ca Tru chants, and Bat Trang ceramic craft"'}
                </h3>
              </div>

              <div className="text-right text-[11px] text-[#fde68a] hidden md:block shrink-0 bg-black/50 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
                <span>Phong cách: Tranh sơn mài & Sơn dầu hoài cổ</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Dong Son Meander Frieze Line */}
        <DongSonFriezeDivider className="my-10" />

        {/* 5. Key Stats Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border-2 border-[#e5d8c5] shadow-xs hover:border-[#d4af37] transition-all text-center">
            <div className="w-9 h-9 rounded-xl bg-[#ffe4e6] text-[#9f1239] flex items-center justify-center mx-auto mb-2 shadow-2xs">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-[#881337] font-serif-culture">11+</div>
            <div className="text-xs text-[#574438] mt-0.5 font-medium">{t.hero.stats.artisans}</div>
          </div>

          <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border-2 border-[#e5d8c5] shadow-xs hover:border-[#d4af37] transition-all text-center">
            <div className="w-9 h-9 rounded-xl bg-[#fef3c7] text-[#b45309] flex items-center justify-center mx-auto mb-2 shadow-2xs">
              <Compass className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-[#854d0e] font-serif-culture">03</div>
            <div className="text-xs text-[#574438] mt-0.5 font-medium">{t.hero.stats.regions}</div>
          </div>

          <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border-2 border-[#e5d8c5] shadow-xs hover:border-[#d4af37] transition-all text-center">
            <div className="w-9 h-9 rounded-xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mx-auto mb-2 shadow-2xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-[#3730a3] font-serif-culture">06+</div>
            <div className="text-xs text-[#574438] mt-0.5 font-medium">{t.hero.stats.unesco}</div>
          </div>

          <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border-2 border-[#e5d8c5] shadow-xs hover:border-[#d4af37] transition-all text-center">
            <div className="w-9 h-9 rounded-xl bg-[#ecfdf5] text-[#047857] flex items-center justify-center mx-auto mb-2 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-[#065f46] font-serif-culture">100%</div>
            <div className="text-xs text-[#574438] mt-0.5 font-medium">{t.hero.stats.sources}</div>
          </div>
        </div>

      </div>
    </section>
  );
};
