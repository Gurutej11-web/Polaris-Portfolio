import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const slides = [
  {
    title: 'Polaris 23682 · DEcode',
    subtitle: '2025–2026 Engineering Portfolio',
    image: '/team/DSC_1080.JPG',
  },
  {
    title: 'Our Mission',
    bullets: ['Build smart, reliable robots', 'Share STEM with our community', 'Iterate fast, learn faster'],
    image: '/team/DSC_1126.JPG',
  },
  {
    title: 'Robot Overview',
    bullets: ['Mecanum drive base', 'Belt-chain launcher', 'Variable geometry intake'],
    image: '/team/DSC_0989.JPG',
  },
  {
    title: 'Drive System',
    bullets: ['Holonomic control', 'Fast alignment', 'Stable under load'],
    image: '/team/DSC_0983.JPG',
  },
  {
    title: 'Intake Advantage',
    bullets: ['Angular motion for alignment', 'Fast sample acquisition', 'Repeatable feed angle'],
    image: '/team/DSC_1095.JPG',
  },
  {
    title: 'Launcher Tracking',
    bullets: ['Belt-chain trajectory control', 'Consistent release points', 'Lower driver correction'],
    image: '/team/DSC_1080.JPG',
  },
  {
    title: 'Autonomous Paths',
    bullets: ['Reliable start-to-score routes', 'Smooth field traversal', 'Optimized scoring windows'],
    image: '/team/DSC_1066.JPG',
  },
  {
    title: 'Robot Capability',
    bullets: ['Speed, accuracy, reliability', 'Intake efficiency focus', 'Auto consistency on current build'],
    image: '/team/DSC_1067.JPG',
  },
  {
    title: 'Iteration Progress',
    bullets: ['Iter 1: low scores', 'Iter 2: medium scores', 'Iter 3: near current', 'Iter 4: current performance'],
    image: '/team/DSC_1094.JPG',
  },
  {
    title: 'Control Software',
    bullets: ['Custom PID for angle control', 'Cleaner tuning curves', 'Stable tracking'],
    image: '/team/IMG_2965.jpg',
  },
  {
    title: 'Sensor Fusion',
    bullets: ['Robust state estimation', 'Accurate motion control', 'Consistent scoring cadence'],
    image: '/team/IMG_2935.jpeg',
  },
  {
    title: 'CAD + Design Dumps',
    bullets: ['Rapid iteration notes', 'Trade studies', 'Final assembly decisions'],
    image: '/team/DSC_1129.JPG',
  },
  {
    title: 'Community Impact',
    bullets: ['130+ students impacted', '430+ outreach hours', '2 community events'],
    image: '/team/DSC_1096.JPG',
  },
  {
    title: 'Sustainability',
    bullets: ['43% parts reclaimed', 'Reuse-first workflow', 'Efficient design revisions'],
    image: '/team/DSC_1150.JPG',
  },
  {
    title: 'Team Structure',
    bullets: ['Software, Design, Construction, Management', '10 total members'],
    image: '/team/people/IMG_3077.jpeg',
  },
  {
    title: 'Team Highlights',
    bullets: ['300+ build hours', '6K+ lines of code', 'Focused, fast iteration'],
    image: '/team/people/IMG_3080.jpeg',
  },
  {
    title: 'Closing',
    subtitle: 'Thank you for reviewing our portfolio',
    image: '/team/DSC_1126.JPG',
  },
];

const PresentationMode = ({ onClose }) => {
  const [index, setIndex] = React.useState(0);

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        goNext();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrev();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const slide = slides[index];

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/95 text-white">
      <div className="absolute top-6 right-6 flex items-center space-x-3">
        <span className="text-xs text-slate-300">{index + 1}/{slides.length}</span>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
          aria-label="Close presentation"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="container mx-auto h-full px-6 py-16 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black">{slide.title}</h2>
            {slide.subtitle && (
              <p className="text-lg text-slate-200">{slide.subtitle}</p>
            )}
            {slide.bullets && (
              <ul className="space-y-3 text-lg text-slate-100">
                {slide.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start space-x-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
              <img src={slide.image} alt="Slide visual" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center space-x-6">
        <button
          onClick={goPrev}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-semibold">Prev</span>
        </button>
        <button
          onClick={goNext}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20"
        >
          <span className="text-sm font-semibold">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PresentationMode;
