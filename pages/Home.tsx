import React from 'react';
import { ArrowRight, ShieldCheck, AlertTriangle, Cpu, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TOP_ERRORS } from '../constants';

const Home: React.FC = () => {
  // Transform data for chart
  const chartData = TOP_ERRORS.slice(0, 4).map(e => ({
    name: e.title.split(' ').slice(0,2).join(' '),
    frequency: e.frequency
  }));

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Building Intelligence <br />
              <span className="text-blue-400">System Architecture</span> Leader
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl">
              Your professional guide to avoiding pitfalls in intelligent building design. 
              Bridging the gap between strict standards and practical implementation.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/standards" className="px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-900/50 flex items-center">
                Explore Standards <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/review" className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition border border-white/20">
                View Common Errors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group">
            <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-brand-blue h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Standards Library</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Curated IT, IA, BA, SA, and EE standards with expert "one-sentence" interpretations to save you time.
            </p>
            <Link to="/standards" className="text-brand-blue font-semibold text-sm hover:underline">Access Library &rarr;</Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group">
            <div className="h-12 w-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <AlertTriangle className="text-orange-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Review Vision</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Top 100 design errors analysis. We decode the gray areas of regulations and provide optimization strategies.
            </p>
            <Link to="/review" className="text-brand-blue font-semibold text-sm hover:underline">See Pitfalls &rarr;</Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group">
            <div className="h-12 w-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="text-purple-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Trends</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              AI + Architecture, BIM 5D, and Smart Energy Management. Stay ahead with forward-looking research.
            </p>
            <Link to="/trends" className="text-brand-blue font-semibold text-sm hover:underline">Read Trends &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Data-Driven Design Insights</h2>
              <p className="text-slate-600 text-lg mb-6">
                Our database tracks thousands of design review comments. We identify the most recurring issues in weak current shafts, camera placement, and sensor locations to help you optimize before submission.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1"><Users className="text-brand-gray h-5 w-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Expert Community</h4>
                    <p className="text-sm text-slate-500">Join elite architects and engineers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 h-80 w-full bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">High Frequency Design Errors</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  />
                  <Bar dataKey="frequency" fill="#1e3a8a" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;