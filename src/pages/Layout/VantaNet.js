import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

const VantaNet = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      const effect = NET({
        THREE, // Pass the THREE instance
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor: 0x000000,
        points: 20,
        maxDistance: 40.00,
        spacing: 50.00,
        showDots: false
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div ref={vantaRef} className='h-screen w-full fixed top-0 left-0 z-[-2]' />
      <div className='h-screen w-full fixed top-0 left-0 z-[-1] bg-black opacity-60' />
    </>
  )
};

export default VantaNet;
