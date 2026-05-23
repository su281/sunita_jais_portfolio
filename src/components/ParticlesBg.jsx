import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadFull(window.tsParticles);
      setInit(true);
    };
    initParticles();
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },

        particles: {
          number: { value: 60 },

          color: { value: "#000000" },

          links: {
            enable: true,
            color: "#000000",
            distance: 150,
            opacity: 0.4,
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: { value: 2 },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
        },
      }}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default ParticlesBg;