import React from 'react';
import { Briefcase, CheckCircle2, Clock, AlertCircle, Plus } from 'lucide-react';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';

const ProjectManagement: React.FC = () => {
  const tasks = [
    { id: 1, title: 'Website Redesign', priority: 'High', status: 'In Progress', progress: 65, team: ['AL', 'JS', 'MC'] },
    { id: 2, title: 'Mobile App API', priority: 'Medium', status: 'To Do', progress: 0, team: ['EW', 'AL'] },
    { id: 3, title: 'Client Onboarding', priority: 'Low', status: 'Completed', progress: 100, team: ['JS'] },
    { id: 4, title: 'Q3 Marketing Plan', priority: 'High', status: 'In Progress', progress: 30, team: ['MC', 'EW'] },
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
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">Project Management</h1>
              <p className="text-xl text-slate-600 max-w-2xl">Track tasks, deadlines, and team progress with our powerful project management tools.</p>
            </div>
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20">
              <Plus className="w-5 h-5" /> New Project
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Briefcase size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Active Projects</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">12</p>
              <p className="text-sm text-blue-600 mt-2">4 starting this week</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Pending Tasks</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">48</p>
              <p className="text-sm text-amber-600 mt-2">12 due today</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Completed</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">156</p>
              <p className="text-sm text-emerald-600 mt-2">↑ 8% from last month</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-50 rounded-lg text-red-600">
                  <AlertCircle size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Overdue</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">3</p>
              <p className="text-sm text-red-600 mt-2">Requires attention</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-slate-900 text-lg">Active Tasks</h3>
                  <button className="text-purple-600 text-sm font-semibold hover:underline">View All</button>
                </div>
                <div className="divide-y divide-slate-100">
                  {tasks.map((task) => (
                    <div key={task.id} className="p-6 hover:bg-slate-50/50 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">{task.title}</h4>
                          <div className="flex items-center gap-3 text-sm">
                            <span className={`font-semibold ${
                              task.priority === 'High' ? 'text-red-500' :
                              task.priority === 'Medium' ? 'text-amber-500' : 'text-blue-500'
                            }`}>
                              {task.priority} Priority
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-500">{task.status}</span>
                          </div>
                        </div>
                        <div className="flex -space-x-2">
                          {task.team.map((member, i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600">
                              {member}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-purple-600 rounded-full transition-all duration-500"
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-700">{task.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 text-lg mb-6">Team Activity</h3>
                <div className="space-y-6">
                  {[
                    { user: 'Alex', action: 'completed', target: 'Design Review', time: '2 hours ago' },
                    { user: 'Sarah', action: 'commented on', target: 'API Docs', time: '4 hours ago' },
                    { user: 'Michael', action: 'started', target: 'Mobile App', time: '1 day ago' },
                    { user: 'Emma', action: 'updated', target: 'Marketing Plan', time: '2 days ago' },
                  ].map((activity, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center font-bold text-slate-500 text-xs">
                        {activity.user.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 leading-snug">
                          <span className="font-bold text-slate-900">{activity.user}</span> {activity.action} <span className="text-purple-600 font-semibold">{activity.target}</span>
                        </p>
                        <span className="text-xs text-slate-400">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-all text-sm">
                  View Full Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectManagement;
