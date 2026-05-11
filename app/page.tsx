export const revalidate = 60

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <AnimationProvider />
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}