import React from 'react';
import { ShoppingCart, Package, DollarSign, BarChart3, Plus, Search, Filter, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';

const POS: React.FC = () => {
  const products = [
    { id: 1, name: 'Premium Coffee Beans', price: '$24.99', stock: 45, category: 'Beverages' },
    { id: 2, name: 'Organic Green Tea', price: '$18.50', stock: 12, category: 'Beverages' },
    { id: 3, name: 'Artisan Mug', price: '$12.00', stock: 82, category: 'Merchandise' },
    { id: 4, name: 'French Press', price: '$35.00', stock: 5, category: 'Equipment' },
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
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">POS System</h1>
              <p className="text-xl text-slate-600 max-w-2xl">Real-time sales and inventory management for multi-industry businesses.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-full border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                <BarChart3 className="w-5 h-5" /> Reports
              </button>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20">
                <Plus className="w-5 h-5" /> New Sale
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                  <DollarSign size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Today's Sales</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">$2,845.50</p>
              <p className="text-sm text-emerald-600 mt-2 flex items-center gap-1">
                <TrendingUp size={16} /> +8% vs yesterday
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <ShoppingCart size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Total Orders</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">124</p>
              <p className="text-sm text-slate-500 mt-2">Average order: $22.95</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                  <Package size={24} />
                </div>
                <h3 className="font-bold text-slate-900">Low Stock Items</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">12</p>
              <p className="text-sm text-amber-600 mt-2 font-semibold">Action required</p>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-12">
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="font-bold text-slate-900 text-lg">Inventory Overview</h3>
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <button className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-100">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                    <th className="px-6 py-4 font-semibold">Product Name</th>
                    <th className="px-6 py-4 font-semibold">Category</th>
                    <th className="px-6 py-4 font-semibold">Price</th>
                    <th className="px-6 py-4 font-semibold">Stock</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-900">{product.name}</td>
                      <td className="px-6 py-4 text-slate-600">{product.category}</td>
                      <td className="px-6 py-4 font-bold text-slate-900">{product.price}</td>
                      <td className="px-6 py-4 text-slate-600">{product.stock} units</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          product.stock > 20 ? 'bg-emerald-100 text-emerald-700' :
                          product.stock > 10 ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {product.stock > 20 ? 'In Stock' : product.stock > 10 ? 'Low Stock' : 'Critical'}
                        </span>
                      </td>
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

export default POS;
