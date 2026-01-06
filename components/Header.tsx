import React from 'react';
import { Hexagon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 md:py-6 md:px-12 flex justify-between items-center z-10 relative">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1.5 md:p-2 rounded-lg shadow-lg shadow-blue-500/20">
           <Hexagon className="text-white w-5 h-5 md:w-6 md:h-6 fill-current" />
        </div>
        <span className="text-lg md:text-xl font-bold tracking-wider text-slate-900">EZYFLOW</span>
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