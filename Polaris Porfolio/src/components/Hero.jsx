import React from 'react';
import { ChevronDown, Award, Target, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-cyan-400/20 text-cyan-600 rounded-full text-sm font-semibold border border-cyan-400/30">
                  FTC Team 23682
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="text-gradient">Polaris</span>
                <br />
                <span className="text-slate-900">Into the Deep</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                A comprehensive digital twin of our 2025-2026 engineering journey. 
                Explore our Arctic-inspired design philosophy, cutting-edge autonomous systems, 
                and the data-driven innovation that powers our competitive edge.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('strategic').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Target className="w-5 h-5" />
                <span>Explore Strategy</span>
              </button>
              <button 
                onClick={() => document.getElementById('mechanical').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 glass-card hover:bg-white/80 text-slate-900 font-bold rounded-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>View Systems</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="glass-card p-6 text-center">
                <Award className="w-8 h-8 text-sky-500 mx-auto mb-2" />
                <p className="text-3xl font-bold text-slate-900">82.5</p>
                <p className="text-sm text-slate-600">Est. OPR</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-slate-900">94.3%</p>
                <p className="text-sm text-slate-600">Auto Success</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-3xl font-bold text-slate-900">14.2s</p>
                <p className="text-sm text-slate-600">Cycle Time</p>
              </div>
            </div>
          </div>

          {/* Right Column - Robot Visualization */}
          <div className="relative">
            <div className="glass-card p-8 float-animation">
              {/* Robot SVG Placeholder */}
              <div className="relative aspect-square bg-gradient-to-br from-sky-500/20 to-cyan-400/20 rounded-2xl p-8 overflow-hidden">
                {/* Decorative Grid */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-2 opacity-20">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-sky-500/30"></div>
                  ))}
                </div>
                
                {/* Robot Silhouette */}
                <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
                  {/* Base */}
                  <rect x="50" y="140" width="100" height="40" fill="#0ea5e9" opacity="0.8" rx="5" />
                  
                  {/* Wheels */}
                  <circle cx="70" cy="175" r="12" fill="#0c4a6e" />
                  <circle cx="130" cy="175" r="12" fill="#0c4a6e" />
                  
                  {/* Main Body */}
                  <rect x="60" y="80" width="80" height="60" fill="#38bdf8" opacity="0.9" rx="8" />
                  
                  {/* Linear Lift */}
                  <rect x="85" y="20" width="30" height="65" fill="#7dd3fc" opacity="0.8" rx="4" />
                  <rect x="90" y="15" width="20" height="10" fill="#0ea5e9" opacity="0.9" rx="2" />
                  
                  {/* Intake */}
                  <rect x="140" y="95" width="30" height="20" fill="#22d3ee" opacity="0.8" rx="4" />
                  
                  {/* Accent Lines */}
                  <line x1="70" y1="100" x2="130" y2="100" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
                  <line x1="70" y1="110" x2="130" y2="110" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
                  <line x1="70" y1="120" x2="130" y2="120" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
                  
                  {/* Team Number */}
                  <text x="100" y="115" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">
                    23682
                  </text>
                </svg>

                {/* Glowing Dots */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-sky-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>

              {/* Specs Below */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-sky-500">4-Motor</p>
                  <p className="text-sm text-slate-600">Mecanum Drive</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-400">3-Stage</p>
                  <p className="text-sm text-slate-600">Linear Lift</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-sky-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
