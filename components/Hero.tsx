export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-6">

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
          <span className="text-zinc-400 text-sm tracking-wide">100% Plant Based</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          Fuel Your Body.<br />
          <span className="text-zinc-400">The Clean Way.</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Premium vegan proteins and supplements crafted for performance, recovery, and everyday vitality. No compromise. No fillers. Just pure results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-zinc-200 transition-colors text-sm">
            Shop Products
          </a>
          <a href="#why-us" className="border border-white/20 text-white font-medium px-8 py-4 rounded-full hover:bg-white/5 transition-colors text-sm">
            Learn More
          </a>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-zinc-500 text-sm">
          <span>4.9/5 from 2,000+ reviews</span>
          <span className="hidden sm:block">·</span>
          <span>100% Vegan Certified</span>
          <span className="hidden sm:block">·</span>
          <span>Free shipping over 50 EUR</span>
        </div>

      </div>
    </section>
  );
}