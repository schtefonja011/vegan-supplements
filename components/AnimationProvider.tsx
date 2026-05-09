"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationProvider() {
  useEffect(() => {

    // Hero animations
    gsap.fromTo(".hero-badge",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(".hero-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.4 }
    );
    gsap.fromTo(".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.6 }
    );
    gsap.fromTo(".hero-buttons",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.8 }
    );
    gsap.fromTo(".hero-proof",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    );

    // Products animation
    gsap.fromTo(".products-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".products-title", start: "top 80%" }
      }
    );
    gsap.fromTo(".product-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.15,
        scrollTrigger: { trigger: ".product-card", start: "top 80%" }
      }
    );

    // WhyUs animation
    gsap.fromTo(".whyus-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".whyus-title", start: "top 80%" }
      }
    );
    gsap.fromTo(".benefit-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.15,
        scrollTrigger: { trigger: ".benefit-card", start: "top 80%" }
      }
    );

    // Testimonials animation
    gsap.fromTo(".testimonials-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".testimonials-title", start: "top 80%" }
      }
    );
    gsap.fromTo(".testimonial-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.2,
        scrollTrigger: { trigger: ".testimonial-card", start: "top 80%" }
      }
    );

  }, []);

  return null;
}