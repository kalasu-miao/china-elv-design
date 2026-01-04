import React, { useState } from 'react';
import { X, UploadCloud, Check } from 'lucide-react';
import { Category, Standard } from '../types';

interface AddStandardModalProps {
  onClose: () => void;
  onAdd: (standard: Standard) => void;
}

const AddStandardModal: React.FC<AddStandardModalProps> = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    code: '',
    title: '',
    category: Category.IT,
    year: new Date().getFullYear().toString(),
    expertTip: ''
  });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let pdfUrl = '';
    let fileName = '';

    if (file) {
      // Create a temporary URL for the uploaded file so it can be downloaded later in the session
      pdfUrl = URL.createObjectURL(file);
      fileName = file.name;
    }

    const newStandard: Standard = {
      id: Date.now().toString(),
      code: formData.code,
      title: formData.title,
      category: formData.category,
      year: formData.year,
      expertTip: formData.expertTip || '暂无专家解读',
      pdfUrl,
      fileName
    };
    onAdd(newStandard);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">上传新规范</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">规范编号</label>
              <input 
                required
                type="text" 
                placeholder="例如 GB 50314-2015"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition"
                value={formData.code}
                onChange={e => setFormData({...formData, code: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">年份</label>
              <input 
                required
                type="text" 
                placeholder="2024"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition"
                value={formData.year}
                onChange={e => setFormData({...formData, year: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">规范标题</label>
            <input 
              required
              type="text" 
              placeholder="输入规范全称"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition"
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">所属系统分类</label>
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

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">文件上传</label>
            <div className="relative border-2 border-dashed border-slate-300 rounded-lg p-6 hover:bg-slate-50 transition text-center cursor-pointer group">
              <input 
                type="file" 
                accept=".pdf,.doc,.docx"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
              <div className="flex flex-col items-center justify-center text-slate-500 group-hover:text-brand-blue">
                {file ? (
                  <>
                    <Check className="h-8 w-8 mb-2 text-green-500" />
                    <span className="text-sm font-medium text-slate-900">{file.name}</span>
                  </>
                ) : (
                  <>
                    <UploadCloud className="h-8 w-8 mb-2" />
                    <span className="text-sm">点击或拖拽文件至此</span>
                    <span className="text-xs text-slate-400 mt-1">支持 PDF, DOCX</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">专家解读 (核心要点)</label>
            <textarea 
              rows={3}
              placeholder="请输入一句话核心解读..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition"
              value={formData.expertTip}
              onChange={e => setFormData({...formData, expertTip: e.target.value})}
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
              className="flex-1 px-4 py-2 bg-brand-blue text-white font-medium rounded-lg hover:bg-blue-800 transition shadow-sm"
            >
              确认上传
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStandardModal;