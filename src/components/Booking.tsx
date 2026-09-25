import React, { useState } from 'react';
import { Send, Calculator, AlertCircle } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    area: '',
    dish: 'Special Beef Nalli Biryani',
    quantity: 1,
    instructions: '',
  });

  const [addons, setAddons] = useState({
    raita: false,
    drinks: false,
    kheer: false,
    tandoor: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAddons(prev => ({ ...prev, [name]: checked }));
  };

  // Base prices for calculation demo
  const dishPrices: Record<string, number> = {
    'Special Beef Nalli Biryani': 12500,
    'Special Degi Yakhni Pulao': 10000,
    'Degi Chicken Biryani': 8500,
    'Chicken Qorma': 7000,
  };

  const baseTotal = (dishPrices[formData.dish] || 8000) * formData.quantity;
  let addonTotal = 0;
  if (addons.raita) addonTotal += 1000 * formData.quantity;
  if (addons.drinks) addonTotal += 2000 * formData.quantity;
  if (addons.kheer) addonTotal += 4500 * formData.quantity;
  if (addons.tandoor) addonTotal += 5000;
  
  const estimatedTotal = baseTotal + addonTotal;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let activeAddons = Object.entries(addons)
      .filter(([_, isActive]) => isActive)
      .map(([key]) => key)
      .join(', ');

    const message = `*New Catering Booking Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Event:* ${formData.eventType}%0A*Date:* ${formData.date}%0A*Area:* ${formData.area}%0A%0A*Main Dish:* ${formData.dish} (x${formData.quantity} Deg)%0A*Add-ons:* ${activeAddons || 'None'}%0A%0A*Special Instructions:* ${formData.instructions || 'N/A'}%0A%0A*Estimated Total:* Rs. ${estimatedTotal.toLocaleString()}`;

    window.open(`https://wa.me/923141031729?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Form Side */}
          <div className="w-full lg:w-3/5">
            <div className="mb-10">
              <h2 className="text-4xl font-black mb-4">
                Live Interactive <span className="text-gradient">Booking</span>
              </h2>
              <p className="text-gray-400 text-lg">Fill out the details to get an instant estimate and send your order directly to our WhatsApp booking desk.</p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-amber/50 transition-colors" placeholder="e.g. Ali Khan" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Phone / WhatsApp</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-amber/50 transition-colors" placeholder="0314 1031729" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Event Type</label>
                  <select name="eventType" value={formData.eventType} onChange={handleInputChange} className="w-full bg-[#111726] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-amber/50 appearance-none">
                    <option>Wedding</option>
                    <option>Valima</option>
                    <option>Mehndi</option>
                    <option>Majlis / Niyaz</option>
                    <option>Corporate Event</option>
                    <option>Other Gathering</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Event Date</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-amber/50 min-h-[48px]" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Delivery Area (Karachi)</label>
                <input required type="text" name="area" value={formData.area} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-amber/50 transition-colors" placeholder="e.g. Gulshan-e-Iqbal, DHA" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl border border-brand-amber/20 bg-brand-amber/5">
                <div className="space-y-2 md:col-span-3">
                  <label className="text-sm font-semibold text-brand-amber">Select Main Dish</label>
                  <select name="dish" value={formData.dish} onChange={handleInputChange} className="w-full bg-[#111726] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-amber/50 appearance-none">
                    {Object.keys(dishPrices).map(dish => (
                      <option key={dish} value={dish}>{dish}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-amber">Qty (Degs)</label>
                  <input type="number" min="1" max="100" name="quantity" value={formData.quantity} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-amber/50 text-center text-lg font-bold" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-300">Optional Add-ons</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'raita', label: 'Raita & Fresh Salad' },
                    { id: 'drinks', label: 'Cold Drinks Setup' },
                    { id: 'kheer', label: 'Shahi Kheer (1 Deg)' },
                    { id: 'tandoor', label: 'Live Tandoor/Naan' }
                  ].map(addon => (
                    <label key={addon.id} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:bg-white/5 cursor-pointer transition-colors">
                      <input 
                        type="checkbox" 
                        name={addon.id} 
                        checked={addons[addon.id as keyof typeof addons]} 
                        onChange={handleAddonChange}
                        className="w-5 h-5 rounded border-gray-600 text-brand-amber focus:ring-brand-amber accent-brand-amber bg-gray-800"
                      />
                      <span className="text-sm font-medium">{addon.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Special Instructions</label>
                <textarea name="instructions" value={formData.instructions} onChange={handleInputChange} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-amber/50 transition-colors resize-none" placeholder="e.g. Keep it extra spicy, deliver by 8 PM..." />
              </div>
            </form>
          </div>

          {/* Calculator Side */}
          <div className="w-full lg:w-2/5">
            <div className="glass-card p-8 sticky top-28">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Calculator className="text-brand-amber" size={24} />
                <h3 className="text-2xl font-bold">Cost Estimate</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{formData.dish} (x{formData.quantity})</span>
                  <span className="font-semibold text-white">Rs. {baseTotal.toLocaleString()}</span>
                </div>
                {addons.raita && <div className="flex justify-between text-sm"><span className="text-gray-400">Raita & Salad</span><span className="font-semibold text-white">Added</span></div>}
                {addons.drinks && <div className="flex justify-between text-sm"><span className="text-gray-400">Cold Drinks</span><span className="font-semibold text-white">Added</span></div>}
                {addons.kheer && <div className="flex justify-between text-sm"><span className="text-gray-400">Shahi Kheer</span><span className="font-semibold text-white">Added</span></div>}
                {addons.tandoor && <div className="flex justify-between text-sm"><span className="text-gray-400">Live Tandoor</span><span className="font-semibold text-white">Added</span></div>}
              </div>

              <div className="border-t border-white/10 pt-4 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-gray-400 font-medium">Estimated Total</span>
                  <span className="text-4xl font-black text-brand-amber">Rs. {estimatedTotal.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 flex items-start gap-1">
                  <AlertCircle size={14} className="shrink-0 mt-0.5" />
                  Final price may vary based on exact location and seasonal rates.
                </p>
              </div>

              <button 
                onClick={handleWhatsAppSubmit}
                className="w-full py-4 rounded-xl font-bold bg-green-600 hover:bg-green-500 text-white shadow-[0_0_20px_rgba(22,163,74,0.3)] transition-all flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <Send size={20} />
                Send via WhatsApp
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;
