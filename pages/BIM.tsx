import React from 'react';
import { Layers, Database, Cpu } from 'lucide-react';

const BIM: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">BIM 数字化交付</h1>
        <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
          超越“漂亮图片”。我们专注于数据、工程量精度和设施管理集成。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center hover:-translate-y-1 transition-transform">
          <div className="inline-flex p-4 bg-indigo-50 text-indigo-600 rounded-full mb-6">
            <Layers size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">协同设计</h3>
          <p className="text-slate-600">
            弱电桥架碰撞检测。在3D空间优化垂直竖井布局。
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center hover:-translate-y-1 transition-transform">
          <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full mb-6">
            <Database size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">算量优化</h3>
          <p className="text-slate-600">
            基于路由的精确线缆长度计算。消除“15%损耗”的盲目估算。
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center hover:-translate-y-1 transition-transform">
          <div className="inline-flex p-4 bg-cyan-50 text-cyan-600 rounded-full mb-6">
            <Cpu size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">数字孪生就绪</h3>
          <p className="text-slate-600">
            在设计阶段构建资产编码（COBie），确保无缝移交至IBMS平台。
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
          <h2 className="text-3xl font-bold mb-4">从模型到运维</h2>
          <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition">
            查看BIM执行计划样本
          </button>
        </div>
      </div>
    </div>
  );
};

export default BIM;