import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

const stats = [
  { value: 500, suffix: '+', label: 'Placements', color: '#3B82F6' },
  { value: 14, suffix: 'd', label: 'Avg. Deploy', color: '#D97706' },
  { value: 98, suffix: '%', label: 'Satisfaction', color: '#10B981' },
];

function AnimatedStat({
  value,
  suffix,
  label,
  color,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 100, mass: 0.8 },
  });

  const countProgress = interpolate(frame - delay, [0, 45], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const currentValue = Math.round(value * countProgress);

  const opacity = interpolate(frame - delay, [0, 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${entrance}) translateY(${(1 - entrance) * 20}px)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        padding: '20px 24px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 16,
        minWidth: 120,
      }}
    >
      {/* Number */}
      <div
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 42,
          fontWeight: 900,
          color,
          lineHeight: 1,
          letterSpacing: -1,
          textShadow: `0 0 24px ${color}55`,
        }}
      >
        {currentValue}{suffix}
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 11,
          fontWeight: 600,
          color: '#64748B',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function StatsBurst() {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, #0F1E35 0%, #050D1A 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 28,
        padding: 32,
      }}
    >
      {/* Section label */}
      <div
        style={{
          opacity: titleOpacity,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 11,
          fontWeight: 700,
          color: '#475569',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        Proven Track Record
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        {stats.map((stat, i) => (
          <AnimatedStat key={stat.label} {...stat} delay={i * 15} />
        ))}
      </div>

      {/* Bottom note */}
      <div
        style={{
          opacity: interpolate(frame, [60, 80], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 11,
          color: '#334155',
          fontWeight: 500,
        }}
      >
        Across mining, construction & manufacturing
      </div>
    </AbsoluteFill>
  );
}
