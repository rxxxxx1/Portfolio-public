import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setSuccessMessage("Votre message a été envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setIsLoading(false);
        setSuccessMessage("Une erreur est survenue. Réessayez.");
      });
  };

  return (
    <section id="contact" className="mb-20">
      <meta name="description" content="Portfolio de Réda Adélaïde, développeur web passionné par la création d'expériences numériques interactives." />
      <meta name="keywords" content="Portfolio, Développeur Web, React, TailwindCSS, Projets" />

      <RevealOnScroll>
        
        <div className="max-w-7xl mx-auto mt-30 px-4">
        <span className="text-gray-500 text-md tracking-widest">CONTACT —</span>
        <h1 className="text-2xl">Ready to get started ? 🏁</h1>
        </div>

        <div className="mx-auto min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden ${
                isLoading ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              }`}
            >
              {isLoading ? "Envoi..." : "Send Message"}
            </button>
          </form>
          {successMessage && (
            <p className="text-center text-white mt-4">{successMessage}</p>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};