import React from 'react';
import { Github, Mail, Star, ExternalLink, QrCode } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Polaris 23682</h3>
                <p className="text-xs text-slate-400">Into the Deep</p>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Navigating innovation with precision engineering and data-driven excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('strategic').scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white transition-colors">
                  Strategy
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('mechanical').scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white transition-colors">
                  Mechanical
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('code').scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white transition-colors">
                  Code Vault
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('impact').scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white transition-colors">
                  Impact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-cyan-400">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2">
                  <span>Engineering Notebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2">
                  <span>CAD Files</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2">
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2">
                  <span>Team Documentation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & QR */}
          <div>
            <h4 className="font-bold mb-4 text-cyan-400">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-500" />
                <a href="mailto:team@polaris23682.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  team@polaris23682.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-sky-500" />
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  github.com/polaris23682
                </a>
              </div>
              
              {/* QR Code Placeholder */}
              <div className="mt-4 p-4 bg-white rounded-lg inline-block">
                <div className="w-24 h-24 bg-slate-200 rounded flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-slate-400" />
                </div>
                <p className="text-xs text-slate-900 text-center mt-2">Scan for Portfolio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © 2025-2026 Polaris 23682. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>System Operational</span>
              </span>
              <span>Built with React + Vite</span>
              <span>Hosted on Firebase</span>
            </div>
          </div>
        </div>

        {/* Arctic Pattern Background */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Designed with Arctic Glassmorphism · Est. OPR 82.5 · 94.3% Auto Consistency
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
