import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Pricing from "@/components/home/pricing";
import Testimonials from "@/components/home/testimonials";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </div>
  );
}
