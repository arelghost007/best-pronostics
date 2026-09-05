"use client";

import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { CircleCheckBig, Trophy } from "lucide-react";
import { WinningCoupon } from "@/types/dataTypes";
import CtaBtn from "../CtaBtn";

interface ScaleCarouselProps {
  winCoupons: WinningCoupon[];
  whatsappLink: string;
}

/* ─── VIDEO POPUP ──────────────────────────────────────────────────────────── */
interface VideoPopupProps {
  videoUrl: string;
  onClose: () => void;
  whatsappLink: string;
}

const VideoPopup = ({ videoUrl, onClose, whatsappLink }: VideoPopupProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/88 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#0F172A] border-2 border-[#0052FF] rounded-2xl overflow-hidden shadow-[12px_12px_0px_0px_#002B87]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full border border-slate-700 bg-[#080C14] text-white hover:text-[#0052FF] hover:border-[#0052FF] flex items-center justify-center transition-colors cursor-pointer"
          onClick={onClose}
          aria-label="Fermer"
        >
          ✕
        </button>
        <video
          className="w-full max-h-[65vh] bg-black outline-none"
          src={videoUrl}
          autoPlay
          controls
          playsInline
        />
        <div className="flex items-center justify-center gap-2 p-3 font-['Plus_Jakarta_Sans',sans-serif] text-xs text-slate-400 text-center border-t border-[#1E293B] bg-[#080C14]">
          <Trophy size={14} className="text-[#0052FF]" /> Résultat du coupon
          &nbsp;·&nbsp; <span className="text-white font-bold">Groupe VIP</span>
        </div>
        <div className="flex justify-center items-center p-4 bg-[#0F172A]">
          <CtaBtn whatsappUrl={whatsappLink} />
        </div>
      </div>
    </div>
  );
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────────── */
export default function ScaleCarousel({
  winCoupons,
  whatsappLink,
}: ScaleCarouselProps) {
  // Activation du défilement automatique toutes les 4000ms avec pause au survol
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
      containScroll: "keepSnaps",
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!winCoupons || winCoupons.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500 font-semibold text-sm font-['Plus_Jakarta_Sans',sans-serif]">
        Aucun coupon validé disponible pour le moment.
      </div>
    );
  }

  return (
    <>
      {activeVideo && (
        <VideoPopup
          videoUrl={activeVideo}
          onClose={() => setActiveVideo(null)}
          whatsappLink={whatsappLink}
        />
      )}

      <div className="relative w-full py-8 px-4 font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Structure du carrousel Embla */}
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex items-center gap-0 will-change-transform">
            {winCoupons.map((coupon, index) => {
              const isSelected = selectedIndex === index;
              return (
                <div
                  key={coupon.id}
                  className={`flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 p-3 transition-all duration-400 ease-out flex justify-center ${
                    isSelected
                      ? "scale-100 opacity-100 z-20"
                      : "scale-[0.88] opacity-50 z-10"
                  }`}
                >
                  {/* Carte Coupon Moderne & Brutaliste */}
                  <div
                    className={`w-full max-w-[360px] bg-[#0F172A] border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                      isSelected
                        ? "border-[#0052FF] shadow-[8px_8px_0px_0px_#002B87]"
                        : "border-[#1E293B] shadow-[4px_4px_0px_0px_#080C14]"
                    }`}
                  >
                    {/* Image du coupon */}
                    <div className="relative w-full aspect-[3/4]">
                      {coupon.image_url ? (
                        <Image
                          src={coupon.image_url}
                          alt={`Coupon gagnant n°${coupon.id}`}
                          fill
                          sizes="(max-width: 480px) 85vw, 360px"
                          priority={index === 0}
                          className="object-contain bg-[#080C14]"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#080C14] flex items-center justify-center text-xs text-slate-600 font-mono">
                          Aucun visuel
                        </div>
                      )}

                      {/* Bouton vidéo interactif optionnel */}
                      {coupon.video_url && (
                        <button
                          className="absolute bottom-3 right-3 z-10 flex items-center gap-2 bg-[#080C14]/90 border border-[#0052FF] text-[#0052FF] text-xs font-extrabold uppercase tracking-wider py-2 px-3 rounded-full backdrop-blur-md hover:bg-[#0052FF] hover:text-white transition-all cursor-pointer shadow-[2px_2px_0px_0px_#002B87]"
                          onClick={() => setActiveVideo(coupon.video_url!)}
                          aria-label="Voir la vidéo du résultat"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#0052FF] text-white flex items-center justify-center flex-shrink-0">
                            ▶
                          </span>
                          Résultat VIP
                        </button>
                      )}
                    </div>

                    {/* Contenu et Statistiques */}
                    <div>
                      {/* En-tête de carte */}
                      <div className="flex justify-between items-center px-4 py-3 border-b-2 border-[#1E293B] bg-[#080C14]/50">
                        <div className="inline-flex items-center gap-1.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-[11px] font-extrabold tracking-wider px-3 py-1 rounded-full">
                          <CircleCheckBig size={14} /> VALIDÉ
                        </div>
                        <div className="font-mono text-[11px] text-slate-400">
                          {coupon.date || "—"}
                        </div>
                      </div>

                      {/* Grille de stats (Cote / Mise / Gain) */}
                      <div className="grid grid-cols-3 divide-x divide-[#1E293B] border-b-2 border-[#1E293B] bg-[#0F172A]">
                        <div className="text-center p-3">
                          <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                            Cote
                          </div>
                          <div className="font-['Space_Grotesk',sans-serif] text-lg text-white font-extrabold">
                            x{coupon.odds || "—"}
                          </div>
                        </div>
                        <div className="text-center p-3">
                          <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                            Mise
                          </div>
                          <div className="font-['Space_Grotesk',sans-serif] text-lg text-white font-extrabold">
                            {coupon.stake || "—"}
                          </div>
                        </div>
                        <div className="text-center p-3">
                          <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                            Gain
                          </div>
                          <div className="font-['Space_Grotesk',sans-serif] text-lg text-[#25D366] font-extrabold">
                            {coupon.gain || "—"}
                          </div>
                        </div>
                      </div>

                      {/* Bas de carte / Footer */}
                      <div className="py-2.5 px-4 bg-[#080C14] text-[11px] text-slate-400 text-center font-medium">
                        Partagé dans le groupe{" "}
                        <span className="text-white font-bold border-b border-[#0052FF]">
                          VIP
                        </span>{" "}
                        avant les matchs
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Boutons de navigation Flèches */}
        <button
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-30 w-10 h-10 rounded-full border-2 border-[#0052FF] bg-[#0F172A] text-[#0052FF] flex items-center justify-center cursor-pointer hover:bg-[#0052FF] hover:text-white transition-all shadow-[4px_4px_0px_0px_#002B87]"
          onClick={scrollPrev}
          aria-label="Précédent"
        >
          ←
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-30 w-10 h-10 rounded-full border-2 border-[#0052FF] bg-[#0F172A] text-[#0052FF] flex items-center justify-center cursor-pointer hover:bg-[#0052FF] hover:text-white transition-all shadow-[4px_4px_0px_0px_#002B87]"
          onClick={scrollNext}
          aria-label="Suivant"
        >
          →
        </button>

        {/* Points de pagination */}
        <div className="flex justify-center gap-2 mt-6" role="tablist">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={selectedIndex === index}
              aria-label={`Coupon ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${
                selectedIndex === index
                  ? "w-8 bg-[#0052FF]"
                  : "w-2 bg-[#1E293B]"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
