

import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative">
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,194,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            You have ideas.{" "}
            <span className="bg-gradient-to-r from-[#00FFC2] to-blue-400 bg-clip-text text-transparent">
              Let's get them posted.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Try PostArc free and transform how you create LinkedIn content
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToDemo}
              size="lg"
              className="bg-[#00FFC2] hover:bg-[#00e6b0] text-slate-900 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,194,0.3)]"
            >
              Try the Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-slate-800/60 border-slate-300 border-2 text-white hover:bg-slate-700 hover:text-white hover:border-[#00FFC2] hover:shadow-[0_0_20px_rgba(0,255,194,0.2)] px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Create a Free Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

