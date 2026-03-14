import React from 'react';
import Header from '../components/Header';
import WaitlistForm from '../components/WaitlistForm';
import Background from '../components/Background';
import Features from '../components/Features';
import AppShowcase from '../components/AppShowcase';
import Metrics from '../components/Metrics';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <Background />
      <Header />
      
      <main className="flex-grow z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                <span className="text-blue-600 text-xs md:text-sm font-semibold tracking-wide uppercase">Now Live: Version 2.0</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight text-slate-900 leading-[1.1]">
                Streamline your chaos. <br />
                <span className="gradient-text">Master your flow.</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                EZYFLOW is the all-in-one business operating system. 
                From CRM to POS, we provide the tools you need to scale without the headache.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <WaitlistForm />
                <button className="px-8 py-4 rounded-full border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-all">
                  View Demo
                </button>
              </div>
            </motion.div>
            
            <Features />
          </div>
        </section>

        {/* App Showcase Section */}
        <AppShowcase />

        {/* Metrics Section */}
        <Metrics />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Final CTA */}
        <section className="py-24 bg-slate-900 text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-slate-400 text-lg mb-10">Join thousands of companies using EZYFLOW to automate their growth.</p>
            <div className="flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
