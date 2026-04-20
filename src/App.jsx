/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  RotateCw, 
  ArrowRight, 
  Sun,
  Menu,
  X,
  Phone,
  Mail
} from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-art-bg/95 border-b border-art-ink/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black uppercase tracking-tighter text-art-ink">Sere.V</span>
          </div>
          
          <div className="hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
            <a href="#problem" className="hover:text-art-accent transition-colors">Problem</a>
            <a href="#features" className="hover:text-art-accent transition-colors">Features</a>
            <a href="#benefits" className="hover:text-art-accent transition-colors">Benefits</a>
            <a href="#inquiry" className="bg-art-ink text-white px-8 py-3 hover:bg-art-accent transition-all rounded-none">Inquiry</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-art-ink">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-art-bg border-b border-art-ink/10 p-6 space-y-6"
        >
          <a href="#problem" onClick={() => setIsOpen(false)} className="block text-micro">Problem</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-micro">Features</a>
          <a href="#benefits" onClick={() => setIsOpen(false)} className="block text-micro">Benefits</a>
          <a href="#inquiry" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center">Inquiry</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-40 pb-20 md:pt-64 md:pb-40 overflow-hidden relative">
      <div className="absolute top-[20%] right-[-100px] rotate-90 text-[200px] font-serif italic font-black opacity-[0.03] pointer-events-none select-none">
        MODERNITY
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <span className="section-label">Hatching No. 01</span>
            <h1 className="text-[80px] md:text-[120px] leading-[0.85] mb-12">
              Fragments<br />
              <span className="text-art-accent italic lowercase">of the future.</span>
            </h1>
            <p className="text-2xl leading-relaxed text-art-ink/70 font-light mb-16 italic max-w-lg">
              An immersive exploration of agricultural autonomy through minimalist technical design.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#inquiry" className="btn-primary">
                Book a Product Introduction
              </a>
              <a href="#features" className="btn-secondary">
                Technical Archive
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative"
          >
            <div className="w-full aspect-[4/5] bg-art-muted relative shadow-2xl flex items-center justify-center p-8">
              <div className="w-full h-full border border-art-ink/10 flex items-center justify-center relative overflow-hidden">
                <div className="font-serif italic text-[300px] opacity-[0.03] select-none absolute">S</div>
                <img 
                  src="https://picsum.photos/seed/poultry-incubator/800/1000" 
                  alt="Smart Incubation System" 
                  className="w-[85%] h-[85%] object-cover grayscale brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-56 h-64 bg-art-accent p-8 text-white flex flex-col justify-between shadow-2xl">
                <span className="font-serif italic text-5xl">01</span>
                <p className="text-micro leading-relaxed text-white">
                  Affordable Hatching<br />
                  Curated for Growth<br />
                  Series 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    {
      title: "Ext. Dependency",
      desc: "Vulnerability to market shifts and external hatchery schedules.",
      icon: "01",
      number: "01"
    },
    {
      title: "Operational Cost",
      desc: "Middleman margins and logistics impacting the bottom line.",
      icon: "02",
      number: "02"
    },
    {
      title: "Manual Overhead",
      desc: "Labor-intensive processes leading to inconsistent yields.",
      icon: "03",
      number: "03"
    }
  ];

  return (
    <section id="problem" className="py-32 border-y border-art-ink/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-12 gap-16 items-start mb-24">
          <div className="md:col-span-4">
            <span className="section-label">Problem Analysis</span>
            <h2 className="text-5xl md:text-6xl leading-[0.9]">The weight of traditional dependence.</h2>
          </div>
          <div className="md:col-span-8 pt-12 md:pl-16">
            <p className="text-xl text-art-ink/60 font-light leading-relaxed italic border-l border-art-ink/20 pl-8">
              Small poultry farm owners lose control of their production cycle at the very start. Reliance on commercial hatcheries creates a barrier to true farm autonomy and growth.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-0 border border-art-ink/10">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-12 ${i !== 2 ? 'md:border-r border-art-ink/10' : ''} border-b md:border-b-0 border-art-ink/10 hover:bg-art-muted/20 transition-colors`}
            >
              <span className="font-serif italic text-4xl text-art-accent mb-12 block">{p.number}</span>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4">{p.title}</h3>
              <p className="text-art-ink/70 leading-relaxed font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative"
          >
            <div className="aspect-[4/3] bg-art-muted p-12">
               <img 
                src="https://picsum.photos/seed/farmer-tech/800/600" 
                alt="Farmer using technology" 
                className="w-full h-full object-cover grayscale brightness-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-0 right-[-40px] rotate-90 text-micro text-art-ink/20">ARCHIVE_SERE_2026</div>
          </motion.div>
          
          <div className="order-1 md:order-2">
            <span className="section-label">Aesthetic Response</span>
            <h2 className="text-5xl md:text-6xl mb-10 leading-[0.9]">Designing for technical autonomy.</h2>
            <p className="text-xl text-art-ink/60 mb-12 leading-relaxed italic font-light">
              We translate complex incubation mechanics into a minimalist, farmer-led interface. High-quality hatching rates, simplified for the modern agrarian.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { label: "Cycle Control", value: "Sync" },
                { label: "Operational", value: "Native" },
                { label: "Implementation", value: "Direct" },
                { label: "Monitoring", value: "Real-time" }
              ].map((item, i) => (
                <div key={i} className="border-b border-art-ink/10 pb-4">
                   <div className="text-micro text-art-accent mb-2 uppercase">{item.label}</div>
                   <div className="font-serif italic text-2xl">{item.value}</div>
                </div>
              ))}
            </div>
            <a href="#inquiry" className="btn-secondary w-full sm:w-auto justify-center">Inquire Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: "Technical Ease", desc: "Designed for use without advanced expertise.", icon: "01" },
    { title: "Atmos. Control", desc: "Automated temperature and humidity logic.", icon: "02" },
    { title: "Natural Motion", desc: "Fully automated egg turning simulation.", icon: "03" },
    { title: "Ground Logic", desc: "Built from practical field-grounded needs.", icon: "04" },
    { title: "Accessible Entry", desc: "Positioned at ₹10,000 for small farm owners.", icon: "05" },
    { title: "Batch Monitoring", desc: "Technical candling for precise cycle oversight.", icon: "06" }
  ];

  return (
    <section id="features" className="py-32 bg-art-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="section-label">Core Logic</span>
            <h2 className="text-5xl md:text-7xl leading-[0.85]">Architecture of<br />incubation.</h2>
          </div>
          <p className="text-micro max-w-[200px] text-art-ink/40">Technology as a tool for agricultural liberation. Precise. Minimal. Human-centric.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-art-ink/10">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-12 border-r border-b border-art-ink/10 hover:bg-art-ink hover:text-white transition-all duration-500 group"
            >
              <span className="text-micro text-art-accent mb-12 block group-hover:text-white transition-colors">{f.icon}</span>
              <h3 className="font-serif italic text-3xl mb-6 group-hover:text-white transition-colors capitalize">{f.title}</h3>
              <p className="text-art-ink/60 leading-relaxed font-light group-hover:text-white/60 transition-colors">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-32 bg-art-ink text-white overflow-hidden relative">
      <div className="absolute top-[10%] left-[-150px] rotate-90 text-[240px] font-serif italic font-black opacity-[0.02] pointer-events-none select-none text-white uppercase">
        AUTONOMY
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-12 mb-16">
            <span className="text-micro text-art-accent mb-4 block">Outcomes No. 01 — 04</span>
            <h2 className="text-6xl md:text-[100px] leading-[0.85] italic font-light font-serif">Structural autonomy<br /><span className="text-art-accent italic">for the farm.</span></h2>
          </div>
          
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-12">
            {[
              { title: "Independence", desc: "Removing reliance on commercial cycles." },
              { title: "Efficiency", desc: "Reducing costs at the level of the farm." },
              { title: "Proficiency", desc: "Scaling through confidence in technology." },
              { title: "Confidence", desc: "The psychological shift in production." }
            ].map((b, i) => (
              <div key={i} className="border-l border-white/20 pl-8 pb-4">
                <h3 className="text-micro text-white mb-4">{b.title}</h3>
                <p className="text-white/60 font-light italic text-lg leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-art-muted/10 p-8 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/farm-success/800/800" 
                alt="Positive farm outcome" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 text-[100px] font-serif italic text-white/5 font-black uppercase tracking-tighter">SUCCESS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoItIsFor = () => {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="border border-art-ink/10 p-16 md:p-32 flex flex-col items-center text-center relative overflow-hidden">
          <span className="section-label">Curated Audience</span>
          <h2 className="text-5xl md:text-7xl mb-16 max-w-4xl leading-[0.9]">Fragments of the agricultural community.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8">
            {[
              "Poultry Owners",
              "Agri-Entrepreneurs",
              "Small Farmers",
              "Rural Youth"
            ].map((target, i) => (
              <div key={i} className="text-micro border-t border-art-ink/10 pt-8 text-art-ink/60 uppercase">
                {target}
              </div>
            ))}
          </div>
          <div className="absolute bottom-[-50px] right-[-30px] font-serif italic text-[150px] opacity-[0.02]">COMMUNITY</div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="inquiry" className="py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-8xl leading-[0.85] mb-12 font-serif italic font-light italic">Refining the next<br /><span className="text-art-accent italic lowercase">movement.</span></h2>
        <p className="text-xl text-art-ink/60 italic font-light mb-16 leading-relaxed mb-16">
          Request a physical demonstration or digital consultation to explore the future of your production.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <button className="btn-primary px-16 py-6 text-sm">
            Book Viewing
          </button>
          <button className="btn-secondary px-16 py-6 text-sm">
            Digital Archive
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-art-ink/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="flex flex-col gap-8">
            <div className="text-2xl font-black uppercase tracking-tighter text-art-ink">Sere.V</div>
            <div className="text-micro flex items-center gap-6">
                <div className="w-12 h-[1px] bg-art-ink/20"></div>
                <span className="opacity-60 uppercase">Open Daily 08:00 — 20:00</span>
            </div>
            <p className="text-xs text-art-ink/40 max-w-[200px]">Hatching the future of grassroots agricultural technology. Pune, 2026.</p>
        </div>
        
        <div className="flex gap-12 text-micro">
            <span className="hover:text-art-accent cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-art-accent cursor-pointer transition-colors">Are.na</span>
            <span className="hover:text-art-accent cursor-pointer transition-colors">Archive</span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-art-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <WhoItIsFor />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
