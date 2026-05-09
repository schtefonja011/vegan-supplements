export default function Footer() {
    return (
      <footer className="bg-zinc-950 border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
  
          <div>
            <span className="text-white text-xl font-semibold tracking-tight">
              PureForm
            </span>
            <p className="text-zinc-500 text-sm mt-1">
              Premium vegan supplements. No compromise.
            </p>
          </div>
  
          <div className="flex items-center gap-8">
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
  
          <p className="text-zinc-600 text-sm">
            © 2025 PureForm. All rights reserved.
          </p>
  
        </div>
      </footer>
    );
  }