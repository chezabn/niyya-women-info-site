import { Heart, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import RevealOnScroll from "../common/RevealOnScroll";
import Parallax from "../common/Parallax";

const posts = [
  { name: "Lina", tag: "Bien-être", color: "bg-rose-100", text: "Aujourd'hui, je prends enfin du temps pour moi 🌿", image: "from-rose-200 to-orange-100" },
  { name: "Sarah", tag: "Inspiration", color: "bg-amber-100", text: "Petit rappel : vous avancez à votre rythme ✨", image: "from-amber-100 to-yellow-200" },
];

function AppPhone({ feed = false }: { feed?: boolean }) {
  return (
      <div className="relative mx-auto w-[min(290px,78vw)] rounded-[2.8rem] border-8 border-[#242424] bg-[#242424] p-1.5 shadow-2xl shadow-black/20">
        <div className="relative h-135 overflow-hidden rounded-[2.2rem] bg-white">
          <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
          <div className="flex h-10 items-center justify-between px-6 pt-1 text-[10px] font-semibold text-gray-800"><span>9:41</span><span>● ◖ ▰</span></div>
          {feed ? (
              <div className="h-[calc(100%-2.5rem)] overflow-hidden px-3 pb-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2"><span className="text-sm font-bold text-[#A77D1D]">niyya</span><Sparkles size={15} className="text-[#C89A2D]" /></div>
                <div className="feed-scroll space-y-3 pt-3">
                  {[...posts, ...posts].map((post, i) => <article key={`${post.name}-${i}`} className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                    <header className="flex items-center gap-2 p-2.5"><div className={`h-7 w-7 rounded-full ${post.color}`} /><div><p className="text-[10px] font-bold text-gray-800">{post.name}</p><p className="text-[8px] text-gray-400">{post.tag} · il y a 2 h</p></div><span className="ml-auto text-xs text-gray-400">•••</span></header>
                    <div className={`flex h-32 items-center justify-center bg-linear-to-br ${post.image}`}><span className="text-4xl">{i % 2 ? "🌼" : "🌿"}</span></div>
                    <div className="p-2.5"><p className="text-[10px] leading-4 text-gray-700">{post.text}</p><div className="mt-2 flex items-center gap-3 text-gray-500"><Heart size={13} /><MessageCircle size={13} /><span className="text-[8px]">Voir les échanges</span></div></div>
                  </article>)}
                </div>
              </div>
          ) : (
              <div className="flex h-[calc(100%-2.5rem)] flex-col items-center justify-center bg-linear-to-b from-[#FBF5E7] to-white px-6 text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F0DD] text-[#A77D1D]"><ShieldCheck size={38} strokeWidth={1.4} /></div>
                <p className="text-lg font-semibold text-gray-900">Bienvenue chez Niyya</p>
                <p className="mt-2 text-xs leading-5 text-gray-500">Un espace bienveillant, réservé aux femmes, pour être soi en toute confiance.</p>
                <div className="mt-7 w-full rounded-2xl border border-[#EFE5CE] bg-white p-4 text-left shadow-sm"><p className="text-[10px] font-semibold text-gray-800">Votre communauté vous attend</p><div className="mt-3 flex -space-x-2">{["bg-rose-200", "bg-amber-200", "bg-purple-200", "bg-green-200"].map((c) => <span key={c} className={`h-8 w-8 rounded-full border-2 border-white ${c}`} />)}<span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#F8F0DD] text-[9px] text-[#A77D1D]">+2k</span></div><p className="mt-3 text-[9px] text-gray-400">Des femmes, des parcours, une même envie de partager.</p></div>
              </div>
          )}
        </div>
      </div>
  );
}

export default function FeatureHighlights() {
  return (
      <section className="overflow-hidden bg-[#FFFEFC]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">

          {/* Ligne 1 : texte à gauche, téléphone à droite */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll variant="from-left" className="max-w-xl text-center lg:text-left">
              <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">Un espace sûr</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl">Un espace pensé par et pour les femmes.</h2>
              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">Rejoignez une communauté exclusivement féminine, imaginée pour partager librement, se soutenir et créer des liens en toute confiance.</p>
            </RevealOnScroll>

            <div className="relative flex justify-center py-5">
              <Parallax speed={0.08} className="absolute h-80 w-80 rounded-full bg-primary/10 sm:h-96 sm:w-96" />
              <RevealOnScroll className="relative" variant="from-right"><AppPhone /></RevealOnScroll>
            </div>
          </div>

          {/* Ligne 2 : téléphone à gauche, texte à droite */}
          <div className="mt-20 grid items-center gap-12 lg:mt-28 lg:grid-cols-2 lg:gap-20">
            <div className="relative order-2 flex justify-center py-5 lg:order-1">
              <Parallax speed={-0.08} className="absolute h-80 w-80 rounded-full border border-primary/20 sm:h-96 sm:w-96" />
              <RevealOnScroll className="relative" variant="from-left" delay={120}><AppPhone feed /></RevealOnScroll>
            </div>

            <RevealOnScroll variant="from-right" className="order-1 max-w-xl text-center lg:order-2 lg:text-left">
              <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">Le fil Niyya</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl">Découvrez, partagez et faites partie de la communauté.</h2>
              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">Faites défiler les inspirations du quotidien, découvrez des parcours qui vous ressemblent et partagez vos idées avec la communauté.</p>
            </RevealOnScroll>
          </div>

        </div>
        <style>{`@keyframes feed-scroll { 0%, 12% { transform: translateY(0); } 48%, 60% { transform: translateY(-155px); } 90%, 100% { transform: translateY(0); } } .feed-scroll { animation: feed-scroll 12s ease-in-out infinite; } @media (prefers-reduced-motion: reduce) { .feed-scroll { animation: none; } }`}</style>
      </section>
  );
}
