import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white">
      {/* Light Base */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-100/60 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[80px]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
    </div>
  );
};

export default Background;