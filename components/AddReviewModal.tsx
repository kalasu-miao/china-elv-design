import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
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
    description: string;
    frequency: number;
  }>({
    title: '',
    type: 'System Issue',
    category: Category.IT,
    description: '',
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
      description: formData.description,
      frequency: Number(formData.frequency)
    };
    onAdd(newReview);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">新增审查内容</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
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

          <div className="grid grid-cols-2 gap-4">
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
            {formData.type === 'System Issue' && (
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
            )}
            {formData.type === 'Difficult Problem' && (
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

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">描述与对策</label>
            <textarea 
              required
              rows={4}
              placeholder="请详细描述问题背景及推荐的解决方案..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition"
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
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