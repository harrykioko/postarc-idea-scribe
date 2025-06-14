
import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import { Navigation } from "./Navigation";

export const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-[#0B1C34] via-[#142F4A] to-[#051424]">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,194,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_230deg_at_50%_50%,transparent_0deg,rgba(0,255,194,0.03)_120deg,transparent_240deg)]" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Turn your ideas into{" "}
              <span className="relative bg-gradient-to-r from-[#00FFC2] via-[#00e6b0] to-[#00FFC2] bg-clip-text text-transparent">
                LinkedIn posts
              </span>{" "}
              in seconds
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-300/90 mb-20 leading-relaxed font-medium">
              Shape ideas. Share authority. Try our AI — no sign-up, no friction.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-32">
              <Button
                onClick={scrollToDemo}
                size="lg"
                className="bg-[#00FFC2] hover:bg-[#00e6b0] text-slate-900 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,194,0.3)] animate-fade-in-up"
              >
                Try the Demo
              </Button>
              <Button
                onClick={scrollToHowItWorks}
                size="lg"
                className="bg-white hover:bg-white/95 text-slate-900 border border-[#00FFC2]/30 hover:border-[#00FFC2] hover:shadow-[0_0_15px_rgba(0,255,194,0.2)] px-6 py-4 text-base rounded-full transition-all duration-300 hover:scale-105 animate-fade-in-up delay-100 group"
              >
                <Play className="w-4 h-4 mr-2 group-hover:text-[#00FFC2] transition-colors" />
                Watch it in action
              </Button>
            </div>
            
            {/* Sample Post Card */}
            <div className="max-w-md mx-auto">
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-[0_0_30px_rgba(0,255,194,0.15)] transition-all duration-500 animate-fade-in delay-300 hover:scale-105 relative group cursor-pointer">
                {/* Subtle inset glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FFC2]/10 via-transparent to-[#00FFC2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-start gap-3 mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FFC2] to-blue-400 ring-2 ring-[#00FFC2]/20 shadow-lg" />
                  <div>
                    <div className="h-3 bg-white/20 rounded w-24 mb-1" />
                    <div className="h-2 bg-white/15 rounded w-16" />
                  </div>
                </div>
                <div className="space-y-2 text-left relative z-10">
                  <div className="h-3 bg-white/20 rounded w-full" />
                  <div className="h-3 bg-white/15 rounded w-4/5" />
                  <div className="h-3 bg-white/15 rounded w-3/4" />
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 relative z-10">
                  <div className="flex justify-between text-xs text-white/60">
                    <span>✨ AI Generated</span>
                    <span>Ready to share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="pb-12 flex justify-center">
        <div className="animate-bounce group cursor-pointer" onClick={scrollToHowItWorks}>
          <div className="animate-pulse relative">
            <ArrowDown className="w-6 h-6 text-slate-400 group-hover:text-[#00FFC2] transition-colors" />
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              See how it works
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
