import { getHero } from '@/lib/sanity'

export default async function Hero() {
  const hero = await getHero()

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-6">

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <div className="hero-badge inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
          <span className="text-zinc-400 text-sm tracking-wide">{hero.badge}</span>
        </div>

        <h1 className="hero-title text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          {hero.headline}<br />
          <span className="text-zinc-400">{hero.subheadline}</span>
        </h1>

        <p className="hero-subtitle text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          {hero.description}
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-zinc-200 transition-colors text-sm">
            {hero.primaryButtonText}
          </a>
          <a href="#why-us" className="border border-white/20 text-white font-medium px-8 py-4 rounded-full hover:bg-white/5 transition-colors text-sm">
            {hero.secondaryButtonText}
          </a>
        </div>

        <div className="hero-proof mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-zinc-500 text-sm">
          <span>{hero.proofText1}</span>
          <span className="hidden sm:block">·</span>
          <span>{hero.proofText2}</span>
          <span className="hidden sm:block">·</span>
          <span>{hero.proofText3}</span>
        </div>

      </div>
    </section>
  )
}