"use client";

import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fpsLimit: 120,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { repulse: { distance: 120, duration: 0.4 } },
        },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#ff9800" },
          links: { enable: true, distance: 150, color: "#ffcc80", opacity: 0.6, width: 1 },
          collisions: { enable: true },
          move: { enable: true, speed: 1, outModes: { default: "bounce" } },
          opacity: { value: 0.7 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
