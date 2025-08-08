"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { OpenInNew, GitHub } from "@mui/icons-material";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Sync-Chat",
      description:
        "A real-time chat app built with the MERN stack and Socket.IO. Features include user authentication, typing indicators, chat history, and a clean UI using Tailwind and ShadCN.",
      image: "/synchat.png", // Replace with actual image if available
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Socket.IO",
        "Clerck authentication",
        "Tailwind",
        "ShadCN",
        "Framer-motion",
      ],
      liveUrl: "https://sync-chat-project.netlify.app/",
      githubUrl: "https://github.com/kirtii5/Sync-Chat/", // Add GitHub repo if available
    },
    {
      title: "Quizly",
      description:
        "A quiz web application with role-based access for admins and users. Supports timed quizzes, Excel-based quiz uploads, and real-time result tracking.",
      image: "/quizly.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "jwt-authentication",
        "MongoDB",
        "Tailwind",
        "multer",
      ],
      liveUrl: "https://quizlyy.netlify.app/",
      githubUrl: "https://github.com/Quizllyy/Quiz-App", // Add GitHub repo if available
    },

    {
      title: "WanderLust",
      description:
        "A full-stack travel web app featuring user authentication, image uploads, and interactive maps. Built using Node.js, Express, MongoDB, and EJS.",
      image: "/wanderlust.png",
      technologies: [
        "MongoDB",
        "Express",
        "Node.js",
        "EJS",
        "Bootstrap",
        "cloudinary",
        "multer",
        "passport.js",
        "tomtom-map",
      ],
      liveUrl: "https://wanderlust-weqc.onrender.com/listings",
      githubUrl: "https://github.com/kirtii5/WanderLust/", // Add GitHub repo if available
    },
    {
      title: "Taskly",
      description:
        "A to-do list that allows users to manage their tasks efficiently. Key features include adding, editing, deleting tasks, marking them as completed, and performing bulk actions like clearing all or converting tasks to uppercase.",
      image: "/taskly.png",
      technologies: ["React", "Material UI"],
      liveUrl: "https://taskly-reactapp.netlify.app/",
      githubUrl: "https://github.com/kirtii5/Taskly-React-App",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    <OpenInNew className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <GitHub className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
