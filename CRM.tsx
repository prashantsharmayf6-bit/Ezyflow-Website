import React from 'react';
import { Users, TrendingUp, Search, Plus, Target } from 'lucide-react';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';

const CRM: React.FC = () => {
  const contacts = [
    { id: 1, name: 'John Doe', company: 'TechCorp', status: 'Lead', value: '$5,000', date: '2 hours ago' },
    { id: 2, name: 'Jane Smith', company: 'DesignCo', status: 'Customer', value: '$12,000', date: '5 hours ago' },
    { id: 3, name: 'Bob Wilson', company: 'BuildIt', status: 'Negotiation', value: '$8,500', date: '1 day ago' },
    { id: 4, name: 'Alice Brown', company: 'SoftSys', status: 'Lead', value: '$2,000', date: '2 days ago' },
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
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">CRM Dashboard</h1>
              <p className="text-xl text-slate-600 max-w-2xl">Manage your leads, track your pipeline, and close deals faster with our intuitive CRM.</p>
            </div>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
              <Plus className="w-5 h-5" /> Add New Contact
            </button>
          </div>

          {/* CRM Dashboard Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Total Contacts</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">2,543</p>
              <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp size={16} /> ↑ 12% from last month
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <Target size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Active Deals</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">128</p>
              <p className="text-sm text-slate-500 mt-2">Value: $450,000</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Conversion Rate</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">18.4%</p>
              <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp size={16} /> ↑ 2.1% from last month
              </p>
            </div>
          </div>

          {/* Recent Contacts Table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-12">
            <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="font-bold text-slate-900 text-lg">Recent Contacts</h3>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search contacts..." 
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Company</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold">Last Contact</th>
                    <th className="px-6 py-4 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {contacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{contact.name}</td>
                      <td className="px-6 py-4 text-slate-600">{contact.company}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          contact.status === 'Customer' ? 'bg-emerald-100 text-emerald-700' :
                          contact.status === 'Lead' ? 'bg-blue-100 text-blue-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                          {contact.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 text-sm">{contact.date}</td>
                      <td className="px-6 py-4 font-semibold text-slate-900">{contact.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CRM;
