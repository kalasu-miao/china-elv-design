import React, { useState } from 'react';
import { Search, Download, FileText, Bookmark, Plus, Trash2 } from 'lucide-react';
import { MOCK_STANDARDS } from '../constants';
import { Category, Standard } from '../types';
import AddStandardModal from '../components/AddStandardModal';

const Standards: React.FC = () => {
  const [standards, setStandards] = useState<Standard[]>(MOCK_STANDARDS);
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStandards = standards.filter(std => {
    const matchesCategory = filter === 'All' || std.category === filter;
    const matchesSearch = std.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          std.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddStandard = (newStandard: Standard) => {
    setStandards(prev => [newStandard, ...prev]);
    setIsModalOpen(false);
  };

  const handleDeleteStandard = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Using a standard confirm dialog
    // If this doesn't appear, check browser popup blocker settings
    if (window.confirm('确定要删除此规范吗？此操作不可恢复。')) {
      setStandards(prev => prev.filter(s => s.id !== id));
    }
  };

  const handleDownload = (e: React.MouseEvent, std: Standard) => {
    e.stopPropagation(); // Prevent card click if added later
    
    if (std.pdfUrl) {
      // Create a temporary link to trigger download
      const link = document.createElement('a');
      link.href = std.pdfUrl;
      link.download = std.fileName || `${std.code}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(`[演示模式] 无法下载 "${std.title}"。\n\n这是预置的演示数据，没有实际的PDF文件。请上传您自己的文件进行测试。`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">规范与标准</h1>
          <p className="mt-2 text-slate-600">带有专家批注的权威文库。</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white rounded-lg font-medium hover:bg-blue-800 transition shadow-sm active:scale-95"
        >
          <Plus size={18} />
          上传新规范
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          <button 
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${filter === 'All' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            全部系统
          </button>
          {Object.values(Category).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${filter === cat ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
          <input 
            type="text" 
            placeholder="按规范号或标题搜索..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue bg-slate-50"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStandards.map((std) => (
          <div key={std.id} className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full relative isolate">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-brand-blue">
                <FileText size={20} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">{std.code}</span>
                <button 
                  type="button"
                  onClick={(e) => handleDeleteStandard(e, std.id)}
                  className="relative z-10 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                  title="删除规范"
                >
                  <Trash2 size={18} className="pointer-events-none" />
                </button>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{std.title}</h3>
            <p className="text-xs text-slate-500 mb-4 flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-slate-100">{std.category}</span>
              <span>•</span>
              <span>{std.year}</span>
            </p>
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-3 mb-6 flex-grow rounded-r-lg">
              <div className="flex gap-2 items-start">
                <Bookmark className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 italic leading-relaxed">"{std.expertTip}"</p>
              </div>
            </div>

            <button 
              type="button"
              onClick={(e) => handleDownload(e, std)}
              className="relative z-10 w-full py-2.5 flex items-center justify-center gap-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-blue hover:border-brand-blue/30 transition mt-auto cursor-pointer"
            >
              <Download size={16} className="pointer-events-none" /> 
              <span className="pointer-events-none">{std.pdfUrl ? '下载 PDF' : '下载 (演示)'}</span>
            </button>
          </div>
        ))}
        {filteredStandards.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <Search size={48} className="mb-4 opacity-20" />
            <p>未找到符合您条件的标准。</p>
            <button onClick={() => setIsModalOpen(true)} className="mt-4 text-brand-blue font-medium hover:underline">
              上传一个新的？
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <AddStandardModal 
          onClose={() => setIsModalOpen(false)} 
          onAdd={handleAddStandard} 
        />
      )}
    </div>
  );
};

export default Standards;