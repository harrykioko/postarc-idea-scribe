
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1C34]/90 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          PostArc<span className="text-[#00FFC2]">.ai</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('pricing-section')}
            className="text-slate-300 hover:text-[#00FFC2] transition-colors duration-200"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-slate-300 hover:text-[#00FFC2] transition-colors duration-200"
          >
            Watch Demo
          </button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-[#00FFC2]/30 text-[#00FFC2] hover:bg-[#00FFC2]/10 hover:border-[#00FFC2]"
          >
            Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0B1C34]/95 backdrop-blur-lg border-b border-white/10 md:hidden">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('pricing-section')}
                className="block w-full text-left text-slate-300 hover:text-[#00FFC2] transition-colors duration-200 py-2"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-slate-300 hover:text-[#00FFC2] transition-colors duration-200 py-2"
              >
                Watch Demo
              </button>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-[#00FFC2]/30 text-[#00FFC2] hover:bg-[#00FFC2]/10 hover:border-[#00FFC2]"
              >
                Sign In
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
