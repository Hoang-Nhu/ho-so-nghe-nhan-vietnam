/**
 * About & Author Information Section (Bắt buộc hiển thị rõ thông tin sinh viên)
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React from 'react';
import { Language } from '../types';
import { I18N } from '../data/i18n';
import { UserCheck, GraduationCap, Target, Layers } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = I18N[language];

  return (
    <section id="about" className="py-14 bg-[#faf7f2] border-t border-[#e5d8c5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fef2f2] text-[#9f1239] text-xs font-bold border border-[#fecdd3]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>THÔNG TIN TÁC GIẢ & HỒ SƠ HỌC TẬP</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-culture text-[#2c1810]">
            {t.about.heading}
          </h2>

          <p className="text-sm sm:text-base text-[#574438] leading-relaxed">
            {t.about.subheading}
          </p>
        </div>

        {/* Two Columns Grid: Student Credentials & Project Scope */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Student Credentials */}
          <div className="bg-white rounded-3xl border-2 border-[#d4af37]/60 p-6 sm:p-7 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#881337] to-[#4c0519] text-[#fef3c7] flex items-center justify-center font-bold text-lg shadow-sm">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9f1239]">
                  {language === 'vi' ? 'Sinh viên nghiên cứu' : 'Student Researcher'}
                </span>
                <h3 className="text-xl font-bold text-[#2c1810] font-serif-culture">
                  Nguyễn Văn Hoàng
                </h3>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#faf7f2] border border-[#f0e6d8]">
                <span className="text-[#786b62] font-medium">{t.about.studentNameLabel}</span>
                <strong className="text-[#2c1810] font-bold">Nguyễn Văn Hoàng</strong>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#faf7f2] border border-[#f0e6d8]">
                <span className="text-[#786b62] font-medium">{t.about.studentIdLabel}</span>
                <strong className="text-[#881337] font-mono font-bold text-base">PH64335</strong>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#faf7f2] border border-[#f0e6d8]">
                <span className="text-[#786b62] font-medium">{t.about.classLabel}</span>
                <strong className="text-[#2c1810] font-bold">Lớp B03</strong>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#faf7f2] border border-[#f0e6d8]">
                <span className="text-[#786b62] font-medium">{t.about.groupLabel}</span>
                <strong className="text-[#b45309] font-bold">Nhóm 2</strong>
              </div>
            </div>
          </div>

          {/* Card 2: Mission & Strict Project Scope */}
          <div className="bg-white rounded-3xl border border-[#ebdccb] p-6 sm:p-7 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#78350f]">
                <Target className="w-4 h-4 text-[#b45309]" />
                <span>{t.about.purposeTitle}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#4b382a] leading-relaxed">
                {t.about.purposeDesc}
              </p>

              <div className="p-4 rounded-2xl bg-[#fffbeb] border border-[#fde68a] text-xs text-[#92400e] space-y-1">
                <strong>{language === 'vi' ? 'Quy chuẩn danh hiệu:' : 'Honorary Statutory Titles:'}</strong>
                <p>
                  {language === 'vi'
                    ? '• NNND: Nghệ nhân Nhân dân — Danh hiệu vinh dự nhà nước cao quý nhất trao cho cá nhân có cống hiến đặc biệt xuất sắc.'
                    : "• NNND: People's Artisan — Highest honorary state title for extraordinary lifelong preservation accomplishments."}
                </p>
                <p>
                  {language === 'vi'
                    ? '• NNƯT: Nghệ nhân Ưu tú — Danh hiệu vinh dự nhà nước trao cho cá nhân có cống hiến xuất sắc trong gìn giữ di sản.'
                    : '• NNƯT: Meritorious Artisan — Prestigious state title recognizing exceptional heritage transmission.'}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#f0e6d8] flex items-center gap-2 text-[11px] text-[#786b62]">
              <Layers className="w-3.5 h-3.5 text-[#b45309]" />
              <span>{t.about.techStack}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
