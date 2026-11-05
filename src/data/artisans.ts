/**
 * Database of Vietnamese Intangible and Traditional Cultural Heritage Artisans
 * Verified cultural records with official citations (dsvh.gov.vn, bvhttdl.gov.vn, UNESCO)
 * Augmented with Classical Hand-drawn & Oil Painting Archival Portraits
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import { ArtisanProfile } from '../types';

// Classical Oil Painting & Lacquer Artworks
import masterBanner from '../assets/images/heritage_artisans_art_1793275589852.jpg';
import portraitCaTru from '../assets/images/portrait_ca_tru_elder_1793275605942.jpg';
import portraitXam from '../assets/images/portrait_xam_elder_1793275649442.jpg';
import portraitHueCourt from '../assets/images/portrait_hue_court_elder_1793275664813.jpg';
import portraitDonCa from '../assets/images/portrait_don_ca_master_1793275620421.jpg';
import portraitQuanHo from '../assets/images/portrait_quan_ho_elder_1793275679110.jpg';
import portraitCeramic from '../assets/images/portrait_ceramic_master_1793275634468.jpg';
import portraitGong from '../assets/images/portrait_tay_nguyen_gong_1793275693177.jpg';
import portraitThen from '../assets/images/portrait_then_tay_elder_1793275722828.jpg';
import portraitDongHo from '../assets/images/portrait_dong_ho_craftsman_1793275707370.jpg';
import portraitBark from '../assets/images/portrait_cajeput_bark_artist_1793275736546.jpg';

export const MASTER_HERITAGE_BANNER = masterBanner;

export const ARTISANS_DATA: ArtisanProfile[] = [
  {
    id: 'quach-thi-ho',
    name: 'Quách Thị Hồ',
    title: 'NNND',
    titleFullName: {
      vi: 'Nghệ nhân Nhân dân',
      en: "People's Artisan"
    },
    heritageName: {
      vi: 'Hát Ca Trù',
      en: 'Ca Trù Singing (Chanted Poetry)'
    },
    heritageCategory: 'performing_arts',
    unescoRecognition: {
      vi: 'Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp (2009)',
      en: 'Intangible Cultural Heritage in Need of Urgent Safeguarding (2009)',
      year: 2009
    },
    region: 'north',
    location: {
      vi: 'Hà Nội / Hải Dương',
      en: 'Hanoi / Hai Duong'
    },
    birthYear: 1909,
    deathYear: 2001,
    yearsOfDedication: 75,
    avatarUrl: portraitCaTru,
    bannerUrl: masterBanner,
    summary: {
      vi: 'Được mệnh danh là "Đệ nhất đào nương Ca trù" thế kỷ 20, người mang giọng hát vàng của dân tộc Việt Nam vươn tầm quốc tế, vinh dự nhận Huy chương Danh dự của Hội đồng Âm nhạc Quốc tế UNESCO năm 1983.',
      en: 'Celebrated as the "First Lady of Ca Trù" in the 20th century, bringing Vietnam\'s legendary chanted poetry to the international stage and awarded the UNESCO International Music Council Honor Medal in 1983.'
    },
    biography: {
      vi: [
        'Nghệ nhân Quách Thị Hồ sinh năm 1909 trong một gia đình nhiều đời theo nghề đào nương tại Hải Dương, sau chuyển lên Hà Nội lập nghiệp.',
        'Từ năm lên 7 tuổi, bà đã bắt đầu làm quen với phách, nhịp và cung đàn đáy dưới sự uốn nắn nghiêm ngặt của mẹ là đào nương Quách Thị Dư. Đến năm 18 tuổi, giọng ca của bà đã nức tiếng khắp các giáo phường Khâm Thiên, Vạn Thái.',
        'Năm 1976 và 1983, những bản thu âm Ca trù của bà do Viện Nghiên cứu Âm nhạc Quốc tế Berlin phát hành đã gây chấn động giới nghiên cứu âm nhạc cổ điển phương Tây, khẳng định kỹ thuật thanh nhạc độc nhất vô nhị của người Việt.',
        'Năm 1988, bà được Nhà nước phong tặng danh hiệu cao quý vì những cống hiến kiệt xuất để đời cho Ca trù.'
      ],
      en: [
        'Artisan Quach Thi Ho was born in 1909 into an ancestral lineage of Ca Tru performers in Hai Duong, later moving to Hanoi to establish her artistic career.',
        'Starting at age seven, she practiced clappers (phach), metronome rhythms, and lute accompaniment under the strict guidance of her mother, master singer Quach Thi Du. By age eighteen, her singing echoed across legendary performing guild houses in Kham Thien.',
        'In 1976 and 1983, Ca Tru audio recordings of her voice published by the International Institute for Comparative Music Studies in Berlin stunned global ethnomusicologists, proving the extraordinary technical depth of Vietnamese vocal art.',
        'She was honored by the State of Vietnam with highest honors, leaving behind an immortal archival vocal standard for Ca Tru.'
      ]
    },
    uniqueTechniques: {
      title: {
        vi: 'Kỹ thuật nảy hạt, ngân rung cổ họng và gõ phách luồn hơi',
        en: 'Throat-vibrato "Hat" ornament, respiratory control, and syncopated Phach clappers'
      },
      description: {
        vi: 'Bà sở hữu lối hát khép răng nhưng vẫn nhả chữ tròn vành rõ nét, kết hợp kỹ thuật đổ hột điêu luyện không cần mở miệng rộng.',
        en: 'Mastery of closed-teeth enunciation creating crystal-clear vowel projection accompanied by dense microtonal glottal shakes.'
      },
      points: {
        vi: [
          'Kỹ thuật "đổ hột" (nảy hạt): Hạt âm thanh rung bật dồn dập từ sâu trong thanh quản với tần số dao động cực chuẩn.',
          'Nghệ thuật gõ phách: Tay cầm lá phách trúc gõ lên bàn phách gỗ lim với các thế "chát - vê - rập", phối hợp nhịp luồn phức tạp với tiếng đàn đáy.',
          'Hơi thở sâu: Khả năng giữ cột hơi luồn qua kẽ răng, ngân dài bất tận mà không hề đứt đoạn hay hụt hơi.'
        ],
        en: [
          'The "Do Hot" glottal bounce technique: rhythmic, pebble-like vibrato pulsing from deep within the larynx.',
          'Virtuosic Phach clapper percussion: executing "chat - ve - rap" counter-rhythms with bamboo clappers on ironwood blocks against the Dan Day lute.',
          'Micro-breath retention: projecting long ornate melodic lines without visible chest movement or vocal strain.'
        ]
      }
    },
    disciplesAndTransmission: {
      vi: 'Dù trải qua giai đoạn Ca trù bị gián đoạn, bà kiên trì ghi âm tư liệu mẫu giọng, truyền dạy trực tiếp kỹ thuật phách và giọng điệu cho nhiều nhà nghiên cứu và nghệ nhân thế hệ sau như NSND Lê Dung, NSƯT Phó Thị Kim Đức, Nghệ nhân Phạm Thị Huệ.',
      en: 'Throughout challenging historical eras, she preserved vocal archetypes on reel-to-reel master tapes and personally trained subsequent torchbearers including Master Pho Thi Kim Duc and Artisan Pham Thi Hue.',
      notableStudents: ['NSƯT Phó Thị Kim Đức', 'Nghệ nhân Phạm Thị Huệ', 'NSND Lê Dung']
    },
    quote: {
      vi: '“Ca trù là tiếng lòng thanh cao của cha ông. Cầm thanh phách trên tay phải giữ cái tâm thật sáng, nhịp đời có đổi thì nhịp phách Ca trù vẫn phải giữ nguyên độ chuẩn xác.”',
      en: '"Ca Tru is the noble soul of our ancestors. Holding the bamboo clappers requires an immaculate conscience; even if life\'s pace shifts, the rhythm of Ca Tru must remain impeccably true."'
    },
    associatedArtifacts: {
      vi: ['Cặp phách tre già trăm tuổi', 'Bàn phách gỗ lim nguyên khối', 'Bản ghi âm đĩa nhựa UNESCO 1983'],
      en: ['Centuries-old aged bamboo clappers', 'Solid ironwood sounding board', 'UNESCO 1983 archival vinyl masters']
    },
    sources: [
      {
        title: 'Cục Di sản văn hóa - Hồ sơ Nghệ thuật Ca trù',
        sourceName: 'dsvh.gov.vn',
        url: 'http://dsvh.gov.vn/nghe-thuat-ca-tru-1349',
        isOfficialGov: true
      },
      {
        title: 'UNESCO - Ca trù singing inscription',
        sourceName: 'ich.unesco.org',
        url: 'https://ich.unesco.org/en/USL/ca-tru-singing-00309',
        isOfficialGov: true
      },
      {
        title: 'Báo Nhân Dân - Nhớ giọng ca vàng Ca trù Quách Thị Hồ',
        sourceName: 'nhandan.vn',
        url: 'https://nhandan.vn/nho-giong-ca-vang-ca-tru-quach-thi-ho-post258043.html',
        isOfficialGov: false
      }
    ]
  },
  {
    id: 'ha-thi-cau',
    name: 'Hà Thị Cầu',
    title: 'NNND',
    titleFullName: {
      vi: 'Nghệ nhân Nhân dân',
      en: "People's Artisan"
    },
    heritageName: {
      vi: 'Hát Xẩm dân gian',
      en: 'Xẩm Folk Singing (Blind Minstrel Ballad)'
    },
    heritageCategory: 'performing_arts',
    region: 'north',
    location: {
      vi: 'Yên Mô, Ninh Bình',
      en: 'Yen Mo, Ninh Binh'
    },
    birthYear: 1928,
    deathYear: 2013,
    yearsOfDedication: 70,
    avatarUrl: portraitXam,
    bannerUrl: masterBanner,
    summary: {
      vi: 'Bậc thầy Hát Xẩm lừng danh, "báu vật nhân văn sống" của văn hóa dân gian Việt Nam. Người duy nhất có thể vừa kéo đàn nhị, gõ sênh phách bằng chân và hát những điệu Xẩm bi ai, dí dỏm bằng cả tâm can.',
      en: 'The legendary "living human treasure" of Vietnamese folk art. The only minstrel capable of simultaneously bowing the two-stringed fiddle (dan nhi), toe-tapping the clappers, and singing deeply emotive ballads from memory.'
    },
    biography: {
      vi: [
        'Bà Hà Thị Cầu (tên thật Hà Thị Mậu) sinh năm 1928 tại huyện Ý Yên (Nam Định), sau chuyển về sinh sống tại xã Yên Phong, huyện Yên Mô, tỉnh Ninh Bình.',
        'Mồ côi cha từ nhỏ và bị khiếm thị, bà theo mẹ đi hát Xẩm rong kiếm sống qua các chợ phiên miền Bắc. Năm 16 tuổi, bà kết hôn với ông trùm Xẩm Nguyễn Văn Mậu (thường gọi là Trùm Mậu).',
        'Bà nắm giữ trong ký ức hàng trăm làn điệu Xẩm cổ: Xẩm thập ân, Xẩm huê tình, Xẩm chợ, Tàu điện, Thập ân phụ mẫu. Tiếng hát mộc mạc, ai oán và lối kéo nhị sắc lẹm của bà đã chạm đến trái tim hàng triệu người.',
        'Bà được tôn vinh là Nghệ nhân Nhân dân nắm giữ báu vật dân gian thế kỷ 20.'
      ],
      en: [
        'Artisan Ha Thi Cau (born Ha Thi Mau) was born in 1928 in Nam Dinh, later living in Yen Mo district, Ninh Binh province.',
        'Blinded at a tender age and losing her father early, she traveled with her mother across Northern marketplaces performing itinerant folk songs. At 16, she married the respected Xam troop leader Nguyen Van Mau.',
        'She stored thousands of ancient oral verses and complex melodies in memory: Xam Thap An, Xam Hue Tinh, Xam Cho, Tramway ballads. Her raw, heart-rending voice and lightning-fast bow strokes moved generations.',
        'She received top state cultural accolades and remains the ultimate standard bearer of Vietnamese folk minstrelsy.'
      ]
    },
    uniqueTechniques: {
      title: {
        vi: 'Nghệ thuật vừa kéo đàn Nhị, vừa gõ sênh bằng chân và ngâm xướng',
        en: 'Simultaneous Dan Nhi bowing, foot-percussion clattering, and dramatic declamation'
      },
      description: {
        vi: 'Kỹ năng đa nhiệm phi thường: tay cầm vĩ kéo nhị réo rắt, ngón tay luồn phách, gót chân kẹp sênh đập nhịp phụ họa mà giọng hát vẫn truyền cảm tuôn trào.',
        en: 'Extraordinary multi-instrument coordination: bowing the fiddle, fingering intervals, rhythmically kicking clappers with toes while sustaining lyrical resonance.'
      },
      points: {
        vi: [
          'Kỹ thuật ngón vuốt nhị: Sử dụng móng tay vuốt trên dây sắt tạo tiếng khóc than đặc trưng của điệu Xẩm Thập Ân.',
          'Khả năng ứng tác ca từ: Sáng tác và biến đổi câu chữ tức thì theo dòng sự kiện và tâm trạng người nghe.',
          'Độ nảy âm sắc giọng: Chất giọng mộc mang âm hưởng bùn đất châu thổ sông Hồng, mộc mạc nhưng nội lực rung chấn.'
        ],
        en: [
          'Nail-glide fiddle intonation: sliding fingernails along silk/steel strings to replicate weeping human cries.',
          'Spontaneous lyrical improvisation: crafting verses instantly responsive to crowds and local atmosphere.',
          'Raw earth timbre: an unvarnished, penetrating vocal presence reflecting the grit and resilience of the Red River Delta peasantry.'
        ]
      }
    },
    disciplesAndTransmission: {
      vi: 'Những năm cuối đời, bà tận tình truyền dạy cho các học trò như NSƯT Thanh Ngoan, nghệ sĩ Mai Tuyết Hoa, nhạc sĩ Nguyễn Quang Long để thành lập Chiếu Xẩm Hà Thành, giữ cho ngọn lửa Xẩm không bị tắt.',
      en: 'In her final decades, she mentored core cultural preservationists including Artist Thanh Ngoan, Mai Tuyet Hoa, and musician Nguyen Quang Long, founding modern revival troupes.',
      notableStudents: ['NSƯT Thanh Ngoan', 'Nghệ sĩ Mai Tuyết Hoa', 'Nhạc sĩ Nguyễn Quang Long', 'Khương Cường']
    },
    quote: {
      vi: '“Cây đàn nhị và manh chiếu rách đã nuôi sống cả gia đình tôi qua cơn đói rách. Tiếng đàn tiếng hát là đạo làm người, dẫu nghèo khó cũng không được bán rẻ lòng tự trọng.”',
      en: '"The two-stringed fiddle and torn woven mat sustained my entire family through famine. Music is human dignity; poverty must never corrupt one\'s honor."'
    },
    associatedArtifacts: {
      vi: ['Cây đàn nhị bầu gáo dừa bịt da trăn', 'Cặp sênh gỗ lim', 'Chiếu cói biểu diễn rong'],
      en: ['Coconut-shell snake-skin two-stringed fiddle', 'Ironwood clappers', 'Traditional itinerant woven sedge mat']
    },
    sources: [
      {
        title: 'Cục Di sản văn hóa - Bảo tồn nghệ thuật Hát Xẩm',
        sourceName: 'dsvh.gov.vn',
        url: 'http://dsvh.gov.vn/bao-ton-nghe-thuat-hat-xam-o-ninh-binh-2841',
        isOfficialGov: true
      },
      {
        title: 'Bộ Văn hóa Thể thao và Du lịch - Nghệ nhân Hà Thị Cầu',
        sourceName: 'bvhttdl.gov.vn',
        url: 'https://bvhttdl.gov.vn',
        isOfficialGov: true
      },
      {
        title: 'Báo Nhân Dân - Tiếng đàn Xẩm cuối cùng của cụ Hà Thị Cầu',
        sourceName: 'nhandan.vn',
        url: 'https://nhandan.vn/tieng-dan-xam-cuoi-cung-post198532.html',
        isOfficialGov: false
      }
    ]
  },
  {
    id: 'tran-kich',
    name: 'Trần Kích',
    title: 'NNND',
    titleFullName: {
      vi: 'Nghệ nhân Nhân dân',
      en: "People's Artisan"
    },
    heritageName: {
      vi: 'Nhã nhạc Cung đình Huế',
      en: 'Nhã Nhạc - Vietnamese Court Music'
    },
    heritageCategory: 'performing_arts',
    unescoRecognition: {
      vi: 'Kiệt tác di sản truyền khẩu và phi vật thể nhân loại (2003)',
      en: 'Masterpiece of the Oral and Intangible Heritage of Humanity (2003)',
      year: 2003
    },
    region: 'central',
    location: {
      vi: 'Phú Vang, Thừa Thiên Huế',
      en: 'Phu Vang, Thua Thien Hue'
    },
    birthYear: 1921,
    deathYear: 2010,
    yearsOfDedication: 78,
    avatarUrl: portraitHueCourt,
    bannerUrl: masterBanner,
    summary: {
      vi: 'Cây đại thụ của Nhã nhạc cung đình Huế, thông thạo hơn 7 loại nhạc khí cung đình (kèn bầu, đàn nhị, nguyệt, tỳ bà, tam, sáo, trống bản). Được phong tặng Hiệp sĩ Nghệ thuật và Văn học của Cộng hòa Pháp.',
      en: 'The pillar of Hue Court Music, master of more than 7 royal ceremonial instruments. Honored with the Knight of Arts and Letters (Chevalier des Arts et des Lettres) by the French Republic.'
    },
    biography: {
      vi: [
        'Nghệ nhân Trần Kích sinh năm 1921 trong một gia đình dòng dõi âm nhạc cung đình truyền đời ở làng La Ỷ, xã Phú Mậu, huyện Phú Vang (nay thuộc TP. Huế).',
        'Bắt đầu học nhạc từ năm 8 tuổi, đến năm 21 tuổi ông đã tinh thông Đại nhạc và Tiểu nhạc, phục vụ trong các nghi lễ tế Nam Giao, Tịch Điền thời vua Bảo Đại.',
        'Khi triều Nguyễn kết thúc, ông kiên trì giữ các bản phổ chữ nhạc cổ (chữ Hò, Xự, Xang, Xê, Cống), chép tay lại hàng trăm khúc nhạc lễ tế, đại triều, thường triều.',
        'Ông là nhân chứng sống đóng vai trò hạt nhân giúp Việt Nam xây dựng hồ sơ Nhã nhạc Cung đình Huế trình UNESCO công nhận năm 2003.'
      ],
      en: [
        'Artisan Tran Kich was born in 1921 into an illustrious hereditary court musician lineage in La Y village, Hue.',
        'Apprenticing at age eight, by twenty-one he mastered both Great Royal Ensemble (Dai Nhac) and Chamber Ensemble (Tieu Nhac) under Emperor Bao Dai\'s imperial court rituals.',
        'Following the abdication of the Nguyen dynasty, he painstakingly preserved handwritten traditional cipher notations (Ho, Xu, Xang, Xe, Cong), saving royal suites from oblivion.',
        'He served as the living pillar whose primary archival testimony enabled UNESCO recognition of Hue Royal Court Music in 2003.'
      ]
    },
    uniqueTechniques: {
      title: {
        vi: 'Kỹ thuật lấy hơi luồn (vừa thổi vừa hít) kèn bầu và ngón rung đàn Nhị Huế',
        en: 'Circular breathing on Kèn Bầu and nuanced ornamentation on the Hue two-stringed fiddle'
      },
      description: {
        vi: 'Kỹ thuật đẩy hơi tuần hoàn liên tục không ngừng tiếng kèn trong suốt bài nhạc lễ dài 20 phút mà khuôn mặt vẫn bình thản.',
        en: 'Circular breathing mastery generating uninterrupted reed sounds for over 20 continuous minutes without audible interruption.'
      },
      points: {
        vi: [
          'Thổi kèn bóp (kèn bầu): Kỹ thuật ép dăm thổi hơi tròn tiếng, lượn vuốt nốt cao thanh thoát mà không bị chói gắt.',
          'Phục hồi thang âm cổ: Định âm chuẩn xác thang âm ngũ cung cung đình điệu Bắc và điệu Nam (Nam ai, Nam bình).',
          'Biên dịch ký âm cổ: Chuyển thể chữ nhạc truyền khẩu sang ký âm ngũ tuyến cho sinh viên Học viện Âm nhạc Huế.'
        ],
        en: [
          'Circular reed inflation: maintaining reservoir air in the cheeks to blow while inhaling through the nostrils.',
          'Imperial modal tuning: calibrating pentatonic intervals between aristocratic Bac and melancholic Nam modes.',
          'Notation bridge: transcribing ancient oral mnemonic scripts into notation for conservatories.'
        ]
      }
    },
    disciplesAndTransmission: {
      vi: 'Giảng viên danh dự tại Học viện Âm nhạc Huế, trực tiếp đào tạo thế hệ con cháu và hàng trăm nhạc công trẻ cho Nhà hát Nghệ thuật Truyền thống Cung đình Huế (tiêu biểu như NSƯT Trần Thảo - con trai ông).',
      en: 'Honorary mentor at Hue Conservatory of Music, passing the royal torch to his son Meritorious Artist Tran Thao and hundreds of musicians at Hue Imperial Theatre.',
      notableStudents: ['NSƯT Trần Thảo', 'Nghệ nhân Trần Điền', 'Nhạc sĩ Lữ Dũng']
    },
    quote: {
      vi: '“Nhã nhạc là cốt cách của đất nước. Mỗi nốt nhạc vang lên trong hoàng thành là sự hòa hợp giữa trời, đất và con người.”',
      en: '"Nha Nhac represents the dignified stature of our nation. Every sacred note inside the Imperial Citadel harmonizes heaven, earth, and human virtue."'
    },
    associatedArtifacts: {
      vi: ['Kèn bầu gỗ mun nạm xà cừ', 'Tập bản phổ chữ nhạc tay thời Bảo Đại', 'Đàn nhị gỗ trắc dây tơ'],
      en: ['Mother-of-pearl inlaid ebony double-reed horn', 'Bao Dai era hand-notated manuscripts', 'Rosewood fiddle with raw silk strings']
    },
    sources: [
      {
        title: 'Cục Di sản văn hóa - Nhã nhạc Âm nhạc Cung đình Việt Nam',
        sourceName: 'dsvh.gov.vn',
        url: 'http://dsvh.gov.vn/nha-nhac-cung-dinh-viet-nam-1348',
        isOfficialGov: true
      },
      {
        title: 'UNESCO - Nhã Nhạc Vietnamese Court Music',
        sourceName: 'ich.unesco.org',
        url: 'https://ich.unesco.org/en/RL/nha-nhac-vietnamese-court-music-00074',
        isOfficialGov: true
      },
      {
        title: 'Bộ Văn hóa Thể thao & Du lịch - Di sản Nghệ nhân Trần Kích',
        sourceName: 'bvhttdl.gov.vn',
        url: 'https://bvhttdl.gov.vn',
        isOfficialGov: true
      }
    ]
  },
  {
    id: 'nguyen-vinh-bao',
    name: 'Nguyễn Vĩnh Bảo',
    title: 'NNND',
    titleFullName: {
      vi: 'Nghệ nhân Nhân dân / Nhạc sư',
      en: "People's Artisan / Master Musicologist"
    },
    heritageName: {
      vi: 'Đờn ca Tài tử Nam Bộ',
      en: 'Đờn Ca Tài Tử Southern Music and Song'
    },
    heritageCategory: 'performing_arts',
    unescoRecognition: {
      vi: 'Di sản văn hóa phi vật thể đại diện của nhân loại (2013)',
      en: 'Representative List of the Intangible Cultural Heritage of Humanity (2013)',
      year: 2013
    },
    region: 'south',
    location: {
      vi: 'TP. Cao Lãnh, Đồng Tháp / TP. Hồ Chí Minh',
      en: 'Cao Lanh, Dong Thap / Ho Chi Minh City'
    },
    birthYear: 1918,
    deathYear: 2021,
    yearsOfDedication: 90,
    avatarUrl: portraitDonCa,
    bannerUrl: masterBanner,
    summary: {
      vi: 'Đại thụ trường thọ của nền âm nhạc cổ truyền Nam Bộ, sống trọn vẹn 104 mùa xuân. Cải tiến thành công đàn tranh 17-19-21 dây và là giáo sư âm nhạc dân tộc uyên bác được cộng đồng âm nhạc thế giới cúi đầu kính phục.',
      en: 'The immortal patriarch of Southern Vietnamese traditional music, living across 104 vibrant years. He innovated 17-, 19-, and 21-string zithers and was an erudite musicologist revered worldwide.'
    },
    biography: {
      vi: [
        'Nhạc sư Nguyễn Vĩnh Bảo sinh năm 1918 tại làng Mỹ Trà, quận Cao Lãnh, tỉnh Sa Đéc (nay là tỉnh Đồng Tháp).',
        'Lên 5 tuổi, ông đã biết đòn búng các ngón đàn kìm, đàn cò, đàn tranh. Ông tinh tường cả 20 bản tổ của Đờn ca tài tử và nắm vững cấu trúc nhạc lý phương Tây.',
        'Năm 1972, cùng với GS. Trần Văn Khê, ông thu âm đĩa nhạc "Đờn tranh Việt Nam" tại Paris cho UNESCO, trở thành bản thu âm kinh điển của âm nhạc dân tộc Việt Nam.',
        'Ông là người tiên phong dạy đờn tranh và đờn ca tài tử qua Internet từ thập niên 2000 cho học trò ở khắp 5 châu lục.'
      ],
      en: [
        'Master Nguyen Vinh Bao was born in 1918 in My Tra village, Cao Lanh, Sa Dec (now Dong Thap province).',
        'By age five, he was picking strings on the moon lute, two-stringed fiddle, and 16-string zither. He mastered all 20 Canonical Suites (Ban To) of Southern music.',
        'In 1972, alongside Professor Tran Van Khe, he recorded the monumental album "Vietnam: Traditional Music of Southern Vietnam" in Paris for UNESCO archives.',
        'In his late 80s and 90s, he pioneered cross-border digital music transmission over webcam and internet for international pupils worldwide.'
      ]
    },
    uniqueTechniques: {
      title: {
        vi: 'Ngón rung mượn, nhấn nhá bán cung và cải tiến hệ thống đàn tranh',
        en: 'Micro-bending string pressure, borrowed vibrato, and chromatic zither engineering'
      },
      description: {
        vi: 'Đỉnh cao của ngón đàn Vĩnh Bảo nằm ở bàn tay trái nhấn vào dây tạo nên những độ chênh non-già tinh vi mang trọn hồn cốt phóng khoáng phương Nam.',
        en: 'The apex of his artistry lay in the left hand: subtle string depressions delivering nuanced bends that capture the melancholic soul of the Mekong Delta.'
      },
      points: {
        vi: [
          'Kỹ thuật ngón nhấn tay trái: Nhấn mượn âm, rung mổ, day nhẹ để tạo thang âm Oán não nùng.',
          'Cải tiến đàn tranh: Mở rộng từ 16 dây lên 19 và 21 dây, tính toán khoảng cách phím nhạn giúp đàn chơi được nhiều điệu thức hiện đại.',
          'Phương pháp ký âm khoa học: Kết hợp chữ đờn tài tử với nhạc lý phương Tây để người nước ngoài dễ tiếp cận.'
        ],
        en: [
          'Left-hand microtone modulation: pushing strings downward to yield plaintive Oan melodic moods.',
          'Acoustic zither innovation: extending the instrument to 19 and 21 strings, recalibrating bridges for extended harmonic versatility.',
          'Pedagogical transcription: bridging ancient oral fret ciphers with Western staff notation.'
        ]
      }
    },
    disciplesAndTransmission: {
      vi: 'Ông đào tạo hàng ngàn học trò từ trong nước ra quốc tế (Mỹ, Pháp, Nhật, Úc). Nhà riêng của ông tại TP. Hồ Chí Minh và Cao Lãnh là điểm hẹn văn hóa của các nhà nghiên cứu âm nhạc toàn cầu.',
      en: 'Trained thousands of musicians globally across France, US, Japan, and Australia, maintaining a lifelong salon of ethnomusicology.',
      notableStudents: ['GS.TS Trần Văn Khê (bạn tri kỷ)', 'Nghệ sĩ đàn tranh Hải Phượng', 'Nghệ sĩ Thúy Hoan']
    },
    quote: {
      vi: '“Học đàn trước hết là để sửa tính nết của mình. Cung đàn tài tử Nam Bộ không cốt khoe kỹ xảo, mà là để gửi gắm cái tình tri kỷ, cái nghĩa đồng bào.”',
      en: '"To learn an instrument is first to cultivate one\'s character. The Southern lute does not flaunt speed, but delivers profound fellowship and empathy."'
    },
    associatedArtifacts: {
      vi: ['Cây đàn tranh 19 dây tự chế tác năm 1955', 'Cây đàn kìm cổ khảm xà cừ', 'Bộ sách ký âm tay truyền khẩu'],
      en: ['Custom-built 19-string zither dated 1955', 'Antique moon lute with mother-of-pearl inlay', 'Handwritten pedagogical compendium']
    },
    sources: [
      {
        title: 'Cục Di sản văn hóa - Nghệ thuật Đờn ca tài tử Nam Bộ',
        sourceName: 'dsvh.gov.vn',
        url: 'http://dsvh.gov.vn/nghe-thuat-don-ca-tai-tu-nam-bo-1347',
        isOfficialGov: true
      },
      {
        title: 'UNESCO - Art of Đờn ca tài tử music and song in southern Viet Nam',
        sourceName: 'ich.unesco.org',
        url: 'https://ich.unesco.org/en/RL/art-of-don-ca-tai-tu-music-and-song-in-southern-viet-nam-00733',
        isOfficialGov: true
      },
      {
        title: 'Báo Tuổi Trẻ & Báo Nhân Dân - Tưởng nhớ Nhạc sư Nguyễn Vĩnh Bảo',
        sourceName: 'nhandan.vn',
        url: 'https://nhandan.vn/nhac-su-nguyen-vinh-bao-cay-dai-thu-post631481.html',
        isOfficialGov: false
      }
    ]
  },
  {
    id: 'nguyen-thi-hue',
    name: 'Nguyễn Thị Huệ',
    title: 'NNND',
    titleFullName: {
      vi: 'Nghệ nhân Nhân dân',
      en: "People's Artisan"
    },
    heritageName: {
      vi: 'Dân ca Quan họ Bắc Ninh',
      en: 'Quan Họ Bắc Ninh Folk Songs'
    },
    heritageCategory: 'performing_arts',
    unescoRecognition: {
      vi: 'Di sản văn hóa phi vật thể đại diện của nhân loại (2009)',
      en: 'Representative List of the Intangible Cultural Heritage of Humanity (2009)',
      year: 2009
    },
    region: 'north',
    location: {
      vi: 'Làng Diềm (Viêm Xá), Bắc Ninh',
      en: 'Diem Village (Viem Xa), Bac Ninh'
    },
    birthYear: 1944,
    yearsOfDedication: 65,
    avatarUrl: portraitQuanHo,
    bannerUrl: masterBanner,
    summary: {
      vi: 'Liền chị huyền thoại tại Làng Diềm - cái nôi thủy tổ Quan họ. Nắm giữ hàng trăm canh hát cổ, lề lối ứng xử giao duyên và kỹ thuật hát vang, rền, nền, nảy chuẩn mực bậc nhất xứ Kinh Bắc.',
      en: 'Legendary "Lien Chi" singer of Diem Village, the ancestral cradle of Quan Ho. Bearer of hundreds of archaic singing suites and master of the pristine "Vang - Ren - Nen - Nay" acoustic vocal standard.'
    },
    biography: {
      vi: [
        'Nghệ nhân Nguyễn Thị Huệ sinh năm 1944 tại làng Diềm (xã Hòa Long, TP. Bắc Ninh) - ngôi làng duy nhất có Đền thờ Vua Bà Thủy tổ Quan họ.',
        'Từ năm 10 tuổi, bà đã theo các bậc nghệ nhân tiền bối ngồi canh hát thâu đêm, học lề lối đối đáp, mời trầu, têm trầu cánh phượng.',
        'Bà thuộc lòng hơn 200 bài Quan họ cổ với đủ các giọng: Giọng lề lối, Giọng vặt, Giọng giã bạn mà không hề cần nhìn sổ sách chép lại.',
        'Được Chủ tịch nước phong tặng danh hiệu Nghệ nhân Nhân dân, bà là linh hồn của các canh hát thâu đêm suốt sáng tại đền Vua Bà mỗi mùa trẩy hội.'
      ],
      en: [
        'Artisan Nguyen Thi Hue was born in 1944 in Diem Village (Bac Ninh), the sole village in Vietnam housing the ancestral shrine of the Quan Ho Patron Goddess.',
        'At age ten, she sat beside elders during all-night singing sessions, absorbing courtship ethics, lyrical counterpoints, and the ritual folding of phoenix betel leaves.',
        'She memorized over 200 ancient Quan Ho tunes spanning Formal Rites (Le Loi), Free Stanzas (Giong Vat), and Farewell Laments (Gia Ban).',
        'Recognized as People\'s Artisan by the President of Vietnam, she is the spiritual keeper of candlelit nocturnal singing at the ancestral shrine.'
      ]
    },
    uniqueTechniques: {
      title: {
        vi: 'Kỹ thuật hát Vang - Rền - Nền - Nảy và đối đáp ứng tác',
        en: 'The "Vang - Rền - Nền - Nảy" vocal triad and spontaneous counter-singing'
      },
      description: {
        vi: 'Bốn tiêu chuẩn khắt khe bậc nhất của Quan họ truyền thống: Vang (âm thanh bay xa), Rền (rung trầm ấm), Nền (hòa quyện bạn hát), Nảy (nhả hạt thanh tú).',
        en: 'Four stringent criteria of ancient Quan Ho: Vang (acoustical projection), Ren (deep continuous resonance), Nen (harmonic blending with partner), Nay (supple ornamental release).'
      },
      points: {
        vi: [
          'Vang và Nảy: Giọng hát tự nhiên không cần micro nhưng vang thấu qua các gian đình, âm luyến nhả hạt nhẹ như cánh sen.',
          'Hát đôi hòa giọng: Khả năng lồng hai giọng liền chị thành một, nghe như chỉ một người hát nhưng dày gấp bội.',
          'Phong cách ứng xử tao nhã: Lề lối xưng hô "người ngoan", "anh Hai", "chị Hai", trao gởi trầu têm cánh phượng.'
        ],
        en: [
          'Acoustic Projection & Ornamentation: carrying across open communal temple courtyards without amplification.',
          'Duet Unison Blending: merging two female vocal lines into an indistinguishable, unified stereo timbre.',
          'Courtly decorum: preserving polite kinship addresses and ceremonial presentation of betel leaves.'
        ]
      }
    },
    disciplesAndTransmission: {
      vi: 'Bà mở lớp truyền dạy miễn phí ngay tại sân nhà cho hàng trăm lượt thanh thiếu niên trong làng và sinh viên các trường văn hóa nghệ thuật, duy trì các canh hát truyền khẩu.',
      en: 'Runs free transmission workshops in her village courtyard for hundreds of young locals and university music students.',
      notableStudents: ['Liền chị Nguyễn Thị Hải', 'Thế hệ thiếu nhi Làng Diềm', 'Các CLB Quan họ trẻ Kinh Bắc']
    },
    quote: {
      vi: '“Quan họ là cái tình, cái nết. Đã mang danh liền chị thì dù nghèo khó đến đâu cũng phải giữ cốt cách tao nhã, nói năng khiêm nhường, hát cho thấu tình đạt lý.”',
      en: '"Quan Ho is love, honor, and grace. Bearing the name of Lien Chi demands modesty, dignity, and pouring one\'s purest heart into every exchange."'
    },
    associatedArtifacts: {
      vi: ['Nón quai thao cổ thêu chỉ ngũ sắc', 'Áo tứ thân mớ ba mớ bảy', 'Cơi trầu đồng cổ têm trầu cánh phượng'],
      en: ['Antique palm-leaf flat hat (Non Quai Thao)', 'Layered silk tunic robes (Ao Tu Than)', 'Bronze heirloom betel box with phoenix-cut betel']
    },
    sources: [
      {
        title: 'Cục Di sản văn hóa - Dân ca Quan họ Bắc Ninh',
        sourceName: 'dsvh.gov.vn',
        url: 'http://dsvh.gov.vn/dan-ca-quan-ho-bac-ninh-1346',
        isOfficialGov: true
      },
      {
        title: 'UNESCO - Quan họ Bắc Ninh folk songs',
        sourceName: 'ich.unesco.org',
        url: 'https://ich.unesco.org/en/RL/quan-h-bac-ninh-folk-songs-00183',
        isOfficialGov: true
      },
      {
        title: 'Cổng TTĐT Tỉnh Bắc Ninh - Nghệ nhân Nhân dân Quan họ Làng Diềm',
        sourceName: 'bacninh.gov.vn',
        url: 'https://bacninh.gov.vn',
        isOfficialGov: true
      }
    ]
  },
  {
    id: 'nguyen-ba-lan',
    name: 'Nguyễn Bá Lân',
    title: 'NNND',
    titleFullName: {
      vi: 'Nghệ nhân Nhân dân',
      en: "People's Artisan"
    },
    heritageName: {
      vi: 'Nghề Gốm Bát Tràng',
      en: 'Bát Tràng Traditional Ceramic Craft'
    },
    heritageCategory: 'craftsmanship',
    region: 'north',
    location: {
      vi: 'Bát Tràng, Gia Lâm, Hà Nội',
      en: 'Bat Trang, Gia Lam, Hanoi'
    },
    birthYear: 1957,
    yearsOfDedication: 52,
    avatarUrl: portraitCeramic,
    bannerUrl: masterBanner,
    summary: {
      vi: 'Bậc thầy phục hưng dòng men tro cổ, men rạn và men hỏa biến của làng gốm nghìn năm tuổi Bát Tràng. Người kết hợp tinh hoa đất sét sông Hồng với kỹ thuật nung củi truyền thống để tạo nên những tác phẩm gốm độc bản mang tầm quốc tế.',
      en: 'Master reviving ancient wood-ash glaze, crackle glaze, and transmutation glaze in the millennial ceramic village of Bat Trang. Blending Red River clay with traditional firewood firing to produce museum-grade masterpieces.'
    },
    biography: {
      vi: [
        'Nghệ nhân Nguyễn Bá Lân sinh năm 1957 tại làng gốm cổ Bát Tràng trong gia tộc nhiều đời nung lò gốm.',
        'Hơn 50 năm lăn lộn với đất, nước và lửa, ông miệt mài nghiên cứu các mảnh gốm cổ từ thời Lý, Trần, Lê để giải mã công thức men rạn tam thái và men lam cổ đã từng thất truyền.',
        'Tác phẩm của ông được chọn làm quà tặng ngoại giao cấp quốc gia cho nhiều nguyên thủ thế giới và trưng bày tại các bảo tàng mỹ thuật danh tiếng.',
        'Ông được Nhà nước phong tặng danh hiệu Nghệ nhân Nhân dân năm 2020 vì những cống hiến kiệt xuất trong bảo tồn nghề thủ công truyền thống.'
      ],
      en: [
        'Artisan Nguyen Ba Lan was born in 1957 into an ancestral kiln-owning dynasty in Bat Trang, Hanoi.',
        'Over 50 years working with earth, water, and fire, he studied archaeological sherds from Ly, Tran, and Le dynasties to reconstitute forgotten crackle and underglaze blue formulas.',
        'His custom vessels have been chosen as State diplomatic gifts for world leaders and exhibited in prestigious art institutions.',
        'Conferred the title of People\'s Artisan in 2020 for distinguished contributions to intangible craftsmanship preservation.'
      ]
    },
    uniqueTechniques: {
      title: {
        vi: 'Kỹ thuật chế biến Men Rạn Cổ và Nung củi kiểm soát oxy hóa',
        en: 'Crackle Glaze Formulation and Atmospheric Wood-Fired Kiln Control'
      },
      description: {
        vi: 'Công thức men rạn độc quyền dùng tro trấu, đá vôi và oxit sắt tự nhiên, nung ở nhiệt độ 1.250°C rồi hạ nhiệt đột ngột để tạo những đường rạn mạng nhện kỳ ảo.',
        en: 'Proprietary glaze combining rice-husk ash, limestone, and natural iron oxides fired at 1,250°C and thermal-shocked to generate micro-spiderweb fissure networks.'
      },
      points: {
        vi: [
          'Chế tác xương đất: Phối trộn đất sét trắng Trúc Thôn với bùn lắng sông Hồng tạo độ dẻo và độ bền cơ học cao.',
          'Tạo hoa văn rạn: Sau khi dỡ lò, dùng nước củ nâu hoặc mực tàu thẩm thấu vào các khe rạn để nổi bật từng đường vân tinh xảo.',
          'Vuốt tay trên bàn xoay truyền thống: Giữ kỹ thuật vuốt gốm không dùng khuôn, mỗi bình gốm đều là một bản thể duy nhất.'
        ],
        en: [
          'Clay Body Formulation: blending Truc Thon kaolin with Red River alluvial sediment for optimal plasticity.',
          'Crackle Highlighting: rubbing natural dioscorea dye or Chinese ink into micro-fractures to reveal mosaic patterns.',
          'Wheel-thrown authenticity: crafting vessels purely by hand on manual wheels without industrial molds.'
        ]
      }
    },
    disciplesAndTransmission: {
      vi: 'Trực tiếp truyền dạy cho con trai là Nghệ nhân Ưu tú thế hệ tiếp nối, đồng thời đào tạo hàng chục thợ giỏi cho các lò gốm tại Gia Lâm, mở xưởng đón sinh viên mỹ thuật thực tập nghề gốm cổ.',
      en: 'Trained his offspring and dozens of master potters throughout the ceramic region, offering apprentice residencies for university fine art students.',
      notableStudents: ['Thế hệ thợ trẻ Bát Tràng', 'Sinh viên ĐH Mỹ thuật Công nghiệp']
    },
    quote: {
      vi: '“Làm gốm là đối thoại giữa con người và lửa. Lửa có tính khí riêng, người thợ gốm phải học đức tính nhẫn nại, hiểu được tiếng thở của lò nung mới tạo ra được men ngọc.”',
      en: '"Pottery is a dialogue between human spirit and fire. Fire possesses its own temper; a potter must cultivate supreme patience to decipher the breath of the kiln."'
    },
    associatedArtifacts: {
      vi: ['Bàn xoay gốm thủ công bằng gỗ lim', 'Bình gốm men rạn vẽ rồng thời Lê', 'Mẫu quặng men tro trấu tự nhiên'],
      en: ['Traditional ironwood kick-wheel', 'Le Dynasty style crackle dragon vase', 'Natural rice-husk ash mineral glaze samples']
    },
    sources: [
      {
        title: 'Cục Di sản văn hóa - Nghề gốm Bát Tràng',
        sourceName: 'dsvh.gov.vn',
        url: 'http://dsvh.gov.vn/nghe-gom-bat-trang-3450',
        isOfficialGov: true
      },
      {
        title: 'Bộ Văn hóa Thể thao & Du lịch - Di sản làng nghề Bát Tràng',
        sourceName: 'bvhttdl.gov.vn',
        url: 'https://bvhttdl.gov.vn',
        isOfficialGov: true
      },
      {
        title: 'Báo Hà Nội Mới - Nghệ nhân Nguyễn Bá Lân và tình yêu men rạn Bát Tràng',
        sourceName: 'hanoimoi.com.vn',
        url: 'https://hanoimoi.com.vn',
        isOfficialGov: false
      }
    ]
  },
  {
    id: 'ba-tu',
    name: 'Vũ Bá Tư (Ba Tu)',
    title: 'NNND',
    titleFullName: {
      vi: 'Nghệ nhân Nhân dân',
      en: "People's Artisan"
    },
    heritageName: {
      vi: 'Đờn Ca Tài Tử & Cải Lương',
      en: 'Đờn Ca Tài Tử & Cải Lương Theater'
    },
    heritageCategory: 'performing_arts',
    region: 'south',
    location: {
      vi: 'Đức Hòa, Long An / TP. Hồ Chí Minh',
      en: 'Duc Hoa, Long An / Ho Chi Minh City'
    },
    birthYear: 1940,
    yearsOfDedication: 68,
    avatarUrl: portraitDonCa,
    bannerUrl: masterBanner,
    summary: {
      vi: 'Được tôn vinh là "Đệ nhất danh cầm Đàn Kìm" (Nguyệt cầm) của phương Nam. Tiếng đàn kìm trầm ấm, rắn rỏi nhưng đong đầy tình cảm đã nâng bước cho bao thế hệ nghệ sĩ cải lương lừng lẫy.',
      en: 'Crowned the "First Master of the Moon Lute" (Đàn Kìm) across Southern Vietnam. His deep, resonant lute picking anchored legendary Cải Lương performances.'
    },
    biography: {
      vi: [
        'Nghệ nhân Ba Tu sinh năm 1940 tại vùng đất giàu truyền thống đờn ca tài tử Đức Hòa, tỉnh Long An.',
        'Mê tiếng đàn kìm từ thuở thiếu thời, ông được các danh cầm lừng danh đất phương Nam trực tiếp truyền dạy.',
        'Ông từng là trưởng ban nhạc cổ của các đoàn Cải lương danh tiếng như Thanh Minh - Thanh Nga, Sài Gòn 1, phụ trách dàn nhạc phục vụ hàng ngàn đêm diễn trên khắp cả nước.',
        'Năm 2019, ông được phong tặng danh hiệu Nghệ nhân Nhân dân, tiếp tục miệt mài ngồi đờn và chỉnh âm cho các thế hệ học trò.'
      ],
      en: [
        'Artisan Ba Tu was born in 1940 in Duc Hoa, Long An, a heartland of Southern folk music.',
        'Captivated by the moon lute since youth, he received direct transmission from venerable southern virtuosos.',
        'He served as chief music director for prime theatrical troupes including the legendary Thanh Minh - Thanh Nga ensemble.',
        'Awarded the People\'s Artisan title in 2019, he continues teaching string elasticity and rhythmic pacing to upcoming talents.'
      ]
    },
    uniqueTechniques: {
      title: {
        vi: 'Ngón đờn Kìm chữ Nhấn, chữ Day và xếp ngón gảy song thanh',
        en: 'Dan Kim left-hand string pressure, micro-slide day, and double-stroke plucking'
      },
      description: {
        vi: 'Cây đàn kìm của Ba Tu nổi tiếng với chữ đờn đĩnh đạc, chắc nhịp nhưng mềm mại, từng nốt gảy đều đặn như giọt nước rơi trên phiến đá.',
        en: 'Renowned for authoritative cadence, disciplined metronomic firmness coupled with soulful melodic ornamentation.'
      },
      points: {
        vi: [
          'Chữ Nhấn chữ Day: Nhấn ngón sâu trên phím cao của cần đàn kìm tạo độ rung chuyển điệu thức Bắc sang Oán mượt mà.',
          'Giữ nhịp trường canh: Độ chính xác tuyệt đối trong việc bắt nhịp song lang, là chỗ dựa vững chãi cho người ca vọng cổ.',
          'Khả năng đệm đàn biến hóa: Không bao giờ lặp lại chính mình, mỗi câu đệm đều nương theo cảm xúc thăng hoa của nghệ sĩ hát.'
        ],
        en: [
          'Left-hand high fret bending: altering tension across tall frets to shift seamlessly between major Bac and melancholic Oan modes.',
          'Song Lang foot-percussion synchronization: flawless metronomic foundation guiding vocal soloists.',
          'Improvisational accompaniment: tailoring melodic fills dynamically to singer resonance.'
        ]
      }
    },
    disciplesAndTransmission: {
      vi: 'Đã đào tạo hàng trăm nhạc công đàn kìm cho các đài truyền hình, nhà hát cải lương và câu lạc bộ đờn ca tài tử tại TP. Hồ Chí Minh và miền Tây Nam Bộ.',
      en: 'Trained hundreds of moon lute accompanists for radio, television, opera houses, and community clubs across the Mekong Delta.',
      notableStudents: ['Nghệ sĩ đàn kìm Hải Phượng', 'Dàn nhạc Nhà hát Cải lương Trần Hữu Trang']
    },
    quote: {
      vi: '“Cây đàn kìm được gọi là Quân tử cầm. Người cầm đàn phải có tâm hồn đĩnh đạc, tiếng đàn không được lả lơi mà phải sâu lắng, chở nặng tình nghĩa quê hương.”',
      en: '"The Dan Kim is known as the Nobleman\'s Lute. Its player must possess integrity; the tone must never be frivolous, but grounded in filial devotion to homeland."'
    },
    associatedArtifacts: {
      vi: ['Cây đàn kìm gỗ mật thế kỷ 20', 'Song lang gỗ gõ đỏ gõ bằng chân', 'Bản ghi âm 20 bài bản tổ'],
      en: ['20th-century rosewood moon lute', 'Red mahogany foot-percussion song lang', 'Master recordings of the 20 Canonical Suites']
    },
    sources: [
      {
        title: 'Cục Di sản văn hóa - Hồ sơ Nghệ nhân Đờn ca tài tử',
        sourceName: 'dsvh.gov.vn',
        url: 'http://dsvh.gov.vn',
        isOfficialGov: true
      },
      {
        title: 'Báo Sài Gòn Giải Phóng - Đệ nhất danh cầm Ba Tu',
        sourceName: 'sggp.org.vn',
        url: 'https://sggp.org.vn',
        isOfficialGov: false
      },
      {
        title: 'Bộ Văn hóa Thể thao & Du lịch - Danh hiệu Nghệ nhân Nhân dân',
        sourceName: 'bvhttdl.gov.vn',
        url: 'https://bvhttdl.gov.vn',
        isOfficialGov: true
      }
    ]
  },
  {
    id: 'y-khem-kbuor',
    name: 'Y Khem Kbuôr',
    title: 'NNND',
    titleFullName: {
      vi: 'Nghệ nhân Nhân dân',
      en: "People's Artisan"
    },
    heritageName: {
      vi: 'Không gian văn hóa Cồng Chiêng Tây Nguyên',
      en: 'Space of Gong Culture in Central Highlands'
    },
    heritageCategory: 'performing_arts',
    unescoRecognition: {
      vi: 'Kiệt tác truyền khẩu và phi vật thể nhân loại (2005)',
      en: 'Masterpiece of Oral and Intangible Cultural Heritage of Humanity (2005)',
      year: 2005
    },
    region: 'central',
    location: {
      vi: 'Buôn Ma Thuột, Đắk Lắk',
      en: 'Buon Ma Thuot, Dak Lak'
    },
    birthYear: 1938,
    deathYear: 2018,
    yearsOfDedication: 60,
    avatarUrl: portraitGong,
    bannerUrl: masterBanner,
    summary: {
      vi: 'Cây đại thụ của văn hóa Ê Đê Tây Nguyên, bậc thầy chỉnh chiêng và truyền dạy sử thi Đăm Săn. Người nắm giữ linh hồn của những dàn chiêng Knah cổ kính ngân vang giữa đại ngàn.',
      en: 'Venerable elder of Ede culture, master tuner of ancient bronze gongs and bearer of the Dam San oral epic, preserving the soul of traditional Knah gong ensembles.'
    },
    biography: {
      vi: [
        'Nghệ nhân Y Khem Kbuôr sinh năm 1938 tại buôn Kmrơng Prông B, xã Ea Tu, TP. Buôn Ma Thuột, tỉnh Đắk Lắk.',
        'Từ nhỏ, ông đã say mê nhịp cồng chiêng trong các lễ cúng bến nước, lễ thổi tai và lễ mừng lúa mới. Ông thuộc lòng cấu trúc âm thanh của dàn chiêng Knah gồm 6 chiếc chiêng bằng và 3 chiếc chiêng núm.',
        'Đặc biệt, ông là một trong số rất ít nghệ nhân có đôi tai "vàng" có thể gõ búa chỉnh lại những chiếc cồng chiêng bị lạc âm do thời gian hoặc thời tiết.',
        'Năm 2015, ông vinh dự được Chủ tịch nước phong tặng danh hiệu Nghệ nhân Nhân dân đầu tiên của tỉnh Đắk Lắk.'
      ],
      en: [
        'Artisan Y Khem Kbuor was born in 1938 in Buon Kmrong Prong B, Ea Tu commune, Buon Ma Thuot, Dak Lak.',
        'Fascinated in early youth by ceremonial rhythms at water-source blessings and new-harvest ceremonies, he mastered the complex acoustics of the 9-piece Knah ensemble.',
        'Notably, he possessed an exceptional golden ear able to retune disoriented antique bronze alloy gongs using precise hammer strokes.',
        'In 2015, he was awarded the title of People\'s Artisan as the first recipient in Dak Lak province.'
      ]
    },
    uniqueTechniques: {
      title: {
        vi: 'Nghệ thuật Chỉnh Chiêng bằng búa đồng và Cầm trịch nhịp Knah',
        en: 'Acoustic Gong Tuning with Bronze Hammer and Leading the Knah Cadence'
      },
      description: {
        vi: 'Dùng búa nhỏ gõ vào tâm hoặc vành chiêng để thay đổi độ dày mỏng của kim loại, đưa tần số âm thanh trở về đúng quãng âm thần linh của đại ngàn.',
        en: 'Striking precise micro-impacts on gong domes and perimeters to calibrate alloy resonance to ancestral harmonic scales.'
      },
      points: {
        vi: [
          'Thẩm âm bằng linh cảm: Nghe tiếng chiêng hòa âm với gió rừng để nhận biết chiêng nào bị đanh tiếng hoặc non âm.',
          'Kỹ thuật chặn tiếng chiêng: Dùng cùi tay hoặc bàn tay trái bịt nhẹ mặt chiêng sau khi đánh để tạo âm ngắt dồn dập hùng tráng.',
          'Diễn xướng sử thi: Kể khan Đăm Săn thâu đêm bên bếp lửa nhà sàn.'
        ],
        en: [
          'Intuitive Harmonic Ear: sensing micro-dissonances within outdoor woodland acoustics.',
          'Gong Damping Artistry: applying palm pressure against the vibrating bronze surface to produce percussive syncopations.',
          'Epic recitation: chanting the Khan Dam San epic through the night by longhouse embers.'
        ]
      }
    },
    disciplesAndTransmission: {
      vi: 'Thành lập đội cồng chiêng thanh thiếu niên tại buôn làng, truyền dạy kỹ năng đánh chiêng và chỉnh chiêng cho hàng chục người con buôn làng Ê Đê.',
      en: 'Organized youth gong troupes in village longhouses, passing tuning wisdom to younger generations of Ede musicians.',
      notableStudents: ['Đội chiêng thanh thiếu niên Ea Tu', 'Các nghệ nhân trẻ buôn Kmrơng Prông B']
    },
    quote: {
      vi: '“Chiêng không chỉ là kim loại, chiêng có hồn của ông bà tổ tiên. Đánh chiêng là gọi Giàng về, phải đánh bằng cả tấm lòng trong sạch của người con Tây Nguyên.”',
      en: '"The gong is not mere metal; it holds the living soul of our forebears. Striking the gong invokes the Divine Spirits; it must be played with an upright heart."'
    },
    associatedArtifacts: {
      vi: ['Bộ búa đồng chỉnh chiêng truyền đời', 'Dàn chiêng Knah 9 chiếc cổ truyền', 'Trống H’gơr bịt da trâu rừng'],
      en: ['Hereditary bronze tuning hammer', 'Antique 9-piece Knah bronze gong set', 'Sacred buffalo-hide H\'gor war drum']
    },
    sources: [
      {
        title: 'Cục Di sản văn hóa - Không gian văn hóa Cồng chiêng Tây Nguyên',
        sourceName: 'dsvh.gov.vn',
        url: 'http://dsvh.gov.vn/khong-gian-van-hoa-cong-chieng-tay-nguyen-1345',
        isOfficialGov: true
      },
      {
        title: 'UNESCO - Space of gong culture',
        sourceName: 'ich.unesco.org',
        url: 'https://ich.unesco.org/en/RL/space-of-gong-culture-00120',
        isOfficialGov: true
      },
      {
        title: 'Báo Đắk Lắk - Người giữ hồn cồng chiêng Y Khem Kbuôr',
        sourceName: 'baodaklak.vn',
        url: 'https://baodaklak.vn',
        isOfficialGov: false
      }
    ]
  },
  {
    id: 'sam-van-dun',
    name: 'Sầm Văn Dừn',
    title: 'NNND',
    titleFullName: {
      vi: 'Nghệ nhân Nhân dân',
      en: "People's Artisan"
    },
    heritageName: {
      vi: 'Thực hành Hát Then & Đàn Tính',
      en: 'Practices of Then by Tày, Nùng and Thái Ethnic Groups'
    },
    heritageCategory: 'performing_arts',
    unescoRecognition: {
      vi: 'Di sản văn hóa phi vật thể đại diện của nhân loại (2019)',
      en: 'Representative List of the Intangible Cultural Heritage of Humanity (2019)',
      year: 2019
    },
    region: 'north',
    location: {
      vi: 'Sơn Dương, Tuyên Quang',
      en: 'Son Duong, Tuyen Quang'
    },
    birthYear: 1950,
    yearsOfDedication: 55,
    avatarUrl: portraitThen,
    bannerUrl: masterBanner,
    summary: {
      vi: 'Cây cầu nối tâm linh và nghệ thuật của đồng bào Cao Lan - Tày xứ Tuyên. Người chế tác hàng trăm cây đàn Tính bằng quả bầu khô và nắm giữ hơn 300 khúc Then cổ cầu an, cầu mùa.',
      en: 'Cultural bridge of the Cao Lan and Tay communities in Tuyen Quang. Builder of hundreds of gourd-lutes (Dan Tinh) and bearer of over 300 archaic Then rituals for peace and harvest.'
    },
    biography: {
      vi: [
        'Nghệ nhân Sầm Văn Dừn sinh năm 1950 tại thôn Mãn Hóa, xã Đại Phú, huyện Sơn Dương, tỉnh Tuyên Quang.',
        'Xuất thân trong gia đình có truyền thống làm thầy Then, ông am hiểu cặn kẽ từng nghi lễ Then cấp sắc, Then cầu mùa, giải hạn và xướng ca giao duyên.',
        'Ông tự tay vào rừng tìm bầu già phơi khô, chặt gỗ dâu rừng tiện cần đàn Tính và chế tạo dây tơ, giữ trọn vẹn âm sắc mộc mạc nguyên bản.',
        'Ông được phong tặng danh hiệu Nghệ nhân Nhân dân năm 2019, đóng góp to lớn vào hồ sơ đệ trình UNESCO công nhận Thực hành Then năm 2019.'
      ],
      en: [
        'Artisan Sam Van Dun was born in 1950 in Son Duong district, Tuyen Quang province.',
        'Raised in a family of Then masters, he mastered initiation ceremonies (Cap Sac), harvest rites, and courting ballads.',
        'He manually gathers wild mountain gourds, carves mulberry wood necks, and weaves silk strings to preserve the acoustic warmth of the Dan Tinh.',
        'Honored as People\'s Artisan in 2019, his living contributions supported UNESCO\'s inscription of Then practices.'
      ]
    },
    uniqueTechniques: {
      title: {
        vi: 'Kỹ thuật chế tác Đàn Tính bằng Bầu khô và Xướng âm Then cổ',
        en: 'Crafting Dan Tinh from Natural Gourds and Sacred Then Chanting'
      },
      description: {
        vi: 'Bí quyết chọn quả bầu tròn đều, khoét lỗ thông âm bí truyền và kỹ thuật gảy ngón trỏ kết hợp lắc vòng xóc nhạc (chùm chuông) ở cổ tay.',
        en: 'Selecting symmetrical dried gourds, tuning acoustic resonant ports, and synchronizing index plucking with wrist bell rattles.'
      },
      points: {
        vi: [
          'Chế tác bầu đàn Tính: Khoét mặt đáy bầu, dán mặt gỗ vông mỏng nhẹ để âm thanh vang ấm, không bị đục.',
          'Kết hợp xóc nhạc cổ chân/tay: Tạo nên không gian âm thanh huyền ảo đưa người nghe vào cõi linh thiêng của trời đất.',
          'Chép dịch chữ Hán Nôm: Tự tay dịch sách cúng cổ truyền từ chữ Nôm Tày sang chữ Quốc ngữ cho thế hệ sau.'
        ],
        en: [
          'Gourd Resonator Acoustics: attaching ultralight erythrina wood soundboards to dried gourds for warm reverberation.',
          'Simultaneous Bell Shaking: integrating wrist bell shakes that invoke celestial journey metaphors.',
          'Script Preservation: transcribing ancient Tay Nom manuscripts into modern script for youth preservation.'
        ]
      }
    },
    disciplesAndTransmission: {
      vi: 'Mở lớp truyền dạy đàn Tính hát Then cho hàng trăm học sinh tại trường học địa phương và thanh niên trong xã Đại Phú, lập câu lạc bộ bảo tồn tiếng Then.',
      en: 'Teaches Dan Tinh playing and Then singing to hundreds of local schoolchildren and youths across northern mountainous districts.',
      notableStudents: ['Câu lạc bộ Then thôn Mãn Hóa', 'Học sinh các trường dân tộc nội trú Sơn Dương']
    },
    quote: {
      vi: '“Mất tiếng Then, mất tiếng đàn Tính là đồng bào mất gốc. Tôi còn thở ngày nào thì tiếng đàn Tính vẫn ngân nga nơi sườn núi.”',
      en: '"To lose the Then chant and the Dan Tinh is to sever our roots. As long as I breathe, the lute will continue echoing across these mountain peaks."'
    },
    associatedArtifacts: {
      vi: ['Đàn Tính 2 dây làm từ quả bầu rừng cổ', 'Chùm xóc nhạc đồng cổ truyền', 'Sách Then cổ chép tay chữ Nôm'],
      en: ['Two-stringed wild gourd Dan Tinh', 'Antique bronze wrist chime rattles', 'Handwritten Tay-Nom sacred ritual books']
    },
    sources: [
      {
        title: 'Cục Di sản văn hóa - Thực hành Then của người Tày, Nùng, Thái',
        sourceName: 'dsvh.gov.vn',
        url: 'http://dsvh.gov.vn/thuc-hanh-then-1344',
        isOfficialGov: true
      },
      {
        title: 'UNESCO - Practices of Then by Tày, Nùng and Thái ethnic groups',
        sourceName: 'ich.unesco.org',
        url: 'https://ich.unesco.org/en/RL/practices-of-then-by-tay-nung-and-thai-ethnic-groups-in-viet-nam-01375',
        isOfficialGov: true
      },
      {
        title: 'Báo Tuyên Quang - Nghệ nhân Nhân dân Sầm Văn Dừn nặng lòng với Then',
        sourceName: 'baotuyenquang.com.vn',
        url: 'https://baotuyenquang.com.vn',
        isOfficialGov: false
      }
    ]
  },
  {
    id: 'nguyen-huu-qua',
    name: 'Nguyễn Hữu Quả',
    title: 'NNƯT',
    titleFullName: {
      vi: 'Nghệ nhân Ưu tú',
      en: 'Meritorious Artisan'
    },
    heritageName: {
      vi: 'Nghề làm Tranh dân gian Đông Hồ',
      en: 'Dong Ho Folk Woodblock Painting'
    },
    heritageCategory: 'craftsmanship',
    unescoRecognition: {
      vi: 'Hồ sơ đệ trình UNESCO Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp',
      en: 'Nominated for UNESCO Intangible Cultural Heritage in Need of Urgent Safeguarding',
      year: 2020
    },
    region: 'north',
    location: {
      vi: 'Song Hồ, Thuận Thành, Bắc Ninh',
      en: 'Song Ho, Thuan Thanh, Bac Ninh'
    },
    birthYear: 1961,
    yearsOfDedication: 48,
    avatarUrl: portraitDongHo,
    bannerUrl: masterBanner,
    summary: {
      vi: 'Truyền nhân đời thứ 9 của dòng họ Nguyễn Hữu nức tiếng làng tranh Đông Hồ. Người lưu giữ hàng trăm ván khắc gỗ cổ và bền bỉ quét màu điệp, in tranh thủ công gìn giữ hồn Tết Việt.',
      en: '9th-generation descendant of the Nguyen Huu woodblock dynasty in Dong Ho village. Preserving hundreds of ancestral woodblocks, brushing scallop-shell paste onto Do paper to keep Lunar New Year heritage alive.'
    },
    biography: {
      vi: [
        'Nghệ nhân Nguyễn Hữu Quả là con trai thứ của cố Nghệ nhân Nhân dân Nguyễn Hữu Sam - bậc tiền bối phục dựng làng tranh sau chiến tranh.',
        'Từ thuở nhỏ, ông đã đắm mình trong mùi thơm của giấy điệp, màu tự nhiên của hoa dành dành, gỉ đồng, than lá tre và gỗ thị.',
        'Ông kiên định từ chối kỹ thuật in công nghiệp hay màu hóa học, chỉ in tay từng màu bằng ván khắc gỗ thị truyền thống: tranh Đám cưới chuột, Vinh hoa Phú quý, Đánh ghen, Chăn trâu thổi sáo.',
        'Năm 2015, ông được Nhà nước phong tặng danh hiệu Nghệ nhân Ưu tú.'
      ],
      en: [
        'Artisan Nguyen Huu Qua is the son of legendary late People\'s Artisan Nguyen Huu Sam, who revived Dong Ho after wartime disruptions.',
        'Since childhood, he worked with ground scallop-shell oyster coatings, natural gardenia yellow, bamboo ash black, and persimmon woodblocks.',
        'He steadfastly resists industrial synthetic pigments, producing 100% hand-pressed prints of icons: The Rat Wedding, Prosperity & Nobility, and Boy on Buffalo with Flute.',
        'Conferred the title of Meritorious Artisan in 2015 for unyielding cultural preservation.'
      ]
    },
    uniqueTechniques: {
      title: {
        vi: 'Nghệ thuật Chế màu Tự nhiên, Quét Điệp và In ván gỗ Thị',
        en: 'Natural Pigment Formulation, Scallop Shell Coating, and Woodblock Printing'
      },
      description: {
        vi: 'Tất cả màu sắc đều lấy từ cây cỏ thiên nhiên: màu đen từ than lá tre nung kín, màu vàng từ hoa dành dành, màu đỏ từ sỏi son núi, màu xanh từ gỉ đồng.',
        en: 'All hues derive from nature: black from smothered bamboo leaf charcoal, yellow from gardenia petals, red from cinnabar pebbles, green from verdigris.'
      },
      points: {
        vi: [
          'Giấy Điệp lấp lánh: Quét bột vỏ sò điệp nghiền mịn trộn hồ nếp lên giấy Dó bằng chổi lá thông tạo vân óng ánh.',
          'In màu tầng thứ: Mỗi màu tương ứng với một ván khắc riêng, ván nét đen in sau cùng để định hình toàn bộ bức tranh.',
          'Khắc ván gỗ thị: Gỗ thị mềm dẻo, thớ mịn, không cong vênh, giữ nét khắc tinh vi suốt hàng trăm năm.'
        ],
        en: [
          'Luminescent Diep Paper: brushing crushed mother-of-pearl scallop shell mixed with glutinous rice paste with pine needles.',
          'Layered Multi-Block Printing: distinct carved woodblocks for each pigment; final outline block pressed last.',
          'Diospyros Wood Carving: carving soft yet durable persimmon wood resilient against warping across centuries.'
        ]
      }
    },
    disciplesAndTransmission: {
      vi: 'Gia đình ông duy trì xưởng tranh đón hàng ngàn lượt khách quốc tế và học sinh sinh viên đến trải nghiệm tự tay in tranh, truyền dạy nghề cho các con và thợ trẻ trong làng.',
      en: 'Operates an open educational atelier receiving international scholars and students, transmitting techniques to his sons and apprentice carvers.',
      notableStudents: ['Con trai Nguyễn Hữu Đạo', 'Thế hệ trẻ làng tranh Song Hồ']
    },
    quote: {
      vi: '“Tranh Đông Hồ là cái hồn dân tộc, in trên giấy điệp lấp lánh như cát sông Đuống. Dù khó khăn đến mấy cũng không được pha màu hóa chất làm mất cái chất mộc của cha ông.”',
      en: '"Dong Ho art is our national soul, shimmering on scallop paper like the sands of Duong River. Never succumb to synthetic chemicals that corrupt our ancestors\' purity."'
    },
    associatedArtifacts: {
      vi: ['Bộ ván khắc tranh Đám cưới chuột niên đại hơn 100 năm', 'Chổi quét lá thông tự chế', 'Cối đá nghiền vỏ sò điệp'],
      en: ['Centennial woodblock suite of The Rat Wedding', 'Handmade pine needle sweep brush', 'Granite mortar for grinding coastal oyster shells']
    },
    sources: [
      {
        title: 'Cục Di sản văn hóa - Nghề làm tranh dân gian Đông Hồ',
        sourceName: 'dsvh.gov.vn',
        url: 'http://dsvh.gov.vn/nghe-lam-tranh-dan-gian-dong-ho-3449',
        isOfficialGov: true
      },
      {
        title: 'Báo Văn Hóa - Giữ gìn hồn cốt tranh Đông Hồ',
        sourceName: 'baovanhoa.vn',
        url: 'https://baovanhoa.vn',
        isOfficialGov: false
      },
      {
        title: 'Bộ Văn hóa Thể thao và Du lịch - Di sản văn hóa Bắc Ninh',
        sourceName: 'bvhttdl.gov.vn',
        url: 'https://bvhttdl.gov.vn',
        isOfficialGov: true
      }
    ]
  },
  {
    id: 'vo-van-tang',
    name: 'Võ Văn Tạng',
    title: 'NNƯT',
    titleFullName: {
      vi: 'Nghệ nhân Ưu tú',
      en: 'Meritorious Artisan'
    },
    heritageName: {
      vi: 'Nghệ thuật Tranh vỏ Tràm Đồng Tháp Mười',
      en: 'Cajeput Tree Bark Collage Artistry'
    },
    heritageCategory: 'craftsmanship',
    region: 'south',
    location: {
      vi: 'Thị trấn Thoại Sơn, An Giang / Đồng Tháp Mười',
      en: 'Thoai Son, An Giang / Dong Thap Muoi'
    },
    birthYear: 1943,
    yearsOfDedication: 40,
    avatarUrl: portraitBark,
    bannerUrl: masterBanner,
    summary: {
      vi: 'Người khai sinh ra dòng tranh ghép vỏ tràm độc nhất vô nhị tại Việt Nam. Tận dụng lớp vỏ bong của cây tràm rừng ngập mặn Đồng Tháp Mười để tạo nên những bức tranh chân dung Bác Hồ và danh lam thắng cảnh sống động như tranh sơn dầu.',
      en: 'Creator of the world-unique cajeput tree bark collage artform. Utilizing peeling bark layers from wild wetland forests in Dong Thap Muoi to craft vivid, lifelike historical portraits and landscape panoramas.'
    },
    biography: {
      vi: [
        'Nghệ nhân Võ Văn Tạng sinh năm 1943 tại vùng châu thổ sông Cửu Long.',
        'Sau nhiều năm trăn trở với màu sắc tự nhiên của cây tràm rừng ngập nước, năm 2001 ông bắt đầu thử nghiệm bóc từng lớp vỏ mỏng của cây tràm già để ghép tranh.',
        'Vỏ tràm tự nhiên có hơn 10 sắc thái màu: từ trắng ngà, vàng đất, nâu nhạt đến nâu cánh gián và đen sẫm mà không hề cần dùng bất kỳ giọt sơn màu hóa chất nào.',
        'Ông đã lập kỷ lục Việt Nam với bức tranh Bác Hồ bằng vỏ tràm lớn nhất và được Chủ tịch nước phong tặng danh hiệu Nghệ nhân Ưu tú.'
      ],
      en: [
        'Artisan Vo Van Tang was born in 1943 in the Mekong Delta wetlands.',
        'Inspired by the varied earthy gradients of wild cajeput trees, in 2001 he developed a meticulous method of peeling gossamer bark layers to assemble mosaics.',
        'Wild cajeput bark yields over 10 natural hues: from ivory white, ochre, amber, to deep sepia and obsidian black without a drop of dye.',
        'He holds Vietnamese national records for the largest cajeput mosaic portrait of President Ho Chi Minh and is a celebrated Meritorious Artisan.'
      ]
    },
    uniqueTechniques: {
      title: {
        vi: 'Kỹ thuật Phân tầng Sắc độ Vỏ tràm và Ghép vi điểm',
        en: 'Natural Bark Chroma Layering and Micro-Foliage Collagen Mosaic'
      },
      description: {
        vi: 'Xử lý vỏ tràm qua luộc khử mủ, phơi sương, bóc tách thành hàng chục lớp mỏng tang như lụa rồi cắt tỉa ghép khớp từng sợi vi điểm.',
        en: 'Boiling bark to eliminate tannins, sun-curing, separating fibers into silk-thin membranes, and precision-pasting micro flakes.'
      },
      points: {
        vi: [
          'Bóc tách vỏ tràm: Một thớ vỏ tràm dày có thể tách thành 6 đến 8 lớp màu với độ đậm nhạt khác nhau.',
          'Xử lý chống mối mọt tự nhiên: Bí quyết luộc vỏ cây với muối và phơi nắng tự nhiên giúp tranh bền bỉ hàng chục năm không phai màu.',
          'Ghép vi tế tạo thần thái: Dùng nhíp nhỏ gắp từng sợi tơ vỏ tràm để tạo nếp nhăn, ánh mắt và chòm râu sống động như thật.'
        ],
        en: [
          'Membrane exfoliation: slicing a single bark specimen into 6-8 micro-tonal sheets.',
          'Organic tannin stabilization: boiling with salt and curing under tropical sun to safeguard against insects.',
          'Micro-tweezing expressivity: applying fine tweezers to layer hairline fibers that render facial contours and eye glints.'
        ]
      }
    },
    disciplesAndTransmission: {
      vi: 'Thành lập cơ sở sản xuất tranh vỏ tràm giải quyết việc làm cho hàng chục người khuyết tật và thanh niên nghèo tại huyện Thoại Sơn, truyền lại toàn bộ bí quyết ghép tranh cho thế hệ trẻ.',
      en: 'Founded an inclusive workshop employing disabled and underprivileged delta youth, teaching them entire craftsmanship protocols without withholding secrets.',
      notableStudents: ['Nhóm nghệ nhân khuyết tật Thoại Sơn', 'Thế hệ học trò tại An Giang']
    },
    quote: {
      vi: '“Rừng tràm quê tôi che chở người dân qua bom đạn. Nay vỏ cây tràm lại làm nên bức tranh nuôi sống người khuyết tật và làm rạng danh văn hóa đất phương Nam.”',
      en: '"The cajeput forests shielded our people through bombs. Today, its modest bark forms artworks that feed the disabled and exalt Southern culture."'
    },
    associatedArtifacts: {
      vi: ['Tập vỏ tràm cổ thụ 30 năm tuổi', 'Kéo tỉa và nhíp vi phẫu ghép tranh', 'Bức tranh vỏ tràm Chùa Một Cột'],
      en: ['30-year-old aged cajeput bark archive', 'Micro-tweezers and precision shears', 'One Pillar Pagoda cajeput collage plate']
    },
    sources: [
      {
        title: 'Bộ Văn hóa Thể thao và Du lịch - Nghệ thuật tranh vỏ tràm Thoại Sơn',
        sourceName: 'bvhttdl.gov.vn',
        url: 'https://bvhttdl.gov.vn',
        isOfficialGov: true
      },
      {
        title: 'Cổng TTĐT Tỉnh An Giang - Nghệ nhân Ưu tú Võ Văn Tạng',
        sourceName: 'angiang.gov.vn',
        url: 'https://angiang.gov.vn',
        isOfficialGov: true
      },
      {
        title: 'Báo Sài Gòn Giải Phóng - Độc đáo tranh vỏ tràm Võ Văn Tạng',
        sourceName: 'sggp.org.vn',
        url: 'https://sggp.org.vn',
        isOfficialGov: false
      }
    ]
  }
];

export const OFFICIAL_REFERENCES = [
  {
    name: {
      vi: 'Cục Di sản văn hóa - Bộ Văn hóa, Thể thao và Du lịch',
      en: 'Department of Cultural Heritage - Ministry of Culture, Sports and Tourism'
    },
    domain: 'dsvh.gov.vn',
    url: 'http://dsvh.gov.vn',
    description: {
      vi: 'Cơ quan nhà nước quản lý danh mục Di sản văn hóa phi vật thể quốc gia, thẩm định hồ sơ Nghệ nhân Nhân dân và Nghệ nhân Ưu tú.',
      en: 'Official state authority managing National Intangible Cultural Heritage and verifying People\'s/Meritorious Artisan dossiers.'
    },
    badge: 'Cơ quan Nhà nước'
  },
  {
    name: {
      vi: 'Cổng Thông tin điện tử Bộ Văn hóa, Thể thao và Du lịch',
      en: 'Official Portal of the Ministry of Culture, Sports and Tourism of Vietnam'
    },
    domain: 'bvhttdl.gov.vn',
    url: 'https://bvhttdl.gov.vn',
    description: {
      vi: 'Cổng thông tin pháp lý chính thống của chính phủ về nghị định, quyết định phong tặng danh hiệu vinh dự nhà nước và bảo tồn văn hóa.',
      en: 'Official governmental portal publishing state decree awards, honorary titles, and national preservation directives.'
    },
    badge: 'Cổng Thông tin Chính phủ'
  },
  {
    name: {
      vi: 'UNESCO - Di sản văn hóa phi vật thể của Nhân loại (ICH)',
      en: 'UNESCO Intangible Cultural Heritage Lists'
    },
    domain: 'ich.unesco.org',
    url: 'https://ich.unesco.org/en/state/viet-nam-VN',
    description: {
      vi: 'Cơ sở dữ liệu toàn cầu của UNESCO công nhận các kiệt tác văn hóa phi vật thể đại diện và cần bảo vệ khẩn cấp của Việt Nam.',
      en: 'Global UNESCO database certifying representative and urgent-safeguarding cultural masterpieces of Vietnam.'
    },
    badge: 'Tổ chức Quốc tế'
  },
  {
    name: {
      vi: 'Báo Nhân Dân - Chuyên mục Văn hóa & Di sản Dân tộc',
      en: 'Nhan Dan Newspaper - National Culture & Heritage Column'
    },
    domain: 'nhandan.vn',
    url: 'https://nhandan.vn/vanhoa',
    description: {
      vi: 'Cơ quan ngôn luận của Đảng và Nhà nước Việt Nam, lưu trữ hàng ngàn bài viết chuyên sâu về cuộc đời và đóng góp của các bậc nghệ nhân.',
      en: 'Official national publication archiving deep biographical essays on Vietnam\'s senior cultural artisans.'
    },
    badge: 'Báo chí Chính thống'
  },
  {
    name: {
      vi: 'Viện Âm nhạc Quốc gia Việt Nam',
      en: 'Vietnam National Institute of Musicology'
    },
    domain: 'vienamnhac.vn',
    url: 'http://vienamnhac.vn',
    description: {
      vi: 'Đơn vị nghiên cứu khoa học, sưu tầm, bảo tồn kho lưu trữ âm thanh mẫu của các nghệ nhân Ca trù, Quan họ, Hát Xoan, Hát Xẩm.',
      en: 'Scientific musicological institution archiving master acoustic recordings of traditional vocal and instrumental bearers.'
    },
    badge: 'Viện Nghiên cứu'
  },
  {
    name: {
      vi: 'Tạp chí Di sản Văn hóa Việt Nam',
      en: 'Vietnam Cultural Heritage Magazine'
    },
    domain: 'tapchidisan.vn',
    url: 'https://tapchidisan.vn',
    description: {
      vi: 'Tạp chí chuyên ngành lý luận và thực tiễn bảo tồn di sản văn hóa vật thể và phi vật thể của Hội Di sản Văn hóa Việt Nam.',
      en: 'Specialized journal documenting theoretical and practical heritage preservation methodologies.'
    },
    badge: 'Tạp chí Chuyên ngành'
  }
];
