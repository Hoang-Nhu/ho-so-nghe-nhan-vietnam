/**
 * Cultural Heritage Motifs, Watermarks, and Traditional Vietnamese Lacquer Elements
 * Dong Son bronze drum (Trống đồng Đông Sơn), Chim Lạc, Cloud scrolls (Mây cổ Đại Việt), and Red Lacquer Seals
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React from 'react';

// Dong Son Drum Center Watermark SVG (Subtle low-opacity background watermark)
export const DongSonWatermark: React.FC<{ className?: string }> = ({ className = 'opacity-[0.035]' }) => {
  return (
    <div 
      aria-hidden="true" 
      className={`pointer-events-none select-none absolute flex items-center justify-center ${className}`}
    >
      <svg 
        viewBox="0 0 800 800" 
        className="w-full h-full text-[#881337] animate-[spin_180s_linear_infinite]"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
      >
        {/* Outer concentric rings */}
        <circle cx="400" cy="400" r="380" strokeDasharray="6 4" strokeWidth="2" />
        <circle cx="400" cy="400" r="350" />
        <circle cx="400" cy="400" r="330" strokeDasharray="3 3" />
        
        {/* Flying Cranes Ring (Chim Lạc bay ngược chiều kim đồng hồ) */}
        <circle cx="400" cy="400" r="290" />
        <circle cx="400" cy="400" r="240" />
        
        {/* Stylized Chim Lạc silhouettes in circle */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 400 400)`}>
            <path
              d="M 400 135 Q 430 145 450 120 Q 430 155 410 160 Q 425 170 445 165 Q 415 185 390 165 Z"
              fill="currentColor"
              opacity="0.7"
            />
          </g>
        ))}

        {/* Concentric geometric rings */}
        <circle cx="400" cy="400" r="200" strokeDasharray="4 2" />
        <circle cx="400" cy="400" r="160" />
        <circle cx="400" cy="400" r="130" strokeDasharray="2 4" />
        <circle cx="400" cy="400" r="90" />

        {/* 14-Point Sun Star at Center (Ngôi sao mặt trời 14 cánh trống đồng Ngọc Lũ) */}
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = (i * 360) / 14;
          return (
            <g key={i} transform={`rotate(${angle} 400 400)`}>
              <polygon
                points="400,310 408,375 392,375"
                fill="currentColor"
                opacity="0.85"
              />
            </g>
          );
        })}
        <circle cx="400" cy="400" r="25" fill="currentColor" opacity="0.4" />
      </svg>
    </div>
  );
};

// Traditional Ornamental Corner Brackets (Góc hoa văn đồng cổ)
export const AntiqueCornerBracket: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ position }) => {
  const getRotation = () => {
    switch (position) {
      case 'top-left': return '';
      case 'top-right': return 'scale-x-[-1]';
      case 'bottom-left': return 'scale-y-[-1]';
      case 'bottom-right': return 'scale-[-1]';
    }
  };

  return (
    <svg 
      viewBox="0 0 40 40" 
      className={`w-7 h-7 absolute pointer-events-none text-[#d4af37] opacity-80 ${getRotation()} ${
        position.includes('top') ? 'top-1.5' : 'bottom-1.5'
      } ${
        position.includes('left') ? 'left-1.5' : 'right-1.5'
      }`}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    >
      <path d="M 4 20 L 4 4 L 20 4" />
      <path d="M 8 16 L 8 8 L 16 8" />
      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      <path d="M 4 4 Q 14 14 24 4" strokeWidth="1" opacity="0.6" />
      <path d="M 4 4 Q 14 14 4 24" strokeWidth="1" opacity="0.6" />
    </svg>
  );
};

// Traditional Red Lacquer Seal Stamp (Dấu Triện đỏ Di sản)
export const RedLacquerSeal: React.FC<{ text?: string; subtext?: string; size?: 'sm' | 'md' }> = ({
  text = 'DI SẢN',
  subtext = 'QUỐC GIA',
  size = 'sm'
}) => {
  return (
    <div 
      className={`inline-flex flex-col items-center justify-center border-2 border-[#b91c1c] rounded-md bg-[#991b1b]/90 text-[#fef2f2] font-serif shadow-xs backdrop-blur-xs select-none rotate-[-4deg] hover:rotate-0 transition-transform ${
        size === 'sm' ? 'px-1.5 py-0.5 text-[9px]' : 'px-2.5 py-1 text-[11px]'
      }`}
      style={{
        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.3), 0 2px 4px rgba(153,27,27,0.3)',
      }}
    >
      <span className="font-extrabold tracking-widest leading-tight uppercase font-serif-culture">
        {text}
      </span>
      {subtext && (
        <span className="text-[7px] tracking-wider opacity-90 leading-tight uppercase border-t border-[#fecdd3]/40 pt-0.5 mt-0.5">
          {subtext}
        </span>
      )}
    </div>
  );
};

// Dong Son Geometric Meander Border Frieze (Dải hoa văn gãy khúc trống đồng)
export const DongSonFriezeDivider: React.FC<{ className?: string }> = ({ className = 'my-6' }) => {
  return (
    <div className={`relative flex items-center justify-center w-full overflow-hidden ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
      <div className="px-4 flex items-center gap-2 text-[#b45309] shrink-0">
        <span className="text-[10px] tracking-widest font-serif opacity-75">❖</span>
        <svg viewBox="0 0 120 16" className="w-24 h-3 text-[#d4af37]" fill="currentColor">
          <path d="M0,8 L8,0 L16,8 L24,0 L32,8 L40,0 L48,8 L56,0 L64,8 L72,0 L80,8 L88,0 L96,8 L104,0 L112,8 L120,0 L120,3 L112,11 L104,3 L96,11 L88,3 L80,11 L72,3 L64,11 L56,3 L48,11 L40,3 L32,11 L24,3 L16,11 L8,3 L0,11 Z" opacity="0.8" />
        </svg>
        <span className="text-[10px] tracking-widest font-serif opacity-75">❖</span>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
    </div>
  );
};

// Classical Vietnamese Lotus and Cloud Crest
export const TraditionalCrest: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  return (
    <div className="text-center space-y-1">
      <div className="flex items-center justify-center gap-3">
        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#b45309]" />
        <span className="text-xs text-[#9f1239] font-serif font-bold tracking-widest uppercase">
          ❦ BẢO TỒN VĂN HÓA ĐẠI VIỆT ❦
        </span>
        <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#b45309]" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold font-serif-culture text-[#2c1810]">
        {title}
      </h3>
      {subtitle && (
        <p className="text-xs sm:text-sm text-[#786b62]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
