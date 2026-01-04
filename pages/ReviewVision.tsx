import React from 'react';
import { TOP_ERRORS } from '../constants';
import { AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

const ReviewVision: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl font-bold text-slate-900">Review Vision <span className="text-slate-400 font-normal">/ 审图视界</span></h1>
        <p className="mt-4 text-lg text-slate-600">
          Drawing from hundreds of complex projects, we've compiled the ultimate "Pitfall Avoidance" guide. 
          Stop repeating the same mistakes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <AlertCircle className="text-red-500" /> High Frequency Errors
          </h2>
          
          <div className="space-y-4">
            {TOP_ERRORS.filter(e => e.type === 'Common Error').map((item, idx) => (
              <div key={item.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-slate-600 leading-relaxed">{item.description}</p>
                  <div className="mt-3 flex gap-2">
                    <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded text-slate-500">Error Freq: {item.frequency}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 pt-8">
            <HelpCircle className="text-amber-500" /> Controversy & Gray Areas
          </h2>
          <div className="space-y-4">
            {TOP_ERRORS.filter(e => e.type === 'Controversy').map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
                <div className="mt-4 p-4 bg-amber-50 rounded-lg text-sm text-amber-800">
                  <strong>Expert Opinion:</strong> While not strictly mandated by code, functional requirements for mobile maintenance justify this investment in Class A office towers.
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-brand-blue rounded-2xl p-6 text-white shadow-lg">
            <h3 className="font-bold text-lg mb-4">Unlock Full Access</h3>
            <ul className="space-y-3 text-sm opacity-90 mb-6">
              <li className="flex gap-2"><CheckCircle2 size={16} /> Full 100-Point Error Checklist</li>
              <li className="flex gap-2"><CheckCircle2 size={16} /> Private Database Access</li>
              <li className="flex gap-2"><CheckCircle2 size={16} /> Monthly Master Class</li>
            </ul>
            <button className="w-full py-3 bg-white text-brand-blue font-bold rounded-lg hover:bg-blue-50 transition">
              Join Research Club
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200">
             <h3 className="font-bold text-slate-900 mb-4">Case Study: 200m+ Tower</h3>
             <img 
               src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=400" 
               alt="Skyscraper" 
               className="w-full h-40 object-cover rounded-lg mb-4"
             />
             <p className="text-sm text-slate-600 mb-4">
               How we optimized the IBMS architecture to save 15% on cabling costs while improving system redundancy.
             </p>
             <button className="text-brand-blue text-sm font-semibold hover:underline">Read Analysis &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewVision;