"use client";

import { useState, useEffect } from "react";
import { motion, px } from "framer-motion";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <IconButton onClick={() => setIsOpen(true)} className="md:hidden">
                <Menu className="text-gray-700 dark:text-gray-100" />
              </IconButton>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        ModalProps={{ disablePortal: true }}
        PaperProps={{
          className:
            "w-64 bg-white dark:bg-gray-900 transition-colors duration-300",
        }}>
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-700">Portflio</h2>
          <IconButton onClick={() => setIsOpen(false)}>
            <Close className="text-gray-700 dark:text-gray-700" />
          </IconButton>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100">
              <ListItemText
                primary={item.name}
                className="text-gray-900 dark:hover:text-gray-100"
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
