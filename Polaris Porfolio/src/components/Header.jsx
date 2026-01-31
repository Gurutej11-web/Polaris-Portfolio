import React from 'react';
import { Menu, X, Star, Zap } from 'lucide-react';

const Header = ({ judgeMode, setJudgeMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-white/40">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" fill="white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Polaris 23682</h1>
              <p className="text-xs text-slate-600">Into the Deep</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-slate-700 hover:text-sky-500 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('strategic')} className="text-slate-700 hover:text-sky-500 transition-colors font-medium">
              Strategy
            </button>
            <button onClick={() => scrollToSection('mechanical')} className="text-slate-700 hover:text-sky-500 transition-colors font-medium">
              Mechanical
            </button>
            <button onClick={() => scrollToSection('code')} className="text-slate-700 hover:text-sky-500 transition-colors font-medium">
              Code Vault
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-slate-700 hover:text-sky-500 transition-colors font-medium">
              Impact
            </button>
            <button onClick={() => scrollToSection('team')} className="text-slate-700 hover:text-sky-500 transition-colors font-medium">
              Team
            </button>
            
            {/* Judge Mode Toggle */}
            <button
              onClick={() => setJudgeMode(!judgeMode)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                judgeMode
                  ? 'bg-cyan-400 text-slate-900 glow-effect'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Judge Mode</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-white/50 rounded-lg transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('strategic')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-white/50 rounded-lg transition-colors">
              Strategy
            </button>
            <button onClick={() => scrollToSection('mechanical')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-white/50 rounded-lg transition-colors">
              Mechanical
            </button>
            <button onClick={() => scrollToSection('code')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-white/50 rounded-lg transition-colors">
              Code Vault
            </button>
            <button onClick={() => scrollToSection('impact')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-white/50 rounded-lg transition-colors">
              Impact
            </button>
            <button onClick={() => scrollToSection('team')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-white/50 rounded-lg transition-colors">
              Team
            </button>
            <button
              onClick={() => setJudgeMode(!judgeMode)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold w-full justify-center ${
                judgeMode
                  ? 'bg-cyan-400 text-slate-900'
                  : 'bg-slate-900 text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Judge Mode</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
