import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { generateWorkflowInsight } from '../services/geminiService';
import { InsightResponse, LoadingState } from '../types';

const AiFeaturePreview: React.FC = () => {
  const [insightData, setInsightData] = useState<InsightResponse | null>(null);
  const [loading, setLoading] = useState<LoadingState>(LoadingState.IDLE);

  const handleGenerate = async () => {
    setLoading(LoadingState.LOADING);
    const data = await generateWorkflowInsight();
    setInsightData(data);
    setLoading(LoadingState.SUCCESS);
  };

  return (
    <div className="mt-16 w-full max-w-2xl mx-auto">
      <div className="glass-card rounded-2xl p-8 border border-white/40 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100 to-transparent rounded-bl-full opacity-50" />
        
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1 mb-4 border border-slate-200">
             <Sparkles className="w-4 h-4 text-amber-500" />
             <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Powered by Gemini AI</span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
            Experience our Custom Logic Engine
          </h3>
          <p className="text-slate-600 text-sm md:text-base mb-6 max-w-lg">
            EZYFLOW isn't just about SaaS; it's about intelligence. Tap below to see how our AI analyzes the future of work.
          </p>

          {!insightData && loading !== LoadingState.LOADING && (
            <button
              onClick={handleGenerate}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-slate-900 px-6 font-medium text-white duration-300 hover:w-56 hover:bg-blue-600 border border-transparent shadow-lg shadow-slate-900/10"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
              <span className="flex items-center gap-2">Generate Insight <Sparkles className="w-4 h-4" /></span>
            </button>
          )}

          {loading === LoadingState.LOADING && (
             <div className="flex flex-col items-center gap-3 py-4">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                <span className="text-sm text-slate-500 animate-pulse">Consulting the neural network...</span>
             </div>
          )}

          {insightData && loading === LoadingState.SUCCESS && (
            <div className="animate-fade-in-up w-full">
              <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border border-slate-200 text-left relative shadow-sm">
                 <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg uppercase">
                    {insightData.category}
                 </div>
                 <p className="text-lg text-slate-800 italic font-medium leading-relaxed">
                   "{insightData.insight}"
                 </p>
                 <div className="mt-4 flex justify-end">
                    <button 
                      onClick={handleGenerate}
                      className="text-xs flex items-center gap-1 text-slate-500 hover:text-blue-600 transition-colors"
                    >
                        <RefreshCw className="w-3 h-3" /> Regenerate
                    </button>
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiFeaturePreview;