"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const socialLinks = [
    { icon: GitHub, href: "https://github.com/kirtii5", label: "GitHub" },
    {
      icon: LinkedIn,
      href: "https://www.linkedin.com/in/kirtichoudhary05/",
      label: "LinkedIn",
    },
    {
      icon: Email,
      href: "mailto:kirtichoudhary1705@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Kirti Choudhary
            </h3>
            <p className="text-gray-400">Full Stack Developer (MERN Stack)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label={social.label}>
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {year} Kirti Choudhary. Built with Next.js, Tailwind CSS, and
            Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
