
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0B1C34] via-[#0B1C34] to-[#0a1a30]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,194,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Turn your ideas into{" "}
            <span className="bg-gradient-to-r from-[#00FFC2] via-[#00e6b0] to-[#00FFC2] bg-clip-text text-transparent animate-pulse bg-[length:200%_100%] bg-[position:0%_50%] hover:animate-none hover:bg-[position:100%_50%] transition-all duration-1000">
              LinkedIn posts
            </span>{" "}
            in seconds
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium">
            Shape ideas. Share authority. Try our AI demo – no sign-up required.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={scrollToDemo}
              size="lg"
              className="bg-[#00FFC2] hover:bg-[#00e6b0] text-slate-900 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,194,0.3)]"
            >
              Try the Demo
            </Button>
            <Button
              onClick={scrollToHowItWorks}
              variant="outline"
              size="lg"
              className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-[#00FFC2] hover:shadow-[0_0_20px_rgba(0,255,194,0.2)] px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Watch it in action
            </Button>
          </div>
          
          {/* Sample Post Card */}
          <div className="max-w-md mx-auto">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-[0_0_40px_rgba(0,255,194,0.2)] transition-all duration-500 animate-fade-in delay-500 hover:scale-105">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FFC2] to-blue-400" />
                <div>
                  <div className="h-3 bg-white/20 rounded w-24 mb-1" />
                  <div className="h-2 bg-white/15 rounded w-16" />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <div className="h-3 bg-white/20 rounded w-full" />
                <div className="h-3 bg-white/15 rounded w-4/5" />
                <div className="h-3 bg-white/15 rounded w-3/4" />
              </div>
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex justify-between text-xs text-white/60">
                  <span>✨ AI Generated</span>
                  <span>Ready to share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="animate-pulse">
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </div>
      </div>
    </section>
  );
};
