/**
 * Express + Vite Full-Stack Server for Vietnamese Cultural Heritage Artisans SPA
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;

const ARTISAN_KNOWLEDGE_BASE = [
  '- Quách Thị Hồ (NNND): Hát Ca Trù (Hà Nội / Hải Dương), 75 năm gắn bó. Kỹ thuật: Nảy hạt (đổ hột), ngân rung cổ họng và gõ phách luồn hơi. Nguồn: dsvh.gov.vn, ich.unesco.org, nhandan.vn.',
  '- Hà Thị Cầu (NNND): Hát Xẩm dân gian (Yên Mô, Ninh Bình), 70 năm gắn bó. Kỹ thuật: Vừa kéo đàn Nhị, vừa gõ sênh bằng chân và ngâm xướng ứng tác. Nguồn: dsvh.gov.vn, bvhttdl.gov.vn, nhandan.vn.',
  '- Trần Kích (NNND): Nhã nhạc Cung đình Huế (Phú Vang, Thừa Thiên Huế), 78 năm gắn bó. Kỹ thuật: Lấy hơi luồn (vừa thổi vừa hít) kèn bầu và ngón rung đàn Nhị Huế. Nguồn: dsvh.gov.vn, ich.unesco.org, bvhttdl.gov.vn.',
  '- Nguyễn Vĩnh Bảo (NNND / Nhạc sư): Đờn ca Tài tử Nam Bộ (Đồng Tháp / TP.HCM), 90 năm gắn bó. Kỹ thuật: Ngón rung mượn, nhấn nhá bán cung và cải tiến đàn tranh 17-19-21 dây. Nguồn: dsvh.gov.vn, ich.unesco.org, nhandan.vn.',
  '- Nguyễn Thị Huệ (NNND): Dân ca Quan họ Bắc Ninh (Làng Diềm, Bắc Ninh), 65 năm gắn bó. Kỹ thuật: Hát Vang - Rền - Nền - Nảy và đối đáp giao duyên cổ truyền. Nguồn: dsvh.gov.vn, ich.unesco.org, bacninh.gov.vn.',
  '- Nguyễn Bá Lân (NNND): Nghề Gốm Bát Tràng (Gia Lâm, Hà Nội), 52 năm gắn bó. Kỹ thuật: Chế biến Men Rạn Cổ (tro trấu, đá vôi, oxit sắt) và nung củi kiểm soát oxy hóa ở 1.250°C. Nguồn: dsvh.gov.vn, bvhttdl.gov.vn.',
  '- Vũ Bá Tư / Ba Tu (NNND): Đờn Ca Tài Tử & Cải Lương (Long An / TP.HCM), 68 năm gắn bó. Kỹ thuật: Đệ nhất danh cầm Đàn Kìm với ngón chữ Nhấn, chữ Day và gảy song thanh. Nguồn: dsvh.gov.vn, bvhttdl.gov.vn.',
  '- Y Khem Kbuôr (NNND): Không gian văn hóa Cồng Chiêng Tây Nguyên (Buôn Ma Thuột, Đắk Lắk), 60 năm gắn bó. Kỹ thuật: Chỉnh Chiêng bằng búa đồng, cầm trịch dàn chiêng Knah và kể sử thi Đăm Săn. Nguồn: dsvh.gov.vn, ich.unesco.org.',
  '- Sầm Văn Dừn (NNND): Thực hành Hát Then & Đàn Tính (Sơn Dương, Tuyên Quang), 55 năm gắn bó. Kỹ thuật: Chế tác Đàn Tính bằng bầu khô, xướng âm Then cổ và chùm xóc nhạc. Nguồn: dsvh.gov.vn, ich.unesco.org.',
  '- Nguyễn Hữu Quả (NNƯT): Nghề làm Tranh dân gian Đông Hồ (Song Hồ, Bắc Ninh), 48 năm gắn bó. Kỹ thuật: Chế màu tự nhiên (than lá tre, hoa dành dành, sỏi son, gỉ đồng), quét điệp lên giấy Dó và in ván gỗ thị. Nguồn: dsvh.gov.vn, bvhttdl.gov.vn.',
  '- Võ Văn Tạng (NNƯT): Nghệ thuật Tranh vỏ Tràm Đồng Tháp Mười (Thoại Sơn, An Giang), 40 năm gắn bó. Kỹ thuật: Phân tầng sắc độ vỏ tràm tự nhiên và ghép vi điểm không hóa chất. Nguồn: bvhttdl.gov.vn, angiang.gov.vn.'
].join('\n');

function getSanitizedApiKey(): string {
  const raw = (process.env.GEMINI_API_KEY || '').trim().replace(/^["']|["']$/g, '');
  if (!raw || raw === 'MY_GEMINI_API_KEY') return '';
  return raw;
}

function buildSystemPrompt(language: 'vi' | 'en'): string {
  if (language === 'vi') {
    return `Bạn là "Chuyên gia Cao cấp về Nghiên cứu & Bảo tồn Di sản Văn hóa Việt Nam", phục vụ trong dự án học tập phi lợi nhuận "Hồ sơ Nghệ nhân Nắm giữ Di sản Văn hóa Việt Nam" của sinh viên Nguyễn Văn Hoàng (MSSV: PH64335, Lớp B03, Nhóm 2).

Nguyên tắc trả lời:
1. Trả lời sâu sắc, chuẩn xác, mạch lạc (khoảng 180–350 từ, chia ý rõ ràng dễ đọc), giàu tinh thần tôn vinh văn hóa về các Nghệ nhân Nhân dân (NNND) và Nghệ nhân Ưu tú (NNƯT) của Việt Nam.
2. Am hiểu kỹ thuật thanh nhạc dân gian (đổ hột Ca trù, vang-rền-nền-nảy Quan họ, lề lối Hát Xẩm, ngón nhấn-day Đờn ca tài tử, hơi luồn kèn bầu Nhã nhạc...) và kỹ nghệ thủ công (men rạn Bát Tràng, giấy điệp Đông Hồ, ghép vỏ tràm Thoại Sơn, chỉnh chiêng Tây Nguyên, đàn Tính...).
3. Phân biệt rõ tiêu chuẩn phong tặng danh hiệu NNND và NNƯT theo Luật Thi đua, Khen thưởng và Nghị định của Chính phủ Việt Nam.
4. Dẫn chứng nguồn chính thống như Cục Di sản văn hóa (dsvh.gov.vn), Bộ Văn hóa, Thể thao và Du lịch (bvhttdl.gov.vn), UNESCO (ich.unesco.org).
5. Luôn giữ phong thái học thuật lịch thiệp, tôn trọng giá trị truyền thống dân tộc.

Dữ liệu hồ sơ nghệ nhân hiện có trong hệ thống:
${ARTISAN_KNOWLEDGE_BASE}`;
  }

  return `You are a "Senior Specialist in Vietnamese Cultural Heritage Preservation", serving in the non-profit academic archival project "Heritage Bearers of Vietnam" by student Nguyen Van Hoang (ID: PH64335, Class B03, Group 2).

Guidelines:
1. Provide insightful, historically accurate, and well-structured answers (around 180–350 words with clear bullet points) honoring Vietnam's People's Artisans (NNND) and Meritorious Artisans (NNƯT).
2. Explain traditional vocal and instrumental techniques (glottal vibrato in Ca Tru, Vang-Ren-Nen-Nay in Quan Ho, Xam minstrelsy, Dan Kim fretting in Don Ca Tai Tu, circular breathing in Nha Nhac) and craftsmanship (Bat Trang crackle glaze, Dong Ho scallop-shell woodblock prints, cajeput bark collage, gong tuning, Dan Tinh).
3. Reference authoritative portals such as the Department of Cultural Heritage (dsvh.gov.vn), Ministry of Culture, Sports and Tourism (bvhttdl.gov.vn), and UNESCO (ich.unesco.org).
4. Maintain a dignified, scholarly, and culturally respectful tone.

Artisan dossiers currently archived in the platform:
${ARTISAN_KNOWLEDGE_BASE}`;
}

function extractReadableError(err: any): { status: number; message: string; reason?: string } {
  let status = typeof err?.status === 'number' ? err.status : 500;
  let message = err?.message || 'Internal Server Error';
  let reason: string | undefined;

  if (typeof message === 'string' && message.trim().startsWith('{')) {
    try {
      const parsed = JSON.parse(message);
      if (parsed?.error?.code && typeof parsed.error.code === 'number') {
        status = parsed.error.code;
      }
      if (parsed?.error?.message) {
        message = parsed.error.message;
      }
      if (Array.isArray(parsed?.error?.details)) {
        const errInfo = parsed.error.details.find((d: any) => typeof d?.reason === 'string');
        if (errInfo?.reason) {
          reason = errInfo.reason;
        }
      }
    } catch {
      // Keep original message if not valid JSON
    }
  }

  return { status, message, reason };
}

async function generateWithRetry(
  apiKey: string,
  contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }>,
  systemInstruction: string
) {
  const isAqKey = apiKey.startsWith('AQ.');

  // Route Default Gemini Project keys (both AIza... and new AQ.... keys) to
  // generativelanguage.googleapis.com (v1beta first, then v1) first.
  // If an AQ. key is a Vertex AI Express Mode key, fall back to aiplatform.googleapis.com.
  const attempts: Array<{
    label: string;
    client: GoogleGenAI;
    models: string[];
  }> = [
    {
      label: 'mldev-v1beta',
      client: new GoogleGenAI({
        apiKey,
        apiVersion: 'v1beta'
      }),
      models: ['gemini-2.5-flash', 'gemini-4-hydrogen', 'gemini-3.1-flash-lite', 'gemini-3.8-flash']
    },
    {
      label: 'mldev-v1',
      client: new GoogleGenAI({
        apiKey,
        apiVersion: 'v1'
      }),
      models: ['gemini-2.5-flash']
    },
    ...(isAqKey
      ? [
          {
            label: 'vertex-v1',
            client: new GoogleGenAI({
              vertexai: true,
              apiKey,
              apiVersion: 'v1'
            }),
            models: ['gemini-2.5-flash', 'gemini-2.5-flash-lite']
          },
          {
            label: 'vertex-v1beta1',
            client: new GoogleGenAI({
              vertexai: true,
              apiKey,
              apiVersion: 'v1beta1'
            }),
            models: ['gemini-2.5-flash', 'gemini-3-flash-preview']
          }
        ]
      : [])
  ];

  let lastError: any;
  const diagnostics: string[] = [];

  for (const attempt of attempts) {
    for (const model of attempt.models) {
      try {
        const useThinking = model === 'gemini-4-hydrogen' && attempt.label === 'mldev-v1beta';
        const config = useThinking
          ? { systemInstruction, thinkingConfig: { thinkingLevel: ThinkingLevel.LOW } }
          : attempt.label === 'mldev-v1'
            ? undefined
            : { systemInstruction };

        return await attempt.client.models.generateContent({
          model,
          contents,
          ...(config ? { config } : {})
        });
      } catch (err: any) {
        lastError = err;
        const { status, message, reason } = extractReadableError(err);
        diagnostics.push(`${attempt.label}/${model}: ${status}${reason ? ` [${reason}]` : ''} ${message}`);
        const shouldContinue =
          status === 503 ||
          status === 429 ||
          status === 500 ||
          status === 404 ||
          status === 400 ||
          (isAqKey && (status === 401 || status === 403));
        if (!shouldContinue) {
          console.error('[heritage-chat] Non-retryable error:', diagnostics.join(' | '));
          throw err;
        }
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }
  }
  console.error('[heritage-chat] All attempts failed:', diagnostics.join(' | '));
  throw lastError;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    const key = getSanitizedApiKey();
    res.json({
      ok: true,
      hasKey: Boolean(key),
      keyType: key.startsWith('AQ.') ? 'aq-key' : key.startsWith('AIza') ? 'aiza-key' : key ? 'unknown' : 'none'
    });
  });

  // API Endpoint for Heritage AI Scholar
  app.post('/api/heritage-chat', async (req, res) => {
    const { question, language = 'vi', history = [] } = (req.body || {}) as {
      question?: string;
      language?: 'vi' | 'en';
      history?: Array<{ role: 'user' | 'model'; content: string }>;
    };

    const lang = language === 'en' ? 'en' : 'vi';

    try {
      const apiKey = getSanitizedApiKey();
      if (!apiKey) {
        return res.status(401).json({
          error:
            lang === 'vi'
              ? 'Chưa có Gemini API Key hợp lệ. Vui lòng thiết lập GEMINI_API_KEY trong mục Settings > Secrets.'
              : 'No valid Gemini API Key configured. Please set GEMINI_API_KEY in Settings > Secrets.'
        });
      }

      if (!question || typeof question !== 'string' || !question.trim()) {
        return res.status(400).json({
          error: lang === 'vi' ? 'Vui lòng nhập nội dung câu hỏi.' : 'Please enter a question.'
        });
      }

      const systemInstruction = buildSystemPrompt(lang);

      // Build multi-turn conversation contents
      const validHistory = Array.isArray(history)
        ? history
            .filter(
              (m) =>
                m &&
                (m.role === 'user' || m.role === 'model') &&
                typeof m.content === 'string' &&
                m.content.trim().length > 0
            )
            .slice(-8)
            .map((m) => ({
              role: m.role,
              parts: [{ text: m.content }]
            }))
        : [];

      const contents = [
        ...validHistory,
        {
          role: 'user' as const,
          parts: [{ text: question.trim() }]
        }
      ];

      const response = await generateWithRetry(apiKey, contents, systemInstruction);

      const answerText = response.text;
      if (!answerText) {
        return res.status(502).json({
          error:
            lang === 'vi'
              ? 'Mô hình chưa trả về nội dung. Vui lòng thử đặt lại câu hỏi.'
              : 'No response generated by the model. Please try again.'
        });
      }

      return res.json({ answer: answerText });
    } catch (err: any) {
      const { status, message, reason } = extractReadableError(err);
      const httpStatus = status >= 400 && status < 600 ? status : 500;
      const detailedMessage =
        reason === 'ACCESS_TOKEN_TYPE_UNSUPPORTED'
          ? `${message} [ACCESS_TOKEN_TYPE_UNSUPPORTED — Kiểm tra Google Cloud Credentials > API restrictions: phải chọn "Generative Language API" (generativelanguage.googleapis.com) thay vì "Gemini API", hoặc để "Don't restrict key"]`
          : message;
      return res.status(httpStatus).json({
        error: detailedMessage
      });
    }
  });

  // Mount Vite dev middleware in development, or serve static dist in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
