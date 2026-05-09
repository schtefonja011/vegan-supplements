
import { getProducts, urlFor } from '@/lib/sanity'
import Image from 'next/image'

type Product = {
  name: string
  type: string
  description: string
  price: string
  tag: string
  image: any
}

export default async function Products() {
  const products = await getProducts()

  return (
    <section id="products" className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="products-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Products
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Every formula is third-party tested, free from artificial additives, and built for real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product: Product) => (
            <div key={product.name} className="product-card bg-zinc-900 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors">

              <div>
                {/* Product Image */}
                {product.image && (
                  <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={urlFor(product.image).width(400).height(400).url()}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

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
  )
}