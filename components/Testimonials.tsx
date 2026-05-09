const testimonials = [
    {
      quote: "I've tried every plant protein on the market. PureForm is the only one that actually mixes well, tastes great, and doesn't leave me bloated. It's a permanent part of my routine now.",
      name: "Maria K.",
      role: "Marathon Runner",
      initials: "MK",
    },
    {
      quote: "As a vegan athlete I struggled to hit my protein targets. PureForm changed that completely. The Recovery Blend is something else — I wake up feeling fresh after hard training days.",
      name: "Thomas B.",
      role: "CrossFit Coach",
      initials: "TB",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section id="testimonials" className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="testimonials-title text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Real People. Real Results.
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Join thousands of athletes and everyday people who made the switch to clean nutrition.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card bg-zinc-900 border border-white/10 rounded-2xl p-8">
                <p className="text-zinc-300 text-base leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-medium">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-zinc-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }