import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-lg font-bold mb-4">ArchIntelli</h3>
          <p className="text-sm max-w-xs leading-relaxed">
            Your navigator in the complex world of Building Intelligence. 
            We provide expert guidance on system architecture, standards compliance, and digital delivery.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Core Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Standard Interpretation</a></li>
            <li><a href="#" className="hover:text-white transition">Design Review</a></li>
            <li><a href="#" className="hover:text-white transition">BIM Consulting</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About the Expert</a></li>
            <li><a href="#" className="hover:text-white transition">Membership</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-xs text-center">
        &copy; {new Date().getFullYear()} ArchIntelli. All rights reserved. System Architecture Leader.
      </div>
    </footer>
  );
};

export default Footer;