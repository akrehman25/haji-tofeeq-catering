import React from 'react';
import { MapPin, Phone, Mail, Clock, Lock } from 'lucide-react';

const Footer = ({ onOpenPOS }: { onOpenPOS: () => void }) => {
  return (
    <footer id="footer" className="bg-[#050810] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden p-1 border-2 border-brand-amber">
                <img src="/logo.jpg" alt="Haji Tofeeq Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight text-white">HAJI TOFEEQ</h3>
                <p className="text-[10px] text-brand-amber uppercase tracking-[0.2em] font-semibold">Since 1980</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering the authentic taste of Karachi directly from our Degs to your events since 1980. Uncompromised quality, unmatched flavor.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-amber hover:text-brand-dark cursor-pointer transition-colors">
                <span className="font-bold font-serif">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-amber hover:text-brand-dark cursor-pointer transition-colors">
                <span className="font-bold">IG</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-brand-amber transition-colors text-sm">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-brand-amber transition-colors text-sm">Menu & Pricing</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-brand-amber transition-colors text-sm">Event Packages</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-brand-amber transition-colors text-sm">Online Booking</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-amber shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">Block 3 Shah Faisal Colony, Shah Faisal Town, Karachi, 75230</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-amber shrink-0" />
                <span className="text-gray-400 text-sm">0314 1031729</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-amber shrink-0" />
                <span className="text-gray-400 text-sm">orders@hajitofeeq.pk</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-brand-amber shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <p>Mon - Sun: 9:00 AM - 11:00 PM</p>
                  <p className="text-xs text-brand-amber mt-1">24/7 Booking Available</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Internal */}
          <div>
            <h4 className="text-white font-bold mb-6">System Access</h4>
            <div className="p-5 rounded-xl border border-white/5 bg-white/5">
              <p className="text-sm text-gray-400 mb-4">Authorized personnel portal for branch management and order tracking.</p>
              <button 
                onClick={onOpenPOS}
                className="flex items-center gap-2 text-brand-amber text-sm font-semibold hover:text-orange-400 transition-colors"
              >
                <Lock size={16} />
                Admin POS Portal &rarr;
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} HAJI TOFEEQ AL MADINA Pakwan & Catering. All rights reserved.
          </p>
          <div className="text-sm text-gray-500 flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
