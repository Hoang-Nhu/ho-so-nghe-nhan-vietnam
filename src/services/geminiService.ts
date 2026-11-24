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

  const rawText = await response.text().catch(() => '');
  let data: any = null;
  if (rawText) {
    try {
      data = JSON.parse(rawText);
    } catch {
      data = null;
    }
  }

  if (!response.ok) {
    const fallbackDetail = rawText && rawText.length < 300 ? rawText.replace(/<[^>]+>/g, '').trim() : response.statusText;
    const serverMsg = data?.error || `HTTP ${response.status}${fallbackDetail ? `: ${fallbackDetail}` : ''}`;

    if (response.status === 401) {
      throw new Error(
        language === 'vi'
          ? `API Key chưa hợp lệ (${serverMsg}). Vui lòng kiểm tra lại GEMINI_API_KEY trong mục Settings > Secrets.`
          : `Invalid Gemini API Key (${serverMsg}). Please check GEMINI_API_KEY in Settings > Secrets.`
      );
    }
    if (response.status === 403) {
      throw new Error(
        language === 'vi'
          ? `Yêu cầu bị từ chối quyền truy cập (${serverMsg}). Nếu bạn đang dùng phiên bản Shared App hoặc proxy hạn chế POST, hãy mở trang Development App hoặc kiểm tra quyền Generative Language API.`
          : `Access forbidden (${serverMsg}). Check Generative Language API permissions or use the Development App URL.`
      );
    }
    if (response.status === 429) {
      throw new Error(
        language === 'vi'
          ? `API Key đã chạm giới hạn lượt gọi miễn phí trong ngày hoặc mỗi phút (429). Vui lòng đợi hoặc dùng key khác.`
          : `API rate/daily free-tier limit exceeded (429). Please wait or use another key.`
      );
    }
    if (response.status === 503) {
      throw new Error(
        language === 'vi'
          ? `Máy chủ mô hình Gemini đang quá tải tạm thời (503). Xin vui lòng bấm gửi lại câu hỏi sau vài giây.`
          : `Gemini model servers are experiencing temporary high demand (503). Please try again in a few seconds.`
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
