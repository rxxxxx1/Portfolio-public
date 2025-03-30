import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const frontendSkills = [
    "HTML",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Angular",
  ];

  const backendSkills = ["Node.js", "React", "MVC", "MYSQL", "JS"];

  return (
    <section
      id="skills"
      className="max-w-7xl m-auto mt-30 px-4"
    >
      <RevealOnScroll>

      <div className="">
        <span className="text-gray-500 text-xs font-ibm-plex-mono tracking-widest">SKILLS —</span>
        <h1 className="text-xl font-inter italic">Tech and skills I use ⚡</h1>
      </div>

      <br></br>

        <div className="">
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Level 5 qualification (Bac +2) web integrator/developer </strong> - Epitech
                  (2024-2027)
                </li>
                <li>
                <strong> BUT MT2E (Energy Transition and Efficiency Professions) </strong> - Université Gustave Eiffel
                  (2021-2023)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Animateur périscolaire (2023 - 2024){" "}
                  </h4>
                  <p>
                  Design and adapt an activity linked to the educational theme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};