
export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Marketing Director",
      company: "TechFlow",
      quote: "PostArc transformed how I approach LinkedIn content. What used to take hours now takes minutes.",
      avatar: "SC"
    },
    {
      name: "Marcus Johnson", 
      title: "Startup Founder",
      company: "InnovateLab",
      quote: "The AI understands my voice perfectly. My engagement has tripled since using PostArc.",
      avatar: "MJ"
    },
    {
      name: "Lisa Rodriguez",
      title: "Sales Leader",
      company: "GrowthCorp", 
      quote: "Finally, a tool that helps me share insights without spending my entire weekend writing posts.",
      avatar: "LR"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Loved by early users
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join hundreds of professionals already building their thought leadership
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative group"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC2]/10 to-blue-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative backdrop-blur-lg bg-white/80 border border-white/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <p className="text-slate-700 mb-6 leading-relaxed italic text-lg">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FFC2] to-blue-400 flex items-center justify-center text-slate-900 font-bold shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {testimonial.title} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
