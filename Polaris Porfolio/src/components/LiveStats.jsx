import React from 'react';

const LiveStats = () => {
  const stats = [
    { label: 'Avg Cycle Time', value: '14.2s', icon: '⚡' },
    { label: 'Est. OPR', value: '82.5', icon: '🎯' },
    { label: 'Odometry Drift', value: '<0.5%', icon: '📍' },
    { label: 'Robot Weight', value: '34.2 lbs', icon: '⚖️' },
    { label: 'Auto Consistency', value: '94.3%', icon: '🤖' },
    { label: 'Sensor Loop', value: '65 Hz', icon: '🔄' },
    { label: 'System Latency', value: '14ms', icon: '⚙️' },
    { label: 'Parts Recycle', value: '65%', icon: '♻️' },
  ];

  return (
    <div className="fixed top-20 w-full z-40 bg-slate-900 text-white py-3 shadow-lg overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {[...stats, ...stats].map((stat, index) => (
            <div key={index} className="flex items-center space-x-2 px-6 whitespace-nowrap">
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="text-cyan-400 font-bold text-lg">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveStats;
