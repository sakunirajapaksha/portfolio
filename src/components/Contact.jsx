"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "sakunirajapaksha007@gmail.com",
      link: "mailto:sakunirajapaksha007@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+94 75 082 5613",
      link: "tel:+94750825613",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Yakkala, Sri Lanka",
      link: "https://maps.app.goo.gl/JaHVfxKq15BNbZCp8",
      color: "from-red-500 to-orange-500"
    }
  ];

  const socialLinks = [
    { icon: FaGithub, name: "GitHub", url: "https://github.com/sakunirajapaksha", color: "#333" },
    { icon: FaLinkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/sakuni-rajapaksha-964a29264", color: "#0077B5" },
    { icon: FaWhatsapp, name: "WhatsApp", url: "https://wa.me/94750825613", color: "#25D366" }
  ];

  // Simple server-side fallback
  if (!mounted) {
    return (
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="h-24 bg-white/5 rounded-xl animate-pulse" />
              <div className="h-24 bg-white/5 rounded-xl animate-pulse" />
              <div className="h-24 bg-white/5 rounded-xl animate-pulse" />
            </div>
            <div className="space-y-4">
              <div className="h-12 bg-white/5 rounded-xl animate-pulse" />
              <div className="h-12 bg-white/5 rounded-xl animate-pulse" />
              <div className="h-32 bg-white/5 rounded-xl animate-pulse" />
              <div className="h-12 bg-white/5 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-sm text-pink-300">Get in Touch</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full" />
          
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.title === "Location" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-pink-500/50 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400">{info.title}</h3>
                    <p className="text-white font-medium text-sm break-all">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-pink-500 rounded-full" />
                Connect with me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <social.icon 
                      className="text-2xl transition-colors" 
                      style={{ color: social.color }}
                    />
                    <span className="text-xs text-gray-400">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-400">Available for work</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Currently accepting new projects and opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400"
                >
                  <FaCheckCircle />
                  <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl bg-white/5 border ${
                    errors.name ? "border-red-500" : "border-white/10"
                  } focus:border-pink-500 outline-none transition-all duration-300 text-white`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl bg-white/5 border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } focus:border-pink-500 outline-none transition-all duration-300 text-white`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500 outline-none transition-all duration-300 text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full p-3 rounded-xl bg-white/5 border ${
                    errors.message ? "border-red-500" : "border-white/10"
                  } focus:border-pink-500 outline-none transition-all duration-300 text-white resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:shadow-pink-500/25"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Form Footer */}
              <p className="text-xs text-gray-500 text-center mt-4">
                * Required fields. I'll respond within 24-48 hours.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-xl bg-gradient-to-r from-pink-500/5 to-orange-500/5 border border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <FaEnvelope className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Prefer email?</p>
                <p className="text-white font-medium text-sm">sakunirajapaksha007@gmail.com</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <FaPhone className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Quick call?</p>
                <p className="text-white font-medium">+94 75 082 5613</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <FaMapMarkerAlt className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">Yakkala, Sri Lanka (Remote)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}