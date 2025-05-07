import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";

const TestParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    // Charge les fonctionnalités supplémentaires de tsparticles
    await loadFull(engine);
  }, []);

  return (
    <div className="w-screen h-screen">
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 w-full h-full"
      options={{
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { speed: 1 },
          line_linked: { enable: true, distance: 150, color: "#ffffff" },
        },
      }}
    />
    </div>
  );
};

export default TestParticles;