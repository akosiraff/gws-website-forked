import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

// Simplified lat/lon → SVG x,y for a 540×540 canvas
// Just using fixed positions that look right for AU/Manila
const MANILA = { x: 355, y: 195, label: 'Manila Hub', sub: 'Sourcing · 2,000+ candidates' };
const AUSTRALIA = { x: 310, y: 370, label: 'Australia', sub: 'Client deployments · 6 states' };

function dot(x: number, y: number, color: string, pulse: number) {
  return (
    <g key={`${x}-${y}`}>
      <circle cx={x} cy={y} r={8 + pulse * 4} fill={color} opacity={0.15} />
      <circle cx={x} cy={y} r={5} fill={color} opacity={0.9} />
      <circle cx={x} cy={y} r={2.5} fill="white" />
    </g>
  );
}

export function ConnectionArc() {
  const frame = useCurrentFrame();

  // Arc draw progress 0→1 over frames 0–50
  const arcProgress = interpolate(frame, [0, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Dots appear after arc
  const dotsOpacity = interpolate(frame, [45, 65], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Labels slide in
  const labelOpacity = interpolate(frame, [55, 75], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Pulsing dot ring
  const pulse = Math.sin(frame * 0.15) * 0.5 + 0.5;

  // Title fade
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Quadratic bezier control point (arc bows to the right)
  const cx = 430;
  const cy = 270;

  // Compute partial path length for animation
  // We draw the arc as a series of line segments up to arcProgress
  const steps = 60;
  const points: [number, number][] = [];
  const totalSteps = Math.floor(arcProgress * steps);
  for (let i = 0; i <= totalSteps; i++) {
    const t = i / steps;
    const x = (1 - t) * (1 - t) * MANILA.x + 2 * (1 - t) * t * cx + t * t * AUSTRALIA.x;
    const y = (1 - t) * (1 - t) * MANILA.y + 2 * (1 - t) * t * cy + t * t * AUSTRALIA.y;
    points.push([x, y]);
  }

  const polylinePoints = points.map(([x, y]) => `${x},${y}`).join(' ');

  // Animated dot travelling along the arc
  const travelT = (frame % 90) / 90;
  const travelX = (1 - travelT) * (1 - travelT) * MANILA.x + 2 * (1 - travelT) * travelT * cx + travelT * travelT * AUSTRALIA.x;
  const travelY = (1 - travelT) * (1 - travelT) * MANILA.y + 2 * (1 - travelT) * travelT * cy + travelT * travelT * AUSTRALIA.y;
  const travelerOpacity = arcProgress >= 1 ? interpolate(frame % 90, [0, 10, 80, 90], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) : 0;

  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(ellipse 90% 90% at 50% 50%, #0F1E35 0%, #050D1A 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 0,
          right: 0,
          textAlign: 'center',
          opacity: titleOpacity,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 11,
          fontWeight: 700,
          color: '#475569',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        Talent Pipeline
      </div>

      {/* SVG map area */}
      <svg width={540} height={540} viewBox="0 0 540 540" style={{ position: 'absolute', inset: 0 }}>
        {/* Faint grid */}
        <defs>
          <pattern id="grid" width={40} height={40} patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(148,163,184,0.04)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={540} height={540} fill="url(#grid)" />

        {/* Arc glow */}
        {points.length > 1 && (
          <polyline
            points={polylinePoints}
            fill="none"
            stroke="#3B82F6"
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.12}
          />
        )}

        {/* Arc line */}
        {points.length > 1 && (
          <polyline
            points={polylinePoints}
            fill="none"
            stroke="url(#arcGrad)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="6 4"
          />
        )}

        <defs>
          <linearGradient id="arcGrad" x1={MANILA.x} y1={MANILA.y} x2={AUSTRALIA.x} y2={AUSTRALIA.y} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Traveler dot */}
        {arcProgress >= 1 && (
          <circle cx={travelX} cy={travelY} r={4} fill="white" opacity={travelerOpacity} />
        )}

        {/* Location dots */}
        <g opacity={dotsOpacity}>
          {dot(MANILA.x, MANILA.y, '#3B82F6', pulse)}
          {dot(AUSTRALIA.x, AUSTRALIA.y, '#D97706', pulse)}
        </g>
      </svg>

      {/* Manila label */}
      <div
        style={{
          position: 'absolute',
          top: MANILA.y - 52,
          left: MANILA.x + 18,
          opacity: labelOpacity,
          background: 'rgba(15,30,53,0.92)',
          border: '1px solid rgba(59,130,246,0.25)',
          borderRadius: 10,
          padding: '8px 12px',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3B82F6' }} />
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 11, fontWeight: 700, color: 'white' }}>
            {MANILA.label}
          </span>
        </div>
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 9.5, color: '#64748B', marginTop: 2 }}>
          {MANILA.sub}
        </div>
      </div>

      {/* Australia label */}
      <div
        style={{
          position: 'absolute',
          top: AUSTRALIA.y + 16,
          left: AUSTRALIA.x - 80,
          opacity: labelOpacity,
          background: 'rgba(15,30,53,0.92)',
          border: '1px solid rgba(217,119,6,0.25)',
          borderRadius: 10,
          padding: '8px 12px',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#D97706' }} />
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 11, fontWeight: 700, color: 'white' }}>
            {AUSTRALIA.label}
          </span>
        </div>
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 9.5, color: '#64748B', marginTop: 2 }}>
          {AUSTRALIA.sub}
        </div>
      </div>
    </AbsoluteFill>
  );
}
