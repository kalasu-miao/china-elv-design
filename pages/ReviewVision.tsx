import React from 'react';
import { TOP_ERRORS } from '../constants';
import { AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

const ReviewVision: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl font-bold text-slate-900">审图视界 <span className="text-slate-400 font-normal">/ Review Vision</span></h1>
        <p className="mt-4 text-lg text-slate-600">
          汲取数百个复杂项目的经验，我们汇编了终极“避坑指南”。停止重复同样的错误。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <AlertCircle className="text-red-500" /> 高频错误
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
                    <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded text-slate-500">错误频率: {item.frequency}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 pt-8">
            <HelpCircle className="text-amber-500" /> 争议与灰色地带
          </h2>
          <div className="space-y-4">
            {TOP_ERRORS.filter(e => e.type === 'Controversy').map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
                <div className="mt-4 p-4 bg-amber-50 rounded-lg text-sm text-amber-800">
                  <strong>专家观点：</strong> 虽然规范没有严格强制，但为了满足移动维护的功能需求，甲级写字楼进行此项投资是合理的。
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-brand-blue rounded-2xl p-6 text-white shadow-lg">
            <h3 className="font-bold text-lg mb-4">解锁完整权限</h3>
            <ul className="space-y-3 text-sm opacity-90 mb-6">
              <li className="flex gap-2"><CheckCircle2 size={16} /> 完整100点错误清单</li>
              <li className="flex gap-2"><CheckCircle2 size={16} /> 私有数据库访问</li>
              <li className="flex gap-2"><CheckCircle2 size={16} /> 每月大师课</li>
            </ul>
            <button className="w-full py-3 bg-white text-brand-blue font-bold rounded-lg hover:bg-blue-50 transition">
              加入精研社
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200">
             <h3 className="font-bold text-slate-900 mb-4">案例研究：200米+ 超高层</h3>
             <img 
               src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=400" 
               alt="Skyscraper" 
               className="w-full h-40 object-cover rounded-lg mb-4"
             />
             <p className="text-sm text-slate-600 mb-4">
               我们如何优化IBMS架构，在提高系统冗余度的同时节省15%的布线成本。
             </p>
             <button className="text-brand-blue text-sm font-semibold hover:underline">阅读分析 &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewVision;