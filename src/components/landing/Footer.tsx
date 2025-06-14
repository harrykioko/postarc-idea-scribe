
export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              PostArc.ai
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Turn your ideas into compelling LinkedIn posts in seconds. 
              Build thought leadership with AI-powered content creation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#00FFC2] hover:text-slate-900 transition-colors">
                in
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#00FFC2] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#00FFC2] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#00FFC2] transition-colors">Demo</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#00FFC2] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#00FFC2] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#00FFC2] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          <p>&copy; 2024 PostArc.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
