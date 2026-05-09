const products = [
    {
      name: "Whey-Free Protein",
      type: "Pea & Rice Blend",
      description: "25g of complete plant protein per serving. Smooth texture, no chalky aftertaste.",
      price: "€39.90",
      tag: "Best Seller",
    },
    {
      name: "Daily Greens",
      type: "Superfood Complex",
      description: "20+ organic greens, adaptogens and digestive enzymes in one clean scoop.",
      price: "€34.90",
      tag: "New",
    },
    {
      name: "Recovery Blend",
      type: "BCAA + Electrolytes",
      description: "Repair muscle, restore hydration and bounce back faster after every workout.",
      price: "€29.90",
      tag: "Fan Favourite",
    },
  ];
  
  export default function Products() {
    return (
      <section id="products" className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Our Products
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Every formula is third-party tested, free from artificial additives, and built for real results.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.name} className="bg-zinc-900 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors">
  
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-xl">🌱</span>
                    </div>
                    <span className="text-xs font-medium text-zinc-400 border border-white/10 rounded-full px-3 py-1">
                      {product.tag}
                    </span>
                  </div>
  
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {product.name}
                  </h3>
                  <p className="text-zinc-500 text-sm mb-4">
                    {product.type}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
  
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-white text-2xl font-bold">
                    {product.price}
                  </span>
                  <button className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                    Add to Cart
                  </button>
                </div>
  
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }