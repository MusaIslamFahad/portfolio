"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            push: { quantity: 2 },
            grab: {
              distance: 160,
              links: { opacity: 0.4 },
            },
          },
        },
        particles: {
          color: { value: ["#00e5c8", "#f5a623", "#00bfa5"] },
          links: {
            color: "#00e5c8",
            distance: 140,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: { enable: true },
            value: 70,
          },
          opacity: { value: 0.25 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
        fullScreen: { enable: true, zIndex: -1 },
      }}
    />
  );
}
