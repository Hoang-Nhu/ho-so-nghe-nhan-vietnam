/**
 * Hồ sơ Nghệ nhân Nắm giữ Di sản Văn hóa Việt Nam (Single Page Application)
 * Sinh viên thực hiện: Nguyễn Văn Hoàng - PH64335 - Lớp B03 - Nhóm 2
 * @license Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Language, FilterState, ArtisanProfile } from './types';
import { ARTISANS_DATA } from './data/artisans';
import { I18N } from './data/i18n';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { ArtisanCard } from './components/ArtisanCard';
import { ArtisanDetailModal } from './components/ArtisanDetailModal';
import { AIAssistantSection } from './components/AIAssistantSection';
import { ReferenceSection } from './components/ReferenceSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { DongSonWatermark, DongSonFriezeDivider, RedLacquerSeal } from './components/CulturalMotifs';
import { Users, Frown } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('vi');
  const [selectedArtisan, setSelectedArtisan] = useState<ArtisanProfile | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    region: 'all',
    title: 'all',
    category: 'all'
  });

  const t = I18N[language];

  // Filtered artisans memo
  const filteredArtisans = useMemo(() => {
    return ARTISANS_DATA.filter((artisan) => {
      // Region filter
      if (filters.region !== 'all' && artisan.region !== filters.region) {
        return false;
      }

      // Title filter (NNND / NNƯT)
      if (filters.title !== 'all' && artisan.title !== filters.title) {
        return false;
      }

      // Category filter
      if (filters.category !== 'all' && artisan.heritageCategory !== filters.category) {
        return false;
      }

      // Text search term
      if (filters.searchTerm.trim() !== '') {
        const query = filters.searchTerm.trim().toLowerCase();
        const matchName = artisan.name.toLowerCase().includes(query);
        const matchHeritage = 
          artisan.heritageName.vi.toLowerCase().includes(query) || 
          artisan.heritageName.en.toLowerCase().includes(query);
        const matchLocation = 
          artisan.location.vi.toLowerCase().includes(query) || 
          artisan.location.en.toLowerCase().includes(query);
        const matchSummary = 
          artisan.summary.vi.toLowerCase().includes(query) || 
          artisan.summary.en.toLowerCase().includes(query);
        const matchTechnique = 
          artisan.uniqueTechniques.title.vi.toLowerCase().includes(query) || 
          artisan.uniqueTechniques.title.en.toLowerCase().includes(query);

        if (!matchName && !matchHeritage && !matchLocation && !matchSummary && !matchTechnique) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const handleSelectArtisanById = (artisanId: string) => {
    const found = ARTISANS_DATA.find((a) => a.id === artisanId);
    if (found) {
      setSelectedArtisan(found);
    }
  };

  const scrollToArtisans = () => {
    document.getElementById('artisans')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAI = () => {
    document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-parchment-pattern text-[#2c1810] flex flex-col font-sans selection:bg-[#9f1239] selection:text-white relative">
      {/* 1. Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenAI={scrollToAI}
      />

      {/* 2. Hero Section */}
      <Hero
        language={language}
        onExploreClick={scrollToArtisans}
        onOpenAI={scrollToAI}
      />

      {/* 3. Main Content: Artisans Section */}
      <main id="artisans" className="relative py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1 w-full">
        
        {/* Subtle Background Watermark of Chim Lạc & Trống Đồng */}
        <DongSonWatermark className="top-40 right-[-100px] w-[600px] h-[600px] opacity-[0.025] pointer-events-none" />

        {/* Section Title & Subheading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fffbeb] text-[#92400e] text-xs font-bold border border-[#fde68a] shadow-2xs">
            <RedLacquerSeal text="QUỐC HỒN" size="sm" />
            <Users className="w-3.5 h-3.5 text-[#b45309]" />
            <span>DANH MỤC HỒ SƠ BÁU VẬT NHÂN VĂN SỐNG</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-culture text-[#2c1810]">
            {language === 'vi' ? 'Hồ sơ Nghệ nhân Nhân dân & Nghệ nhân Ưu tú' : 'National Master Artisans Dossiers'}
          </h2>

          <p className="text-sm sm:text-base text-[#574438] leading-relaxed">
            {language === 'vi' 
              ? 'Mỗi bức họa chân dung tái hiện các bậc tiền bối nắm giữ hồn thiêng sông núi. Tra cứu tiểu sử, kỹ thuật thanh nhạc và bí quyết thủ công gia truyền.'
              : 'Each painted portrait captures the venerated elders safeguarding our national heritage. Explore master biographies, unique acoustic registers, and ancestral craftsmanship.'}
          </p>
        </div>

        {/* Search Bar with Categorized Autocomplete */}
        <div className="relative z-20">
          <SearchBar
            language={language}
            searchTerm={filters.searchTerm}
            onSearchChange={(val) => setFilters(prev => ({ ...prev, searchTerm: val }))}
            artisans={ARTISANS_DATA}
            onSelectArtisan={handleSelectArtisanById}
          />
        </div>

        {/* Multi-Factor Filter Bar */}
        <FilterBar
          language={language}
          filters={filters}
          onFilterChange={setFilters}
          resultCount={filteredArtisans.length}
        />

        {/* Artisans Cards Grid */}
        {filteredArtisans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-4 relative z-10">
            {filteredArtisans.map((artisan) => (
              <ArtisanCard
                key={artisan.id}
                artisan={artisan}
                language={language}
                onViewDetails={setSelectedArtisan}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-12 text-center bg-white/90 backdrop-blur-xs rounded-3xl border-2 border-[#ebdccb] max-w-lg mx-auto space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#fef2f2] text-[#9f1239] flex items-center justify-center mx-auto">
              <Frown className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2c1810] font-serif-culture">
              {language === 'vi' ? 'Không tìm thấy hồ sơ phù hợp' : 'No matching profiles found'}
            </h3>
            <p className="text-xs sm:text-sm text-[#786b62]">
              {language === 'vi'
                ? 'Không có nghệ nhân nào khớp với tiêu chí tìm kiếm hoặc bộ lọc hiện tại. Vui lòng bấm đặt lại bộ lọc để xem toàn bộ danh sách.'
                : 'No master artisan matches your current filters or search term. Reset your filters to browse all records.'}
            </p>
            <button
              onClick={() => setFilters({ searchTerm: '', region: 'all', title: 'all', category: 'all' })}
              className="px-5 py-2.5 rounded-xl bg-[#881337] text-white text-xs font-semibold hover:bg-[#9f1239] transition-colors cursor-pointer shadow-xs"
            >
              {t.filters.resetFilters}
            </button>
          </div>
        )}

        {/* Decorative Divider */}
        <DongSonFriezeDivider className="pt-8" />
      </main>

      {/* 4. Heritage AI Scholar Section (BYOK) */}
      <AIAssistantSection language={language} />

      {/* 5. Official References Section */}
      <ReferenceSection language={language} />

      {/* 6. About Section (Student Nguyễn Văn Hoàng credentials) */}
      <AboutSection language={language} />

      {/* 7. Footer (Legal Disclaimer, author, copyright) */}
      <Footer language={language} />

      {/* 8. Artisan Detailed Dossier Modal */}
      <ArtisanDetailModal
        artisan={selectedArtisan}
        language={language}
        onClose={() => setSelectedArtisan(null)}
      />
    </div>
  );
}
