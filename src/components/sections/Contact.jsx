import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const SERVICE_ID = "service_7n2b4dg";
  const TEMPLATE_ID = "template_z6t0paw";
  const PUBLIC_KEY = "qoQonWOr3XzPZ7w7E";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setSuccessMessage("Message Sent Successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSuccessMessage("Oops! Something went wrong. ❌");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-gray-200 to-gray-300  bg-clip-text text-transparent text-center">
            GET IN TOUCH
          </h2>
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
              className={`w-full py-3 px-6 rounded font-medium transition relative overflow-hidden ${
                isSending
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-red-500 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              } text-white`}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {successMessage && (
            <div
              className={`mt-4 text-center text-lg font-medium p-3 rounded ${
                successMessage.includes("Successfully")
                  ? "text-green-500 bg-green-900/20"
                  : "text-red-500 bg-red-900/20"
              }`}
            >
              {successMessage}
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
