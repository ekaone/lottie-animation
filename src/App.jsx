import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import dataJson from './boatShip.json';
// import farmer from './farmer.json';
// import boat from './boat.json';

function App() {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: dataJson,
    });

    // anim.setSpeed(5)
  }, []);

  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '270px',
          height: '270px',
        }}
        ref={container}
      ></div>
    </div>
  );
}

export default App;
