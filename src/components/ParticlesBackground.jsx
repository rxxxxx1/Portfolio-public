import Particles from "react-tsparticles";
import ParticlesComponent from "../../particles-config";

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <ParticlesComponent id="particles" />
    </div>
  );
};

export default ParticleBackground;