import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveStats from './components/LiveStats';
import StrategicAnalysis from './components/StrategicAnalysis';
import MechanicalSystems from './components/MechanicalSystems';
import CodeVault from './components/CodeVault';
import ImpactSustainability from './components/ImpactSustainability';
import TeamGallery from './components/TeamGallery';
import PresentationControls from './components/PresentationControls';
import PresentationMode from './components/PresentationMode';
import Footer from './components/Footer';

function App() {
  const [judgeMode, setJudgeMode] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);

  const handleJudgeToggle = () => {
    setJudgeMode((prev) => !prev);
    setShowPresentation(true);
  };

  return (
    <div className="min-h-screen arctic-gradient">
      <Header judgeMode={judgeMode} setJudgeMode={handleJudgeToggle} />
      <LiveStats />
      <Hero />
      <StrategicAnalysis />
      <MechanicalSystems />
      <CodeVault />
      <ImpactSustainability />
      <TeamGallery />
      <PresentationControls />
      <Footer />
      {showPresentation && (
        <PresentationMode onClose={() => setShowPresentation(false)} />
      )}
    </div>
  );
}

export default App;
