import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleContainer = () => {
  const particlesInit = useCallback(async () => {
    await loadSlim(tsParticles);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded:", container); // Debug log
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 w-full h-full"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        background: { color: { value: "transparent" } },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: false },
            resize: { enable: true },
          },
          modes: { repulse: { distance: 120, duration: 0.4 } },
        },
        particles: {
          number: { value: 90, density: { enable: true, area: 800 } },
          color: { value: "#ff9800" },
          links: {
            enable: true,
            distance: 150,
            color: "#ffcc80",
            opacity: 0.6,
            width: 1,
          },
          collisions: { enable: true },
          move: { enable: true, speed: 1.2, outModes: { default: "bounce" } },
          shape: { type: "circle" },
          opacity: { value: { min: 0.1, max: 0.7 } },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleContainer;