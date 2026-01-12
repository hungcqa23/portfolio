import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const InteractiveParticles = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (): Promise<void> => {
    // console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // "grab" creates lines/cross links to cursor
          },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.8,
              color: "#4f46e5" // Indigo links
            }
          },
        },
      },
      particles: {
        color: {
          value: "#94a3b8", // Slate particles
        },
        links: {
          enable: true, // Enable grid/mesh
          color: "#cbd5e1", // Subtle slate links
          distance: 150,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
      fullScreen: { 
          enable: false,
          zIndex: 0
      },
      style: {
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none", // Ensure clicks pass through
      }
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]" 
      />
    );
  }

  return <></>;
};

export default InteractiveParticles;
