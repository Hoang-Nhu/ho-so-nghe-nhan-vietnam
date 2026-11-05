/**
 * Gemini Service with Bring Your Own Key (BYOK) support
 * Role: Senior Vietnamese Cultural Heritage Preservation Specialist
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import { Language } from '../types';
import { ARTISANS_DATA } from '../data/artisans';

const LOCAL_STORAGE_KEY = 'byok_gemini_api_key';

export function getSavedApiKey(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(LOCAL_STORAGE_KEY) || '';
}

export function saveApiKey(key: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LOCAL_STORAGE_KEY, key.trim());
}

export function clearApiKey(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

// System Persona instruction for Cultural Heritage Specialist
function getSystemPrompt(language: Language): string {
  const artisanSummaries = ARTISANS_DATA.map(
    (a) => `- ${a.name} (${a.title}): ${a.heritageName.vi} (${a.location.vi}), cống hiến ${a.yearsOfDedication} năm. Kỹ thuật: ${a.uniqueTechniques.title.vi}`
  ).join('\n');

  if (language === 'vi') {
    return `Bạn là "Chuyên gia Cao cấp về Nghiên cứu & Bảo tồn Di sản Văn hóa Việt Nam", phục vụ trong dự án học tập "Hồ sơ Nghệ nhân Nắm giữ Di sản Văn hóa Việt Nam" của sinh viên Nguyễn Văn Hoàng (PH64335, Lớp B03, Nhóm 2).

Nhiệm vụ của bạn:
1. Trả lời sâu sắc, chuẩn xác, giàu tinh thần tôn vinh văn hóa về các Nghệ nhân Nhân dân (NNND), Nghệ nhân Ưu tú (NNƯT) của Việt Nam.
2. Nắm vững kỹ thuật thanh nhạc dân gian (đổ hột Ca trù, vang rền nền nảy Quan họ, lề lối Hát Xẩm, ngón đàn tài tử...), kỹ nghệ thủ công (men rạn Bát Tràng, in tranh điệp Đông Hồ, tranh vỏ tràm Thoại Sơn, chỉnh cồng chiêng Tây Nguyên, đàn Tính...).
3. Phân biệt rõ danh hiệu NNND và NNƯT theo Luật Thi đua, Khen thưởng và Nghị định của Chính phủ Việt Nam.
4. Dẫn chứng nguồn tin cậy từ Cục Di sản văn hóa (dsvh.gov.vn), Bộ Văn hóa, Thể thao và Du lịch (bvhttdl.gov.vn), UNESCO.
5. Luôn giữ phong thái lịch thiệp, khiêm nhường, đậm đà bản sắc học thuật và văn hóa Việt Nam.

Dưới đây là cơ sở dữ liệu các nghệ nhân tiêu biểu trong hệ thống:
${artisanSummaries}
`;
  } else {
    return `You are a "Senior Specialist in Vietnamese Cultural Heritage Preservation", serving in the academic archival project "Heritage Bearers of Vietnam" by student Nguyen Van Hoang (PH64335, Class B03, Group 2).

Your responsibilities:
1. Provide profound, culturally reverent, and historically accurate knowledge about Vietnam's People's Artisans (NNND) and Meritorious Artisans (NNƯT).
2. Explain traditional music vocal techniques (glottal vibrato in Ca Tru, the Vang-Ren-Nen-Nay standard in Quan Ho, Xam minstrelsy, Southern Don Ca Tai Tu fretting...), traditional crafts (Bat Trang crackle glaze, Dong Ho scallop-shell woodblock printing, Thoai Son cajeput bark collage, gong tuning, Dan Tinh lutes...).
3. Quote and reference official archives from the Department of Cultural Heritage (dsvh.gov.vn), Ministry of Culture, Sports & Tourism, and UNESCO.
4. Maintain an academic, dignified, and insightful tone.

Artisan records available in our system:
${artisanSummaries}
`;
  }
}

export async function askHeritageScholar(
  question: string,
  language: Language,
  userApiKey?: string
): Promise<string> {
  const apiKey = (userApiKey || getSavedApiKey()).trim();

  if (!apiKey) {
    throw new Error(
      language === 'vi'
        ? 'Chưa tìm thấy Gemini API Key. Vui lòng nhập và lưu Key của bạn ở khung phía trên để sử dụng Trợ lý AI.'
        : 'No Gemini API Key found. Please enter and save your personal key in the box above to consult the AI Scholar.'
    );
  }

  const systemInstruction = getSystemPrompt(language);

  // Directly call Google Gemini REST API
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: `${systemInstruction}\n\nCâu hỏi của người nghiên cứu / Researcher's Question:\n${question}`
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.6,
      topP: 0.95,
      maxOutputTokens: 1500
    }
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const msg = errorData?.error?.message || `HTTP ${response.status}: ${response.statusText}`;
      if (response.status === 400 || response.status === 403) {
        throw new Error(
          language === 'vi'
            ? `Gemini API Key không hợp lệ hoặc đã hết hạn (${msg}). Vui lòng kiểm tra lại Key của bạn.`
            : `Invalid or expired Gemini API Key (${msg}). Please verify your key.`
        );
      }
      throw new Error(`Google Gemini API Error: ${msg}`);
    }

    const data = await response.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!candidateText) {
      throw new Error(
        language === 'vi'
          ? 'Không nhận được phản hồi từ mô hình. Vui lòng thử lại với câu hỏi khác.'
          : 'Empty response received from the model. Please try again.'
      );
    }

    return candidateText;
  } catch (error: any) {
    console.error('Gemini API call failed:', error);
    throw error;
  }
}
