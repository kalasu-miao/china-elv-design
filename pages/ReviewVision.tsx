import React, { useState } from 'react';
import { TOP_ERRORS } from '../constants';
import { AlertCircle, HelpCircle, CheckCircle2, Layers, Plus, Trash2 } from 'lucide-react';
import { Category, ReviewCase } from '../types';
import AddReviewModal from '../components/AddReviewModal';

const ReviewVision: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewCase[]>(TOP_ERRORS);
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReview = (newReview: ReviewCase) => {
    setReviews(prev => [newReview, ...prev]);
    setIsModalOpen(false);
  };

  const handleDeleteReview = (id: string) => {
    if (window.confirm('确定要删除此条审查内容吗？')) {
      setReviews(prev => prev.filter(r => r.id !== id));
    }
  };

  // Filter for System Issues
  const systemIssues = reviews.filter(r => 
    r.type === 'System Issue' && 
    (activeCategory === 'All' || r.category === activeCategory)
  );

  // Filter for Difficult Problems
  const difficultProblems = reviews.filter(r => r.type === 'Difficult Problem');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900">审图视界 <span className="text-slate-400 font-normal">/ Review Vision</span></h1>
          <p className="mt-4 text-lg text-slate-600">
            汲取数百个复杂项目的经验，我们汇编了终极“避坑指南”。停止重复同样的错误。
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white rounded-lg font-medium hover:bg-blue-800 transition shadow-sm active:scale-95 whitespace-nowrap"
        >
          <Plus size={18} />
          新增审查
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Section 1: System Classification (formerly Common Errors) */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Layers className="text-brand-blue" /> 系统分类
              </h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-2 scrollbar-hide">
               <button 
                onClick={() => setActiveCategory('All')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${activeCategory === 'All' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                全部
              </button>
              {Object.values(Category).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${activeCategory === cat ? 'bg-blue-100 text-brand-blue' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {systemIssues.length > 0 ? (
                systemIssues.map((item, idx) => (
                  <div key={item.id} className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 hover:shadow-md transition relative">
                    <button 
                      onClick={() => handleDeleteReview(item.id)}
                      className="absolute top-4 right-4 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-md transition opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-sm mt-1">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 rounded text-slate-500">{item.category}</span>
                        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="mt-1 text-slate-600 leading-relaxed">{item.description}</p>
                      {item.frequency && (
                        <div className="mt-3 flex gap-2">
                          <span className="text-xs font-medium text-slate-400">避坑指数: {item.frequency}%</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                  <p className="text-slate-500">该分类下暂无审查条目。</p>
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Difficult Problems (formerly Controversy) */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6 pt-4 border-t border-slate-100">
              <HelpCircle className="text-amber-500" /> 疑难问题
            </h2>
            <div className="space-y-4">
              {difficultProblems.map((item) => (
                <div key={item.id} className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative hover:shadow-md transition">
                   <button 
                      onClick={() => handleDeleteReview(item.id)}
                      className="absolute top-4 right-4 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-md transition opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={16} />
                    </button>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                  <div className="mt-4 p-4 bg-amber-50 rounded-lg text-sm text-amber-800 flex gap-2 items-start">
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>专家建议：</strong> 
                      此问题通常属于规范盲区。建议根据项目具体定位（甲级/乙级）及甲方运维需求书（OPR）进行专项论证。
                    </div>
                  </div>
                </div>
              ))}
              {difficultProblems.length === 0 && (
                <div className="text-center py-8 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-slate-500">暂无疑难问题记录。</p>
                </div>
              )}
            </div>
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

      {isModalOpen && (
        <AddReviewModal 
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddReview}
        />
      )}
    </div>
  );
};

export default ReviewVision;