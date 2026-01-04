import React from 'react';
import { ArrowRight, ShieldCheck, AlertTriangle, Cpu, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TOP_ERRORS } from '../constants';

const Home: React.FC = () => {
  // Transform data for chart
  const chartData = TOP_ERRORS.slice(0, 4).map(e => ({
    name: e.title.split(' ').slice(0,2).join(' '), // Simplified for chart display
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
              建筑智能化 <br />
              <span className="text-blue-400">系统架构</span> 领航人
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl">
              您避免智能建筑设计陷阱的专业指南。弥合严格标准与实际实施之间的差距。
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/standards" className="px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-900/50 flex items-center">
                探索标准库 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/review" className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition border border-white/20">
                查看常见错误
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
            <h3 className="text-xl font-bold text-slate-900 mb-3">规范标准库</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              精选IT、IA、BA、SA和EE标准，附带专家“一句话”解读，为您节省时间。
            </p>
            <Link to="/standards" className="text-brand-blue font-semibold text-sm hover:underline">访问标准库 &rarr;</Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group">
            <div className="h-12 w-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <AlertTriangle className="text-orange-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">审图视界</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              前100个设计错误分析。我们解读法规的灰色地带并提供优化策略。
            </p>
            <Link to="/review" className="text-brand-blue font-semibold text-sm hover:underline">查看避坑指南 &rarr;</Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group">
            <div className="h-12 w-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="text-purple-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">数字趋势</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              AI + 建筑、BIM 5D和智慧能源管理。通过前瞻性研究保持领先。
            </p>
            <Link to="/trends" className="text-brand-blue font-semibold text-sm hover:underline">阅读趋势 &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">数据驱动的设计洞察</h2>
              <p className="text-slate-600 text-lg mb-6">
                我们的数据库追踪数千条设计审查意见。我们识别弱电井、摄像头位置和传感器布局中复发率最高的问题，帮助您在提交前进行优化。
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1"><Users className="text-brand-gray h-5 w-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">专家社区</h4>
                    <p className="text-sm text-slate-500">加入精英建筑师和工程师行列。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 h-80 w-full bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">高频设计错误</h4>
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