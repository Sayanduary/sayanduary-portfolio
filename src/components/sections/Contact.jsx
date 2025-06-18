import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import {FaMapLocation} from "react-icons/fa6";

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

  const contactInfo = [
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 7829268521",
      href: "tel:+917829268521",
      color: "text-green-400"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "sayanduary@gmail.com",
      href: "mailto:sayanduary@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: FaMapLocation,
      label: "Address",
      value: "West Bengal, India",
      href: "https://maps.app.goo.gl/84CdvhxzkGonUymc8",
      color: "text-red-400"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Sayanduary",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/sayanduary",
      label: "LinkedIn"
    }
  ];

  return (
      <section
          id="contact"
          className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <RevealOnScroll>
          <div className="px-4 w-full max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent">
                GET IN TOUCH
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Let's connect and discuss opportunities, projects, or just have a chat!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : '_self'}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] group"
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                            <info.icon className="text-xl" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">{info.label}</p>
                            <p className="text-white font-medium">{info.value}</p>
                          </div>
                        </a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-blue-500/50 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 group"
                            aria-label={social.label}
                        >
                          <social.icon className="text-xl" />
                        </a>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <h4 className="text-lg font-bold text-white mb-2">Let's Work Together!</h4>
                  <p className="text-gray-400 text-sm">
                    I'm always open to discussing new opportunities, interesting projects,
                    or just having a conversation about technology and development.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="relative">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-1 focus:ring-blue-500/50"
                        placeholder="Your Name"
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
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-1 focus:ring-blue-500/50"
                        placeholder="your.email@example.com"
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
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-1 focus:ring-blue-500/50 resize-none"
                      placeholder="Your message here..."
                      onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                      }
                  />
                  </div>

                  <button
                      type="submit"
                      className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                          isSending
                              ? "bg-gray-500 cursor-not-allowed"
                              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25"
                      } text-white`}
                      disabled={isSending}
                  >
                    {isSending ? (
                        <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                    ) : (
                        "Send Message"
                    )}
                  </button>
                </form>

                {successMessage && (
                    <div
                        className={`mt-6 text-center text-sm font-medium p-4 rounded-lg border ${
                            successMessage.includes("Successfully")
                                ? "text-green-400 bg-green-900/20 border-green-500/30"
                                : "text-red-400 bg-red-900/20 border-red-500/30"
                        }`}
                    >
                      {successMessage}
                    </div>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
  );
};