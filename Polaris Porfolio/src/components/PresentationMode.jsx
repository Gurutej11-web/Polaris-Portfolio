import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const slides = [
  {
    title: 'Polaris 23682 · DEcode',
    subtitle: '2025–2026 Engineering Portfolio',
    kicker: 'Season Snapshot',
    detail: 'A fast-paced season focused on reliable scoring, rapid iteration, and clear documentation for judges and partners.',
    detail2: 'We emphasize measurable performance gains, rapid feedback loops, and a presentation-friendly data trail for every major design choice.',
    detail3: 'This deck highlights outcomes, evidence, and how each decision improved match consistency.',
    callout: 'Key takeaway: We engineered a consistent scoring robot backed by clear evidence and iteration data.',
    tags: ['Reliability', 'Iteration', 'Documentation'],
    stats: [
      { label: 'Season timeline', value: 'Aug–Feb' },
      { label: 'Build cadence', value: 'Weekly sprints' },
      { label: 'Review cycles', value: 'Bi-weekly' },
    ],
    accent: '#22D3EE',
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
    bullets: ['Build smart, reliable robots', 'Share STEM with our community', 'Iterate fast, learn faster', 'Document decisions for repeatability'],
    kicker: 'Why We Compete',
    detail: 'We prioritize dependable performance, inclusive learning, and transparent engineering decisions that scale across seasons.',
    detail2: 'Our mission connects competition results with mentorship outcomes, ensuring technical growth and community impact move together.',
    detail3: 'We measure success with both match data and student engagement milestones.',
    callout: 'Key takeaway: Our decisions balance competitive performance with community impact and student growth.',
    tags: ['Reliability', 'Community', 'Learning'],
    stats: [
      { label: 'Core pillars', value: '3' },
      { label: 'Mentor hours', value: '120+' },
      { label: 'Team values', value: 'Curious, bold, kind' },
    ],
    accent: '#38BDF8',
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
    bullets: ['Mecanum drive base', 'Belt-chain launcher', 'Variable geometry intake', 'Quick-swap maintenance zones'],
    kicker: 'System Architecture',
    detail: 'A compact, modular frame with fast swap assemblies for drive, intake, and launcher tuning between matches.',
    detail2: 'Subsystem access panels and standardized mounts reduce pit turnaround and simplify inspection readiness.',
    detail3: 'Each module is tested independently before full-system validation.',
    callout: 'Key takeaway: Modular assemblies reduce pit time and keep performance consistent across matches.',
    tags: ['Modular design', 'Serviceability', 'Consistency'],
    stats: [
      { label: 'Subsystems', value: '3' },
      { label: 'Service time', value: '<10 min' },
      { label: 'Modularity', value: 'High' },
    ],
    accent: '#34D399',
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
    bullets: ['Holonomic control', 'Fast alignment', 'Stable under load', 'Smooth driver handoff'],
    kicker: 'Mobility Advantage',
    detail: 'Mecanum kinematics allow precision strafing, reducing cycle time and simplifying alignment on the hub.',
    detail2: 'Driver practice plus tuned motion profiles keep control predictable under defense and tight field conditions.',
    detail3: 'Acceleration limits protect components while keeping cycles fast.',
    callout: 'Key takeaway: Precise lateral control cuts alignment time and boosts scoring cycles.',
    tags: ['Agility', 'Control', 'Stability'],
    stats: [
      { label: 'Top speed', value: '4.8 m/s' },
      { label: 'Accel time', value: '0.9 s' },
      { label: 'Drivetrain mass', value: '18%' },
    ],
    accent: '#A78BFA',
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
    bullets: ['Angular motion for alignment', 'Fast sample acquisition', 'Repeatable feed angle', 'Low jam rate'],
    kicker: 'Acquisition Speed',
    detail: 'The intake geometry captures off-axis pieces and funnels them into a consistent launch alignment.',
    detail2: 'Compliance points reduce bounce-outs while guiding samples into a fixed handoff location.',
    detail3: 'Quick-clearing access makes recovery simple during matches.',
    callout: 'Key takeaway: Off-angle capture keeps cycles fast even under defense.',
    tags: ['Capture rate', 'Alignment', 'Consistency'],
    stats: [
      { label: 'Pickup time', value: '0.7 s' },
      { label: 'Feed repeatability', value: '±2°' },
      { label: 'Throughput', value: 'High' },
    ],
    accent: '#F59E0B',
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
    bullets: ['Belt-chain trajectory control', 'Consistent release points', 'Lower driver correction', 'Fast recovery between shots'],
    kicker: 'Scoring Precision',
    detail: 'A tunable chain-belt path stabilizes release while software compensation fine-tunes angle and speed.',
    detail2: 'Repeatable release geometry lets drivers focus on positioning while software trims the final aim.',
    detail3: 'Tuning presets allow rapid adjustments by field zone.',
    callout: 'Key takeaway: Stable release points reduce driver correction and improve accuracy.',
    tags: ['Accuracy', 'Stability', 'Tunable'],
    stats: [
      { label: 'Release variance', value: '±3%' },
      { label: 'Spin-up time', value: '0.5 s' },
      { label: 'Shot repeat', value: 'High' },
    ],
    accent: '#F472B6',
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
    bullets: ['Reliable start-to-score routes', 'Smooth field traversal', 'Optimized scoring windows', 'Fallback routes for defense'],
    kicker: 'Auto Consistency',
    detail: 'Auto routines prioritize predictable early scoring with fallback routes for defensive disruption.',
    detail2: 'Path options are chosen by starting position, minimizing collisions and maximizing early points.',
    detail3: 'We validate autos weekly with timing and scoring benchmarks.',
    callout: 'Key takeaway: Multiple autos give us flexible scoring options per match strategy.',
    tags: ['Consistency', 'Resilience', 'Scoring'],
    stats: [
      { label: 'Path library', value: '7' },
      { label: 'Avg success', value: '82%' },
      { label: 'Tuning runs', value: '45' },
    ],
    accent: '#60A5FA',
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
    bullets: ['Speed, accuracy, reliability', 'Intake efficiency focus', 'Auto consistency on current build', 'Stable endgame performance'],
    kicker: 'Match Readiness',
    detail: 'Our full-system tuning balances cycle speed with repeatable accuracy during extended match play.',
    detail2: 'Stress tests across multiple matches validate durability and prevent performance drop-off late in events.',
    detail3: 'Performance holds steady across back-to-back matches.',
    callout: 'Key takeaway: Balanced performance keeps cycle times low without sacrificing accuracy.',
    tags: ['Speed', 'Accuracy', 'Reliability'],
    stats: [
      { label: 'Cycle time', value: '8–10 s' },
      { label: 'Match uptime', value: '96%' },
      { label: 'Accuracy', value: 'High' },
    ],
    accent: '#22C55E',
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
    bullets: ['Iter 1: low scores', 'Iter 2: medium scores', 'Iter 3: near current', 'Iter 4: current performance', 'Post-iter: polish + reliability'],
    kicker: 'Design Evolution',
    detail: 'Each iteration delivered measurable score gains through targeted changes to intake alignment and launch tuning.',
    detail2: 'We track changes by subsystem, then validate with scrimmage data before moving to the next iteration.',
    detail3: 'Regression checks ensure improvements never reduce reliability.',
    callout: 'Key takeaway: Fast feedback loops drove a +38% scoring improvement.',
    tags: ['Iteration', 'Testing', 'Results'],
    stats: [
      { label: 'Iterations', value: '4' },
      { label: 'Score gain', value: '+38%' },
      { label: 'Build changes', value: '12' },
    ],
    accent: '#FB7185',
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
    bullets: ['Custom PID for angle control', 'Cleaner tuning curves', 'Stable tracking', 'Driver-assist automation'],
    kicker: 'Software Reliability',
    detail: 'A structured tuning process includes step-response tests and in-match validation on field.',
    detail2: 'Telemetry overlays and logs help us identify drift, latency, and response delays quickly.',
    detail3: 'Driver assists reduce workload without removing manual control.',
    callout: 'Key takeaway: Consistent control loops reduce overshoot and stabilize shots.',
    tags: ['PID tuning', 'Stability', 'Telemetry'],
    stats: [
      { label: 'Control loops', value: '5' },
      { label: 'Tuning sessions', value: '18' },
      { label: 'Latency', value: '<20 ms' },
    ],
    accent: '#06B6D4',
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
    bullets: ['Robust state estimation', 'Accurate motion control', 'Consistent scoring cadence', 'Reduced drift over time'],
    kicker: 'Navigation Accuracy',
    detail: 'IMU + encoder fusion provides smooth pose updates and reduces drift during fast maneuvers.',
    detail2: 'We calibrate sensors pre-match to improve repeatability and reduce the need for manual correction.',
    detail3: 'Filtering reduces noise during rapid direction changes.',
    callout: 'Key takeaway: Reliable pose estimates keep autos repeatable and predictable.',
    tags: ['Pose tracking', 'IMU', 'Encoders'],
    stats: [
      { label: 'Sensor suite', value: 'IMU + encoders' },
      { label: 'Pose error', value: '<4 cm' },
      { label: 'Update rate', value: '50 Hz' },
    ],
    accent: '#818CF8',
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
    bullets: ['Rapid iteration notes', 'Trade studies', 'Final assembly decisions', 'Inspection-ready drawings'],
    kicker: 'Documentation System',
    detail: 'All major choices are documented with lightweight trade studies to support fast, repeatable decisions.',
    detail2: 'Design dumps include tests, failure notes, and decisions so future teams can pick up quickly.',
    detail3: 'Documentation aligns with build checkpoints for easy review.',
    callout: 'Key takeaway: Clear documentation speeds onboarding and future season improvements.',
    tags: ['CAD', 'Trade studies', 'Build notes'],
    stats: [
      { label: 'CAD revisions', value: '28' },
      { label: 'Trade studies', value: '9' },
      { label: 'Assembly docs', value: '12' },
    ],
    accent: '#F97316',
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
    bullets: ['130+ students impacted', '430+ outreach hours', '2 community events', 'Mentor-led workshops'],
    kicker: 'STEM Outreach',
    detail: 'We lead demos, workshops, and mentorship sessions to grow interest in robotics and STEM.',
    detail2: 'Hands-on demos help younger students connect engineering concepts to real robots and teamwork.',
    detail3: 'We collect feedback to improve each outreach session.',
    callout: 'Key takeaway: Outreach strengthens our community partnerships and inspires future teams.',
    tags: ['Workshops', 'Mentorship', 'Community'],
    stats: [
      { label: 'Workshops', value: '12' },
      { label: 'Partners', value: '5' },
      { label: 'Volunteer ratio', value: '80%' },
    ],
    accent: '#14B8A6',
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
    bullets: ['43% parts reclaimed', 'Reuse-first workflow', 'Efficient design revisions', 'Inventory tracking'],
    kicker: 'Responsible Engineering',
    detail: 'We prioritize part reuse and modular repairs to extend component life and reduce waste.',
    detail2: 'Reclaimed parts are tagged and tested, keeping costs low without sacrificing performance.',
    detail3: 'Spare inventory is reviewed monthly to reduce overbuying.',
    callout: 'Key takeaway: Reuse-first design saves budget while reducing environmental impact.',
    tags: ['Reuse', 'Repair', 'Efficiency'],
    stats: [
      { label: 'Reused parts', value: '43%' },
      { label: 'Repair cycles', value: '6' },
      { label: 'Waste reduction', value: 'High' },
    ],
    accent: '#10B981',
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
    bullets: ['Software, Design, Construction, Management', '10 total members', 'Weekly syncs and handoffs'],
    kicker: 'Team Operations',
    detail: 'Leads coordinate across pods with weekly syncs and shared sprint goals.',
    detail2: 'We use shared checklists and review gates to keep each subteam aligned and accountable.',
    detail3: 'Roles are documented so new members can onboard quickly.',
    callout: 'Key takeaway: Clear roles and cadence keep build, code, and ops aligned.',
    tags: ['Leadership', 'Cadence', 'Cross-team'],
    stats: [
      { label: 'Subteams', value: '4' },
      { label: 'Leads', value: '4' },
      { label: 'Meetings', value: '2 / week' },
    ],
    accent: '#F472B6',
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
    bullets: ['300+ build hours', '6K+ lines of code', 'Focused, fast iteration', 'Scrimmage-tested updates'],
    kicker: 'Season Output',
    detail: 'Rapid prototyping and disciplined reviews helped us deliver a stable, repeatable robot.',
    detail2: 'Our review cadence keeps improvements measurable and reduces last-minute surprises at events.',
    detail3: 'Testing notes connect code changes directly to match results.',
    callout: 'Key takeaway: Strong output across build, code, and testing drove performance gains.',
    tags: ['Build hours', 'Codebase', 'Testing'],
    stats: [
      { label: 'Build hours', value: '300+' },
      { label: 'Commits', value: '420+' },
      { label: 'Prototypes', value: '9' },
    ],
    accent: '#38BDF8',
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
    kicker: 'Ready for Questions',
    detail: 'We welcome questions and feedback on our engineering choices, documentation, and outreach work.',
    detail2: 'We can walk through decision trade-offs, test data, and reliability results on request.',
    detail3: 'We are ready to share CAD, code, and testing artifacts as needed.',
    callout: 'Key takeaway: We are prepared to discuss decisions, data, and results in detail.',
    tags: ['Questions', 'Feedback', 'Follow-up'],
    stats: [
      { label: 'Contact', value: 'polaris@team.org' },
      { label: 'Portfolio', value: 'polaris-23682' },
      { label: 'Review', value: 'Ready' },
    ],
    accent: '#22D3EE',
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
  const accent = slide.accent ?? '#22D3EE';

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/95 text-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top left, ${accent}26, transparent 55%), radial-gradient(circle at bottom right, ${accent}1f, transparent 55%)`,
        }}
      />
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
            {slide.kicker && (
              <span
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs uppercase tracking-[0.3em]"
                style={{ borderColor: `${accent}55`, color: accent }}
              >
                {slide.kicker}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl font-black">{slide.title}</h2>
            {slide.subtitle && (
              <p className="text-lg text-slate-200">{slide.subtitle}</p>
            )}
            {slide.detail && (
              <p className="text-base md:text-lg text-slate-200 leading-relaxed">{slide.detail}</p>
            )}
            {slide.detail2 && (
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">{slide.detail2}</p>
            )}
            {slide.detail3 && (
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">{slide.detail3}</p>
            )}
            {slide.tags && (
              <div className="flex flex-wrap gap-2">
                {slide.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{ borderColor: `${accent}55`, color: accent, backgroundColor: `${accent}1a` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {slide.bullets && (
              <ul className="space-y-3 text-lg text-slate-100">
                {slide.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start space-x-3">
                    <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: accent }}></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {slide.callout && (
              <div
                className="rounded-2xl border px-4 py-3 text-sm text-slate-100"
                style={{ borderColor: `${accent}55`, backgroundColor: `${accent}12` }}
              >
                {slide.callout}
              </div>
            )}
            {slide.stats && (
              <div className="grid gap-3 sm:grid-cols-3">
                {slide.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="rounded-xl border bg-white/5 px-4 py-3"
                    style={{ borderColor: `${accent}33` }}
                  >
                    <p className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</p>
                    <p className="text-base font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-lg space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <img src={slide.image} alt={slide.imageAlt ?? 'Slide visual'} className="w-full h-80 object-cover" />
              </div>
              {slide.chart && (
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
                            className="h-2 rounded-full"
                            style={{ width: `${item.value}%`, backgroundColor: accent }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
