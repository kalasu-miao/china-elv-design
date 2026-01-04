import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-lg font-bold mb-4">ArchIntelli</h3>
          <p className="text-sm max-w-xs leading-relaxed">
            您在复杂的建筑智能世界中的领航员。我们提供系统架构、标准合规性和数字化交付方面的专家指导。
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">核心服务</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">标准解读</a></li>
            <li><a href="#" className="hover:text-white transition">设计审查</a></li>
            <li><a href="#" className="hover:text-white transition">BIM咨询</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">联系我们</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">关于专家</a></li>
            <li><a href="#" className="hover:text-white transition">会员服务</a></li>
            <li><a href="#" className="hover:text-white transition">联系方式</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-xs text-center">
        &copy; {new Date().getFullYear()} ArchIntelli. 版权所有。系统架构领航人。
      </div>
    </footer>
  );
};

export default Footer;