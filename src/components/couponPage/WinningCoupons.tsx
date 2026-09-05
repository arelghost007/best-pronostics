// components/WinningCoupons.js
// Pas de 'use client' ici, ce composant s'exécute côté serveur

import { WONNING_COUPONS } from "@/constants/data";
import ScaleCarousel from "../Embla-carousel/ScaleCarousel";
import { Activity, ShieldCheck } from "lucide-react";

export default function WinningCoupons({
  whatsappLink,
}: {
  whatsappLink: string;
}) {
  const coupons = WONNING_COUPONS;

  return (
    <section
      id="winning-coupons"
      className="relative w-full bg-[#080C14] text-white py-16 sm:py-24 px-4 sm:px-6 flex justify-center items-center overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Texture de grille en aplat (Aucun dégradé) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 1h-38v38h38V1z' fill='%231E293B' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Conteneur principal style "Ticket Géant" */}
      <div className="relative z-10 w-full max-w-5xl bg-[#0F172A] border-2 border-[#0052FF] rounded-2xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#002B87] flex flex-col items-center">
        {/* Encoches physiques (Cut-outs) circulaires */}
        <div className="absolute top-1/2 -left-4 w-7 h-7 bg-[#080C14] border-y-2 border-r-2 border-[#0052FF] rounded-full -translate-y-1/2 z-20 hidden sm:block"></div>
        <div className="absolute top-1/2 -right-4 w-7 h-7 bg-[#080C14] border-y-2 border-l-2 border-[#0052FF] rounded-full -translate-y-1/2 z-20 hidden sm:block"></div>

        {/* Badge supérieur */}
        <div className="inline-flex items-center gap-2 bg-[#080C14] border border-[#0052FF] px-4 py-1.5 rounded-full mb-6 shadow-[0_0_0_4px_rgba(0,82,255,0.1)]">
          <ShieldCheck size={14} className="text-[#0052FF]" />
          <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-widest text-white uppercase">
            Historique 100% Vérifié
          </span>
        </div>

        {/* Titre (Space Grotesk) avec icône et bloc incliné */}
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white text-center leading-[1.1] mb-4 flex flex-wrap justify-center items-center gap-3">
          <Activity
            size={38}
            className="text-[#0052FF] bg-[#080C14] p-1.5 rounded-full border border-[#0052FF] hidden sm:block"
          />
          <span>Derniers coupons</span>
          <span className="bg-[#0052FF] text-[#080C14] px-4 py-1 inline-block -rotate-1 rounded-sm">
            Gagnants
          </span>
        </h2>

        <p className="text-sm text-slate-400 max-w-md text-center mb-8">
          Preuves directes •{" "}
          <strong className="text-white border-b-2 border-[#0052FF]">
            Transparence totale
          </strong>{" "}
          • Mises encaissées
        </p>

        {/* Ligne de séparation en pointillés style ticket */}
        <div className="w-full border-b-2 border-dashed border-[#1E293B] mb-8"></div>

        {/* Composant Client (Carrousel) */}
        <div className="w-full relative">
          <ScaleCarousel winCoupons={coupons} whatsappLink={whatsappLink} />
        </div>
      </div>
    </section>
  );
}
