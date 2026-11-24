/**
 * Client Service communicating with Server-Side Gemini API (/api/heritage-chat)
 * Role: Senior Vietnamese Cultural Heritage Preservation Specialist
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import { Language, ChatMessage } from '../types';

export async function askHeritageScholar(
  question: string,
  language: Language,
  history: ChatMessage[] = []
): Promise<string> {
  const formattedHistory = history
    .filter((m) => m.id !== 'welcome' && (m.role === 'user' || m.role === 'model'))
    .map((m) => ({
      role: m.role as 'user' | 'model',
      content: m.content
    }));

  const response = await fetch('/api/heritage-chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      question,
      language,
      history: formattedHistory
    })
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const serverMsg = data?.error || `HTTP ${response.status}: ${response.statusText}`;
    if (response.status === 400 || response.status === 401 || response.status === 403) {
      throw new Error(
        language === 'vi'
          ? `API Key chưa hợp lệ hoặc chưa được cấp quyền (${serverMsg}). Vui lòng kiểm tra lại GEMINI_API_KEY trong mục Settings > Secrets.`
          : `Invalid or unauthorized Gemini API Key (${serverMsg}). Please check GEMINI_API_KEY in Settings > Secrets.`
      );
    }
    if (response.status === 429) {
      throw new Error(
        language === 'vi'
          ? `Hệ thống đang vượt quá giới hạn lượt gọi (429). Vui lòng thử lại sau ít phút.`
          : `Rate limit exceeded (429). Please wait a moment and try again.`
      );
    }
    if (response.status === 503) {
      throw new Error(
        language === 'vi'
          ? `Máy chủ AI đang có lượng truy cập cao tạm thời (503). Xin vui lòng thử gửi lại câu hỏi sau vài giây.`
          : `The AI model is experiencing temporary high demand (503). Please try sending your question again in a few seconds.`
      );
    }
    throw new Error(
      language === 'vi'
        ? `Lỗi kết nối Trợ lý AI: ${serverMsg}`
        : `AI Scholar connection error: ${serverMsg}`
    );
  }

  if (!data?.answer) {
    throw new Error(
      language === 'vi'
        ? 'Không nhận được phản hồi từ mô hình. Vui lòng thử lại với câu hỏi khác.'
        : 'Empty response received from the model. Please try again.'
    );
  }

  return data.answer;
}
