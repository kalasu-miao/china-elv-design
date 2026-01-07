import React, { useState } from 'react';
import { X, Save, AlertTriangle, Lightbulb, ClipboardList, StickyNote } from 'lucide-react';
import { Category, ReviewCase } from '../types';

interface AddReviewModalProps {
  onClose: () => void;
  onAdd: (review: ReviewCase) => void;
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState<{
    title: string;
    type: 'System Issue' | 'Difficult Problem';
    category: Category;
    problem: string;
    cause: string;
    solution: string;
    remark: string;
    frequency: number;
  }>({
    title: '',
    type: 'System Issue',
    category: Category.IT,
    problem: '',
    cause: '',
    solution: '',
    remark: '',
    frequency: 50
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: ReviewCase = {
      id: Date.now().toString(),
      title: formData.title,
      type: formData.type,
      // Only assign category if it's a System Issue, though we keep it in state
      category: formData.type === 'System Issue' ? formData.category : undefined,
      problem: formData.problem,
      cause: formData.cause,
      solution: formData.solution,
      remark: formData.remark,
      frequency: Number(formData.frequency)
    };
    onAdd(newReview);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-slate-100 sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold text-slate-900">新增审查内容</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Header Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">问题标题</label>
              <input 
                required
                type="text" 
                placeholder="例如：弱电井预留洞口尺寸错误"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">问题类型</label>
              <select 
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition bg-white"
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value as 'System Issue' | 'Difficult Problem'})}
              >
                <option value="System Issue">系统分类</option>
                <option value="Difficult Problem">疑难问题</option>
              </select>
            </div>
            {formData.type === 'System Issue' ? (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">所属系统</label>
                <select 
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition bg-white"
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value as Category})}
                >
                  {Object.values(Category).map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            ) : (
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">错误频率估算 (%)</label>
                 <input 
                  type="number" 
                  min="0" max="100"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition"
                  value={formData.frequency}
                  onChange={e => setFormData({...formData, frequency: Number(e.target.value)})}
                />
              </div>
            )}
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">详细分析</h3>
            
            {/* 1. Problem */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                <AlertTriangle size={16} className="text-red-500" />
                具体问题描述 (Problem)
              </label>
              <textarea 
                required
                rows={2}
                placeholder="描述审查中发现的具体违规点或不合理处..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-100 focus:border-red-400 outline-none transition"
                value={formData.problem}
                onChange={e => setFormData({...formData, problem: e.target.value})}
              />
            </div>

            {/* 2. Cause */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                <ClipboardList size={16} className="text-orange-500" />
                产生原因 (Reason)
              </label>
              <textarea 
                required
                rows={2}
                placeholder="分析导致该问题发生的根本原因..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-100 focus:border-orange-400 outline-none transition"
                value={formData.cause}
                onChange={e => setFormData({...formData, cause: e.target.value})}
              />
            </div>

            {/* 3. Solution */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                <Lightbulb size={16} className="text-green-600" />
                改进措施 (Improvement)
              </label>
              <textarea 
                required
                rows={3}
                placeholder="提供具体的解决方案、规范依据或优化建议..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-green-500 outline-none transition"
                value={formData.solution}
                onChange={e => setFormData({...formData, solution: e.target.value})}
              />
            </div>

             {/* 4. Remark */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                <StickyNote size={16} className="text-blue-400" />
                备注 (Remark) <span className="text-slate-400 font-normal text-xs ml-1">(可选)</span>
              </label>
              <input
                type="text"
                placeholder="补充说明、规范条款号等..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition"
                value={formData.remark}
                onChange={e => setFormData({...formData, remark: e.target.value})}
              />
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button 
              type="button" 
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition"
            >
              取消
            </button>
            <button 
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-brand-blue text-white font-medium rounded-lg hover:bg-blue-800 transition shadow-sm"
            >
              <Save size={18} />
              保存内容
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;