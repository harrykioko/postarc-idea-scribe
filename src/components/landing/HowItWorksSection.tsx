
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
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
      {/* Curved Divider */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0B1C34" fillOpacity="1"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From idea to impact in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC2]/20 to-blue-400/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="relative bg-white rounded-2xl w-full h-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                    <IconComponent className="w-8 h-8 text-[#00FFC2]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button
            onClick={scrollToDemo}
            variant="outline"
            size="lg"
            className="border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2] hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            See a live example
          </Button>
        </div>
      </div>
    </section>
  );
};
