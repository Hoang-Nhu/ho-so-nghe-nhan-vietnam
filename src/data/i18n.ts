/**
 * Bilingual Dictionary for Vietnamese & English i18n
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

export const I18N = {
  vi: {
    appTitle: 'Hồ sơ Nghệ nhân Nắm giữ Di sản Văn hóa Việt Nam',
    appSubtitle: 'Kho lưu trữ & Tôn vinh các Bậc thầy Nghệ nhân Nhân dân & Nghệ nhân Ưu tú',
    studentBadge: 'SV: Nguyễn Văn Hoàng • PH64335 • B03 (Nhóm 2)',
    nav: {
      home: 'Trang chủ',
      artisans: 'Hồ sơ Nghệ nhân',
      aiAssistant: 'Trợ lý AI Di sản',
      references: 'Nguồn tham khảo',
      about: 'Giới thiệu & Tác giả',
      langToggle: 'English'
    },
    hero: {
      tag: 'BẢO TỒN VĂN HÓA PHI VẬT THỂ & THỦ CÔNG TRUYỀN THỐNG VIỆT NAM',
      heading: 'Tôn Vinh Những "Báu Vật Nhân Văn Sống" Của Dân Tộc',
      desc: 'Mỗi nghệ nhân là một pho sử sống, nơi lưu giữ tinh hoa hàng thế kỷ của các làn điệu dân ca, kỹ nghệ chế tác và nghi lễ tâm linh. Hệ thống tra cứu chuyên sâu phục vụ học tập, nghiên cứu và gìn giữ bản sắc văn hóa Việt.',
      exploreBtn: 'Khám phá Hồ sơ',
      aiBtn: 'Hỏi Trợ lý AI',
      stats: {
        artisans: '10+ Hồ sơ Bậc thầy',
        regions: '3 Miền Bắc - Trung - Nam',
        unesco: '5+ Di sản UNESCO',
        sources: '100% Nguồn chính thống'
      }
    },
    search: {
      placeholder: 'Tìm kiếm theo tên nghệ nhân, di sản (gõ "Hà", "Xẩm", "Quan họ", "Bát Tràng")...',
      suggestionsTitle: 'Gợi ý tìm kiếm nhanh',
      artisanCategory: 'Nghệ nhân',
      heritageCategory: 'Loại hình di sản',
      noSuggestions: 'Không tìm thấy kết quả phù hợp. Hãy thử gõ tên nghệ nhân hoặc loại hình di sản.',
      clear: 'Xóa tìm kiếm'
    },
    filters: {
      titleLabel: 'Danh hiệu:',
      regionLabel: 'Vùng miền:',
      categoryLabel: 'Lĩnh vực:',
      all: 'Tất cả',
      north: 'Miền Bắc',
      central: 'Miền Trung & Tây Nguyên',
      south: 'Miền Nam',
      nnnd: 'Nghệ nhân Nhân dân (NNND)',
      nnut: 'Nghệ nhân Ưu tú (NNƯT)',
      allCategories: 'Tất cả loại hình',
      performing: 'Diễn xướng & Âm nhạc dân gian',
      craft: 'Nghề thủ công truyền thống',
      activeFilterCount: 'Đang hiển thị {count} hồ sơ nghệ nhân phù hợp',
      resetFilters: 'Đặt lại bộ lọc'
    },
    card: {
      yearsDedicated: 'năm gắn bó với nghề',
      viewProfile: 'Xem toàn bộ hồ sơ',
      quoteLabel: 'Lời tâm huyết:',
      sourceLabel: 'Nguồn trích dẫn:',
      unescoBadge: 'Di sản UNESCO ghi danh',
      region: 'Khu vực',
      statusLiving: 'Đang cống hiến',
      statusPassed: 'Tưởng niệm'
    },
    modal: {
      close: 'Đóng',
      tabs: {
        bio: 'Tiểu sử & Sự nghiệp',
        technique: 'Kỹ thuật độc đáo',
        transmission: 'Trao truyền & Học trò',
        artifacts: 'Hiện vật & Triết lý',
        sources: 'Nguồn tư liệu chính thống'
      },
      lifeSpan: 'Năm sinh - Năm mất',
      birthYear: 'Năm sinh',
      dedication: 'Cống hiến cho di sản',
      unescoRecognized: 'UNESCO công nhận',
      disciplesTitle: 'Công tác truyền dạy & Các thế hệ học trò',
      notableStudentsTitle: 'Học trò & Truyền nhân tiêu biểu:',
      artifactsTitle: 'Nhạc cụ & Hiện vật gắn liền:',
      quoteTitle: 'Triết lý gìn giữ di sản:',
      sourcesNotice: 'Hồ sơ được trích dẫn và đối chiếu từ các nguồn dữ liệu văn hóa chính thức:'
    },
    ai: {
      title: 'Trợ lý AI Nghiên cứu Nghệ nhân & Di sản',
      subtitle: 'Được hỗ trợ bởi Google Gemini. Hỗ trợ nghiên cứu chuyên sâu về nghệ thuật cổ truyền, kỹ thuật chế tác và tiểu sử các bậc tiền bối.',
      byokTitle: 'Cấu hình Gemini API Key của bạn (BYOK)',
      byokDesc: 'Để sử dụng trợ lý AI, vui lòng nhập API Key cá nhân của bạn. Key sẽ được lưu an toàn tại trình duyệt (localStorage) và chỉ gửi trực tiếp đến máy chủ Google Gemini.',
      keyPlaceholder: 'Nhập Gemini API Key (bắt đầu bằng AIzaSy...)',
      saveKey: 'Lưu Key',
      saved: 'Đã lưu Key',
      clearKey: 'Xóa Key',
      noKeyWarning: 'Vui lòng nhập và lưu Gemini API Key của bạn ở ô bên dưới để bắt đầu hội thoại chuyên sâu.',
      quickPromptsTitle: 'Câu hỏi gợi ý nhanh:',
      quickPrompts: [
        'So sánh kỹ thuật đổ hột của cụ Quách Thị Hồ và kỹ thuật nảy hạt trong Dân ca Quan họ?',
        'Làm sao để nhận biết men rạn Bát Tràng thủ công của nghệ nhân so với gốm công nghiệp?',
        'Quy trình và tiêu chuẩn phong tặng danh hiệu Nghệ nhân Nhân dân (NNND) tại Việt Nam là gì?'
      ],
      inputPlaceholder: 'Hỏi chuyên gia về kỹ thuật, tiểu sử nghệ nhân hoặc di sản văn hóa...',
      send: 'Gửi câu hỏi',
      thinking: 'Chuyên gia AI đang tra cứu thư mục di sản...',
      welcomeMessage: 'Kính chào quý vị yêu mến văn hóa dân tộc! Tôi là Chuyên gia Nghiên cứu Nghệ nhân & Di sản Văn hóa Việt Nam. Xin mời quý vị đặt câu hỏi về tiểu sử các bậc danh nhân, kỹ thuật truyền khẩu độc đáo, hoặc công tác bảo tồn di sản cha ông.'
    },
    references: {
      heading: 'Danh mục Tài liệu Tham khảo Chính thống',
      subheading: 'Hệ thống thông tin được tổng hợp, thẩm định và đối chiếu trực tiếp từ các cổng thông tin di sản của Đảng, Nhà nước và UNESCO.',
      visitLink: 'Truy cập cổng thông tin',
      officialGovBadge: 'Nguồn xác thực'
    },
    about: {
      heading: 'Thông tin Dự án & Tác giả Sinh viên',
      subheading: 'Dự án học tập phi lợi nhuận phục vụ cộng đồng và bảo tồn văn hóa Việt Nam',
      studentNameLabel: 'Họ và tên sinh viên:',
      studentIdLabel: 'Mã số sinh viên (MSSV):',
      classLabel: 'Lớp học phần:',
      groupLabel: 'Nhóm thực hiện:',
      purposeTitle: 'Mục đích & Phạm vi đề tài:',
      purposeDesc: 'Dự án tập trung 100% vào việc xây dựng hồ sơ kỹ thuật số toàn diện về các Nghệ nhân Nhân dân, Nghệ nhân Ưu tú của Việt Nam. Đây là nơi tôn vinh những người nắm giữ linh hồn của các di sản phi vật thể và nghề thủ công truyền thống, truyền cảm hứng văn hóa cho thế hệ trẻ.',
      techStack: 'Công nghệ xây dựng: React 19, TypeScript, Tailwind CSS, Google Gemini API, Be Vietnam Pro typography.'
    },
    footer: {
      authorSection: 'Thông tin Sinh viên & Tác giả',
      legalSection: 'Tuyên bố Miễn trừ Trách nhiệm Pháp lý (Legal Disclaimer)',
      legalDisclaimerText: 'Đây là dự án học tập phi lợi nhuận phục vụ cộng đồng. Tất cả dữ liệu hồ sơ nghệ nhân được tổng hợp từ các nguồn công khai chính thống và sự hỗ trợ của AI. Tác giả không chịu trách nhiệm pháp lý về độ chính xác tuyệt đối hoặc các phát sinh bản quyền ngoài ý muốn từ dữ liệu của bên thứ ba.',
      linksTitle: 'Nguồn dữ liệu đối chiếu',
      rights: '© 2026 Hồ sơ Nghệ nhân Di sản Văn hóa Việt Nam. Dự án giáo dục phi lợi nhuận.'
    }
  },
  en: {
    appTitle: 'Heritage Bearers of Vietnam: Cultural Artisan Archive',
    appSubtitle: 'Archival Registry Honoring People’s Artisans & Meritorious Masters of Intangible Heritage',
    studentBadge: 'Student: Nguyen Van Hoang • PH64335 • B03 (Group 2)',
    nav: {
      home: 'Home',
      artisans: 'Artisan Profiles',
      aiAssistant: 'Heritage AI Scholar',
      references: 'References',
      about: 'About Project',
      langToggle: 'Tiếng Việt'
    },
    hero: {
      tag: 'PRESERVATION OF VIETNAM INTANGIBLE & CRAFT CULTURAL HERITAGE',
      heading: 'Honoring Vietnam\'s "Living Human Treasures"',
      desc: 'Each master artisan is a living archive, embodying centuries of folk songs, intricate craftsmanship, and spiritual ceremonies. An in-depth research platform designed for education, scholarly inquiry, and heritage preservation.',
      exploreBtn: 'Explore Profiles',
      aiBtn: 'Consult AI Scholar',
      stats: {
        artisans: '10+ Master Profiles',
        regions: '3 Distinct Regions',
        unesco: '5+ UNESCO Heritages',
        sources: '100% Verified Sources'
      }
    },
    search: {
      placeholder: 'Search by artisan name, heritage form (e.g., "Ha", "Xam", "Quan Ho", "Bat Trang")...',
      suggestionsTitle: 'Quick suggestions',
      artisanCategory: 'Artisans',
      heritageCategory: 'Heritage Traditions',
      noSuggestions: 'No matching entries found. Try typing an artisan or heritage name.',
      clear: 'Clear search'
    },
    filters: {
      titleLabel: 'Honorary Title:',
      regionLabel: 'Region:',
      categoryLabel: 'Category:',
      all: 'All',
      north: 'Northern Vietnam',
      central: 'Central & Highlands',
      south: 'Southern Vietnam',
      nnnd: "People's Artisan (NNND)",
      nnut: 'Meritorious Artisan (NNƯT)',
      allCategories: 'All Domains',
      performing: 'Folk Performing Arts & Music',
      craft: 'Traditional Craftsmanship',
      activeFilterCount: 'Displaying {count} matching artisan dossiers',
      resetFilters: 'Reset filters'
    },
    card: {
      yearsDedicated: 'years dedicated to craft',
      viewProfile: 'View Full Dossier',
      quoteLabel: 'Life Philosophy:',
      sourceLabel: 'Verified Citation:',
      unescoBadge: 'UNESCO Inscribed Heritage',
      region: 'Region',
      statusLiving: 'Active Master',
      statusPassed: 'In Memoriam'
    },
    modal: {
      close: 'Close',
      tabs: {
        bio: 'Biography & Career',
        technique: 'Signature Techniques',
        transmission: 'Transmission & Lineage',
        artifacts: 'Artifacts & Philosophy',
        sources: 'Official Citations'
      },
      lifeSpan: 'Lifespan',
      birthYear: 'Birth Year',
      dedication: 'Heritage Dedication',
      unescoRecognized: 'UNESCO Inscribed',
      disciplesTitle: 'Pedagogical Transmission & Disciples',
      notableStudentsTitle: 'Notable Torchbearers & Successors:',
      artifactsTitle: 'Associated Instruments & Artifacts:',
      quoteTitle: 'Cultural Preservation Creed:',
      sourcesNotice: 'This dossier is cross-referenced with official state cultural archives:'
    },
    ai: {
      title: 'Heritage & Artisan AI Scholar',
      subtitle: 'Powered by Google Gemini. Specialized in Vietnamese traditional arts, vocal ornamentation, craftsmanship, and artisan biographies.',
      byokTitle: 'Configure Your Personal Gemini API Key (BYOK)',
      byokDesc: 'To converse with the AI Scholar, enter your personal Gemini API Key. It will be securely stored in your browser\'s localStorage and sent directly to Google Gemini servers.',
      keyPlaceholder: 'Enter Gemini API Key (starts with AIzaSy...)',
      saveKey: 'Save Key',
      saved: 'Key Saved',
      clearKey: 'Remove Key',
      noKeyWarning: 'Please enter and save your Gemini API Key in the box below to start a scholarly consultation.',
      quickPromptsTitle: 'Quick scholarly prompts:',
      quickPrompts: [
        'Compare Quach Thi Ho\'s glottal vibrato with Quan Ho vocal ornamentation techniques?',
        'How does one distinguish authentic handcrafted Bat Trang crackle glaze from industrial copies?',
        'What are the official statutory criteria for the People\'s Artisan title in Vietnam?'
      ],
      inputPlaceholder: 'Ask the scholar about artisan biographies, techniques, or heritage preservation...',
      send: 'Send Question',
      thinking: 'Scholar is consulting national heritage archives...',
      welcomeMessage: 'Warm greetings to fellow lovers of traditional heritage! I am your Vietnamese Cultural Heritage Research Scholar. Ask me anything regarding master artisan biographies, intricate vocal nuances, or transmission legacies.'
    },
    references: {
      heading: 'Authoritative Reference Portals',
      subheading: 'All information is verified against governmental and UNESCO cultural databases.',
      visitLink: 'Visit Portal',
      officialGovBadge: 'Verified Portal'
    },
    about: {
      heading: 'Project Dossier & Author Information',
      subheading: 'Non-profit academic initiative serving community cultural safeguarding in Vietnam',
      studentNameLabel: 'Student Full Name:',
      studentIdLabel: 'Student ID (MSSV):',
      classLabel: 'Course Section:',
      groupLabel: 'Project Group:',
      purposeTitle: 'Objective & Scope:',
      purposeDesc: 'This project is 100% focused on creating comprehensive digital dossiers for Vietnam\'s People\'s Artisans and Meritorious Artisans. It honors the living human treasures who safeguard intangible heritage traditions and inspires younger generations.',
      techStack: 'Tech Stack: React 19, TypeScript, Tailwind CSS, Google Gemini API, Be Vietnam Pro typography.'
    },
    footer: {
      authorSection: 'Student Author Credentials',
      legalSection: 'Legal Disclaimer',
      legalDisclaimerText: 'This is a non-profit educational project dedicated to community cultural preservation. All artisan dossiers are aggregated from official public archives with AI synthesis. The author assumes no legal liability for absolute accuracy or unintentional third-party copyright matters.',
      linksTitle: 'Official Reference Portals',
      rights: '© 2026 Vietnamese Cultural Heritage Bearers Archive. Non-profit educational project.'
    }
  }
};
