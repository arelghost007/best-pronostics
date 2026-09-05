// components/FinalCTA.js
import { Zap, Clock, ShieldCheck } from "lucide-react";
import CtaBtn from "../CtaBtn";

export default function FinalCTA({ whatsappLink }: { whatsappLink: string }) {
  return (
    <section
      id="finalCTASection"
      className="relative w-full bg-[#080C14] text-white py-16 sm:py-24 px-4 sm:px-6 flex justify-center items-center overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Texture de grille en aplat (Strictement 0 dégradé) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 1h-38v38h38V1z' fill='%231E293B' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ticket d'Action Final (Bords arrondis & Encoches circulaires) */}
      <div className="relative z-10 w-full max-w-3xl bg-[#0F172A] border-2 border-[#0052FF] rounded-2xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#002B87] text-center flex flex-col items-center transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#002B87]">
        {/* Encoches physiques (Cut-outs) circulaires style ticket */}
        <div className="absolute top-1/2 -left-4 w-7 h-7 bg-[#080C14] border-y-2 border-r-2 border-[#0052FF] rounded-full -translate-y-1/2 z-20"></div>
        <div className="absolute top-1/2 -right-4 w-7 h-7 bg-[#080C14] border-y-2 border-l-2 border-[#0052FF] rounded-full -translate-y-1/2 z-20"></div>

        {/* Badge d'urgence / Scarcity */}
        <div className="inline-flex items-center gap-2 bg-[#080C14] border border-[#0052FF] px-4 py-1.5 rounded-full mb-8 shadow-[0_0_0_4px_rgba(0,82,255,0.1)]">
          <span className="w-2 h-2 bg-[#0052FF] rounded-full shadow-[0_0_8px_#0052FF] animate-pulse"></span>
          <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-widest text-white uppercase">
            Accès VIP Limité
          </span>
        </div>

        {/* Titre Ultra Percutant (Space Grotesk + Aplat Incliné) */}
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.1] mb-6">
          LE COUPON DU SOIR <br />
          <span className="bg-[#0052FF] text-[#080C14] px-4 py-1 inline-block mt-3 -rotate-1 rounded-sm shadow-[4px_4px_0px_0px_#FFFFFF]">
            EST PRÊT.
          </span>
        </h2>

        {/* Ligne de séparation en pointillés style coupon */}
        <div className="w-full border-b-2 border-dashed border-[#1E293B] my-6"></div>

        {/* Copywriting Orienté Résultat & FOMO */}
        <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
          Ne reste pas spectateur pendant que les autres encaissent. Rejoins le
          groupe{" "}
          <strong className="text-white border-b-2 border-[#0052FF]">
            avant le début des matchs
          </strong>{" "}
          et récupère la sélection analysée du jour.
        </p>

        {/* Bouton d'action principal */}
        <div className="w-full sm:w-auto mb-8">
          <CtaBtn whatsappUrl={whatsappLink} />
        </div>

        {/* Éléments de réassurance bas de carte */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-slate-400 uppercase tracking-wider border-t border-[#1E293B] pt-6 w-full">
          <span className="flex items-center gap-1.5">
            <Zap size={14} className="text-[#0052FF]" /> Envoi Instantané
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#0052FF]" /> 100% Gratuit
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-[#0052FF]" /> Sans Inscription
          </span>
        </div>
      </div>
    </section>
  );
}
