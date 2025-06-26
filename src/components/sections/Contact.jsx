import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  XCircle,
  Loader2,
  Instagram,
  Facebook,
} from "lucide-react";
import { send } from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus("validation-error");
      return;
    }

    setIsSubmitting(true);

    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Email sending error:", err);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/thapaaashish", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aashish-thapa-b2165a369/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aa.shish__/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/taashish510/",
      label: "Facebook",
    },
    { icon: Mail, href: "mailto:taashish510@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 quicksand">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-2xl shadow-lg p-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <p className="text-lg text-gray-600">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Email
                  </h4>
                  <a
                    href="mailto:taashish510@email.com"
                    className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    taashish510@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Location
                  </h4>
                  <p className="text-lg text-gray-800">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 ${
                  isSubmitting
                    ? "opacity-80 cursor-not-allowed"
                    : "hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin h-5 w-5" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                  </span>
                )}
              </button>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 shadow-sm"
                  >
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle2 className="text-green-600" size={18} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-green-800">
                        Message sent successfully!
                      </h4>
                      <p className="text-sm text-green-600 mt-1">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="text-green-500 hover:text-green-700"
                      aria-label="Close notification"
                    >
                      <XCircle size={18} />
                    </button>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 shadow-sm"
                  >
                    <div className="bg-red-100 p-1.5 rounded-full">
                      <XCircle className="text-red-600" size={18} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-red-800">
                        Failed to send message
                      </h4>
                      <p className="text-sm text-red-600 mt-1">
                        Please try again later or contact me directly at
                        taashish510@email.com
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Close notification"
                    >
                      <XCircle size={18} />
                    </button>
                  </motion.div>
                )}

                {submitStatus === "validation-error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3 shadow-sm"
                  >
                    <div className="bg-amber-100 p-1.5 rounded-full">
                      <XCircle className="text-amber-600" size={18} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-amber-800">
                        Please fill all fields
                      </h4>
                      <p className="text-sm text-amber-600 mt-1">
                        All fields marked with * are required.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="text-amber-500 hover:text-amber-700"
                      aria-label="Close notification"
                    >
                      <XCircle size={18} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
