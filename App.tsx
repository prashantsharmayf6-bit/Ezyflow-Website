import React from 'react';
import Header from './components/Header';
import WaitlistForm from './components/WaitlistForm';
import Background from './components/Background';
import Features from './components/Features';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Background />
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 md:py-20 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-blue-600 text-xs md:text-sm font-semibold tracking-wide uppercase">Coming Soon</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900 leading-tight">
            Streamline your chaos. <br />
            <span className="gradient-text">Master your flow.</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            EZYFLOW is building the next generation of SaaS tools and custom automation solutions. 
            Stop managing software and start managing your business.
          </p>

          <div className="mt-2 mb-10 md:mt-4 md:mb-12">
            <WaitlistForm />
          </div>
          
          <Features />
        </div>
      </main>

      <footer className="w-full py-6 md:py-8 text-center text-slate-500 text-sm z-10">
        <p>&copy; {new Date().getFullYear()} EZYFLOW Solutions. All rights reserved.</p>
        <div className="mt-3 mb-2">
            <a href="mailto:ezyflowsolutions@gmail.com" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              ezyflowsolutions@gmail.com
            </a>
        </div>
        <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-blue-600 transition">Twitter</a>
            <a href="#" className="hover:text-blue-600 transition">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 transition">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default App;