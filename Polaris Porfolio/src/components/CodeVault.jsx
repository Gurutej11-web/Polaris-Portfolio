import React from 'react';
import { Code2, Activity, GitBranch, Cpu } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CodeVault = ({ judgeMode }) => {
  // PID Error Decay Data
  const pidData = [
    { time: 0, error: 100, setpoint: 0 },
    { time: 50, error: 85, setpoint: 0 },
    { time: 100, error: 60, setpoint: 0 },
    { time: 150, error: 35, setpoint: 0 },
    { time: 200, error: 18, setpoint: 0 },
    { time: 250, error: 8, setpoint: 0 },
    { time: 300, error: 3, setpoint: 0 },
    { time: 350, error: 1, setpoint: 0 },
    { time: 400, error: 0, setpoint: 0 },
    { time: 450, error: 0, setpoint: 0 },
    { time: 500, error: 0, setpoint: 0 },
  ];

  const pidCode = `public class PIDController {
    private double kP, kI, kD;
    private double integral = 0;
    private double previousError = 0;
    private double setpoint;
    
    public PIDController(double kP, double kI, double kD) {
        this.kP = kP;
        this.kI = kI;
        this.kD = kD;
    }
    
    public double calculate(double measurement) {
        double error = setpoint - measurement;
        
        // Proportional term
        double P = kP * error;
        
        // Integral term (with anti-windup)
        integral += error;
        if (Math.abs(integral) > 100) {
            integral = Math.signum(integral) * 100;
        }
        double I = kI * integral;
        
        // Derivative term
        double derivative = error - previousError;
        double D = kD * derivative;
        previousError = error;
        
        // Total output
        return P + I + D;
    }
    
    public void setSetpoint(double setpoint) {
        this.setpoint = setpoint;
        integral = 0; // Reset on new target
    }
}`;

  const autonomousCode = `@Autonomous(name = "4-Specimen Auto")
public class FourSpecimenAuto extends LinearOpMode {
    
    private RoadRunnerDrive drive;
    private LinearLift lift;
    private ActiveIntake intake;
    
    @Override
    public void runOpMode() {
        // Initialize all subsystems
        drive = new RoadRunnerDrive(hardwareMap);
        lift = new LinearLift(hardwareMap);
        intake = new ActiveIntake(hardwareMap);
        
        // Build trajectory sequence
        TrajectorySequence autoPath = drive.trajectorySequenceBuilder(
            new Pose2d(12, -63, Math.toRadians(90)))
            
            // Score preloaded specimen
            .lineToLinearHeading(new Pose2d(0, -36, Math.toRadians(90)))
            .addTemporalMarker(() -> {
                lift.setPosition(LinearLift.HIGH_CHAMBER);
            })
            .waitSeconds(1.2)
            .addTemporalMarker(() -> {
                intake.release();
                lift.setPosition(LinearLift.GROUND);
            })
            
            // Collect sample 1
            .lineToLinearHeading(new Pose2d(48, -42, Math.toRadians(90)))
            .addTemporalMarker(() -> intake.activate())
            .waitSeconds(0.5)
            
            // Score in basket
            .lineToLinearHeading(new Pose2d(54, -54, Math.toRadians(45)))
            .addTemporalMarker(() -> {
                lift.setPosition(LinearLift.HIGH_BASKET);
            })
            .waitSeconds(1.0)
            .addTemporalMarker(() -> intake.outtake())
            
            .build();
        
        waitForStart();
        
        if (opModeIsActive()) {
            drive.followTrajectorySequence(autoPath);
        }
    }
}`;

  return (
    <section id="code" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-sky-500/20 text-sky-600 rounded-full text-sm font-semibold border border-sky-500/30">
              Software Engineering
            </span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-4">
            The <span className="text-gradient">Code Vault</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Advanced control algorithms, sensor fusion, and real-time optimization
          </p>
        </div>

        {/* PID Controller Section */}
        <div className={`glass-card p-8 mb-8 ${judgeMode ? 'judge-highlight' : ''}`}>
          <div className="flex items-center space-x-3 mb-6">
            <Activity className="w-6 h-6 text-sky-500" />
            <h3 className="text-2xl font-bold text-slate-900">Custom PID Controller</h3>
            {judgeMode && (
              <span className="px-3 py-1 bg-cyan-400 text-slate-900 text-xs font-bold rounded-full">
                ZERO STEADY-STATE ERROR
              </span>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Code Block */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-bold text-slate-900">Implementation</h4>
                <div className="flex items-center space-x-2 text-xs text-slate-600">
                  <Code2 className="w-4 h-4" />
                  <span>PIDController.java</span>
                </div>
              </div>
              <div className="code-block max-h-96 overflow-y-auto">
                <pre className="text-xs leading-relaxed">{pidCode}</pre>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="glass-card p-3 text-center">
                  <p className="text-xs text-slate-600">Proportional</p>
                  <p className="text-lg font-bold text-sky-500">kP = 0.045</p>
                </div>
                <div className="glass-card p-3 text-center">
                  <p className="text-xs text-slate-600">Integral</p>
                  <p className="text-lg font-bold text-cyan-400">kI = 0.008</p>
                </div>
                <div className="glass-card p-3 text-center">
                  <p className="text-xs text-slate-600">Derivative</p>
                  <p className="text-lg font-bold text-blue-500">kD = 0.012</p>
                </div>
              </div>
            </div>

            {/* Error Decay Graph */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4">PID Response Curve</h4>
              <div className="glass-card p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={pidData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                    <XAxis 
                      dataKey="time" 
                      label={{ value: 'Time (ms)', position: 'insideBottom', offset: -5 }}
                      stroke="#64748b"
                    />
                    <YAxis 
                      label={{ value: 'Error (%)', angle: -90, position: 'insideLeft' }}
                      stroke="#64748b"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#f8fafc', 
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="error" 
                      stroke="#0ea5e9" 
                      strokeWidth={3}
                      dot={{ fill: '#0ea5e9', r: 4 }}
                      name="Position Error"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="setpoint" 
                      stroke="#22d3ee" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Target"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 space-y-3">
                <div className="bg-sky-500/10 border border-sky-500/30 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Settling Time:</strong> 400ms to &lt;1% error
                  </p>
                </div>
                <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    <strong>Overshoot:</strong> &lt;5% with optimized derivative gain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Autonomous Code */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <GitBranch className="w-6 h-6 text-sky-500" />
            <h3 className="text-2xl font-bold text-slate-900">Autonomous Path Code</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-bold text-slate-900">4-Specimen Routine</h4>
                <div className="flex items-center space-x-2 text-xs text-slate-600">
                  <Code2 className="w-4 h-4" />
                  <span>FourSpecimenAuto.java</span>
                </div>
              </div>
              <div className="code-block max-h-96 overflow-y-auto">
                <pre className="text-xs leading-relaxed">{autonomousCode}</pre>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-5">
                <h4 className="font-bold text-slate-900 mb-3 text-sm">Technology Stack</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span>RoadRunner Path Following</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>FTC Dashboard Live Tuning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>AprilTag Localization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                    <span>State Machine Architecture</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-5">
                <h4 className="font-bold text-slate-900 mb-3 text-sm">Performance</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-700">Execution Time</span>
                    <span className="font-bold text-sky-500">28.4s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-700">Points Scored</span>
                    <span className="font-bold text-cyan-400">48 pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-700">Success Rate</span>
                    <span className="font-bold text-green-500">94.3%</span>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-400/20 border border-cyan-400/40 rounded-lg p-4">
                <p className="text-xs text-slate-700">
                  <strong>Innovation:</strong> Parallel subsystem control reduces cycle time by 23% 
                  compared to sequential execution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sensor Fusion & Performance */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Cpu className="w-6 h-6 text-sky-500" />
              <h3 className="text-2xl font-bold text-slate-900">Sensor Fusion</h3>
            </div>

            <div className="space-y-6">
              <p className="text-slate-700">
                Multi-sensor integration with complementary filtering for robust state estimation.
              </p>

              <div className="space-y-4">
                <div className="glass-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">IMU (BNO055)</span>
                    <span className="text-sky-500 font-mono text-sm">100 Hz</span>
                  </div>
                  <p className="text-xs text-slate-600">3-axis gyroscope + accelerometer for heading and acceleration</p>
                </div>

                <div className="glass-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">Odometry Pods</span>
                    <span className="text-cyan-400 font-mono text-sm">65 Hz</span>
                  </div>
                  <p className="text-xs text-slate-600">3-wheel dead reckoning for precise XY position tracking</p>
                </div>

                <div className="glass-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">AprilTags</span>
                    <span className="text-blue-500 font-mono text-sm">30 Hz</span>
                  </div>
                  <p className="text-xs text-slate-600">Vision-based re-localization for drift correction</p>
                </div>
              </div>

              <div className="bg-sky-500/10 border border-sky-500/30 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>Kalman Filter Integration:</strong> Optimal sensor weighting reduces 
                  position uncertainty by 68% compared to single-sensor approaches.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Activity className="w-6 h-6 text-sky-500" />
              <h3 className="text-2xl font-bold text-slate-900">System Performance</h3>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 glass-card">
                  <p className="text-4xl font-bold text-sky-500">65</p>
                  <p className="text-sm text-slate-600">Hz Loop Freq</p>
                </div>
                <div className="text-center p-6 glass-card">
                  <p className="text-4xl font-bold text-cyan-400">14</p>
                  <p className="text-sm text-slate-600">ms Latency</p>
                </div>
                <div className="text-center p-6 glass-card">
                  <p className="text-4xl font-bold text-blue-500">0.5</p>
                  <p className="text-sm text-slate-600">% Drift Rate</p>
                </div>
                <div className="text-center p-6 glass-card">
                  <p className="text-4xl font-bold text-sky-600">99.2</p>
                  <p className="text-sm text-slate-600">% Uptime</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-semibold">Control Loop</span>
                  <span className="text-sky-500 font-bold">65 Hz</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-sky-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-semibold">Vision Pipeline</span>
                  <span className="text-cyan-400 font-bold">30 Hz</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '46%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-semibold">Telemetry</span>
                  <span className="text-blue-500 font-bold">10 Hz</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>

              <div className="bg-cyan-400/20 border border-cyan-400/40 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>Real-time Performance:</strong> Asynchronous architecture ensures 
                  deterministic loop timing even under high computational load.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeVault;
