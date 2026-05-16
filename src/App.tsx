/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Wind, 
  Flame, 
  Star, 
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import { useState, useRef } from "react";

const SCENTS = [
  {
    id: 1,
    name: "Golden Hour",
    notes: "Amber, Sandalwood, Vanilla",
    description: "Capturing the warmth of the sun as it dips below the horizon. A deep, soulful scent for quiet evenings.",
    price: "$34",
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Midnight Library",
    notes: "Leather, Old Paper, Cedarwood",
    description: "The intellectual whisper of ancient books and forgotten wisdom. Sophisticated and nostalgic.",
    price: "$34",
    image: "https://images.unsplash.com/photo-1596433809252-260c2745dfdd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Wild Lavender",
    notes: "Lavender, Sage, White Musk",
    description: "A breath of fresh mountain air. Calm, herbaceous, and perfectly balanced for deep relaxation.",
    price: "$34",
    image: "https://images.unsplash.com/photo-1572726710708-20bb91d29bfd?q=80&w=800&auto=format&fit=crop"
  }
];

const REVIEWS = [
  {
    id: 1,
    author: "Elena R.",
    text: "The most authentic scents I've ever found. Midnight Library transformed my home office into a sanctuary.",
    rating: 5
  },
  {
    id: 2,
    author: "James M.",
    text: "Beautiful packaging and the burn is so clean. You can really tell these are handmade with care.",
    rating: 5
  },
  {
    id: 3,
    author: "Sarah L.",
    text: "Received Golden Hour as a gift and I'm already on my third order. It's the perfect cozy vibe.",
    rating: 5
  }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="bg-brand-dark text-brand-cream text-[10px] uppercase tracking-[0.3em] py-2 text-center font-bold">
        Complimentary shipping on all orders over $75
      </div>
      <nav className="bg-brand-cream/90 backdrop-blur-md border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl font-bold tracking-tighter text-brand-dark">Lumière & Co.</a>
          
          <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest opacity-80">
            <a href="#collections" className="hover:text-brand-amber transition-colors">Collections</a>
            <a href="#scents" className="hover:text-brand-amber transition-colors">Scent Guide</a>
            <a href="#story" className="hover:text-brand-amber transition-colors">Our Story</a>
            <button className="flex items-center space-x-2 bg-brand-dark text-brand-cream px-8 py-3 uppercase tracking-widest text-[10px] font-bold hover:bg-brand-amber transition-all group">
              <ShoppingBag size={14} className="group-hover:scale-110 transition-transform" />
              <span>Cart (0)</span>
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-brand-cream p-6 border-b border-brand-dark/10"
          >
            <div className="flex flex-col space-y-4 text-center">
              <a href="#collections" onClick={() => setIsOpen(false)}>Collections</a>
              <a href="#scents" onClick={() => setIsOpen(false)}>Scents</a>
              <a href="#story" onClick={() => setIsOpen(false)}>Our Story</a>
              <button className="bg-brand-dark text-brand-cream py-3 rounded-full">Shop Now</button>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
}

function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1601213906703-9faea059dfdc?q=80&w=2000&auto=format&fit=crop" 
          alt="Atmospheric light" 
          className="w-full h-full object-cover brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cream/20 to-brand-cream" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-amber uppercase tracking-[0.3em] text-xs font-bold"
          >
            Hand-Poured in Small Batches
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl text-brand-dark leading-[1.1] tracking-tight text-balance"
          >
            Quiet moments, <br />captured in <br /><span className="italic text-brand-amber">wax & wood.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-brand-muted max-w-md leading-relaxed opacity-90"
          >
            Our candles are crafted with 100% sustainable soy wax and essential oils, designed to bring the grounding essence of nature into your home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-8"
          >
            <button className="bg-brand-dark text-brand-cream px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-amber transition-all">
              Shop the Collection
            </button>
            <div className="text-xs uppercase tracking-widest border-b border-brand-dark pb-1 cursor-pointer font-bold">
              Explore Scents
            </div>
          </motion.div>

          {/* Stats section from theme */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-12 border-t border-brand-dark/10 pt-8"
          >
            <div>
              <div className="text-2xl font-serif mb-1">60hr</div>
              <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Burn Time</div>
            </div>
            <div>
              <div className="text-2xl font-serif mb-1">Vegan</div>
              <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Ingredients</div>
            </div>
            <div>
              <div className="text-2xl font-serif mb-1">Refill</div>
              <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Vessels</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-dark to-transparent" />
      </motion.div>
    </section>
  );
}

