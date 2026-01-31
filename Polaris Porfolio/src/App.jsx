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
import Footer from './components/Footer';

function App() {
  const [judgeMode, setJudgeMode] = useState(false);

  return (
    <div className="min-h-screen arctic-gradient">
      <Header judgeMode={judgeMode} setJudgeMode={setJudgeMode} />
      <LiveStats />
      <Hero />
      <StrategicAnalysis judgeMode={judgeMode} />
      <MechanicalSystems judgeMode={judgeMode} />
      <CodeVault judgeMode={judgeMode} />
      <ImpactSustainability />
      <TeamGallery />
      <PresentationControls />
      <Footer />
    </div>
  );
}

export default App;
