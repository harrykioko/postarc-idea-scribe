
import { FileText, Zap, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowItWorksSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      icon: FileText,
      title: "Enter a Topic or Link",
      description: "Start with your idea or a recent article."
    },
    {
      icon: Zap,
      title: "Instant Post Preview",
      description: "PostArc drafts a polished LinkedIn post — no filler, just impact."
    },
    {
      icon: Share2,
      title: "Share or Refine",
      description: "Copy, tweak, or publish directly — it's yours."
    }
  ];

  return (
    <section id="how-it-works" className="relative bg-gradient-to-b from-[#F9FBFF] to-white">
      {/* Enhanced Curved Divider */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden">
        {/* Main wave shape */}
        <svg className="relative block w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B1C34" stopOpacity="1"/>
              <stop offset="70%" stopColor="#142F4A" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#051424" stopOpacity="0.6"/>
            </linearGradient>
            <filter id="waveGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path 
            d="M0,0V60c50,25,120,35,180,28C260,82,340,45,420,42c80-3,160,20,240,25c80,5,160-10,240-8c80,2,160,18,240,20c80,2,160-8,240-15V0Z" 
            fill="url(#waveGradient)" 
            filter="url(#waveGlow)"
            className="animate-fade-in"
          />
        </svg>
        
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C34]/30 via-[#142F4A]/15 to-transparent h-24" />
        
        {/* Glass-like highlight edge */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FFC2]/20 to-transparent opacity-60" />
      </div>
      
      {/* Background depth layers */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0B1C34]/10 via-[#F9FBFF]/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        {/* Section anchor chip */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#00FFC2]/20 rounded-full px-4 py-2 text-sm text-slate-600 shadow-sm animate-fade-in">
            <div className="w-2 h-2 bg-[#00FFC2] rounded-full animate-pulse" />
            Step-by-step
          </div>
        </div>
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From idea to impact in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className="text-center group"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="relative mx-auto w-24 h-24 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC2]/20 to-blue-400/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="relative bg-white rounded-3xl w-full h-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-slate-100 backdrop-blur-sm">
                    <IconComponent className="w-10 h-10 text-[#00FFC2]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center pb-24">
          <Button
            onClick={scrollToDemo}
            variant="outline"
            size="lg"
            className="border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2] hover:text-slate-900 hover:shadow-[0_0_25px_rgba(0,255,194,0.3)] px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            See a live example
          </Button>
        </div>
      </div>
    </section>
  );
};
