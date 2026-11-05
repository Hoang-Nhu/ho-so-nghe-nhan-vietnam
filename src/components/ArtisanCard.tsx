/**
 * Artisan Dossier Card with Fine-Art Oil Painting Aesthetics & Cultural Motifs
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React from 'react';
import { ArtisanProfile, Language } from '../types';
import { I18N } from '../data/i18n';
import { RedLacquerSeal, AntiqueCornerBracket } from './CulturalMotifs';
import { Award, MapPin, Sparkles, ExternalLink, ArrowRight, Quote } from 'lucide-react';

interface ArtisanCardProps {
  artisan: ArtisanProfile;
  language: Language;
  onViewDetails: (artisan: ArtisanProfile) => void;
}

export const ArtisanCard: React.FC<ArtisanCardProps> = ({
  artisan,
  language,
  onViewDetails
}) => {
  const t = I18N[language];

  // Region label
  const regionLabel = {
    north: language === 'vi' ? 'Miền Bắc' : 'Northern Vietnam',
    central: language === 'vi' ? 'Miền Trung & Tây Nguyên' : 'Central & Highlands',
    south: language === 'vi' ? 'Miền Nam' : 'Southern Vietnam'
  }[artisan.region];

  const primarySource = artisan.sources[0];

  return (
    <article className="group relative bg-[#fdfbf7] rounded-3xl border-2 border-[#d4af37]/50 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#b45309] transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5">
      
      {/* Subtle corner ornamental brackets on the card */}
      <AntiqueCornerBracket position="top-left" />
      <AntiqueCornerBracket position="top-right" />

      <div>
        {/* Card Header & Fine Art Portrait Frame */}
        <div className="relative h-64 overflow-hidden bg-[#1c120c] oil-canvas-texture">
          {/* Portrait Image with Vintage/Oil Painting Vibe */}
          <img
            src={artisan.avatarUrl}
            alt={`Tranh chân dung nghệ nhân ${artisan.name}`}
            className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 filter contrast-[1.05] brightness-[0.98]"
            loading="lazy"
          />
          
          {/* Gilded Inner Shadow and Vignette for classical oil painting vibe */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c120c] via-transparent to-black/30 pointer-events-none" />
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(44,24,16,0.6)] pointer-events-none" />

          {/* Traditional Red Lacquer Seal on Portrait Corner */}
          <div className="absolute bottom-12 right-3 z-10">
            <RedLacquerSeal 
              text={artisan.title === 'NNND' ? 'NHÂN DÂN' : 'ƯU TÚ'} 
              subtext={language === 'vi' ? 'DI SẢN' : 'MASTER'} 
              size="sm" 
            />
          </div>

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
            {/* Title Badge (NNND / NNƯT) */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-md flex items-center gap-1.5 ${
                artisan.title === 'NNND'
                  ? 'bg-[#881337] text-[#fef3c7] border border-[#f59e0b]'
                  : 'bg-[#92400e] text-[#fef3c7] border border-[#fbbf24]'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#facc15]" />
              <span className="font-serif-culture">{artisan.title} • {artisan.titleFullName[language]}</span>
            </span>

            {/* Region Tag */}
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/70 backdrop-blur-md text-[#fde68a] border border-[#d4af37]/40 shadow-xs">
              {regionLabel}
            </span>
          </div>

          {/* Lifespan & Status on bottom edge of image */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#f3ece2] z-10">
            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#fbbf24]" />
              <span>{artisan.location[language]}</span>
            </div>
            <div className="text-[11px] bg-black/60 px-2.5 py-0.5 rounded-md backdrop-blur-xs border border-white/10 font-mono">
              {artisan.birthYear} — {artisan.deathYear ? artisan.deathYear : (language === 'vi' ? 'Nay' : 'Present')}
            </div>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Heritage Tag & Years of Dedication */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#fffbeb] text-[#92400e] text-xs font-bold border border-[#fde68a] shadow-2xs">
              <span className="text-[#b45309]">❦</span>
              <span>{artisan.heritageName[language]}</span>
            </span>

            <span className="text-xs text-[#786b62] font-semibold">
              <strong className="text-[#881337] font-bold text-sm font-serif-culture">{artisan.yearsOfDedication}</strong> {t.card.yearsDedicated}
            </span>
          </div>

          {/* UNESCO Inscription Ribbon if available */}
          {artisan.unescoRecognition && (
            <div className="text-[11px] font-medium text-[#1e40af] bg-[#eff6ff] px-2.5 py-1 rounded-lg border border-[#bfdbfe] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#2563eb] shrink-0" />
              <span className="truncate">{artisan.unescoRecognition[language]}</span>
            </div>
          )}

          {/* Artisan Name */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#2c1810] font-serif-culture group-hover:text-[#881337] transition-colors leading-snug">
            {artisan.name}
          </h3>

          {/* Short Summary */}
          <p className="text-xs sm:text-sm text-[#574438] line-clamp-3 leading-relaxed">
            {artisan.summary[language]}
          </p>

          {/* Signature Technique Excerpt */}
          <div className="bg-[#fbf7f0] p-3 rounded-xl border border-[#ebdccb] text-xs text-[#6e584a] space-y-1">
            <div className="font-bold text-[#881337] flex items-center gap-1">
              <span>{language === 'vi' ? 'Kỹ thuật tuyệt kỹ:' : 'Signature Technique:'}</span>
            </div>
            <p className="line-clamp-2 italic">
              {artisan.uniqueTechniques.title[language]}
            </p>
          </div>

          {/* Notable Quote Preview */}
          <div className="flex gap-2 text-xs italic text-[#786b62] bg-[#faf7f2] p-2.5 rounded-lg border-l-3 border-[#d4af37]">
            <Quote className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
            <p className="line-clamp-2">
              {artisan.quote[language]}
            </p>
          </div>
        </div>
      </div>

      {/* Card Footer: Source Citation & Detail Button */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#f0e6d8] space-y-3 bg-[#faf7f2]/50">
        {/* Source citation */}
        {primarySource && (
          <div className="flex items-center justify-between text-[11px] text-[#786b62]">
            <span className="font-medium text-[#8c7b6f]">{t.card.sourceLabel}</span>
            <a
              href={primarySource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#9f1239] hover:underline font-semibold"
              onClick={(e) => e.stopPropagation()}
            >
              <span>{primarySource.sourceName}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        {/* View Profile Button */}
        <button
          onClick={() => onViewDetails(artisan)}
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#881337] to-[#9f1239] hover:from-[#9f1239] hover:to-[#be123c] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer group/btn border border-[#f59e0b]/30"
        >
          <span>{t.card.viewProfile}</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#fde68a]" />
        </button>
      </div>
    </article>
  );
};
