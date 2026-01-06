import React from 'react';
import { Layers, Zap, ShieldCheck } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    title: "Seamless Integration",
    description: "Connect your existing stack with our modular custom solutions without breaking a sweat."
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    title: "Automated Workflows",
    description: "Logic-based triggers and AI-driven actions to remove manual bottlenecks from your daily grind."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    title: "Enterprise Security",
    description: "Built with bank-grade encryption and compliance standards from day one."
  }
];

const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl mx-auto px-2 md:px-4 mt-12 md:mt-20">
      {features.map((feature, idx) => (
        <div key={idx} className="glass-card p-5 md:p-6 rounded-xl border border-white/50 hover:border-blue-200 transition-all hover:-translate-y-1 duration-300">
          <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-slate-700">
            {feature.icon}
          </div>
          <h4 className="text-slate-900 font-semibold text-lg mb-2">{feature.title}</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;