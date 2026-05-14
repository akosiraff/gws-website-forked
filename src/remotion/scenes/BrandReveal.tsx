import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export function BrandReveal({ fadeOut = false }: { fadeOut?: boolean }) {
  const frame = useCurrentFrame();

  const opacity = fadeOut
    ? interpolate(frame, [0, 30], [1, 0], {
        extrapolateRight: 'clamp',
      })
    : interpolate(frame, [0, 25], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      });

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
        background:
          'radial-gradient(ellipse 80% 80% at 50% 50%, #0F1E35 0%, #050D1A 100%)',
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
          background:
            'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
          opacity: glowOpacity,
        }}
      />

      {/* Logo block */}
      <div
        style={{
          transform: `translateY(${logoY}px)`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {/* Company Logo */}
        <img
          src="/footer-logo.webp"
          alt="Global Workforce Solutions"
          style={{
            width: 260,
            height: 'auto',
            objectFit: 'contain',
            marginBottom: 8,
          }}
        />

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