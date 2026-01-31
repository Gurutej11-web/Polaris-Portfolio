import React from 'react';
import { Cog, Layers, Zap, Move, ArrowUpCircle, Gauge } from 'lucide-react';

const MechanicalSystems = ({ judgeMode }) => {
  return (
    <section id="mechanical" className="py-20 px-6 bg-gradient-to-b from-transparent to-sky-50/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-cyan-400/20 text-cyan-600 rounded-full text-sm font-semibold border border-cyan-400/30">
              Mechanical Engineering
            </span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-4">
            Subsystem <span className="text-gradient">Deep Dive</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Custom-engineered subsystems with precision manufacturing and physics-backed design decisions
          </p>
        </div>

        {/* Drivetrain */}
        <div className={`glass-card p-8 mb-8 ${judgeMode ? 'judge-highlight' : ''}`}>
          <div className="flex items-center space-x-3 mb-6">
            <Move className="w-6 h-6 text-sky-500" />
            <h3 className="text-2xl font-bold text-slate-900">Mecanum Drivetrain</h3>
            {judgeMode && (
              <span className="px-3 py-1 bg-cyan-400 text-slate-900 text-xs font-bold rounded-full">
                CNC PLATES
              </span>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Our 4-motor mecanum drivetrain utilizes <strong className="text-sky-500">custom CNC-machined aluminum plates</strong> for 
                optimal weight distribution and rigidity. The system is designed for holonomic movement with precise field-centric control.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card p-5">
                  <h4 className="font-bold text-slate-900 mb-3">Motor Configuration</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• 4x GoBILDA 5202/5203 Series Motors</li>
                    <li>• 19.2:1 Gear Ratio</li>
                    <li>• 312 RPM @ 12V</li>
                    <li>• Torque: 6.8 kg-cm per motor</li>
                  </ul>
                </div>
                <div className="glass-card p-5">
                  <h4 className="font-bold text-slate-900 mb-3">Performance Metrics</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Max Speed: 1.8 m/s</li>
                    <li>• Acceleration: 0-Max in 0.7s</li>
                    <li>• Strafe Efficiency: 87%</li>
                    <li>• Turn Rate: 360° in 0.9s</li>
                  </ul>
                </div>
              </div>

              {/* Physics Formula */}
              <div className="bg-slate-900 text-cyan-400 p-6 rounded-xl font-mono">
                <p className="text-white mb-2 font-sans">Torque Calculation:</p>
                <p className="text-lg">τ = r × F</p>
                <p className="text-sm text-slate-400 mt-2 font-sans">
                  Where τ is torque, r is wheel radius (48mm), F is force applied
                </p>
                <p className="text-sm text-cyan-400 mt-3 font-sans">
                  Total Drive Torque: <strong>27.2 kg-cm</strong> (4 motors × 6.8 kg-cm)
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-6 text-center">
                <Gauge className="w-12 h-12 text-sky-500 mx-auto mb-3" />
                <p className="text-4xl font-bold text-slate-900">1.8</p>
                <p className="text-sm text-slate-600">m/s Max Speed</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <p className="text-4xl font-bold text-slate-900">87%</p>
                <p className="text-sm text-slate-600">Strafe Efficiency</p>
              </div>
              <div className="bg-cyan-400/20 border border-cyan-400/40 rounded-lg p-4">
                <p className="text-xs text-slate-700">
                  <strong>Innovation:</strong> Custom CNC plates reduce flex by 35% compared to stock extrusion
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Intake */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Layers className="w-6 h-6 text-sky-500" />
              <h3 className="text-2xl font-bold text-slate-900">Variable Geometry Intake</h3>
            </div>

            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Active intake system featuring <strong className="text-cyan-400">35A compliant wheels</strong> on 
                a servo-actuated pivot mechanism, allowing dynamic adjustment for samples and specimens.
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-semibold">Roller Speed</span>
                  <span className="text-sky-500 font-bold">450 RPM</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-sky-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="bg-slate-900 text-cyan-400 p-5 rounded-xl font-mono text-sm">
                <p className="text-white mb-2 font-sans">Linear Velocity:</p>
                <p>v = ω × r</p>
                <p className="text-xs text-slate-400 mt-2 font-sans">
                  v = (450 RPM × 2π/60) × 0.025m = <strong className="text-cyan-400">1.18 m/s</strong>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-4 bg-sky-500/10 rounded-lg">
                  <p className="text-2xl font-bold text-sky-500">98%</p>
                  <p className="text-xs text-slate-600">Sample Success</p>
                </div>
                <div className="text-center p-4 bg-cyan-400/10 rounded-lg">
                  <p className="text-2xl font-bold text-cyan-400">0.8s</p>
                  <p className="text-xs text-slate-600">Intake Time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Linear Lift */}
          <div className={`glass-card p-8 ${judgeMode ? 'judge-highlight' : ''}`}>
            <div className="flex items-center space-x-3 mb-6">
              <ArrowUpCircle className="w-6 h-6 text-sky-500" />
              <h3 className="text-2xl font-bold text-slate-900">3-Stage Linear Lift</h3>
              {judgeMode && (
                <span className="px-3 py-1 bg-cyan-400 text-slate-900 text-xs font-bold rounded-full">
                  MAGNETIC LIMIT
                </span>
              )}
            </div>

            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Continuous rigging system with <strong className="text-cyan-400">magnetic limit switches</strong> for 
                sub-millimeter precision. Dual-motor configuration ensures balanced load distribution.
              </p>

              <div className="space-y-4">
                <div className="glass-card p-4">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm">Specifications</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                    <div>Max Extension: 42"</div>
                    <div>Load Capacity: 8 lbs</div>
                    <div>Speed: 18 in/s</div>
                    <div>Precision: ±0.5mm</div>
                  </div>
                </div>

                <div className="glass-card p-4">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm">Preset Positions</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-700">Low Basket</span>
                      <span className="font-mono text-sky-500">8.5"</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-700">High Basket</span>
                      <span className="font-mono text-cyan-400">24.0"</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-700">High Chamber</span>
                      <span className="font-mono text-blue-500">36.5"</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-400/20 border border-cyan-400/40 rounded-lg p-4">
                <p className="text-xs text-slate-700">
                  <strong>Key Feature:</strong> Magnetic limit switches provide non-contact position sensing, 
                  eliminating mechanical wear and ensuring 10,000+ cycle reliability.
                </p>
              </div>

              <div className="text-center p-5 glass-card">
                <Cog className="w-10 h-10 text-sky-500 mx-auto mb-2 animate-spin" style={{ animationDuration: '3s' }} />
                <p className="text-3xl font-bold text-slate-900">2.1s</p>
                <p className="text-sm text-slate-600">Full Extension Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Build Highlights */}
        <div className="glass-card p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Build Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/team/DSC_0983.JPG',
              '/team/DSC_0989.JPG',
              '/team/DSC_1080.JPG',
              '/team/DSC_1095.JPG',
            ].map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl border border-white/60 bg-white/40">
                <img
                  src={src}
                  alt="Build session"
                  loading="lazy"
                  className="h-36 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* System Integration Summary */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">System Integration</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Move className="w-8 h-8 text-sky-500" />
              </div>
              <p className="font-bold text-slate-900">Drivetrain</p>
              <p className="text-sm text-slate-600">4-Motor Mecanum</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Layers className="w-8 h-8 text-cyan-400" />
              </div>
              <p className="font-bold text-slate-900">Intake</p>
              <p className="text-sm text-slate-600">Variable Geometry</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowUpCircle className="w-8 h-8 text-blue-500" />
              </div>
              <p className="font-bold text-slate-900">Lift</p>
              <p className="text-sm text-slate-600">3-Stage Linear</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Cog className="w-8 h-8 text-sky-600" />
              </div>
              <p className="font-bold text-slate-900">Control</p>
              <p className="text-sm text-slate-600">PID + Sensors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicalSystems;
