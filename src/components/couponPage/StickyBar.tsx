// components/StickyBarBottom.tsx
import CtaBtn from "../CtaBtn";

interface StickyBarBottomProps {
  whatsappLink: string;
}

export default function StickyBarBottom({
  whatsappLink,
}: StickyBarBottomProps) {
  return (
    <aside
      id="stickyBarSection"
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t-2 border-amber-500 py-3 px-4 font-space shadow-[0_-10px_20px_0px_rgba(0,0,0,0.9)]"
    >
      {/* Ligne d'accentuation néon lumineuse */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-amber-300 shadow-[0_0_8px_#fbbf24]" />

      <div className="max-w-xl mx-auto flex items-center justify-between gap-4">
        {/* Bouton d'action responsive */}
        <div className="w-full sm:w-auto flex-1 max-w-md mx-auto">
          <CtaBtn whatsappUrl={whatsappLink} />
        </div>
      </div>
    </aside>
  );
}
