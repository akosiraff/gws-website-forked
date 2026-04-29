import { AbsoluteFill, Series } from 'remotion';
import { BrandReveal } from './scenes/BrandReveal';
import { StatsBurst } from './scenes/StatsBurst';
import { ConnectionArc } from './scenes/ConnectionArc';

export function HeroSequence() {
  return (
    <AbsoluteFill style={{ background: '#050D1A' }}>
      <Series>
        <Series.Sequence durationInFrames={80}>
          <BrandReveal />
        </Series.Sequence>
        <Series.Sequence durationInFrames={100}>
          <StatsBurst />
        </Series.Sequence>
        <Series.Sequence durationInFrames={80}>
          <ConnectionArc />
        </Series.Sequence>
        <Series.Sequence durationInFrames={40}>
          <BrandReveal fadeOut />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
}
