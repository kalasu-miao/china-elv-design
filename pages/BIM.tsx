import React from 'react';
import { Layers, Database, Cpu } from 'lucide-react';

const BIM: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">BIM Digital Delivery</h1>
        <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
          Moving beyond "Pretty Pictures". We focus on Data, Quantity Accuracy, and Facility Management integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center hover:-translate-y-1 transition-transform">
          <div className="inline-flex p-4 bg-indigo-50 text-indigo-600 rounded-full mb-6">
            <Layers size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Collaborative Design</h3>
          <p className="text-slate-600">
            Pipeline collision detection for weak current trays. Optimizing vertical shaft layouts in 3D space.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center hover:-translate-y-1 transition-transform">
          <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full mb-6">
            <Database size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Quantity Optimization</h3>
          <p className="text-slate-600">
            Precise cable length calculations based on routing. Eliminate the "15% waste margin" blind estimation.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center hover:-translate-y-1 transition-transform">
          <div className="inline-flex p-4 bg-cyan-50 text-cyan-600 rounded-full mb-6">
            <Cpu size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Twin Ready</h3>
          <p className="text-slate-600">
            Structuring asset encoding (COBie) during design phase to ensure seamless handover to IBMS platforms.
          </p>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative rounded-3xl overflow-hidden h-[400px] mb-16">
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200" 
          alt="BIM Model" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">From Model to Maintenance</h2>
          <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition">
            View Sample BIM Execution Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default BIM;