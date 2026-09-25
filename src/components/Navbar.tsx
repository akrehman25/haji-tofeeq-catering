import React, { useState, useEffect } from 'react';
import { Menu, X, Lock, Phone, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenPOS: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenPOS }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu & Deg List', href: '#menu' },
    { name: 'Catering Packages', href: '#packages' },
    { name: 'Online Booking', href: '#booking' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#070b14]/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)] overflow-hidden p-1 border-2 border-brand-amber">
              <img src="/logo.jpg" alt="Haji Tofeeq Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold leading-tight text-white tracking-wide">
                HAJI TOFEEQ <span className="text-brand-amber">AL MADINA</span>
              </h1>
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-semibold">Since 1980</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-medium text-gray-300 hover:text-brand-amber transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={onOpenPOS}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-brand-amber/50 text-brand-amber text-sm font-medium hover:bg-brand-amber/10 hover:shadow-[0_0_10px_rgba(245,158,11,0.2)] transition-all animate-pulse"
              >
                <Lock size={16} />
                POS Portal
              </button>
              <a 
                href="https://wa.me/923141031729" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-500 transition-all shadow-[0_0_10px_rgba(22,163,74,0.4)]"
              >
                <Phone size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-[80vw] sm:w-[350px] bg-[#0c1222] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <ul className="flex flex-col gap-6 flex-grow">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="flex items-center justify-between text-lg font-medium text-gray-200 hover:text-brand-amber border-b border-white/5 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={20} className="text-gray-500" />
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col gap-4 mt-8">
            <button 
              onClick={() => { onOpenPOS(); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 border border-brand-amber/30 text-brand-amber font-bold"
            >
              <Lock size={20} />
              POS Portal Login
            </button>
            <a 
              href="https://wa.me/923141031729" 
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-green-600 text-white font-bold"
            >
              <Phone size={20} />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
