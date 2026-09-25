import React, { useState } from 'react';

interface PronetLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'header';
  showText?: boolean;
}

const PRIMARY_LOGO_SRC = '/assets/pronet-logo-cropped.png';
const FALLBACK_LOGO_SRC = 'https://image.noelshack.com/fichiers/2026/39/5/1790294535-chatgpt-image-23-sept-2026-19-07-05.png';

export const PronetLogo: React.FC<PronetLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showText = true,
}) => {
  const [imgSrc, setImgSrc] = useState(PRIMARY_LOGO_SRC);
  const isDarkBg = variant === 'dark';

  const sizeClasses = {
    sm: 'h-9 w-9 sm:h-10 sm:w-10',
    md: 'h-11 w-11 sm:h-12 sm:w-12',
    lg: 'h-14 w-14 sm:h-16 sm:w-16',
    xl: 'h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24',
    header: 'h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-26 lg:w-26',
    '2xl': 'h-24 w-24 sm:h-32 sm:w-32',
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl md:text-4xl',
    header: 'text-xl sm:text-2xl md:text-3xl',
    '2xl': 'text-3xl sm:text-4xl',
  };

  const subSizes = {
    sm: 'text-[8px] tracking-[0.16em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.18em]',
    lg: 'text-[10px] sm:text-xs tracking-[0.2em]',
    xl: 'text-xs sm:text-sm tracking-[0.22em]',
    header: 'text-[8px] sm:text-[10px] md:text-xs tracking-[0.18em] sm:tracking-[0.22em]',
    '2xl': 'text-xs sm:text-sm tracking-[0.24em]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none group ${className}`}>
      {/* Official Logo Image Container */}
      <div
        className={`relative shrink-0 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105 ${
          isDarkBg
            ? 'bg-white p-1 shadow-md shadow-slate-950/40 ring-1 ring-slate-800'
            : 'bg-white shadow-xs border border-slate-100'
        } ${sizeClasses[size]}`}
      >
        <img
          src={imgSrc}
          onError={() => {
            if (imgSrc !== FALLBACK_LOGO_SRC) {
              setImgSrc(FALLBACK_LOGO_SRC);
            }
          }}
          alt="PRONET Propreté - Multi-Services"
          className="w-full h-full object-contain object-center"
          loading="eager"
        />
      </div>

      {/* Accompanying clean typographic brand lockup for maximum readability across all screens */}
      {showText && (
        <div className="flex flex-col justify-center leading-tight">
          <div className="flex items-center">
            <span
              className={`${textSizes[size]} font-black tracking-tight ${
                isDarkBg ? 'text-sky-400' : 'text-sky-600'
              }`}
            >
              PRO
            </span>
            <span
              className={`${textSizes[size]} font-black tracking-tight ${
                isDarkBg ? 'text-emerald-400' : 'text-emerald-600'
              }`}
            >
              NET
            </span>
          </div>
          <span
            className={`${subSizes[size]} font-extrabold uppercase mt-0.5 ${
              isDarkBg ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            PROPRETÉ - MULTI-SERVICES
          </span>
        </div>
      )}
    </div>
  );
};
