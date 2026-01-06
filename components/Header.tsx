import React from 'react';
import { Hexagon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center z-10 relative">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg shadow-lg shadow-blue-500/20">
           <Hexagon className="text-white w-6 h-6 fill-current" />
        </div>
        <span className="text-xl font-bold tracking-wider text-slate-900">EZYFLOW</span>
      </div>
      <div>
        <a href="mailto:ezyflowsolutions@gmail.com" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;