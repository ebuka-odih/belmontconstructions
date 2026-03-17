import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HardHat, 
  Building2, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  Award,
  Users,
  Clock,
  Zap
} from 'lucide-react';
import { cn } from './lib/utils';
import ServicesPage from './components/ServicesPage';
import ExpertisePage from './components/ExpertisePage';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Expertise', id: 'expertise' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'services') {
      setCurrentPage('services');
      window.scrollTo(0, 0);
    } else if (id === 'expertise') {
      setCurrentPage('expertise');
      window.scrollTo(0, 0);
    } else if (id === 'home') {
      setCurrentPage('home');
      window.scrollTo(0, 0);
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      (isScrolled || currentPage !== 'home') ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="bg-emerald-600 p-2 rounded-lg">
            <Building2 className="text-white w-6 h-6" />
          </div>
          <span className={cn(
            "text-xl font-display font-bold tracking-tight",
            (isScrolled || currentPage !== 'home') ? "text-slate-900" : "text-white"
          )}>
            BELMONT
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-500",
                (isScrolled || currentPage !== 'home') ? "text-slate-600" : "text-white/90",
                currentPage === link.id && "text-emerald-500"
              )}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={(isScrolled || currentPage !== 'home') ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={(isScrolled || currentPage !== 'home') ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.id)}
                className="text-slate-600 font-medium py-2 border-b border-slate-100 text-left"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070" 
          alt="Construction Site"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1 mb-6">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Pioneering Modern Infrastructure</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
            Engineering the <span className="text-emerald-500">Future</span> of Construction.
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            From complex structural designs to sustainable urban infrastructure, we deliver precision engineering solutions that stand the test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group">
              View Our Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all">
              Our Expertise
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-12 right-6 md:right-12 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl flex gap-12">
          <div>
            <div className="text-3xl font-display font-bold text-white">250+</div>
            <div className="text-slate-400 text-xs uppercase tracking-widest font-bold mt-1">Projects Done</div>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <div className="text-3xl font-display font-bold text-white">15+</div>
            <div className="text-slate-400 text-xs uppercase tracking-widest font-bold mt-1">Years Exp.</div>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <div className="text-3xl font-display font-bold text-white">40+</div>
            <div className="text-slate-400 text-xs uppercase tracking-widest font-bold mt-1">Awards Won</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Structural Engineering",
      desc: "Advanced structural analysis and design for high-rise, industrial, and residential complexes."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Civil Infrastructure",
      desc: "Designing sustainable roads, bridges, and water management systems for modern cities."
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Project Management",
      desc: "End-to-end oversight ensuring safety, budget compliance, and timely project delivery."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Sustainable Design",
      desc: "Integrating LEED standards and renewable energy solutions into every engineering phase."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-emerald-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Comprehensive Engineering Solutions</h3>
          <p className="text-slate-600">We combine technical excellence with innovative thinking to solve the most complex construction challenges.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 mb-4">{s.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Skyline Plaza",
      category: "Structural",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      location: "Chicago, IL"
    },
    {
      title: "Emerald Bridge",
      category: "Civil",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000",
      location: "Seattle, WA"
    },
    {
      title: "Nexus Industrial Park",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
      location: "Austin, TX"
    },
    {
      title: "The Helix Tower",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000",
      location: "New York, NY"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-emerald-500 font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Masterpieces of Modern Engineering</h3>
          </div>
          <button className="text-emerald-400 font-bold flex items-center gap-2 hover:text-emerald-300 transition-colors">
            View All Projects <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={p.image} 
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">{p.category}</div>
                <h4 className="text-2xl font-display font-bold mb-2">{p.title}</h4>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  {p.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50" />
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
                alt="Engineering Team"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-display font-bold mb-1">99.9%</div>
              <div className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Safety Record</div>
            </div>
          </div>

          <div>
            <h2 className="text-emerald-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">Unmatched Precision & Technical Expertise</h3>
            
            <div className="space-y-8">
              {[
                {
                  title: "Advanced BIM Modeling",
                  desc: "We utilize Building Information Modeling to visualize and optimize every aspect of construction before ground is broken.",
                  icon: <Zap className="w-6 h-6 text-emerald-600" />
                },
                {
                  title: "Certified Safety Standards",
                  desc: "Our rigorous safety protocols exceed industry standards, ensuring a zero-incident workplace on every site.",
                  icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                },
                {
                  title: "Sustainable Innovation",
                  desc: "We lead the industry in green building practices, reducing carbon footprints while maintaining structural integrity.",
                  icon: <Award className="w-6 h-6 text-emerald-600" />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="bg-emerald-50 p-3 rounded-xl h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-emerald-600 text-white">
              <h3 className="text-4xl font-display font-bold mb-8">Let's Build Something Great Together</h3>
              <p className="text-emerald-100 mb-12 text-lg">Ready to start your next engineering project? Our team of experts is here to help you navigate the complexities of modern construction.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-emerald-200 text-xs font-bold uppercase tracking-widest">Call Us</div>
                    <a href="tel:2029485446" className="font-bold hover:text-white transition-colors">(202) 948-5446</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-emerald-200 text-xs font-bold uppercase tracking-widest">Email Us</div>
                    <div className="font-bold">support@belmontconstructions.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-emerald-200 text-xs font-bold uppercase tracking-widest">Visit Us</div>
                    <div className="font-bold">918 Mission Avenue Suite 200, Oceanside, CA 92054</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Project Type</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none">
                    <option>Structural Engineering</option>
                    <option>Civil Infrastructure</option>
                    <option>Sustainable Design</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                BELMONT
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pioneering the next generation of infrastructure through technical excellence and sustainable innovation.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Structural Design</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Civil Engineering</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Project Management</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">BIM Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Stay updated with our latest engineering insights.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-emerald-500 w-full" />
              <button className="bg-emerald-600 p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium uppercase tracking-widest">
          <div>© 2024 Belmont Constructions. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-emerald-500/30">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Services />
            <Portfolio />
            <Expertise />
            <Contact />
          </>
        )}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'expertise' && <ExpertisePage />}
      </main>
      <Footer />
    </div>
  );
}
