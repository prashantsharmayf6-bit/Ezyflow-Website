import React from 'react';
import { GitBranch, Play, Settings, Zap, Clock, CheckCircle2, Plus, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';

const Workflow: React.FC = () => {
  const workflows = [
    { id: 1, name: 'New Lead Auto-Reply', status: 'Active', triggers: 124, lastRun: '2 mins ago' },
    { id: 2, name: 'Invoice Reminder', status: 'Active', triggers: 45, lastRun: '1 hour ago' },
    { id: 3, name: 'Slack Notification Sync', status: 'Paused', triggers: 890, lastRun: 'Yesterday' },
    { id: 4, name: 'Data Backup', status: 'Active', triggers: 12, lastRun: '12 hours ago' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <Background />
      <Header />
      
      <main className="flex-grow z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">Workflow Automation</h1>
              <p className="text-xl text-slate-600 max-w-2xl">Automate your business processes with ease using our drag-and-drop builder.</p>
            </div>
            <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/20">
              <Plus className="w-5 h-5" /> Create Workflow
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                  <Zap size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Total Automations</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">24</p>
              <p className="text-sm text-slate-500 mt-2">18 currently active</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Play size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Runs (24h)</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">1,452</p>
              <p className="text-sm text-emerald-600 mt-2 font-semibold">100% success rate</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Time Saved</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">124h</p>
              <p className="text-sm text-slate-500 mt-2">Estimated this month</p>
            </div>
          </div>

          {/* Workflows List */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-12">
            <div className="p-6 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg">Your Workflows</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {workflows.map((wf) => (
                <div key={wf.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl ${wf.status === 'Active' ? 'bg-orange-50 text-orange-600' : 'bg-slate-100 text-slate-400'}`}>
                      <GitBranch className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{wf.name}</h4>
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {wf.triggers} triggers
                        </span>
                        <span>•</span>
                        <span>Last run: {wf.lastRun}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all text-sm flex items-center gap-2">
                      View Logs <ArrowRight size={14} />
                    </button>
                    <button className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all">
                      <Settings className="w-5 h-5" />
                    </button>
                    <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${wf.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${wf.status === 'Active' ? 'right-1' : 'left-1'}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Workflow;
