import React from 'react';
import { Users, Wrench, Code, Lightbulb } from 'lucide-react';

const TeamGallery = () => {
  const teamMembers = [
    { role: 'Captain', icon: '👑', name: 'Leadership & Strategy', color: 'sky' },
    { role: 'Mechanical Lead', icon: '⚙️', name: 'Design & Fabrication', color: 'cyan' },
    { role: 'Software Lead', icon: '💻', name: 'Programming & AI', color: 'blue' },
    { role: 'Outreach Lead', icon: '🤝', name: 'Community Impact', color: 'green' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-sky-500/20 text-sky-600 rounded-full text-sm font-semibold border border-sky-500/30">
              Our Team
            </span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-4">
            Meet <span className="text-gradient">Polaris 23682</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A diverse team of engineers, programmers, and innovators united by a passion for robotics
          </p>
        </div>

        {/* Team Structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className={`w-20 h-20 bg-${member.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-4xl">{member.icon}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{member.role}</h3>
              <p className="text-sm text-slate-600">{member.name}</p>
            </div>
          ))}
        </div>

        {/* Team Values */}
        <div className="glass-card p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-sky-500" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Innovation</h4>
              <p className="text-sm text-slate-600">
                Pushing boundaries with creative solutions and cutting-edge technology
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Collaboration</h4>
              <p className="text-sm text-slate-600">
                Working together across disciplines to achieve common goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Excellence</h4>
              <p className="text-sm text-slate-600">
                Pursuing perfection in every detail, from code to mechanical design
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Growth</h4>
              <p className="text-sm text-slate-600">
                Continuous learning and mentorship to build sustainable success
              </p>
            </div>
          </div>
        </div>

        {/* Team Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="glass-card p-6 text-center">
            <p className="text-3xl font-bold text-sky-500">15</p>
            <p className="text-sm text-slate-600 mt-1">Team Members</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-3xl font-bold text-cyan-400">3</p>
            <p className="text-sm text-slate-600 mt-1">Seasons Active</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-3xl font-bold text-blue-500">8</p>
            <p className="text-sm text-slate-600 mt-1">Awards Won</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-3xl font-bold text-sky-600">500+</p>
            <p className="text-sm text-slate-600 mt-1">Build Hours</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-3xl font-bold text-cyan-500">12K+</p>
            <p className="text-sm text-slate-600 mt-1">Lines of Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
