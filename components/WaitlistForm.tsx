import React from 'react';
import { ArrowRight } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-5 text-center p-2">
      <p className="text-lg md:text-xl font-medium text-slate-700">
        Wish to build your own custom app?
      </p>
      
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-200"></div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf2Mj96Wwn58nXvctyMOxNMM6tKFgUVrXYtMbdFqwjPTzEBoQ/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold transition-all hover:scale-[1.02]"
        >
          Register Now <ArrowRight className="w-5 h-5" />
        </a>
      </div>
      
      <p className="text-slate-500 text-xs md:text-sm">
        Click to open the registration form
      </p>
    </div>
  );
};

export default WaitlistForm;