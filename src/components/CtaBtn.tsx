"use client";

import { ArrowRight, Zap } from "lucide-react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

interface CtaBtnProps {
  whatsappUrl: string;
  className?: string;
}

export default function CtaBtn({ whatsappUrl, className = "" }: CtaBtnProps) {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "Récupérer le coupon WhatsApp",
        content_category: "Conversion",
      });
    }
  };

  return (
    <div
      className={`w-full sm:w-auto relative group z-10 flex justify-center ${className}`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0052FF] text-white border-2 border-[#0052FF] rounded-xl py-4 px-8 sm:px-10 shadow-[6px_6px_0px_0px_#002B87] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_#002B87] active:translate-y-[4px] active:translate-x-[4px] active:shadow-[0px_0px_0px_0px_#002B87] transition-all duration-200 cursor-pointer overflow-hidden"
      >
        {/* Effet de reflet géométrique au survol (Strictement 0 dégradé, juste un bloc blanc semi-transparent oblique) */}
        <div className="absolute inset-0 w-[200%] translate-x-[-150%] skew-x-[-45deg] bg-white/20 group-hover:translate-x-[150%] transition-transform duration-700 ease-out z-0"></div>

        {/* Icône Action Rapide */}
        <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-current animate-pulse relative z-10" />

        {/* Copywriting orienté Bénéfice & Action */}
        <span className="font-['Space_Grotesk',sans-serif] font-extrabold text-base sm:text-xl uppercase tracking-widest whitespace-nowrap relative z-10">
          Récupérer le Coupon
        </span>

        {/* Flèche d'interaction dynamique */}
        <ArrowRight className="w-6 h-6 stroke-[3] relative z-10 transition-transform duration-200 group-hover:translate-x-2" />
      </a>
    </div>
  );
}
