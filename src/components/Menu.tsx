import { useState } from 'react';
import { Flame, ShoppingCart } from 'lucide-react';

const categories = ['All', 'Degi Biryani & Pulao', 'Karahi & Qorma', 'BBQ & Starters', 'Desserts / Meetha'];

const menuItems = [
  {
    id: 1,
    name: 'Special Beef Nalli Biryani',
    category: 'Degi Biryani & Pulao',
    price: 'Rs. 12,500',
    unit: '/ Deg (12-14kg)',
    spice: 3,
    description: 'Our signature authentic Karachi biryani with tender beef and rich marrow bones cooked in traditional spices.',
    image: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg'
  },
  {
    id: 2,
    name: 'Special Degi Yakhni Pulao',
    category: 'Degi Biryani & Pulao',
    price: 'Rs. 10,000',
    unit: '/ Deg (12-14kg)',
    spice: 1,
    description: 'Aromatic and flavorful pulao cooked in rich meat broth with premium basmati rice and tender mutton.',
    image: 'https://www.themealdb.com/images/media/meals/5r5rvx1763287943.jpg'
  },
  {
    id: 3,
    name: 'Degi Chicken Biryani',
    category: 'Degi Biryani & Pulao',
    price: 'Rs. 8,500',
    unit: '/ Deg (12-14kg)',
    spice: 2,
    description: 'Classic chicken biryani made with secret spices, perfectly cooked potatoes, and saffron infused rice.',
    image: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg'
  },
  {
    id: 4,
    name: 'Chicken Qorma',
    category: 'Karahi & Qorma',
    price: 'Rs. 7,000',
    unit: '/ Deg',
    spice: 2,
    description: 'Rich, creamy, and mildly spiced chicken curry cooked with fried onions, yogurt, and whole spices.',
    image: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg'
  },
  {
    id: 5,
    name: 'White Karahi',
    category: 'Karahi & Qorma',
    price: 'Rs. 8,000',
    unit: '/ Deg',
    spice: 1,
    description: 'Creamy and peppery white karahi made with fresh cream, yogurt, black pepper, and green chilies.',
    image: 'https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg'
  },
  {
    id: 6,
    name: 'Seekh Kabab (Beef)',
    category: 'BBQ & Starters',
    price: 'Rs. 5,000',
    unit: '/ 100 Pcs',
    spice: 2,
    description: 'Juicy and tender minced beef kababs grilled perfectly over charcoal with traditional spices.',
    image: 'https://www.themealdb.com/images/media/meals/04axct1763793018.jpg'
  },
  {
    id: 7,
    name: 'Shahi Kheer',
    category: 'Desserts / Meetha',
    price: 'Rs. 4,500',
    unit: '/ Deg',
    spice: 0,
    description: 'Thick, creamy rice pudding slow-cooked with milk, khoya, and garnished with premium nuts.',
    image: 'https://www.themealdb.com/images/media/meals/rsqwus1511640214.jpg'
  },
  {
    id: 8,
    name: 'Zarda (Sweet Rice)',
    category: 'Desserts / Meetha',
    price: 'Rs. 4,000',
    unit: '/ Deg',
    spice: 0,
    description: 'Traditional sweet yellow rice loaded with dry fruits, murabba, and khoya.',
    image: 'https://www.themealdb.com/images/media/meals/5vhbzt1782239221.jpg'
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Signature Dishes & <span className="text-gradient">Deg Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our premium selection of authentic Karachi pakwan. All prices are competitive and reflect our commitment to uncompromised quality.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-brand-amber text-brand-dark shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
                  : 'glass-card hover:bg-white/10 text-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="glass-card overflow-hidden group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] to-transparent opacity-80" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Flame key={i} size={14} className={i < item.spice ? 'text-red-500 fill-red-500' : 'text-gray-600'} />
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4 flex-grow">
                  <div className="text-xs text-brand-amber font-semibold uppercase tracking-wider mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 leading-tight">{item.name}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-2xl font-black text-white">{item.price}</span>
                      <span className="text-sm text-gray-500 ml-1">{item.unit}</span>
                    </div>
                  </div>
                  <button className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-brand-amber text-white hover:text-brand-dark font-semibold border border-white/10 hover:border-brand-amber transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    <ShoppingCart size={18} />
                    Quick Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
