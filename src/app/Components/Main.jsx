"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  User,
  Code,
  FolderKanban,
  Mail,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiFlask,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="font-sans relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-gray-950 text-white px-6 pt-28 pb-14 overflow-hidden">
      {/* Hero Section */}
      <section className="text-center space-y-8 mb-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight"
        >
          Hi, I'm Selva Krishnan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          A passionate developer crafting modern web apps using React, Next.js & Tailwind CSS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="/Selva_Krishnan_NextJS_Developer.pdf"
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Download Resume
          </a>
          <Link
            href="/contact"
            className="border border-cyan-500 hover:bg-cyan-600 hover:text-white text-cyan-400 font-semibold px-6 py-2.5 rounded-full transition hover:scale-105"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>

      {/* Section Preview Cards */}
      <section className="w-full max-w-6xl grid md:grid-cols-2 gap-10 mt-10 px-4">
        {/* Card Template */}
        {[
          {
            icon: <User className="w-7 h-7 text-cyan-400 mb-3" />,
            title: "About Me",
            content: (
              <>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/selva_Mar.JPG"
                    alt="Selva Krishnan"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-cyan-400"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-cyan-400">Selva Krishnan</h2>
                    <p className="text-sm text-cyan-300">NextJS Developer</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  I'm a full-stack developer who loves solving real-world problems with clean, scalable code. I’ve built apps like EduHush & CGPA Calculator.
                </p>
                <Link href="/about">
                  <button className="mt-4 text-sm font-medium text-cyan-300 border border-cyan-500 px-4 py-1.5 rounded-full hover:bg-cyan-600 hover:text-white transition">
                    Read More →
                  </button>
                </Link>
              </>
            ),
          },
          {
            icon: <Code className="w-7 h-7 text-cyan-400 mb-3" />,
            title: "Skills",
            content: (
              <>
                <div className="flex gap-4 text-3xl text-cyan-400 animate-pulse mb-4">
                  <SiReact />
                  <SiNextdotjs />
                  <SiTailwindcss />
                  <SiJavascript />
                  <SiFlask />
                  <SiMysql />
                  <SiMongodb />
                </div>
                <p className="text-gray-300">
                  Skilled in frontend and backend technologies. Passionate about building seamless user experiences.
                </p>
                <Link href="/skills">
                  <button className="mt-4 text-sm font-medium text-cyan-300 border border-cyan-500 px-4 py-1.5 rounded-full hover:bg-cyan-600 hover:text-white transition">
                    Read More →
                  </button>
                </Link>
              </>
            ),
          },
          {
            icon: <FolderKanban className="w-7 h-7 text-cyan-400 mb-3" />,
            title: "Projects",
            content: (
              <>
                <div className="space-y-4">
                  {[
                    {
                      name: "EduHush",
                      desc: "AI-powered study platform",
                      logo: "/Eduhush_Logo.png",
                    },
                    {
                      name: "Student Information System",
                      desc: "Manages student records & reports",
                      logo: "/SIS_Logo.png",
                    },
                    {
                      name: "Cricket App",
                      desc: "Match management tool",
                      logo: "/CricSelva_Logo.png",
                    },
                    {
                      name: "GPA Calculator",
                      desc: "Simple tool to compute academic GPA",
                      logo: "/GPA_Logo.webp",
                    },
                  ].map((project, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <Image
                        src={project.logo}
                        alt={`${project.name} Logo`}
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      <div>
                        <p className="text-white font-semibold">{project.name}</p>
                        <p className="text-gray-400 text-sm">{project.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/projects">
                  <button className="mt-6 text-sm font-medium text-cyan-300 border border-cyan-500 px-4 py-1.5 rounded-full hover:bg-cyan-600 hover:text-white transition">
                    Read More →
                  </button>
                </Link>
              </>
            ),
          },
          {
            icon: <Mail className="w-7 h-7 text-cyan-400 mb-3" />,
            title: "Contact",
            content: (
              <>
                <p className="text-gray-300 mb-4">
                  Have a project or just want to say hi? Let's connect!
                </p>
                <Link href="/contact">
                  <button className="text-sm font-medium text-cyan-300 border border-cyan-500 px-4 py-1.5 rounded-full hover:bg-cyan-600 hover:text-white transition">
                    Read More →
                  </button>
                </Link>
              </>
            ),
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * idx }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow hover:shadow-cyan-500/30 transition duration-300 hover:scale-[1.02]"
          >
            {section.icon}
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">{section.title}</h2>
            {section.content}
          </motion.div>
        ))}
      </section>
    </main>
  );
}
