import React from 'react';
import { Users, Wrench, Code, Lightbulb } from 'lucide-react';

const TeamGallery = () => {
  const teamMembers = [
    { role: 'Strategy', icon: '👑', name: 'Planning & Coordination', iconClass: 'bg-sky-500/20' },
    { role: 'Mechanical', icon: '⚙️', name: 'Design & Fabrication', iconClass: 'bg-cyan-400/20' },
    { role: 'Software', icon: '💻', name: 'Programming & AI', iconClass: 'bg-blue-500/20' },
    { role: 'Outreach', icon: '🤝', name: 'Community Impact', iconClass: 'bg-green-500/20' },
  ];

  const teamRoster = [
    {
      title: '⚙️ Mechanical Team',
      titleClass: 'text-sky-600',
      members: [
        { name: 'Sreehan', role: 'Mechanical Engineer' },
        { name: 'Bhoumik', role: 'Mechanical Engineer' },
        { name: 'Srivatsa', role: 'Mechanical Engineer' },
        { name: 'Lalith', role: 'Mechanical Engineer' },
      ],
      summary: 'Responsible for robot construction, hex-based frame design, drivetrain assembly, and mechanical system integration.'
    },
    {
      title: '💻 Coding Team',
      titleClass: 'text-cyan-500',
      members: [
        { name: 'Gurutej', role: 'Software Developer' },
        { name: 'Advik', role: 'Software Developer' },
        { name: 'Pranav', role: 'Software Developer' },
      ],
      summary: 'Develops autonomous routines, TeleOp controls, and sensor integration in Java. Achieved 64% autonomous success rate with 30 points per run.'
    },
    {
      title: '🎨 Design Team',
      titleClass: 'text-sky-600',
      members: [
        { name: 'Landon', role: 'Designer' },
        { name: 'Vince', role: 'Designer' },
      ],
      summary: 'CAD modeling, engineering notebook design, branding, and visual communications. Creates the professional image of Team Polaris.'
    },
    {
      title: '📊 Management & Communications',
      titleClass: 'text-cyan-500',
      members: [
        { name: 'Seshank', role: 'Communications' },
        { name: 'Gurutej', role: 'Operations' },
      ],
      summary: 'Coordinates team operations, fundraising ($2,308 raised), community outreach (430+ volunteer hours), and competition strategy.'
    },
  ];

  const teamPhotos = [
    '/team/DSC_0983.JPG',
    '/team/DSC_0989.JPG',
    '/team/DSC_1066.JPG',
    '/team/DSC_1067.JPG',
    '/team/DSC_1080.JPG',
    '/team/DSC_1094.JPG',
    '/team/DSC_1095.JPG',
    '/team/DSC_1096.JPG',
    '/team/DSC_1126.JPG',
    '/team/DSC_1129.JPG',
    '/team/DSC_1150.JPG',
    '/team/FC74BD7E-ADA0-4F2E-80FC-D6A7BD848C0C.png',
    '/team/IMG_2935.jpeg',
    '/team/IMG_2965.jpg',
    '/team/IMG_3072.jpeg',
    '/team/unnamed-1.png',
    '/team/unnamed.jpg',
    '/team/unnamed.png',
  ];

  return (
    <section id="team" className="py-20 px-6">
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
              <div className={`w-20 h-20 ${member.iconClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
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

        {/* Team Photo Gallery */}
        <div className="glass-card p-8 mt-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Team in Action</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teamPhotos.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl border border-white/60 bg-white/40">
                <img
                  src={src}
                  alt="Team moment"
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Full Team Roster */}
        <div className="glass-card p-8 mt-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Team Structure & Specializations</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {teamRoster.map((group, index) => (
              <div key={index} className="glass-card p-6">
                <h4 className={`text-lg font-bold ${group.titleClass} mb-4`}>{group.title}</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {group.members.map((member, memberIndex) => (
                    <li
                      key={memberIndex}
                      className="flex items-center justify-between border-b border-slate-200/60 pb-2"
                    >
                      <span className="font-semibold text-slate-900">{member.name}</span>
                      <span className="text-slate-600">{member.role}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-600 mt-4 italic">{group.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
