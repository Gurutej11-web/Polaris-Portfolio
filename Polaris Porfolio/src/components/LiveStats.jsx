import React from 'react';

const LiveStats = () => {
  const stats = [
    { label: 'Point Increase', value: '32%', icon: '📈' },
    { label: 'Parts Recycled', value: '42%', icon: '♻️' },
    { label: 'Robot Weight', value: '34.2 lbs', icon: '⚖️' },
    { label: 'Auto Consistency', value: '94.3%', icon: '🤖' },
    { label: 'Best Score', value: '247 pts', icon: '🏆' },
    { label: 'Community Events', value: '2', icon: '🏫' },
    { label: 'Outreach Hours', value: '430+', icon: '🤝' },
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
