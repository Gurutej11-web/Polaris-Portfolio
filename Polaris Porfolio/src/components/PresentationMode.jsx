import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const slides = [
  {
    title: 'Polaris 23682 · DEcode',
    subtitle: '2025–2026 Engineering Portfolio',
    detail: 'A fast-paced season focused on reliable scoring, rapid iteration, and clear documentation for judges and partners.',
    stats: [
      { label: 'Season timeline', value: 'Aug–Feb' },
      { label: 'Build cadence', value: 'Weekly sprints' },
      { label: 'Review cycles', value: 'Bi-weekly' },
    ],
    chart: {
      title: 'Portfolio readiness',
      items: [
        { label: 'Design', value: 88 },
        { label: 'Build', value: 92 },
        { label: 'Software', value: 84 },
      ],
    },
    image: '/team/DSC_1080.JPG',
    imageAlt: 'Team Polaris robot on the field under competition lighting',
  },
  {
    title: 'Our Mission',
    bullets: ['Build smart, reliable robots', 'Share STEM with our community', 'Iterate fast, learn faster'],
    detail: 'We prioritize dependable performance, inclusive learning, and transparent engineering decisions that scale across seasons.',
    stats: [
      { label: 'Core pillars', value: '3' },
      { label: 'Mentor hours', value: '120+' },
      { label: 'Team values', value: 'Curious, bold, kind' },
    ],
    chart: {
      title: 'Focus distribution',
      items: [
        { label: 'Reliability', value: 90 },
        { label: 'Community', value: 80 },
        { label: 'Iteration', value: 85 },
      ],
    },
    image: '/team/DSC_1126.JPG',
    imageAlt: 'Team members presenting the robot at a community event',
  },
  {
    title: 'Robot Overview',
    bullets: ['Mecanum drive base', 'Belt-chain launcher', 'Variable geometry intake'],
    detail: 'A compact, modular frame with fast swap assemblies for drive, intake, and launcher tuning between matches.',
    stats: [
      { label: 'Subsystems', value: '3' },
      { label: 'Service time', value: '<10 min' },
      { label: 'Modularity', value: 'High' },
    ],
    chart: {
      title: 'Subsystem maturity',
      items: [
        { label: 'Drive', value: 92 },
        { label: 'Intake', value: 86 },
        { label: 'Launcher', value: 88 },
      ],
    },
    image: '/team/DSC_0989.JPG',
    imageAlt: 'Full robot overview showing intake, launcher, and drive base',
  },
  {
    title: 'Drive System',
    bullets: ['Holonomic control', 'Fast alignment', 'Stable under load'],
    detail: 'Mecanum kinematics allow precision strafing, reducing cycle time and simplifying alignment on the hub.',
    stats: [
      { label: 'Top speed', value: '4.8 m/s' },
      { label: 'Accel time', value: '0.9 s' },
      { label: 'Drivetrain mass', value: '18%' },
    ],
    chart: {
      title: 'Drive performance',
      items: [
        { label: 'Speed', value: 90 },
        { label: 'Control', value: 87 },
        { label: 'Stability', value: 89 },
      ],
    },
    image: '/team/DSC_0983.JPG',
    imageAlt: 'Close-up of the mecanum drivetrain and chassis',
  },
  {
    title: 'Intake Advantage',
    bullets: ['Angular motion for alignment', 'Fast sample acquisition', 'Repeatable feed angle'],
    detail: 'The intake geometry captures off-axis pieces and funnels them into a consistent launch alignment.',
    stats: [
      { label: 'Pickup time', value: '0.7 s' },
      { label: 'Feed repeatability', value: '±2°' },
      { label: 'Throughput', value: 'High' },
    ],
    chart: {
      title: 'Intake metrics',
      items: [
        { label: 'Capture rate', value: 88 },
        { label: 'Alignment', value: 84 },
        { label: 'Consistency', value: 86 },
      ],
    },
    image: '/team/DSC_1095.JPG',
    imageAlt: 'Intake subsystem with angled rollers and guide plates',
  },
  {
    title: 'Launcher Tracking',
    bullets: ['Belt-chain trajectory control', 'Consistent release points', 'Lower driver correction'],
    detail: 'A tunable chain-belt path stabilizes release while software compensation fine-tunes angle and speed.',
    stats: [
      { label: 'Release variance', value: '±3%' },
      { label: 'Spin-up time', value: '0.5 s' },
      { label: 'Shot repeat', value: 'High' },
    ],
    chart: {
      title: 'Launch quality',
      items: [
        { label: 'Accuracy', value: 87 },
        { label: 'Velocity', value: 83 },
        { label: 'Stability', value: 88 },
      ],
    },
    image: '/team/IMG_3072.jpeg',
    imageAlt: 'Launcher mechanism aligned for consistent shot release',
  },
  {
    title: 'Autonomous Paths',
    bullets: ['Reliable start-to-score routes', 'Smooth field traversal', 'Optimized scoring windows'],
    detail: 'Auto routines prioritize predictable early scoring with fallback routes for defensive disruption.',
    stats: [
      { label: 'Path library', value: '7' },
      { label: 'Avg success', value: '82%' },
      { label: 'Tuning runs', value: '45' },
    ],
    chart: {
      title: 'Auto performance',
      items: [
        { label: 'Consistency', value: 82 },
        { label: 'Speed', value: 79 },
        { label: 'Scoring', value: 84 },
      ],
    },
    image: '/team/DSC_1066.JPG',
    imageAlt: 'Robot following a marked autonomous path',
  },
  {
    title: 'Robot Capability',
    bullets: ['Speed, accuracy, reliability', 'Intake efficiency focus', 'Auto consistency on current build'],
    detail: 'Our full-system tuning balances cycle speed with repeatable accuracy during extended match play.',
    stats: [
      { label: 'Cycle time', value: '8–10 s' },
      { label: 'Match uptime', value: '96%' },
      { label: 'Accuracy', value: 'High' },
    ],
    chart: {
      title: 'Capability blend',
      items: [
        { label: 'Speed', value: 86 },
        { label: 'Accuracy', value: 88 },
        { label: 'Reliability', value: 90 },
      ],
    },
    image: '/team/DSC_1067.JPG',
    imageAlt: 'Robot in action demonstrating full-system capability',
  },
  {
    title: 'Iteration Progress',
    bullets: ['Iter 1: low scores', 'Iter 2: medium scores', 'Iter 3: near current', 'Iter 4: current performance'],
    detail: 'Each iteration delivered measurable score gains through targeted changes to intake alignment and launch tuning.',
    stats: [
      { label: 'Iterations', value: '4' },
      { label: 'Score gain', value: '+38%' },
      { label: 'Build changes', value: '12' },
    ],
    chart: {
      title: 'Score trajectory',
      items: [
        { label: 'Iter 1', value: 45 },
        { label: 'Iter 2', value: 62 },
        { label: 'Iter 3', value: 76 },
        { label: 'Iter 4', value: 88 },
      ],
    },
    image: '/team/DSC_1094.JPG',
    imageAlt: 'Iteration photo showing updates across builds',
  },
  {
    title: 'Control Software',
    bullets: ['Custom PID for angle control', 'Cleaner tuning curves', 'Stable tracking'],
    detail: 'A structured tuning process includes step-response tests and in-match validation on field.',
    stats: [
      { label: 'Control loops', value: '5' },
      { label: 'Tuning sessions', value: '18' },
      { label: 'Latency', value: '<20 ms' },
    ],
    chart: {
      title: 'Control quality',
      items: [
        { label: 'Response', value: 86 },
        { label: 'Overshoot', value: 78 },
        { label: 'Stability', value: 90 },
      ],
    },
    image: '/team/IMG_2965.jpg',
    imageAlt: 'Laptop running robot control dashboards and tuning graphs',
  },
  {
    title: 'Sensor Fusion',
    bullets: ['Robust state estimation', 'Accurate motion control', 'Consistent scoring cadence'],
    detail: 'IMU + encoder fusion provides smooth pose updates and reduces drift during fast maneuvers.',
    stats: [
      { label: 'Sensor suite', value: 'IMU + encoders' },
      { label: 'Pose error', value: '<4 cm' },
      { label: 'Update rate', value: '50 Hz' },
    ],
    chart: {
      title: 'Estimation confidence',
      items: [
        { label: 'Heading', value: 88 },
        { label: 'Position', value: 84 },
        { label: 'Velocity', value: 86 },
      ],
    },
    image: '/team/IMG_2935.jpeg',
    imageAlt: 'Sensor and electronics layout for fusion and navigation',
  },
  {
    title: 'CAD + Design Dumps',
    bullets: ['Rapid iteration notes', 'Trade studies', 'Final assembly decisions'],
    detail: 'All major choices are documented with lightweight trade studies to support fast, repeatable decisions.',
    stats: [
      { label: 'CAD revisions', value: '28' },
      { label: 'Trade studies', value: '9' },
      { label: 'Assembly docs', value: '12' },
    ],
    chart: {
      title: 'Documentation coverage',
      items: [
        { label: 'Design notes', value: 90 },
        { label: 'Drawings', value: 82 },
        { label: 'BOM accuracy', value: 86 },
      ],
    },
    image: '/team/FC74BD7E-ADA0-4F2E-80FC-D6A7BD848C0C.png',
    imageAlt: 'CAD rendering highlighting the full robot assembly',
  },
  {
    title: 'Community Impact',
    bullets: ['130+ students impacted', '430+ outreach hours', '2 community events'],
    detail: 'We lead demos, workshops, and mentorship sessions to grow interest in robotics and STEM.',
    stats: [
      { label: 'Workshops', value: '12' },
      { label: 'Partners', value: '5' },
      { label: 'Volunteer ratio', value: '80%' },
    ],
    chart: {
      title: 'Outreach momentum',
      items: [
        { label: 'Engagement', value: 88 },
        { label: 'Hours', value: 84 },
        { label: 'Growth', value: 86 },
      ],
    },
    image: '/team/DSC_1096.JPG',
    imageAlt: 'Students interacting with the robot at an outreach event',
  },
  {
    title: 'Sustainability',
    bullets: ['43% parts reclaimed', 'Reuse-first workflow', 'Efficient design revisions'],
    detail: 'We prioritize part reuse and modular repairs to extend component life and reduce waste.',
    stats: [
      { label: 'Reused parts', value: '43%' },
      { label: 'Repair cycles', value: '6' },
      { label: 'Waste reduction', value: 'High' },
    ],
    chart: {
      title: 'Sustainability mix',
      items: [
        { label: 'Reuse', value: 86 },
        { label: 'Repair', value: 82 },
        { label: 'Optimize', value: 78 },
      ],
    },
    image: '/team/DSC_1150.JPG',
    imageAlt: 'Workshop scene showing reused components and tools',
  },
  {
    title: 'Team Structure',
    bullets: ['Software, Design, Construction, Management', '10 total members'],
    detail: 'Leads coordinate across pods with weekly syncs and shared sprint goals.',
    stats: [
      { label: 'Subteams', value: '4' },
      { label: 'Leads', value: '4' },
      { label: 'Meetings', value: '2 / week' },
    ],
    chart: {
      title: 'Team balance',
      items: [
        { label: 'Build', value: 80 },
        { label: 'Software', value: 85 },
        { label: 'Ops', value: 78 },
      ],
    },
    image: '/team/people/IMG_3077.jpeg',
    imageAlt: 'Team portrait of subteam leads',
  },
  {
    title: 'Team Highlights',
    bullets: ['300+ build hours', '6K+ lines of code', 'Focused, fast iteration'],
    detail: 'Rapid prototyping and disciplined reviews helped us deliver a stable, repeatable robot.',
    stats: [
      { label: 'Build hours', value: '300+' },
      { label: 'Commits', value: '420+' },
      { label: 'Prototypes', value: '9' },
    ],
    chart: {
      title: 'Team throughput',
      items: [
        { label: 'Build', value: 90 },
        { label: 'Code', value: 86 },
        { label: 'Testing', value: 82 },
      ],
    },
    image: '/team/people/IMG_3080.jpeg',
    imageAlt: 'Team members collaborating during build season',
  },
  {
    title: 'Closing',
    subtitle: 'Thank you for reviewing our portfolio',
    detail: 'We welcome questions and feedback on our engineering choices, documentation, and outreach work.',
    stats: [
      { label: 'Contact', value: 'polaris@team.org' },
      { label: 'Portfolio', value: 'polaris-23682' },
      { label: 'Review', value: 'Ready' },
    ],
    chart: {
      title: 'Next steps',
      items: [
        { label: 'Questions', value: 85 },
        { label: 'Feedback', value: 80 },
        { label: 'Follow-up', value: 78 },
      ],
    },
    image: '/team/DSC_1126.JPG',
    imageAlt: 'Team photo closing the presentation',
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
            {slide.detail && (
              <p className="text-base md:text-lg text-slate-200 leading-relaxed">{slide.detail}</p>
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
            {slide.stats && (
              <div className="grid gap-3 sm:grid-cols-3">
                {slide.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</p>
                    <p className="text-base font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
              <img src={slide.image} alt={slide.imageAlt ?? 'Slide visual'} className="w-full h-80 object-cover" />
            </div>
            {slide.chart && (
              <div className="hidden lg:flex lg:flex-col lg:ml-6 lg:w-64 lg:space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">{slide.chart.title}</p>
                  <div className="mt-3 space-y-3">
                    {slide.chart.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <div className="flex justify-between text-xs text-slate-300">
                          <span>{item.label}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="mt-1 h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-cyan-400"
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
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
