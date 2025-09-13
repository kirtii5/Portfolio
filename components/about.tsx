"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    // Programming Languages
    "Java",
    "JavaScript",
    "C/C++",
    "HTML",
    "CSS",
    // Frameworks & Tools
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    // Platforms/Tools
    "Postman",
    "Netlify",
    "Vercel",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6">
            <div className="relative flex flex-col items-center gap-6">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  {/* <div className="text-6xl">👩🏻‍💻</div> */}
                  <img
                    src="/image-about.png"
                    alt="Kirti Avatar"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1apNnW4Ab2PPk3NCIZiWBqbPb4tTLit2z/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.2, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Passionate Developer & Learner
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a Computer Science undergraduate driven by a passion for
              full-stack development and creating intuitive web experiences
              using the MERN stack. I thrive on continuous learning, staying
              current with tech trends, and contributing to real-world
              solutions. I'm actively exploring opportunities to grow,
              collaborate, and make a meaningful impact.
            </p>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Skills & Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
