import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Packages from './components/Packages';
import Booking from './components/Booking';
import Footer from './components/Footer';
import POSModal from './components/POSModal';

function App() {
  const [isPOSOpen, setIsPOSOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-brand-dark z-50 flex items-center justify-center flex-col">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center p-2 shadow-[0_0_30px_rgba(245,158,11,0.6)] animate-pulse border-4 border-brand-amber overflow-hidden mb-6">
          <img src="/logo.jpg" alt="Haji Tofeeq Logo" className="w-full h-full object-contain animate-bounce" style={{ animationDuration: '2s' }} />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-widest text-center uppercase">
          Haji Tofeeq <span className="text-brand-amber">Al Madina</span>
        </h1>
        <p className="text-gray-400 font-semibold tracking-[0.3em] uppercase text-sm mt-2">
          Since 1980
        </p>
        <div className="mt-8 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-amber animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 rounded-full bg-brand-amber animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 rounded-full bg-brand-amber animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-amber selection:text-brand-dark">
      <Navbar onOpenPOS={() => setIsPOSOpen(true)} />
      
      <main>
        <Hero />
        <Menu />
        <Packages />
        <Booking />
      </main>

      <Footer onOpenPOS={() => setIsPOSOpen(true)} />
      
      <POSModal isOpen={isPOSOpen} onClose={() => setIsPOSOpen(false)} />
    </div>
  );
}

export default App;
