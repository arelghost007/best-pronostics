// components/WhyJoin.tsx
import { Activity, Bell, Zap } from "lucide-react";

export default function WhyJoin() {
  const reasons = [
    {
      icon: Zap,
      title: "Accès Anticipé",
      description:
        "Profite des meilleures cotes avant qu'elles ne chutent. Nos membres VIP ont toujours une longueur d'avance sur les bookmakers.",
      code: "SYS.01",
    },
    {
      icon: Activity,
      title: "Filtre Chirurgical",
      description:
        "Fini les paris à l'aveugle. Chaque match est décortiqué par la data et validé manuellement pour garantir un taux de réussite maximal.",
      code: "SYS.02",
    },
    {
      icon: Bell,
      title: "Copier. Coller. Gagner.",
      description:
        "Reçois le ticket prêt à jouer directement sur ton WhatsApp. Une alerte, un clic, et ta mise est placée sans le moindre effort.",
      code: "SYS.03",
    },
  ];

  return (
    <section
      id="whyJoinSection"
      className="relative w-full bg-[#080C14] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y-2 border-[#1E293B] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Texture de grille en aplat (Aucun dégradé) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 1h-38v38h38V1z' fill='%231E293B' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ligne d'accentuation supérieure */}
      <div className="absolute top-0 right-1/4 w-40 h-1 bg-[#0052FF]" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Titre (Space Grotesk) orienté action */}
        <h2 className="font-['Space_Grotesk',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-center text-white mb-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
          <span>POURQUOI PASSER</span>
          <span className="bg-[#0052FF] text-[#080C14] px-4 py-1 inline-block -rotate-1 rounded-sm shadow-[4px_4px_0px_0px_#FFFFFF]">
            VIP ?
          </span>
        </h2>

        {/* Sous-titre Technique & Persuasif */}
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg text-center uppercase tracking-widest font-bold mb-14 border-b border-slate-800 pb-4">
          Zéro place au hasard •{" "}
          <span className="text-white border-b-2 border-[#0052FF]">
            Méthode prouvée
          </span>{" "}
          • Rentabilité maximisée
        </p>

        {/* Grille de cartes arrondies avec effet Brutaliste */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#0F172A] border-2 border-[#1E293B] hover:border-[#0052FF] rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-[4px_4px_0px_0px_#080C14] hover:shadow-[8px_8px_0px_0px_#002B87] hover:-translate-y-1 flex flex-col justify-between group"
              >
                {/* Marqueur de code technique */}
                <div className="absolute top-5 right-5 font-mono text-[10px] text-slate-600 group-hover:text-[#0052FF] font-bold tracking-widest transition-colors">
                  {reason.code}
                </div>

                <div>
                  {/* Icône style "Badge" (Arrondie avec ring) */}
                  <div className="mb-8 inline-block">
                    <div className="bg-[#080C14] text-[#0052FF] w-14 h-14 rounded-full border-2 border-[#0052FF] shadow-[0_0_0_6px_rgba(0,82,255,0.1)] flex items-center justify-center group-hover:bg-[#0052FF] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Titre de la carte */}
                  <h3 className="font-['Space_Grotesk',sans-serif] text-xl sm:text-2xl font-extrabold uppercase text-white mb-3 tracking-wide group-hover:text-[#38BDF8] transition-colors">
                    {reason.title}
                  </h3>

                  {/* Description orientée bénéfice */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Bas de carte (Séparateur pointillé style ticket) */}
                <div className="mt-8 pt-4 border-t-2 border-dashed border-[#1E293B] group-hover:border-[#0052FF]/40 transition-colors flex items-center justify-between text-[10px] font-mono uppercase text-slate-500 group-hover:text-slate-300">
                  <span>PROTOCOLE ACTIF</span>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0052FF] opacity-75 hidden group-hover:inline-flex"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-700 group-hover:bg-[#0052FF] transition-colors"></span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
