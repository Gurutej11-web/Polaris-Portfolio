import React from 'react';
import { Target, TrendingUp, Zap, Map } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const StrategicAnalysis = ({ judgeMode }) => {
  const capabilityData = [
    { subject: 'Speed', value: 88, fullMark: 100 },
    { subject: 'Accuracy', value: 92, fullMark: 100 },
    { subject: 'Reliability', value: 95, fullMark: 100 },
    { subject: 'Auto Consistency', value: 94, fullMark: 100 },
    { subject: 'Intake Efficiency', value: 87, fullMark: 100 },
  ];

  return (
    <section id="strategic" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-sky-500/20 text-sky-600 rounded-full text-sm font-semibold border border-sky-500/30">
              Strategic Analysis
            </span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-4">
            Game Strategy & <span className="text-gradient">Autonomous Dominance</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Data-driven game analysis with advanced pathing algorithms and capability mapping
          </p>
        </div>

        {/* Autonomous Visualizer */}
        <div className={`glass-card p-8 mb-8 ${judgeMode ? 'judge-highlight' : ''}`}>
          <div className="flex items-center space-x-3 mb-6">
            <Map className="w-6 h-6 text-sky-500" />
            <h3 className="text-2xl font-bold text-slate-900">Autonomous Path Visualizer</h3>
            {judgeMode && (
              <span className="px-3 py-1 bg-cyan-400 text-slate-900 text-xs font-bold rounded-full">
                JUDGE HIGHLIGHT
              </span>
            )}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Field Map */}
            <div className="relative aspect-square bg-slate-900 rounded-xl p-4">
              <svg viewBox="0 0 300 300" className="w-full h-full">
                {/* Field Border */}
                <rect x="10" y="10" width="280" height="280" fill="none" stroke="#38bdf8" strokeWidth="2" />
                
                {/* Grid Lines */}
                <line x1="150" y1="10" x2="150" y2="290" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
                <line x1="10" y1="150" x2="290" y2="150" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
                
                {/* Starting Position */}
                <circle cx="40" cy="260" r="15" fill="#22d3ee" opacity="0.8">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="40" y="265" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">START</text>
                
                {/* Scoring Zones */}
                <rect x="230" y="20" width="50" height="50" fill="#0ea5e9" opacity="0.3" rx="5" />
                <text x="255" y="50" textAnchor="middle" fill="#ffffff" fontSize="10">HIGH</text>
                
                <rect x="230" y="115" width="50" height="50" fill="#38bdf8" opacity="0.3" rx="5" />
                <text x="255" y="145" textAnchor="middle" fill="#ffffff" fontSize="10">MID</text>
                
                {/* Sample Collection Points */}
                <circle cx="150" cy="150" r="8" fill="#fbbf24" opacity="0.8" />
                <circle cx="100" cy="100" r="8" fill="#fbbf24" opacity="0.8" />
                <circle cx="200" cy="200" r="8" fill="#fbbf24" opacity="0.8" />
                
                {/* Autonomous Path - Animated */}
                <path
                  d="M 40 260 L 100 100 L 255 45 L 150 150 L 255 140 L 200 200 L 255 140"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  className="animated-path"
                />
                
                {/* Waypoint Markers */}
                <circle cx="100" cy="100" r="5" fill="#22d3ee" />
                <circle cx="255" cy="45" r="5" fill="#22d3ee" />
                <circle cx="150" cy="150" r="5" fill="#22d3ee" />
                <circle cx="255" cy="140" r="5" fill="#22d3ee" />
                <circle cx="200" cy="200" r="5" fill="#22d3ee" />
              </svg>
            </div>

            {/* Path Details */}
            <div className="space-y-4">
              <div className="glass-card p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <Target className="w-5 h-5 text-sky-500 mr-2" />
                  4-Specimen Routine
                </h4>
                <div className="space-y-2 text-slate-700">
                  <p className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-bold text-sky-500">28.4s</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Points Scored:</span>
                    <span className="font-bold text-cyan-400">48 pts</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="font-bold text-green-500">94.3%</span>
                  </p>
                </div>
              </div>

              <div className="glass-card p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                  5-Sample Routine
                </h4>
                <div className="space-y-2 text-slate-700">
                  <p className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-bold text-sky-500">26.8s</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Points Scored:</span>
                    <span className="font-bold text-cyan-400">52 pts</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="font-bold text-green-500">91.7%</span>
                  </p>
                </div>
              </div>

              <div className="bg-cyan-400/20 border border-cyan-400/40 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>Key Innovation:</strong> Our autonomous uses advanced odometry with 
                  AprilTag re-localization to maintain &lt;0.5% drift across the entire routine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Capability Radar Chart */}
        <div className="glass-card p-8">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-sky-500" />
            <h3 className="text-2xl font-bold text-slate-900">Robot Capability Mapping</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={capabilityData}>
                  <PolarGrid stroke="#0ea5e9" opacity={0.3} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#0f172a', fontSize: 14, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#64748b' }} />
                  <Radar name="Capability" dataKey="value" stroke="#0ea5e9" fill="#38bdf8" fillOpacity={0.6} strokeWidth={3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              {capabilityData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-900">{item.subject}</span>
                    <span className="text-sky-500 font-bold">{item.value}/100</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-sky-500 to-cyan-400 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-sky-500/10 border border-sky-500/30 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>Overall Score:</strong> Our robot achieves a balanced 91.2% capability index, 
                  with particular strengths in reliability and autonomous consistency—critical factors for alliance selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicAnalysis;
