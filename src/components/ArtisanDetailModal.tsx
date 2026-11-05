/**
 * In-depth Artisan Dossier Modal with Fine-Art Oil Painting Aesthetics & Cultural Motifs
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React, { useState, useEffect } from 'react';
import { ArtisanProfile, Language } from '../types';
import { I18N } from '../data/i18n';
import { RedLacquerSeal, AntiqueCornerBracket, DongSonFriezeDivider } from './CulturalMotifs';
import { 
  X, Award, MapPin, Calendar, Clock, BookOpen, Wrench, Users, 
  ExternalLink, Quote, Sparkles, ShieldCheck 
} from 'lucide-react';

interface ArtisanDetailModalProps {
  artisan: ArtisanProfile | null;
  language: Language;
  onClose: () => void;
}

export const ArtisanDetailModal: React.FC<ArtisanDetailModalProps> = ({
  artisan,
  language,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'bio' | 'technique' | 'transmission' | 'artifacts' | 'sources'>('bio');
  const t = I18N[language];

  // Close on Escape key and handle scroll lock
  useEffect(() => {
    if (!artisan) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [artisan, onClose]);

  if (!artisan) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#fdfbf7] rounded-3xl border-3 border-[#d4af37] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Antique Corner Brackets */}
        <AntiqueCornerBracket position="top-left" />
        <AntiqueCornerBracket position="top-right" />
        <AntiqueCornerBracket position="bottom-left" />
        <AntiqueCornerBracket position="bottom-right" />
        
        {/* Top Header Banner with Portrait */}
        <div className="relative bg-[#1c120c] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b-2 border-[#d4af37]/60">
          
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#fef3c7] transition-colors z-20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Portrait Image with Traditional Double Ring Gold Gilded Oil Painting Border */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-3 border-[#d4af37] shadow-2xl shrink-0 oil-canvas-texture bg-black">
            <img
              src={artisan.avatarUrl}
              alt={`Họa phẩm chân dung nghệ nhân ${artisan.name}`}
              className="w-full h-full object-cover object-center filter contrast-[1.05]"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] pointer-events-none" />
            <div className="absolute bottom-1 right-1 z-10">
              <RedLacquerSeal text="DI SẢN" subtext={artisan.title} size="sm" />
            </div>
          </div>

          {/* Header Metadata */}
          <div className="space-y-2.5 text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm ${
                artisan.title === 'NNND' 
                  ? 'bg-[#881337] text-[#fef3c7] border border-[#f59e0b]'
                  : 'bg-[#92400e] text-[#fef3c7] border border-[#fbbf24]'
              }`}>
                <Award className="w-3.5 h-3.5 text-[#facc15]" />
                <span className="font-serif-culture">{artisan.titleFullName[language]}</span>
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2c1810] text-[#fde68a] border border-[#d4af37]/60">
                ❦ {artisan.heritageName[language]}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-culture text-[#fef3c7] tracking-tight">
              {artisan.name}
            </h2>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm text-[#e5d8c5]">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#fbbf24]" />
                {artisan.location[language]}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-[#fbbf24]" />
                {artisan.birthYear} — {artisan.deathYear ? artisan.deathYear : (language === 'vi' ? 'Nay' : 'Present')}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#fbbf24]" />
                <strong className="text-[#facc15] font-serif-culture">{artisan.yearsOfDedication}</strong> {t.card.yearsDedicated}
              </span>
            </div>

            {/* UNESCO Recognition Banner if applicable */}
            {artisan.unescoRecognition && (
              <div className="mt-2 text-xs font-medium text-[#93c5fd] bg-blue-950/70 px-3 py-1.5 rounded-lg border border-blue-400/40 inline-flex items-center gap-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#60a5fa]" />
                <span>{artisan.unescoRecognition[language]}</span>
              </div>
            )}
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="bg-[#f2ece0] px-4 sm:px-8 border-b border-[#e5d8c5] flex overflow-x-auto gap-1 py-2 text-xs sm:text-sm font-semibold shrink-0">
          <button
            onClick={() => setActiveTab('bio')}
            className={`px-3 sm:px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'bio'
                ? 'bg-white text-[#881337] shadow-xs border border-[#d4af37]/40'
                : 'text-[#6e584a] hover:text-[#2c1810]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.modal.tabs.bio}</span>
          </button>

          <button
            onClick={() => setActiveTab('technique')}
            className={`px-3 sm:px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'technique'
                ? 'bg-white text-[#881337] shadow-xs border border-[#d4af37]/40'
                : 'text-[#6e584a] hover:text-[#2c1810]'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>{t.modal.tabs.technique}</span>
          </button>

          <button
            onClick={() => setActiveTab('transmission')}
            className={`px-3 sm:px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'transmission'
                ? 'bg-white text-[#881337] shadow-xs border border-[#d4af37]/40'
                : 'text-[#6e584a] hover:text-[#2c1810]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>{t.modal.tabs.transmission}</span>
          </button>

          <button
            onClick={() => setActiveTab('artifacts')}
            className={`px-3 sm:px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'artifacts'
                ? 'bg-white text-[#881337] shadow-xs border border-[#d4af37]/40'
                : 'text-[#6e584a] hover:text-[#2c1810]'
            }`}
          >
            <Quote className="w-4 h-4" />
            <span>{t.modal.tabs.artifacts}</span>
          </button>

          <button
            onClick={() => setActiveTab('sources')}
            className={`px-3 sm:px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'sources'
                ? 'bg-white text-[#881337] shadow-xs border border-[#d4af37]/40'
                : 'text-[#6e584a] hover:text-[#2c1810]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{t.modal.tabs.sources}</span>
          </button>
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#2c1810] text-sm sm:text-base leading-relaxed bg-[#fdfbf7]">
          
          {/* TAB 1: BIOGRAPHY */}
          {activeTab === 'bio' && (
            <div className="space-y-5">
              <div className="bg-[#fffbeb] p-5 rounded-2xl border-l-4 border-[#b45309] text-sm text-[#854d0e] shadow-2xs">
                <strong className="font-bold text-[#881337]">{language === 'vi' ? 'Tóm lược cống hiến:' : 'Summary of Contributions:'} </strong>
                {artisan.summary[language]}
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-lg text-[#881337] font-serif-culture">
                  {language === 'vi' ? 'Tiểu sử và Hành trình Nghệ thuật' : 'Biography & Artistic Journey'}
                </h4>
                {artisan.biography[language].map((paragraph, index) => (
                  <p key={index} className="text-[#4b382a] text-justify leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: UNIQUE TECHNIQUES */}
          {activeTab === 'technique' && (
            <div className="space-y-5">
              <div className="bg-white p-5 rounded-2xl border border-[#ebdccb] shadow-xs space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9f1239] flex items-center gap-1.5">
                  <RedLacquerSeal text="KỸ NGHỆ" size="sm" />
                  <span>{language === 'vi' ? 'Đỉnh cao kỹ nghệ gia truyền' : 'Signature Artistic Mastery'}</span>
                </span>
                <h4 className="text-xl font-bold text-[#881337] font-serif-culture">
                  {artisan.uniqueTechniques.title[language]}
                </h4>
                <p className="text-sm text-[#574438] italic">
                  {artisan.uniqueTechniques.description[language]}
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-base text-[#2c1810]">
                  {language === 'vi' ? 'Các khía cạnh kỹ thuật đặc sắc nhất:' : 'Core technical points & methodology:'}
                </h5>
                <ul className="space-y-2.5">
                  {artisan.uniqueTechniques.points[language].map((point, index) => (
                    <li key={index} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#f0e6d8] shadow-2xs">
                      <span className="w-5 h-5 rounded-full bg-[#fef2f2] text-[#9f1239] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#fecdd3]">
                        {index + 1}
                      </span>
                      <span className="text-sm text-[#4b382a]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: DISCIPLES & TRANSMISSION */}
          {activeTab === 'transmission' && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-2xl border border-[#ebdccb] space-y-3 shadow-2xs">
                <h4 className="text-lg font-bold text-[#881337] font-serif-culture flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#b45309]" />
                  <span>{t.modal.disciplesTitle}</span>
                </h4>
                <p className="text-sm sm:text-base text-[#4b382a] leading-relaxed">
                  {artisan.disciplesAndTransmission[language]}
                </p>
              </div>

              {artisan.disciplesAndTransmission.notableStudents && (
                <div className="space-y-3">
                  <h5 className="font-bold text-sm text-[#78350f] uppercase tracking-wide">
                    {t.modal.notableStudentsTitle}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {artisan.disciplesAndTransmission.notableStudents.map((student, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-[#e5d8c5] text-sm font-medium text-[#2c1810] flex items-center gap-2 shadow-2xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#b45309]" />
                        <span>{student}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: ARTIFACTS & PHILOSOPHY */}
          {activeTab === 'artifacts' && (
            <div className="space-y-6">
              {/* Quote Block */}
              <div className="bg-gradient-to-r from-[#fffbeb] to-[#fef2f2] p-6 rounded-2xl border-l-4 border-[#881337] space-y-2 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#881337] flex items-center gap-1.5">
                  <Quote className="w-4 h-4" />
                  <span>{t.modal.quoteTitle}</span>
                </span>
                <blockquote className="text-base sm:text-lg italic text-[#2c1810] font-serif-culture">
                  {artisan.quote[language]}
                </blockquote>
              </div>

              {/* Associated Artifacts */}
              <div className="space-y-3">
                <h5 className="font-bold text-sm text-[#78350f] uppercase tracking-wide">
                  {t.modal.artifactsTitle}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {artisan.associatedArtifacts[language].map((artifact, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-[#e5d8c5] shadow-xs text-center space-y-1">
                      <div className="w-8 h-8 rounded-full bg-[#fef3c7] text-[#92400e] flex items-center justify-center mx-auto text-xs font-bold">
                        ❖
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#2c1810]">{artifact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: OFFICIAL SOURCES & CITATIONS */}
          {activeTab === 'sources' && (
            <div className="space-y-5">
              <div className="bg-[#eff6ff] p-4 rounded-xl border border-[#bfdbfe] text-xs sm:text-sm text-[#1e40af] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 shrink-0 text-[#2563eb]" />
                <span>{t.modal.sourcesNotice}</span>
              </div>

              <div className="space-y-3">
                {artisan.sources.map((source, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-2xl border border-[#e5d8c5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-[#881337] transition-colors shadow-2xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#2c1810]">{source.title}</span>
                        {source.isOfficialGov && (
                          <span className="px-2 py-0.5 rounded-sm bg-[#ecfdf5] text-[#065f46] text-[10px] font-bold border border-[#a7f3d0]">
                            Gov.vn
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#786b62]">{source.sourceName}</span>
                    </div>

                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#881337] hover:bg-[#9f1239] text-white text-xs font-semibold shrink-0 transition-colors"
                    >
                      <span>{language === 'vi' ? 'Xem tư liệu gốc' : 'View Source'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#f2ece0] border-t border-[#e5d8c5] flex items-center justify-between">
          <div className="text-xs text-[#786b62]">
            {t.studentBadge}
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#2c1810] hover:bg-[#43281c] text-[#fef3c7] font-semibold text-xs sm:text-sm transition-colors cursor-pointer border border-[#d4af37]/40"
          >
            {t.modal.close}
          </button>
        </div>

      </div>
    </div>
  );
};
