'use client';

import dynamic from 'next/dynamic';

const Cubes = dynamic(() => import('@/components/Cubes'), { ssr: false });

/**
 * Fixed full-viewport Cubes layer.
 * Lives in the root layout so it renders BEHIND the navbar, hero, and everything.
 * z-index: 0 — below the navbar (z-50) and hero content (z-10).
 * pointer-events: none — never intercepts user clicks.
 */
const CubesBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.85,
      }}
    >
      <Cubes
        gridSize={9}
        maxAngle={90}
        radius={9}
        borderStyle="1px solid rgba(255, 255, 255, 0.12)"
        faceColor="#000"
        rippleColor="#9b1fe8"
        rippleOnClick
        autoAnimate
      />
    </div>
  );
};

export default CubesBackground;
