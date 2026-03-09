import React from 'react';
import { motion } from 'motion/react';
import { 
  ClipboardList, 
  LayoutGrid, 
  ShieldCheck, 
  Building2, 
  Construction, 
  Home, 
  ArrowRight 
} from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="pt-24 pb-20 bg-white font-sans">
      {/* Section 1: Commitment to Excellence */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-32">
        <div className="flex justify-center mb-8">
          <div className="relative w-16 h-16">
             <Construction className="w-16 h-16 text-orange-500" />
          </div>
        </div>
        
        <h4 className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-4">
          Our Commitment to Excellence
        </h4>
        <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-20 max-w-4xl mx-auto leading-tight">
          Proud to Provide Quality Construction Services Since 2012
        </h1>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Project Planning */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mb-8">
              <ClipboardList className="w-12 h-12 text-slate-800" />
            </div>
            <h3 className="text-2xl font-display font-black text-slate-900 mb-4">Project Planning</h3>
            <p className="text-slate-600 leading-relaxed max-w-sm">
              Comprehensive project planning and design services that ensure your construction project is well-structured, cost-effective, and meets all regulatory requirements.
            </p>
          </div>

          {/* Construction Management */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-orange-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
              <LayoutGrid className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-display font-black text-slate-900 mb-4">Construction Management</h3>
            <p className="text-slate-600 leading-relaxed max-w-sm">
              Professional construction management services that oversee every aspect of your project from initial planning through final completion and handover.
            </p>
          </div>

          {/* Quality Assurance */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mb-8">
              <ShieldCheck className="w-12 h-12 text-slate-800" />
            </div>
            <h3 className="text-2xl font-display font-black text-slate-900 mb-4">Quality Assurance</h3>
            <p className="text-slate-600 leading-relaxed max-w-sm">
              Rigorous quality control processes and safety standards that ensure every project meets the highest industry standards and client expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Comprehensive Construction Services */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 text-center mb-16">
            Comprehensive Construction Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Commercial Construction */}
            <div className="bg-white border border-slate-200 p-10 relative overflow-hidden group">
              <Building2 className="w-12 h-12 text-orange-500 mb-8" />
              <h3 className="text-2xl font-display font-black text-slate-900 mb-6">Commercial Construction</h3>
              <p className="text-slate-600 mb-12 leading-relaxed">
                We specialize in commercial projects that build thriving business environments. From office complexes to retail spaces, we create structures that support growth and community needs.
              </p>
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 120L60 60L120 120" stroke="currentColor" strokeWidth="20"/>
                </svg>
              </div>
            </div>

            {/* General Contracting */}
            <div className="bg-white border border-slate-200 p-10 relative overflow-hidden group">
              <Construction className="w-12 h-12 text-orange-500 mb-8" />
              <h3 className="text-2xl font-display font-black text-slate-900 mb-6">General Contracting</h3>
              <p className="text-slate-600 mb-12 leading-relaxed">
                As your trusted contractor, we manage every stage of the construction journey, from planning and procurement to final execution, ensuring timelines are met and quality is prioritized.
              </p>
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 120L60 60L120 120" stroke="currentColor" strokeWidth="20"/>
                </svg>
              </div>
            </div>

            {/* Residential Construction */}
            <div className="bg-white border border-slate-200 p-10 relative overflow-hidden group">
              <Home className="w-12 h-12 text-orange-500 mb-8" />
              <h3 className="text-2xl font-display font-black text-slate-900 mb-6">Residential Construction</h3>
              <p className="text-slate-600 mb-12 leading-relaxed">
                We build homes that blend comfort, durability, and thoughtful design. Whether a single-family house or a multi-unit complex, our residential projects are crafted to last for generations.
              </p>
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 120L60 60L120 120" stroke="currentColor" strokeWidth="20"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
