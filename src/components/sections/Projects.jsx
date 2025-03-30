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
                {["Javascript", "PHP", "SQL", "HTML", "Tailwind"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg--500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-red-100/20 hover:shadow-[0_2px_15px_rgba(30,144,255,0.4)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-white hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-400 glass p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_15px_rgba(0,230,64,0.4)] transition-all">

              <h3 className="text-xl font-bold mb-2">Meetic</h3>
              <p className="text-white mb-4">
                Website with SQL database, secure registration, search by gender, age and hobbies
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm transition hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-fuchsia-400 glass p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_15px_rgba(186,85,211,0.4)] transition-all">

              <h3 className="text-xl font-bold mb-2">FrameworkCS</h3>
              <p className="text-white mb-4">
                
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="bg-gradient-to-r from-red-600 to-rose-400 glass p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_2px_15px_rgba(255,0,0,0.4)] transition-all">

              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-white mb-4">
                Scalable chat platform supporting real-time messaging, presence,
                and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
          </div>
      </RevealOnScroll>
    </section>
  );
};