// components/InterstitialCTA.js
import { Lock } from "lucide-react";
import CtaBtn from "../CtaBtn";

export default function InterstitialCTA({
  whatsappLink,
}: {
  whatsappLink: string;
}) {
  return (
    <section
      id="interstitialCTASection"
      className="relative w-full bg-[#080C14] text-white py-16 sm:py-24 px-4 sm:px-6 flex justify-center items-center overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Texture de grille en aplat (Aucun dégradé) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 1h-38v38h38V1z' fill='%231E293B' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Conteneur principal style "Ticket" (Bords arrondis et ombre solide) */}
      <div className="relative z-10 w-full max-w-3xl bg-[#0F172A] border-2 border-[#0052FF] rounded-2xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#002B87] text-center flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#002B87]">
        {/* Encoches physiques (Cut-outs) rondes comme sur le Hero */}
        <div className="absolute top-1/2 -left-4 w-7 h-7 bg-[#080C14] border-y-2 border-r-2 border-[#0052FF] rounded-full -translate-y-1/2 z-20"></div>
        <div className="absolute top-1/2 -right-4 w-7 h-7 bg-[#080C14] border-y-2 border-l-2 border-[#0052FF] rounded-full -translate-y-1/2 z-20"></div>

        {/* Badge supérieur avec point clignotant (Bords arrondis) */}
        <div className="inline-flex items-center gap-2 bg-[#0F172A] border border-[#0052FF] px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#0052FF] rounded-full shadow-[0_0_8px_#0052FF] animate-pulse"></span>
          <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-widest text-white uppercase">
            Accès Privé
          </span>
        </div>

        {/* Icône de cadenas dans un cercle arrondi */}
        <div className="mb-6 bg-[#080C14] border-2 border-[#0052FF] w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_0_6px_rgba(0,82,255,0.15)]">
          <Lock size={32} className="text-white" strokeWidth={2.5} />
        </div>

        {/* Titre (Space Grotesk) avec bloc incliné */}
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.1] mb-6">
          Prochains coupons
          <br />
          <span className="bg-[#0052FF] text-[#080C14] px-4 py-1 inline-block mt-3 -rotate-1">
            En Avant-Première
          </span>
        </h2>

        {/* Ligne de séparation en pointillés style ticket */}
        <div className="w-full border-b-2 border-dashed border-[#1E293B] my-6"></div>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto mb-10">
          Les sélections sont partagées{" "}
          <strong className="text-white border-b-2 border-[#0052FF]">
            directement sur WhatsApp
          </strong>{" "}
          avant le début des matchs. Ne rate pas le prochain.
        </p>

        {/* Bouton d'action */}
        <div className="w-full sm:w-auto">
          <CtaBtn whatsappUrl={whatsappLink} />
        </div>
      </div>
    </section>
  );
}
