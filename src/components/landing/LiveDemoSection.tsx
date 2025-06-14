
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Compass, TrendingUp } from "lucide-react";

export const LiveDemoSection = () => {
  const [demoCount, setDemoCount] = useState(3);
  const [inputValue, setInputValue] = useState("");
  const [showPost, setShowPost] = useState(false);

  const suggestions = [
    { text: "AI + healthcare", icon: Sparkles },
    { text: "Lessons from failure", icon: Compass }, 
    { text: "Remote work myths", icon: TrendingUp }
  ];

  const handleGenerate = () => {
    if (demoCount > 0) {
      setDemoCount(prev => prev - 1);
      setShowPost(true);
      // Mock delay for generation
      setTimeout(() => {
        setShowPost(true);
      }, 1000);
    }
  };

  return (
    <section id="demo-section" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Try It Live
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience the magic of AI-powered LinkedIn post generation
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Demo Input Box */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFC2]/20 to-blue-400/20 rounded-3xl blur-xl" />
            <div className="relative backdrop-blur-2xl bg-white/70 border border-white/60 rounded-3xl p-8 shadow-2xl mb-8 hover:shadow-[0_0_50px_rgba(0,255,194,0.15)] transition-all duration-500">
              <div className="flex gap-4 mb-6">
                <Input
                  placeholder="e.g. Trends in AI regulation"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 rounded-full border-slate-200 focus:border-[#00FFC2] focus:ring-[#00FFC2] focus:shadow-[0_0_15px_rgba(0,255,194,0.2)] py-3 px-6 text-lg backdrop-blur-sm"
                />
                <Button
                  onClick={handleGenerate}
                  disabled={demoCount === 0}
                  className="bg-[#00FFC2] hover:bg-[#00e6b0] text-slate-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,194,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Generate Post
                </Button>
              </div>
              
              {/* Suggestion Chips */}
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {suggestions.map((suggestion, index) => {
                  const IconComponent = suggestion.icon;
                  return (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-[#00FFC2]/20 hover:text-[#00FFC2] hover:shadow-[0_0_15px_rgba(0,255,194,0.2)] hover:scale-105 transition-all duration-300 px-4 py-2 flex items-center gap-2"
                      onClick={() => setInputValue(suggestion.text)}
                    >
                      <IconComponent className="w-4 h-4" />
                      {suggestion.text}
                    </Badge>
                  );
                })}
              </div>
              
              {/* Counter */}
              <div className="text-center text-sm text-slate-500">
                You have <span className="font-semibold text-[#00FFC2] text-base">{demoCount} free demo posts</span> remaining
              </div>
            </div>
          </div>
          
          {/* Mock Generated Post */}
          {showPost && (
            <div className="backdrop-blur-lg bg-white/80 border border-white/60 rounded-2xl p-6 shadow-xl animate-fade-in">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FFC2] to-blue-400 flex items-center justify-center text-white font-bold">
                  YN
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Your Name</h3>
                  <p className="text-sm text-slate-500">Professional Title</p>
                </div>
              </div>
              
              <div className="mb-4 text-slate-800 leading-relaxed">
                <p className="mb-3">
                  🚀 AI regulation isn't just about compliance – it's about competitive advantage.
                </p>
                <p className="mb-3">
                  While others scramble to meet new requirements, forward-thinking companies are using regulatory frameworks as innovation catalysts.
                </p>
                <p className="mb-3">
                  Three ways smart organizations are turning AI regulation into opportunity:
                </p>
                <p className="ml-4 mb-2">→ Building trust through transparency</p>
                <p className="ml-4 mb-2">→ Differentiating with ethical AI practices</p>
                <p className="ml-4 mb-3">→ Creating new markets through compliant innovation</p>
                <p>
                  The question isn't whether AI regulation will impact your business – it's whether you'll lead or follow.
                </p>
                <p className="mt-3 text-slate-600">
                  What's your organization's approach to AI regulation? 👇
                </p>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                <div className="flex gap-4 text-sm text-slate-500">
                  <span>💙 Like</span>
                  <span>💬 Comment</span>
                  <span>🔄 Repost</span>
                </div>
                <Badge className="bg-[#00FFC2]/20 text-[#00FFC2] hover:bg-[#00FFC2]/30">
                  ✨ Generated by PostArc
                </Badge>
              </div>
            </div>
          )}
          
          {/* Conversion Gate Preview */}
          {demoCount === 0 && (
            <div className="backdrop-blur-lg bg-slate-100/80 border border-slate-200 rounded-2xl p-8 text-center animate-fade-in">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  🔒
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  That's 3 free posts – ready to keep going?
                </h3>
                <p className="text-slate-600 mb-6">
                  Create a free account to unlock more AI-powered posts
                </p>
                <Button
                  size="lg"
                  className="bg-[#00FFC2] hover:bg-[#00e6b0] text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Create Free Account to Keep Posting
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
