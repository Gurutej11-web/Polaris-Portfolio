import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'strategic', label: 'Strategy' },
  { id: 'mechanical', label: 'Mechanical' },
  { id: 'code', label: 'Code' },
  { id: 'impact', label: 'Impact' },
  { id: 'team', label: 'Team' },
];

const headerHeight = 80;

const PresentationControls = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollToSection = (index) => {
    const target = sections[index];
    const element = document.getElementById(target.id);
    if (element) {
      const top = element.offsetTop - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % sections.length;
    scrollToSection(nextIndex);
  };

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
    scrollToSection(prevIndex);
  };

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        goNext();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrev();
      }
    };

    const onScroll = () => {
      const scrollPosition = window.scrollY + headerHeight + 100;
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentIndex(i);
          break;
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('scroll', onScroll);
    };
  }, [currentIndex]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
      <button
        onClick={goPrev}
        className="glass-card px-3 py-2 text-slate-700 hover:text-sky-500 transition-colors flex items-center space-x-1"
        aria-label="Previous section"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-xs font-semibold">Prev</span>
      </button>

      <div className="glass-card px-4 py-2 text-xs font-semibold text-slate-700">
        {currentIndex + 1}/{sections.length}: {sections[currentIndex].label}
      </div>

      <button
        onClick={goNext}
        className="glass-card px-3 py-2 text-slate-700 hover:text-sky-500 transition-colors flex items-center space-x-1"
        aria-label="Next section"
      >
        <span className="text-xs font-semibold">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PresentationControls;
