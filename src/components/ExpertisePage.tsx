import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  Award, 
  Cpu, 
  Leaf, 
  Scale, 
  Globe,
  CheckCircle2
} from 'lucide-react';

const ExpertisePage = () => {
  const coreExpertise = [
    {
      icon: <Cpu className="w-8 h-8 text-emerald-600" />,
      title: "Advanced Engineering",
      description: "Utilizing cutting-edge BIM (Building Information Modeling) and structural analysis software to ensure precision in every calculation and design choice."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: "Safety Excellence",
      description: "Our 'Zero-Harm' policy is at the core of every site. We maintain industry-leading safety standards that protect our workers and your investment."
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Sustainable Building",
      description: "Specializing in LEED-certified projects and green building materials to reduce environmental impact and optimize long-term energy efficiency."
    },
    {
      icon: <Scale className="w-8 h-8 text-emerald-600" />,
      title: "Regulatory Compliance",
      description: "Deep expertise in navigating complex local zoning laws, building codes, and environmental regulations to ensure smooth project approvals."
    }
  ];

  const stats = [
    { label: "Safety Rating", value: "99.9%" },
    { label: "Licensed Engineers", value: "45+" },
    { label: "Technical Patents", value: "12" },
    { label: "Awards Won", value: "28" }
  ];

  return (
    <div className="pt-24 pb-20 bg-white font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4">Our Technical Edge</h4>
            <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight">
              Engineering the Future with Precision
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              At Belmont Constructions, our expertise isn't just about building structures; it's about solving complex engineering challenges through innovation, safety, and sustainable practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-slate-700">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-slate-700">LEED Accredited</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction Engineering Expertise" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-emerald-600 p-10 rounded-3xl text-white shadow-xl hidden md:block">
              <Zap className="w-10 h-10 mb-4" />
              <div className="text-3xl font-black mb-1">12+ Years</div>
              <div className="text-emerald-100 text-sm uppercase tracking-wider font-bold">Technical Leadership</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">{stat.value}</div>
                <div className="text-emerald-400 text-sm uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-black text-slate-900 mb-6">Our Core Capabilities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We combine traditional craftsmanship with modern technology to deliver projects that exceed expectations in every dimension.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {coreExpertise.map((item, index) => (
            <div key={index} className="p-10 border border-slate-100 rounded-3xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group">
              <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-black text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-emerald-600 py-24 rounded-[4rem] mx-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Globe className="w-[40rem] h-[40rem] -mr-40 -mt-40" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Award className="w-16 h-16 text-emerald-200 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8">
            The Belmont Methodology
          </h2>
          <p className="text-xl text-emerald-50 mb-12 leading-relaxed">
            Our approach is rooted in transparency and rigorous project management. We utilize real-time tracking and collaborative platforms to keep clients informed at every stage of the build process.
          </p>
          <button className="bg-white text-emerald-600 px-10 py-4 rounded-full font-black text-lg hover:bg-emerald-50 transition-colors shadow-xl">
            Download Technical Brochure
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;
