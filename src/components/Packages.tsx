import React from 'react';
import { Check } from 'lucide-react';

const packages = [
  {
    id: 'silver',
    name: 'Silver Package',
    type: 'Standard Event',
    price: 'Rs. 950',
    unit: '/ Guest',
    popular: false,
    features: [
      'Chicken Biryani or Pulao',
      'Chicken Qorma / Karahi',
      'Raita & Fresh Salad',
      'Naan & Taftan',
      'Zarda or Kheer',
      'Standard Crockery',
      'Basic Waiter Service'
    ]
  },
  {
    id: 'gold',
    name: 'Gold Package',
    type: 'Royal Valima / Shaadi',
    price: 'Rs. 1,450',
    unit: '/ Guest',
    popular: true,
    features: [
      'Special Beef Nalli Biryani',
      'Mutton Qorma or Karahi',
      'Chicken Tikka / Malai Boti',
      'Live Tandoor (Naan/Roti)',
      'Special Raita & Russian Salad',
      'Shahi Kheer & Gajar Halwa',
      'Premium Glass Crockery',
      'VIP Waiter & Serving Staff'
    ]
  },
  {
    id: 'royal',
    name: 'Royal VIP',
    type: 'Elite Gathering',
    price: 'Rs. 2,200',
    unit: '/ Guest',
    popular: false,
    features: [
      'Mutton Mandi / Kabuli Pulao',
      'Desi Murgh Karahi',
      'Live BBQ Station (Seekh/Boti)',
      'Fried Fish (Seasonal)',
      'Assorted Premium Salads',
      'Umm Ali & Shahi Tukda',
      'Imported Gold-rimmed Crockery',
      'Dedicated Event Manager'
    ]
  }
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 relative bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Shaadi & Event <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive catering solutions tailored for your events. From intimate gatherings to grand royal weddings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative glass-card flex flex-col ${
                pkg.popular 
                  ? 'border-brand-amber/50 transform md:-translate-y-4 shadow-[0_0_30px_rgba(245,158,11,0.2)]' 
                  : 'border-white/10 opacity-90 hover:opacity-100'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-amber to-orange-500 text-brand-dark font-black px-4 py-1 rounded-full text-sm shadow-lg whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8 border-b border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">{pkg.type}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">{pkg.price}</span>
                  <span className="text-gray-500 font-medium mb-1">{pkg.unit}</span>
                </div>
              </div>

              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-1 ${pkg.popular ? 'bg-brand-amber/20 text-brand-amber' : 'bg-white/10 text-gray-300'}`}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-brand-amber to-orange-500 text-brand-dark hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
