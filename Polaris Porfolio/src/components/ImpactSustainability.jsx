import React from 'react';
import { Heart, Users, Sprout, Award, TrendingUp, BookOpen } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ImpactSustainability = () => {
  const outreachData = [
    { month: 'Sep', hours: 18, students: 65 },
    { month: 'Oct', hours: 24, students: 95 },
    { month: 'Nov', hours: 28, students: 110 },
    { month: 'Dec', hours: 22, students: 85 },
    { month: 'Jan', hours: 30, students: 95 },
  ];

  return (
    <section id="impact" className="py-20 px-6 bg-gradient-to-b from-sky-50/30 to-transparent">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-500/20 text-green-600 rounded-full text-sm font-semibold border border-green-500/30">
              Impact & Sustainability
            </span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-4">
            Beyond the <span className="text-gradient">Competition</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building a lasting legacy through STEM education, community engagement, and sustainable practices
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <Users className="w-12 h-12 text-sky-500 mx-auto mb-3" />
            <p className="text-4xl font-bold text-slate-900">450+</p>
            <p className="text-sm text-slate-600 mt-2">Students Impacted</p>
          </div>
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-3" />
            <p className="text-4xl font-bold text-slate-900">120+</p>
            <p className="text-sm text-slate-600 mt-2">Outreach Hours</p>
          </div>
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <Sprout className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <p className="text-4xl font-bold text-slate-900">65%</p>
            <p className="text-sm text-slate-600 mt-2">Parts Reclaimed</p>
          </div>
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <Award className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <p className="text-4xl font-bold text-slate-900">8</p>
            <p className="text-sm text-slate-600 mt-2">Community Events</p>
          </div>
        </div>

        {/* Outreach Chart */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-sky-500" />
            <h3 className="text-2xl font-bold text-slate-900">Outreach Growth Tracking</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={outreachData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis yAxisId="left" orientation="left" stroke="#0ea5e9" />
                  <YAxis yAxisId="right" orientation="right" stroke="#22d3ee" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f8fafc', 
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="hours" fill="#0ea5e9" name="Hours" radius={[8, 8, 0, 0]} />
                  <Bar yAxisId="right" dataKey="students" fill="#22d3ee" name="Students" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-5">
                <h4 className="font-bold text-slate-900 mb-3">Total Impact</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-700">Total Hours</span>
                    <span className="font-bold text-sky-500">122 hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-700">Students Reached</span>
                    <span className="font-bold text-cyan-400">450+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-700">Avg per Event</span>
                    <span className="font-bold text-blue-500">56 students</span>
                  </div>
                </div>
              </div>

              <div className="bg-sky-500/10 border border-sky-500/30 rounded-lg p-4">
                <p className="text-xs text-slate-700">
                  <strong>Growth:</strong> 67% increase in student engagement from September to January
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Outreach Programs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="w-6 h-6 text-sky-500" />
              <h3 className="text-2xl font-bold text-slate-900">Outreach Programs</h3>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-5 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏫</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Elementary STEM Workshops</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Hands-on robotics demos at 3 local elementary schools, introducing 200+ students to 
                      basic programming and mechanical engineering concepts.
                    </p>
                    <p className="text-xs text-sky-500 font-semibold mt-2">Impact: 200+ students</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-5 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">👥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">FLL Team Mentorship</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Weekly mentoring sessions for 2 FIRST Lego League teams, teaching competition 
                      strategy, core values, and project management skills.
                    </p>
                    <p className="text-xs text-cyan-400 font-semibold mt-2">Impact: 24 students</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-5 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎪</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Community Tech Fairs</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Interactive robot demonstrations at local libraries and maker faires, 
                      showcasing STEM careers to diverse audiences.
                    </p>
                    <p className="text-xs text-blue-500 font-semibold mt-2">Impact: 150+ attendees</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-5 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Regional Scrimmage Hosting</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Organized and hosted practice tournament for 8 FTC teams, providing field time 
                      and collaborative learning opportunities.
                    </p>
                    <p className="text-xs text-sky-600 font-semibold mt-2">Impact: 80+ students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability Roadmap */}
          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Sprout className="w-6 h-6 text-green-500" />
              <h3 className="text-2xl font-bold text-slate-900">3-Year Sustainability Plan</h3>
            </div>

            <div className="space-y-6">
              <div className="relative pl-8 pb-8 border-l-4 border-sky-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">1</span>
                </div>
                <h4 className="font-bold text-slate-900">Year 1: Foundation (2025-2026)</h4>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• Establish team knowledge base and documentation</li>
                  <li>• Create mentor-mentee pairing system</li>
                  <li>• Implement 65% parts reclamation target</li>
                  <li>• Document all custom designs for reuse</li>
                </ul>
              </div>

              <div className="relative pl-8 pb-8 border-l-4 border-cyan-400">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">2</span>
                </div>
                <h4 className="font-bold text-slate-900">Year 2: Growth (2026-2027)</h4>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• Junior members lead subsystem design</li>
                  <li>• Expand outreach to 10+ schools</li>
                  <li>• Increase parts reuse to 75%</li>
                  <li>• Start alumni network for continued mentorship</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-4 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">3</span>
                </div>
                <h4 className="font-bold text-slate-900">Year 3: Leadership (2027-2028)</h4>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• Student-led training workshops</li>
                  <li>• Seed funding for new FTC teams</li>
                  <li>• Regional resource sharing program</li>
                  <li>• Achieve self-sustaining team model</li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-6">
                <p className="text-sm text-slate-700">
                  <strong>Long-term Vision:</strong> Create a self-sustaining ecosystem where experienced 
                  members mentor newcomers, ensuring continuous knowledge transfer and community impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="glass-card p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Sprout className="w-6 h-6 text-green-500" />
            <h3 className="text-2xl font-bold text-slate-900">Environmental Responsibility</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">♻️</span>
                </div>
                <p className="text-3xl font-bold text-green-500">65%</p>
                <p className="text-sm text-slate-600 mt-1">Parts Reclaimed</p>
              </div>
              <p className="text-xs text-slate-700 text-center">
                Reusing motors, electronics, and structural components from previous seasons
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">🔧</span>
                </div>
                <p className="text-3xl font-bold text-blue-500">100%</p>
                <p className="text-sm text-slate-600 mt-1">Repair First</p>
              </div>
              <p className="text-xs text-slate-700 text-center">
                Prioritizing repair and maintenance over replacement whenever possible
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">📦</span>
                </div>
                <p className="text-3xl font-bold text-sky-500">45%</p>
                <p className="text-sm text-slate-600 mt-1">Material Reduction</p>
              </div>
              <p className="text-xs text-slate-700 text-center">
                Optimized designs reduce material waste and manufacturing scrap
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSustainability;
