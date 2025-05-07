import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";


export const Home = () => {
  return (
    <>
    <section
      id="home"
      className="h-screen flex justify-center md:justify-start md:pl-30"
    >
        <RevealOnScroll>
        <div className="text-center mt-35 md:text-left z-10">
          {/* Petit titre */}
          <motion.span
            className="text-gray text-lg tracking-[5px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hey there, I'm
          </motion.span>

          {/* Titre principal */}
          <motion.h1
            className="text-9xl ml-3 md:-ml-2 md:text-9xl font-bold mb-3 bg-gradient-to-r from-green-900 to-green-700 bg-clip-text text-transparent leading-tight"  
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="animate-pulse">Réda.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-lg mb-8 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A <span className="text-green-500 font-semibold">passionate developer</span> crafting clean, scalable web applications. Let's build something amazing together!
          </motion.p>

          {/* Boutons */}
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a
              href="#projects"
              className="bg-green-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(46,204,113,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(46,204,113,0.2)] hover:bg-green-500/10"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>

    </>
  );
};