function Collections() {
  return (
    <section id="collections" className="py-24 px-12 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0 text-left">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-brand-dark">Seasonal Rituals</h2>
            <p className="text-brand-muted leading-relaxed opacity-80">
              Our candles are poured in small batches using 100% natural soy wax and lead-free cotton wicks. Each vessel is designed to be repurposed, extending the life of your purchase.
            </p>
          </div>
          <a href="#" className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest border-b border-brand-dark pb-1 hover:text-brand-amber transition-colors">
            <span>View All</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SCENTS.map((scent, idx) => (
            <motion.div 
              key={scent.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-brand-beige p-6 border border-brand-dark/5"
            >
              <div className="relative overflow-hidden aspect-square bg-brand-dark/5 mb-6">
                <img 
                  src={scent.image} 
                  alt={scent.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-xl mb-1 text-brand-dark">{scent.name}</h3>
              <p className="text-[10px] text-brand-muted mb-3 uppercase tracking-widest opacity-60 font-bold">{scent.notes}</p>
              <p className="text-brand-dark font-bold text-sm tracking-tight">{scent.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { title: "Pure Soy", desc: "100% renewable soy wax for a clean, non-toxic burn experience." },
    { title: "Essential Oils", desc: "Therapeutic grade essential oils for mind-body balance." },
    { title: "Cotton Wicks", desc: "Lead-free cotton wicks ensuring a 60+ hour steady flame." }
  ];

  return (
    <section className="bg-brand-cream py-16 px-12 border-y border-brand-dark/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col space-y-3"
          >
            <h4 className="font-serif text-xl text-brand-dark italic">{f.title}</h4>
            <p className="text-brand-muted text-[11px] leading-relaxed max-w-xs uppercase tracking-wider font-medium opacity-70">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-24 px-12 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 overflow-hidden aspect-[4/5] bg-brand-beige"
          >
            <img 
              src="https://images.unsplash.com/photo-1601213906703-9faea059dfdc?q=80&w=1200&auto=format&fit=crop" 
              alt="Artisan at work" 
              className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute top-12 -left-12 w-full h-full border border-brand-dark/10 -z-0" />
        </div>
        
        <div className="space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-amber">Our Philosophy</span>
          <h2 className="font-serif text-5xl leading-[1.2] text-brand-dark">Born in a Small Cabin, Shared with the <span className="italic text-brand-amber text-4xl">World</span></h2>
          <div className="space-y-6 text-brand-muted text-sm leading-relaxed opacity-90 font-medium">
            <p>
              Lumière & Co. began with a simple desire: to capture the fleeting beauty of a sunrise over the Pacific Northwest. We believe that light is more than just physics—it's an invitation to pause.
            </p>
            <p>
              Every candle is hand-poured in our studio. We use no synthetic phthalates or parabens. Just pure scent and light, crafted to evoke memory and bring the essence of nature into your home.
            </p>
          </div>
          <button className="flex items-center space-x-3 group font-bold tracking-[0.2em] text-[10px] uppercase border-b border-brand-dark pb-1 text-brand-dark hover:text-brand-amber hover:border-brand-amber transition-colors">
            <span>Learn more about our ritual</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 px-12 bg-brand-cream border-t border-brand-dark/5">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-serif text-4xl mb-4 text-brand-dark">Customer Rituals</h2>
        <div className="w-12 h-px bg-brand-amber mx-auto" />
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`${i === 1 ? 'bg-brand-amber text-brand-cream' : 'bg-brand-beige text-brand-muted'} p-10 flex flex-col justify-center border border-brand-dark/5 min-h-[300px]`}
          >
            <p className="font-serif text-2xl italic mb-6 leading-[1.3]">"{review.text}"</p>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">— {review.author}, Verified Buyer</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-8">
            <h2 className="font-serif text-3xl font-bold tracking-tighter uppercase">Lumière & Co.</h2>
            <p className="text-brand-cream/60 max-w-sm text-sm leading-loose">
              Curating atmospheric excellence through hand-poured light and artisanal fragrance. Based in Vermont, inspired by the wild.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:border-brand-amber hover:text-brand-amber transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-amber">Navigate</h4>
            <ul className="space-y-4 text-brand-cream/70 text-[11px] uppercase tracking-widest font-bold">
              <li><a href="#" className="hover:text-brand-amber transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-brand-amber transition-colors">Scent Guide</a></li>
              <li><a href="#" className="hover:text-brand-amber transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-brand-amber transition-colors">Wholesale</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-amber">Ritual List</h4>
            <p className="text-[10px] uppercase tracking-wider text-brand-cream/60 font-medium">Receive early access to seasonal drops.</p>
            <div className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-b border-brand-cream/30 py-2 focus:outline-none focus:border-brand-amber w-full text-[10px] tracking-widest" 
              />
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] bg-brand-cream text-brand-dark py-4 hover:bg-brand-amber transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[9px] uppercase tracking-[0.25em] text-brand-cream/40 font-bold">
          <div>© 2024 Lumière & Co. Artisanal Candles. Vermont Studio.</div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="selection:bg-brand-amber selection:text-brand-cream">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <Features />
        <Collections />
        <Story />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

