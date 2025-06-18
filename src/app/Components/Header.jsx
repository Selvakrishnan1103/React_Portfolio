"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50 border-b border-slate-800 backdrop-blur-lg bg-opacity-70">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold text-cyan-400 tracking-wide">
          Selva.Dev
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium tracking-wide">
          {menuItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link href={item.path} scroll={true} className="hover:text-cyan-300 transition duration-300">
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900 text-white px-6 py-4 space-y-4 border-t border-slate-800"
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex justify-center text-lg font-semibold hover:text-cyan-400 transition pb-3">
                  {item.name}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
