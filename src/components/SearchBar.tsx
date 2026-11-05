/**
 * Smart Search Input with Real-time Categorized Autocomplete Dropdown
 * Categorized by: Tên Nghệ nhân (Artisans) & Loại hình Di sản (Heritage Forms)
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React, { useState, useRef, useEffect } from 'react';
import { Language, SearchSuggestion, ArtisanProfile } from '../types';
import { I18N } from '../data/i18n';
import { Search, X, User, Music, ChevronRight } from 'lucide-react';

interface SearchBarProps {
  language: Language;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  artisans: ArtisanProfile[];
  onSelectArtisan: (artisanId: string) => void;
  onSelectHeritage?: (heritageName: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  language,
  searchTerm,
  onSearchChange,
  artisans,
  onSelectArtisan
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = I18N[language];

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute suggestions based on query
  const query = searchTerm.trim().toLowerCase();

  const artisanSuggestions: SearchSuggestion[] = query.length === 0 ? [] : artisans
    .filter(a => 
      a.name.toLowerCase().includes(query) ||
      a.location.vi.toLowerCase().includes(query) ||
      a.location.en.toLowerCase().includes(query)
    )
    .slice(0, 5)
    .map(a => ({
      id: `artisan-${a.id}`,
      type: 'artisan',
      title: a.name,
      subtitle: `${a.title} • ${a.heritageName[language]} (${a.location[language]})`,
      artisanId: a.id
    }));

  const heritageMap = new Map<string, { nameVi: string; nameEn: string; artisanCount: number; sampleArtisanId: string }>();

  artisans.forEach(a => {
    const key = a.heritageName.vi.toLowerCase();
    if (
      key.includes(query) ||
      a.heritageName.en.toLowerCase().includes(query) ||
      a.uniqueTechniques.title.vi.toLowerCase().includes(query) ||
      a.uniqueTechniques.title.en.toLowerCase().includes(query)
    ) {
      if (!heritageMap.has(key)) {
        heritageMap.set(key, {
          nameVi: a.heritageName.vi,
          nameEn: a.heritageName.en,
          artisanCount: 1,
          sampleArtisanId: a.id
        });
      } else {
        const item = heritageMap.get(key)!;
        item.artisanCount += 1;
      }
    }
  });

  const heritageSuggestions: SearchSuggestion[] = query.length === 0 ? [] : Array.from(heritageMap.values())
    .slice(0, 4)
    .map(item => ({
      id: `heritage-${item.nameVi}`,
      type: 'heritage',
      title: language === 'vi' ? item.nameVi : item.nameEn,
      subtitle: language === 'vi' 
        ? `${item.artisanCount} nghệ nhân tiêu biểu` 
        : `${item.artisanCount} master bearers recorded`,
      artisanId: item.sampleArtisanId
    }));

  const hasSuggestions = artisanSuggestions.length > 0 || heritageSuggestions.length > 0;

  const handleSelect = (suggestion: SearchSuggestion) => {
    if (suggestion.type === 'artisan') {
      onSearchChange(suggestion.title);
      onSelectArtisan(suggestion.artisanId);
    } else {
      onSearchChange(suggestion.title);
    }
    setIsOpen(false);
  };

  const handleClear = () => {
    onSearchChange('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
      {/* Search Input Box */}
      <div className="relative flex items-center">
        <div className="absolute left-4.5 pointer-events-none text-[#9f1239]">
          <Search className="w-5 h-5" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            if (searchTerm.trim().length > 0) setIsOpen(true);
          }}
          placeholder={t.search.placeholder}
          className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-2xl bg-white border-2 border-[#d4af37]/60 text-[#2c1810] text-sm sm:text-base placeholder:text-[#9c8979] focus:outline-hidden focus:border-[#9f1239] focus:ring-4 focus:ring-[#9f1239]/15 shadow-sm transition-all"
        />

        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-4 p-1.5 rounded-full text-[#9c8979] hover:text-[#9f1239] hover:bg-[#f3ece2] transition-colors"
            title={t.search.clear}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown List */}
      {isOpen && query.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-[#d4af37]/50 shadow-2xl z-50 overflow-hidden divide-y divide-[#f3ece2] animate-in fade-in slide-in-from-top-2 duration-150">
          
          {hasSuggestions ? (
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-3">
              
              {/* Category 1: Nghệ nhân (Artisans) */}
              {artisanSuggestions.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#9f1239] flex items-center gap-1.5 bg-[#fef2f2] rounded-lg mb-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{t.search.artisanCategory} ({artisanSuggestions.length})</span>
                  </div>
                  <div className="space-y-1">
                    {artisanSuggestions.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#fbf7f0] transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-[#fde68a] text-[#854d0e] flex items-center justify-center font-bold text-xs shrink-0">
                            {item.title.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#2c1810] group-hover:text-[#9f1239] transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-[#786b62]">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#c7b9ac] group-hover:text-[#9f1239] group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Category 2: Loại hình di sản (Heritage Traditions) */}
              {heritageSuggestions.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#b45309] flex items-center gap-1.5 bg-[#fffbeb] rounded-lg mb-1">
                    <Music className="w-3.5 h-3.5" />
                    <span>{t.search.heritageCategory} ({heritageSuggestions.length})</span>
                  </div>
                  <div className="space-y-1">
                    {heritageSuggestions.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#fbf7f0] transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-[#fed7aa] text-[#9a3412] flex items-center justify-center font-bold text-xs shrink-0">
                            ♪
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#2c1810] group-hover:text-[#b45309] transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-[#786b62]">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#c7b9ac] group-hover:text-[#b45309] group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div className="p-6 text-center text-[#786b62] text-sm">
              <p>{t.search.noSuggestions}</p>
            </div>
          )}

        </div>
      )}
    </div>
  );
};
