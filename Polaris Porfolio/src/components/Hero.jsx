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
                <span className="text-slate-900">DEcode</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                A comprehensive digital overview of our 2025-2026 engineering journey. Explore our  design philosophy, autonomous systems, and the data driven innovation that powers our competitive edge.
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
                <p className="text-3xl font-bold text-slate-900">32%</p>
                <p className="text-sm text-slate-600">Point Increase</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-slate-900">94.3%</p>
                <p className="text-sm text-slate-600">Auto Success</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-3xl font-bold text-slate-900">42%</p>
                <p className="text-sm text-slate-600">Parts Recycled</p>
              </div>
            </div>
          </div>

          {/* Right Column - Robot Visualization */}
          <div className="relative">
            <div className="glass-card p-8 float-animation">
              {/* Robot Photo */}
              <div className="relative aspect-square bg-gradient-to-br from-sky-500/20 to-cyan-400/20 rounded-2xl p-4 overflow-hidden">
                <img
                  src="/team/DSC_1080.JPG"
                  alt="Polaris robot"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Specs Below */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-sky-500">4-Motor</p>
                  <p className="text-sm text-slate-600">Mecanum Drive</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-400">3-Point</p>
                  <p className="text-sm text-slate-600">Belt Chain</p>
                </div>
              </div>
            </div>

            {/* Team Action Photo */}
            <div className="glass-card p-4 mt-6">
              <img
                src="/team/DSC_1126.JPG"
                alt="Team working at competition"
                loading="lazy"
                className="w-full h-48 object-cover rounded-xl"
              />
              <p className="text-xs text-slate-600 mt-2 text-center">
                Team in action at a meet
              </p>
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
