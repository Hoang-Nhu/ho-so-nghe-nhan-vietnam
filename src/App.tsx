/**
 * Hồ sơ Nghệ nhân Nắm giữ Di sản Văn hóa Việt Nam (Multi-Page Tabbed SPA)
 * Sinh viên thực hiện: Nguyễn Văn Hoàng - PH64335 - Lớp B03 - Nhóm 2
 * @license Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { ActivePage, Language, FilterState, ArtisanProfile } from './types';
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
import { Users, Frown, ArrowRight, Sparkles, BookOpen, GraduationCap } from 'lucide-react';

const VALID_PAGES: ActivePage[] = ['home', 'artisans', 'ai-assistant', 'references', 'about'];

function getPageFromHash(): ActivePage {
  if (typeof window === 'undefined') return 'home';
  const raw = window.location.hash.replace('#', '') as ActivePage;
  return VALID_PAGES.includes(raw) ? raw : 'home';
}

export default function App() {
  const [language, setLanguage] = useState<Language>('vi');
  const [activePage, setActivePage] = useState<ActivePage>(getPageFromHash);
  const [selectedArtisan, setSelectedArtisan] = useState<ArtisanProfile | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    region: 'all',
    title: 'all',
    category: 'all'
  });

  const t = I18N[language];

  // Sync with browser hash navigation (back/forward buttons)
  useEffect(() => {
    const onHashChange = () => {
      setActivePage(getPageFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (page: ActivePage) => {
    setActivePage(page);
    if (window.location.hash !== `#${page}`) {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered artisans memo
  const filteredArtisans = useMemo(() => {
    return ARTISANS_DATA.filter((artisan) => {
      if (filters.region !== 'all' && artisan.region !== filters.region) {
        return false;
      }
      if (filters.title !== 'all' && artisan.title !== filters.title) {
        return false;
      }
      if (filters.category !== 'all' && artisan.heritageCategory !== filters.category) {
        return false;
      }
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

  // 3 Representative Featured Artisans for Home Page preview
  const featuredArtisans = useMemo(() => ARTISANS_DATA.slice(0, 3), []);

  return (
    <div className="min-h-screen bg-parchment-pattern text-[#2c1810] flex flex-col font-sans selection:bg-[#9f1239] selection:text-white relative">
      {/* 1. Persistent Top Navigation */}
      <Navbar
        language={language}
        activePage={activePage}
        onNavigate={navigateTo}
        onLanguageChange={setLanguage}
      />

      {/* 2. Separate Page Views based on Active Navigation Item */}
      <div className="flex-1 flex flex-col">
        {/* PAGE 1: TRANG CHỦ (HOME) */}
        {activePage === 'home' && (
          <>
            <Hero
              language={language}
              onExploreClick={() => navigateTo('artisans')}
              onOpenAI={() => navigateTo('ai-assistant')}
            />

            {/* Featured Artisans Preview + Quick Navigation Hub */}
            <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fffbeb] text-[#92400e] text-xs font-bold border border-[#fde68a]">
                  <RedLacquerSeal text="TIÊU BIỂU" size="sm" />
                  <span>
                    {language === 'vi'
                      ? 'CHÂN DUNG NGHỆ NHÂN TIÊU BIỂU'
                      : 'FEATURED HERITAGE BEARERS'}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif-culture text-[#2c1810]">
                  {language === 'vi'
                    ? 'Những Gương Mặt Gìn Giữ Hồn Cốt Dân Tộc'
                    : 'Featured Masters Safeguarding National Soul'}
                </h2>
                <p className="text-sm sm:text-base text-[#574438]">
                  {language === 'vi'
                    ? 'Khám phá sơ lược 3 bậc đại thụ tiêu biểu hoặc chuyển sang mục Hồ sơ Nghệ nhân để tra cứu đầy đủ danh mục toàn quốc.'
                    : 'Preview three distinguished masters or open the full Artisan Profiles directory for complete national search and filtering.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {featuredArtisans.map((artisan) => (
                  <ArtisanCard
                    key={artisan.id}
                    artisan={artisan}
                    language={language}
                    onViewDetails={setSelectedArtisan}
                  />
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => navigateTo('artisans')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#881337] hover:bg-[#9f1239] text-[#fef3c7] font-bold shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#d4af37]/50"
                >
                  <Users className="w-5 h-5 text-[#facc15]" />
                  <span>
                    {language === 'vi'
                      ? `Xem toàn bộ ${ARTISANS_DATA.length} Hồ sơ Nghệ nhân`
                      : `Browse All ${ARTISANS_DATA.length} Artisan Profiles`}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <DongSonFriezeDivider />

              {/* Quick Section Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <button
                  onClick={() => navigateTo('ai-assistant')}
                  className="text-left p-6 rounded-2xl bg-white border-2 border-[#e5d8c5] hover:border-[#881337] shadow-xs hover:shadow-md transition-all space-y-2 cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#fef2f2] text-[#9f1239] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-serif-culture text-[#2c1810] group-hover:text-[#881337]">
                    {t.nav.aiAssistant}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#574438]">
                    {language === 'vi'
                      ? 'Đặt câu hỏi chuyên sâu về kỹ thuật Ca trù, Quan họ, Gốm Bát Tràng với chuyên gia AI.'
                      : 'Ask in-depth questions on Ca Tru, Quan Ho, and ceramics with our AI Scholar.'}
                  </p>
                </button>

                <button
                  onClick={() => navigateTo('references')}
                  className="text-left p-6 rounded-2xl bg-white border-2 border-[#e5d8c5] hover:border-[#047857] shadow-xs hover:shadow-md transition-all space-y-2 cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ecfdf5] text-[#047857] flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-serif-culture text-[#2c1810] group-hover:text-[#047857]">
                    {t.nav.references}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#574438]">
                    {language === 'vi'
                      ? 'Tra cứu 6 cổng thông tin chính thống từ Cục Di sản Văn hóa, Bộ VHTTDL và UNESCO.'
                      : 'Access 6 official portals from Vietnam Ministry of Culture and UNESCO.'}
                  </p>
                </button>

                <button
                  onClick={() => navigateTo('about')}
                  className="text-left p-6 rounded-2xl bg-white border-2 border-[#e5d8c5] hover:border-[#b45309] shadow-xs hover:shadow-md transition-all space-y-2 cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#fffbeb] text-[#b45309] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-serif-culture text-[#2c1810] group-hover:text-[#b45309]">
                    {t.nav.about}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#574438]">
                    {language === 'vi'
                      ? 'Thông tin sinh viên Nguyễn Văn Hoàng (PH64335 - B03 - Nhóm 2) và quy chuẩn danh hiệu.'
                      : 'Author credentials (Nguyen Van Hoang - PH64335) and statutory title criteria.'}
                  </p>
                </button>
              </div>
            </section>
          </>
        )}

        {/* PAGE 2: HỒ SƠ NGHỆ NHÂN (ARTISAN DIRECTORY) */}
        {activePage === 'artisans' && (
          <main
            id="artisans"
            className="relative py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1 w-full"
          >
            <DongSonWatermark className="top-24 right-[-100px] w-[600px] h-[600px] opacity-[0.025] pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fffbeb] text-[#92400e] text-xs font-bold border border-[#fde68a] shadow-2xs">
                <RedLacquerSeal text="QUỐC HỒN" size="sm" />
                <Users className="w-3.5 h-3.5 text-[#b45309]" />
                <span>DANH MỤC HỒ SƠ BÁU VẬT NHÂN VĂN SỐNG</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-culture text-[#2c1810]">
                {language === 'vi'
                  ? 'Hồ sơ Nghệ nhân Nhân dân & Nghệ nhân Ưu tú'
                  : 'National Master Artisans Dossiers'}
              </h2>

              <p className="text-sm sm:text-base text-[#574438] leading-relaxed">
                {language === 'vi'
                  ? 'Mỗi bức họa chân dung tái hiện các bậc tiền bối nắm giữ hồn thiêng sông núi. Tra cứu tiểu sử, kỹ thuật thanh nhạc và bí quyết thủ công gia truyền.'
                  : 'Each painted portrait captures the venerated elders safeguarding our national heritage. Explore master biographies, unique acoustic registers, and ancestral craftsmanship.'}
              </p>
            </div>

            <div className="relative z-20">
              <SearchBar
                language={language}
                searchTerm={filters.searchTerm}
                onSearchChange={(val) => setFilters((prev) => ({ ...prev, searchTerm: val }))}
                artisans={ARTISANS_DATA}
                onSelectArtisan={handleSelectArtisanById}
              />
            </div>

            <FilterBar
              language={language}
              filters={filters}
              onFilterChange={setFilters}
              resultCount={filteredArtisans.length}
            />

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
                  onClick={() =>
                    setFilters({ searchTerm: '', region: 'all', title: 'all', category: 'all' })
                  }
                  className="px-5 py-2.5 rounded-xl bg-[#881337] text-white text-xs font-semibold hover:bg-[#9f1239] transition-colors cursor-pointer shadow-xs"
                >
                  {t.filters.resetFilters}
                </button>
              </div>
            )}
          </main>
        )}

        {/* PAGE 3: TRỢ LÝ AI DI SẢN (AI ASSISTANT) */}
        {activePage === 'ai-assistant' && (
          <div className="flex-1">
            <AIAssistantSection language={language} />
          </div>
        )}

        {/* PAGE 4: NGUỒN THAM KHẢO (REFERENCES) */}
        {activePage === 'references' && (
          <div className="flex-1">
            <ReferenceSection language={language} />
          </div>
        )}

        {/* PAGE 5: GIỚI THIỆU & TÁC GIẢ (ABOUT) */}
        {activePage === 'about' && (
          <div className="flex-1">
            <AboutSection language={language} />
          </div>
        )}
      </div>

      {/* 3. Persistent Footer */}
      <Footer language={language} />

      {/* 4. Artisan Detailed Dossier Modal */}
      <ArtisanDetailModal
        artisan={selectedArtisan}
        language={language}
        onClose={() => setSelectedArtisan(null)}
      />
    </div>
  );
}
