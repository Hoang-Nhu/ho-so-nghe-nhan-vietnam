/**
 * Types and Data Contracts for Vietnamese Cultural Heritage Artisans
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

export type Language = 'vi' | 'en';

export type ArtisanTitle = 'NNND' | 'NNƯT'; // Nghệ nhân Nhân dân | Nghệ nhân Ưu tú

export type Region = 'north' | 'central' | 'south';

export type HeritageCategory = 
  | 'performing_arts'   // Nghệ thuật trình diễn dân gian (Ca trù, Quan họ, Hát Xẩm, Đờn ca tài tử...)
  | 'craftsmanship'     // Nghề thủ công truyền thống (Gốm Bát Tràng, Đúc đồng, Tranh dân gian...)
  | 'customs_rituals';  // Tập quán xã hội và tín ngưỡng, tri thức dân gian

export interface CitationSource {
  title: string;
  sourceName: string;
  url: string;
  isOfficialGov: boolean;
}

export interface ArtisanProfile {
  id: string;
  name: string;
  title: ArtisanTitle; // NNND or NNƯT
  titleFullName: {
    vi: string;
    en: string;
  };
  heritageName: {
    vi: string;
    en: string;
  };
  heritageCategory: HeritageCategory;
  unescoRecognition?: {
    vi: string;
    en: string;
    year: number;
  };
  region: Region;
  location: {
    vi: string;
    en: string;
  };
  birthYear: number | string;
  deathYear?: number | string | null;
  yearsOfDedication: number;
  avatarUrl: string;
  bannerUrl: string;
  audioSample?: {
    title: {
      vi: string;
      en: string;
    };
    description: {
      vi: string;
      en: string;
    };
  };
  summary: {
    vi: string;
    en: string;
  };
  biography: {
    vi: string[];
    en: string[];
  };
  uniqueTechniques: {
    title: {
      vi: string;
      en: string;
    };
    description: {
      vi: string;
      en: string;
    };
    points: {
      vi: string[];
      en: string[];
    };
  };
  disciplesAndTransmission: {
    vi: string;
    en: string;
    notableStudents?: string[];
  };
  quote: {
    vi: string;
    en: string;
  };
  associatedArtifacts: {
    vi: string[];
    en: string[];
  };
  sources: CitationSource[];
}

export interface SearchSuggestion {
  id: string;
  type: 'artisan' | 'heritage';
  title: string;
  subtitle: string;
  artisanId: string;
}

export interface FilterState {
  searchTerm: string;
  region: 'all' | Region;
  title: 'all' | ArtisanTitle;
  category: 'all' | HeritageCategory;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: string;
}
