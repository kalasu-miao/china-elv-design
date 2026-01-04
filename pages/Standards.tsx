import React, { useState } from 'react';
import { Search, Download, FileText, Bookmark } from 'lucide-react';
import { MOCK_STANDARDS } from '../constants';
import { Category } from '../types';

const Standards: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStandards = MOCK_STANDARDS.filter(std => {
    const matchesCategory = filter === 'All' || std.category === filter;
    const matchesSearch = std.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          std.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">规范与标准</h1>
        <p className="mt-2 text-slate-600">带有专家批注的权威文库。</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          <button 
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${filter === 'All' ? 'bg-brand-blue text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
          >
            全部系统
          </button>
          {Object.values(Category).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${filter === cat ? 'bg-brand-blue text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
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
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStandards.map((std) => (
          <div key={std.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-brand-blue">
                <FileText size={20} />
              </div>
              <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">{std.code}</span>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2">{std.title}</h3>
            <p className="text-xs text-slate-500 mb-4">{std.category} • {std.year}</p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-6 flex-grow">
              <div className="flex gap-2 items-start">
                <Bookmark className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 italic">"{std.expertTip}"</p>
              </div>
            </div>

            <button className="w-full py-2 flex items-center justify-center gap-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition mt-auto">
              <Download size={16} /> 下载 PDF
            </button>
          </div>
        ))}
        {filteredStandards.length === 0 && (
          <div className="col-span-full text-center py-20 text-slate-400">
            未找到符合您条件的标准。
          </div>
        )}
      </div>
    </div>
  );
};

export default Standards;