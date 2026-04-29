import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export function BrandReveal({ fadeOut = false }: { fadeOut?: boolean }) {
  const frame = useCurrentFrame();
  const totalFrames = fadeOut ? 40 : 80;

  const opacity = fadeOut
    ? interpolate(frame, [0, 30], [1, 0], { extrapolateRight: 'clamp' })
    : interpolate(frame, [0, 25], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const logoY = interpolate(frame, [0, 30], [20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const taglineOpacity = interpolate(frame, [25, 55], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const glowOpacity = interpolate(frame, [10, 50], [0, 0.6], {
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
        opacity,
      }}
    >
      {/* Glow circle */}
      <div
        style={{
          position: 'absolute',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
          opacity: glowOpacity,
        }}
      />

      {/* Logo mark */}
      <div
        style={{
          transform: `translateY(${logoY}px)`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {/* GWS monogram */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 18,
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 40px rgba(37,99,235,0.4)',
            marginBottom: 8,
          }}
        >
          <span style={{ color: 'white', fontSize: 28, fontWeight: 900, fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: -1 }}>
            GWS
          </span>
        </div>

        {/* Company name */}
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 22,
            fontWeight: 800,
            color: 'white',
            letterSpacing: -0.5,
            textAlign: 'center',
          }}
        >
          Global Workforce Solutions
        </div>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 2,
            background: 'linear-gradient(90deg, #2563EB, #D97706)',
            borderRadius: 2,
            opacity: taglineOpacity,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 13,
            fontWeight: 500,
            color: '#94A3B8',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: taglineOpacity,
            textAlign: 'center',
          }}
        >
          Australia · Manila · Built for Scale
        </div>
      </div>
    </AbsoluteFill>
  );
}
