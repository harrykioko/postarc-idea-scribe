
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { LiveDemoSection } from "@/components/landing/LiveDemoSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/5 to-transparent pointer-events-none" />
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
      </div>
      <div id="demo-section">
        <LiveDemoSection />
      </div>
      <div id="pricing-section">
        <PricingSection />
      </div>
      <TestimonialsSection />
      <FAQSection />
      
      {/* Continuous background wrapper for Final CTA and Footer */}
      <div className="relative overflow-hidden">
        {/* Shared Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/63dc25eb-2892-4bb4-afb0-7279ac87e171.png')`
          }}
        />
        
        <FinalCTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
