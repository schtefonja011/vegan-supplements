const benefits = [
    {
      icon: "🧪",
      title: "Third-Party Tested",
      description: "Every batch is independently tested for purity, potency, and safety. What's on the label is what's in the product.",
    },
    {
      icon: "🌿",
      title: "100% Plant Based",
      description: "No whey, no fillers, no artificial anything. Just clean plant-powered ingredients your body can actually use.",
    },
    {
      icon: "⚡",
      title: "Performance Proven",
      description: "Formulated with athletes in mind. Real macros, real recovery, real results — without compromising your values.",
    },
  ];
  
  export default function WhyUs() {
    return (
      <section id="why-us" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="whyus-title text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Why PureForm?
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              We built the brand we wished existed. Clean ingredients, honest labels, no shortcuts.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="benefit-card text-center px-4">
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }