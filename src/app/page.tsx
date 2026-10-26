// app/page.js
import FinalCTA from "@/components/couponPage/FinalCTA";
import Hero from "@/components/couponPage/Hero";
import InterstitialCTA from "@/components/couponPage/InterstitialCTA";
import StickyBar from "@/components/couponPage/StickyBar";
import WhyJoin from "@/components/couponPage/WhyJoin";
import WinningCoupons from "@/components/couponPage/WinningCoupons";
import { COUPON_DATA } from "@/constants/data";

// Force le rendu en génération statique stricte (SSG)
export const dynamic = "force-static";

export default function Home() {
  // Récupération instantanée depuis les constantes locales (Zéro latence)
  const whatsappLink = COUPON_DATA.whatsapp_link;

  // Données structurées SEO (JSON-LD) pour donner de la force au site sur Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Best Pronostics VIP",
    description:
      "Analyses de pronostics sportifs et coupons à forte cote partagés quotidiennement.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      url: whatsappLink,
    },
  };

  return (
    <>
      {/* Injection des données structurées pour les robots de recherche Google */}
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* On distribue le lien à chaque composant via les props */}
        <Hero />
        <div className="divider"></div>
        <WinningCoupons whatsappLink={whatsappLink} />

        <div className="divider"></div>

        <InterstitialCTA whatsappLink={whatsappLink} />
        <div className="divider"></div>

        <WhyJoin />
        <FinalCTA whatsappLink={whatsappLink} />
        <StickyBar whatsappLink={whatsappLink} />
      </main>
    </>
  );
}
