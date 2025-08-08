"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";

const AnimatedBackground = dynamic(
  () => import("@/components/animated-background"),
  {
    ssr: false,
  }
);

export default function Portfolio() {
  useEffect(() => {
    // Smooth scroll behavior applied only on client
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
      <AnimatedBackground />
      <Toaster richColors position="top-center" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
