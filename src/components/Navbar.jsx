import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="mt-[2.5%] max-w-9xl mx-auto h-60 top-0 w-full">

      <div className="float-right w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
      &#9776;
      </div>

      
      <div className="mr-[2.5em] float-right justify-end hidden md:block space-x-8">

            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#skills"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Skills{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
            
      </div>

      <div className="ml-[6.5em] mt-[4em] block">
        <span className="font-source font-semibold text-base tracking-[.4em]">Hey there, I'm<br/></span>
        <a href="#home">
          <span className="ml-[20px] font-source text-9xl text-white font-bold">réda.<br/></span>
        </a>
        <span className="ml-43.5 text-green-500">WEB DEVELOPER<br/></span>
        <p className="leading-3 font-ubuntu-mono text-sm italic text-gray-400">Git commit -m<br></br><span class="-ml-1">"Bienvenue dans mon univers"</span></p>
        {/* <span className="font-ubuntu-mono text-sm italic text-gray-400"></span> */}
      </div>
    </nav>
  )
}