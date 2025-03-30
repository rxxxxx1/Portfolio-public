import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl m-auto mt-30 px-4">
        <span className="text-gray-500 text-xs font-ibm-plex-mono tracking-widest">PROJECTS —</span>
        <h1 className="font-inter italic text-xl">Stuff I've worked on 🗂️</h1>

        <br></br>

      <RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-400 p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_15px_rgba(30,144,255,0.4)] transition">
              <h3 className="text-xl font-bold mb-2">Twitter</h3>
              <p className="text-white mb-4">
                Full-stack social network supporting news feed, real-time messaging and account manager in MVC
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "SQL", "HTML", "Tailwind"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-200/15 text-white py-1 px-3 rounded-full text-sm hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-[0_1px_10px_rgba(30,144,255,0.2)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-white hover:text-blue-50/90 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-400 glass p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_15px_rgba(0,230,64,0.4)] transition-all">

              <h3 className="text-xl font-bold mb-2">Meetic</h3>
              <p className="text-white mb-4">
                Website with SQL database, secure registration, search by filters as gender, age and hobbies
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "Native CSS", "Native JS", "OOP"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-200/15 text-white py-1 px-3  rounded-full text-sm transition hover:-translate-y-0.5 hover:bg-white/17.5 hover:shadow-[0_1px_10px_rgba(0,230,64,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-white hover:text-green-50/90 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-fuchsia-400 glass p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_15px_rgba(186,85,211,0.4)] transition-all">

              <h3 className="text-xl font-bold mb-2">Portfolio</h3>
              <p className="text-white mb-4">
                Front-end portfolio featuring dynamic project galleries, interactive UI, and a sleek design built with React, Tailwind, and reusable components
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node JS", "Vite", "UI"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-purple-200/15 text-white py-1 px-3  rounded-full text-sm transition hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-[0_1px_10px_rgba(186,85,211,0.2)]">
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-white hover:text-purple-50/90 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="bg-gradient-to-r from-red-600 to-rose-400 glass p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_15px_rgba(255,0,0,0.4)] transition-all">

              <h3 className="text-xl font-bold mb-2">EXAM SQL</h3>
              <p className="text-white mb-4">
              SQL assessments focused on writing complex queries, optimizing performance, and managing relational databases
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-red-200/15 text-white py-1 px-3  rounded-full text-sm transition hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-[0_1px_10px_rgba(255,0,0,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-white hover:text-red-50/90 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
          </div>
      </RevealOnScroll>
    </section>
  );
};