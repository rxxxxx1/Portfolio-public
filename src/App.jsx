import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Background } from "./components/Background"; 
// import ParticleBackground from "./components/ParticlesBackground";
// import ParticlesComponent from "../particles-config";
// import TestParticles from "./components/TestParticles";
import { About } from "./components/sections/About";
// import { TransitionSection } from "./components/TransitionSection";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
 {!isLoaded && <LoadingScreen text="Chargement..." />}
      <div>
      <Background />
      {/* <TestParticles /> */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* <ParticleBackground /> */}
      {/* <ParticlesComponent /> */}
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* <TransitionSection /> */}
      </div>
    </>  
  )
}

export default App
