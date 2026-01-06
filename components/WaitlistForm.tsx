import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { LoadingState } from '../types';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus(LoadingState.LOADING);
    
    // Simulate API call
    setTimeout(() => {
      setStatus(LoadingState.SUCCESS);
      setEmail('');
    }, 1500);
  };

  if (status === LoadingState.SUCCESS) {
    return (
      <div className="glass-card p-6 rounded-2xl border border-green-500/30 flex items-center justify-center gap-3 animate-fade-in max-w-md mx-auto">
        <CheckCircle className="text-green-500 w-6 h-6" />
        <p className="text-slate-700 font-medium">You're on the list! We'll be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative flex items-center bg-white rounded-xl p-1.5 border border-slate-200 shadow-sm">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 bg-transparent border-none outline-none text-slate-900 px-4 py-3 placeholder:text-slate-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={status === LoadingState.LOADING}
          className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-6 py-3 font-medium transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
        >
          {status === LoadingState.LOADING ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Notify Me <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      <p className="mt-3 text-center text-slate-500 text-sm">
        Join 2,000+ early adopters. No spam, ever.
      </p>
    </form>
  );
};

export default WaitlistForm;