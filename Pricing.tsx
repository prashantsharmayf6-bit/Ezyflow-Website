import React from 'react';
import { Check, Zap, Shield, Star } from 'lucide-react';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for small teams and startups.',
      features: [
        'Up to 5 team members',
        'Basic CRM features',
        'Project management basics',
        'Email support',
        '1GB storage'
      ],
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      color: 'blue'
    },
    {
      name: 'Pro',
      price: '$79',
      description: 'Advanced tools for growing businesses.',
      features: [
        'Unlimited team members',
        'Advanced CRM & POS',
        'Workflow automation',
        'Priority support',
        '10GB storage',
        'Custom integrations'
      ],
      icon: <Star className="w-6 h-6 text-purple-600" />,
      color: 'purple',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations.',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom security features',
        'SLA guarantees',
        'Unlimited storage',
        'On-premise options'
      ],
      icon: <Shield className="w-6 h-6 text-slate-900" />,
      color: 'slate'
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <Background />
      <Header />
      
      <main className="flex-grow z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">Simple, Transparent Pricing</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose the plan that fits your business needs. No hidden fees, cancel anytime.</p>
            </motion.div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative bg-white p-8 rounded-3xl border ${plan.popular ? 'border-purple-200 shadow-xl shadow-purple-500/10' : 'border-slate-100 shadow-sm'} flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-3 rounded-2xl bg-${plan.color}-50 inline-block mb-6 w-fit`}>
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500">/month</span>}
                </div>
                <p className="text-slate-600 mb-8 text-sm">{plan.description}</p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-slate-600 text-sm">
                      <div className={`p-0.5 rounded-full bg-${plan.color}-50 text-${plan.color}-600`}>
                        <Check size={14} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-4 rounded-full font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-lg shadow-purple-500/20' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {[
                { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time from your dashboard." },
                { q: "Is there a free trial?", a: "We offer a 14-day free trial on all paid plans. No credit card required to start." },
                { q: "Do you offer discounts for non-profits?", a: "Yes, we offer special pricing for registered non-profit organizations. Contact our support team for details." }
              ].map((faq, i) => (
                <div key={i}>
                  <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-slate-600">{faq.a}</p>
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

export default Pricing;
