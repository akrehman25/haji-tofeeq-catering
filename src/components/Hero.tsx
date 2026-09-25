import React, { useState, useEffect } from 'react';
import { Star, Users, ChefHat, CheckCircle, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1633383718081-22ac93e3db65?auto=format&fit=crop&w=800&q=80',
    alt: 'Special Beef Nalli Biryani & Copper Deg'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80',
    alt: 'Degi Yakhni Pulao & Mutton Shanks'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    alt: 'Traditional Chicken Qorma'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    alt: 'Special BBQ Platter'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#070b14]">
      {/* Background & Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glowing golden/amber ambient lighting effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-amber/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-brand-amber/15 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-brand-maroon/10 rounded-full blur-[100px]" />
        
        {/* Glowing Light Particles */}
        <div className="absolute top-[20%] right-[30%] w-3 h-3 bg-brand-amber/60 rounded-full blur-[2px] shadow-[0_0_15px_rgba(245,158,11,1)] animate-pulse" />
        <div className="absolute top-[60%] left-[15%] w-2 h-2 bg-brand-amber/40 rounded-full blur-[1px] shadow-[0_0_10px_rgba(245,158,11,0.8)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[20%] right-[10%] w-4 h-4 bg-yellow-500/30 rounded-full blur-[3px] shadow-[0_0_20px_rgba(234,179,8,0.6)] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Faint traditional copper pot line-art watermarks (Simulated with a subtle decorative SVG background) */}
        <div className="absolute right-0 top-0 w-[800px] h-[800px] opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 10 Q60 10 70 20 Q80 30 70 40 Q60 50 50 50 Q40 50 30 40 Q20 30 30 20 Q40 10 50 10\' stroke=\'%23f59e0b\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E")', backgroundSize: '100px 100px' }} 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-7xl mx-auto">
          
          {/* Left Column (Typography & Content) */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            
            {/* Top small badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-amber/40 bg-brand-amber/10 shadow-[0_0_15px_rgba(245,158,11,0.15)] mb-8 self-start backdrop-blur-md">
              <Star size={14} className="text-brand-amber fill-brand-amber drop-shadow-[0_0_5px_rgba(245,158,11,0.8)]" />
              <span className="text-brand-amber text-[11px] md:text-xs font-bold uppercase tracking-wider">
                Serving Culinary Excellence Since 1980
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-[5.5rem] lg:text-[6rem] font-bold leading-[1.05] mb-6 tracking-tight text-[#fdf8f0] font-serif">
              Asli Lazeez Zaiqa, <br className="hidden md:block" />
              Seedha Deg Se Aap <br className="hidden md:block" />
              Tak.
            </h1>

            {/* Descriptive Subtext */}
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
              Experience the authentic taste of our legendary <strong className="text-white font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Beef Nalli Biryani</strong> and <strong className="text-white font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Degi Yakhni Pulao</strong>. Premier bulk catering for Shaadi, Valima, Majlis, and corporate events across Karachi.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <a href="#booking" className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-brand-amber via-orange-500 to-brand-amber text-brand-dark font-bold hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden bg-[length:200%_auto] hover:bg-[position:right_center]">
                Book Catering Deg
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#menu" className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold backdrop-blur-md hover:bg-white/10 hover:border-brand-amber/50 transition-all duration-300 flex items-center justify-center">
                Explore Menu
              </a>
            </div>

            {/* Bottom Trust Metrics Bar */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-auto">
              <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:border-brand-amber/30 hover:bg-white/10 transition-colors flex-1 sm:flex-none">
                <Users size={20} className="text-brand-amber" />
                <div>
                  <h4 className="text-lg font-bold leading-none text-white">5,000+</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Events Catered</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:border-brand-amber/30 hover:bg-white/10 transition-colors flex-1 sm:flex-none">
                <ChefHat size={20} className="text-brand-amber" />
                <div>
                  <h4 className="text-lg font-bold leading-none text-white">50+</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Daily Deg Capacity</p>
                </div>
              </div>

              <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:border-brand-amber/30 hover:bg-white/10 transition-colors flex-1 sm:flex-none">
                <CheckCircle size={20} className="text-brand-amber" />
                <div>
                  <h4 className="text-lg font-bold leading-none text-white">100%</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Halal Certified</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Animated Rotating Food Showcase) */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
            <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              
              {/* Soft glow behind the showcase */}
              <div className="absolute inset-0 bg-brand-amber/20 rounded-full blur-[80px]" />
              
              {/* Decorative rings for premium look */}
              <div className="absolute inset-4 rounded-full border border-dashed border-brand-amber/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-white/5" />

              {/* Animated Slider Container */}
              <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.6)] border-[6px] border-[#1a1f2e] bg-[#0c1222]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      currentSlide === index ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-3'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.alt} 
                      className="w-full h-full object-cover"
                    />
                    {/* Inner shadow to blend image edges elegantly */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] pointer-events-none" />
                  </div>
                ))}
              </div>
              
              {/* Slider Indicators */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ease-in-out ${
                      currentSlide === index 
                        ? 'bg-brand-amber w-8 shadow-[0_0_12px_rgba(245,158,11,0.9)]' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
