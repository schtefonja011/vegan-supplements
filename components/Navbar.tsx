export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <span className="text-white text-xl font-semibold tracking-tight">
          PureForm
        </span>

        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-zinc-400 hover:text-white text-sm transition-colors">
            Products
          </a>
          <a href="#why-us" className="text-zinc-400 hover:text-white text-sm transition-colors">
            Why Us
          </a>
          <a href="#testimonials" className="text-zinc-400 hover:text-white text-sm transition-colors">
            Reviews
          </a>
        </div>

        <a href="#products" className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-zinc-200 transition-colors">
          Shop Now
        </a>

      </div>
    </nav>
  );
}