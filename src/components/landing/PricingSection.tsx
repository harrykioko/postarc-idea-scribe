
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out PostArc",
      features: [
        "5 posts per month",
        "Basic AI templates",
        "Standard support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description: "Best for regular content creators",
      features: [
        "15 posts per month",
        "Advanced AI templates",
        "Priority support",
        "Custom tone settings",
        "Analytics insights"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Legend",
      price: "$25",
      period: "/month", 
      description: "For content marketing teams",
      features: [
        "Unlimited posts",
        "All AI templates",
        "Premium support",
        "Team collaboration",
        "Advanced analytics",
        "Custom integrations"
      ],
      cta: "Go Legend",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Start free. Upgrade anytime.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the perfect plan for your content creation needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-3xl border-2 p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
              plan.popular 
                ? 'border-[#00FFC2] bg-gradient-to-b from-[#00FFC2]/5 to-white scale-105' 
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00FFC2] text-slate-900 font-semibold px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 text-lg">
                    {plan.period}
                  </span>
                </div>
                <p className="text-slate-600">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00FFC2]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#00FFC2]" />
                    </div>
                    <span className="text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#00FFC2] hover:bg-[#00e6b0] text-slate-900 hover:scale-105'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
