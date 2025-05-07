import { motion } from "framer-motion";

export const TransitionSection = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-inter italic text-gray-300">
      “N'importe quel idiot peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre.” - Martin Fowler.
      </h2>
      <p className="text-gray-400 mt-4">
        Let's take a look at some of the projects I've worked on.
      </p>
    </motion.section>
  );
};