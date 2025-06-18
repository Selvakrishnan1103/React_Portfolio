"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "EduHush",
    logo: "/Eduhush_Logo.png", 
    description: "An AI-powered educational platform that filters non-educational videos.",
    stack: "Next.js, Flask, MongoDB, Tailwind CSS",
    link: "/projects/eduhush"
  },
  {
    name: "CricSelva",
    logo: "/CricSelva_Logo.png",
    description: "Web-based cricket match management system using Supabase and React.",
    stack: "React.js, Supabase, Tailwind CSS",
    link: "/projects/cricselva"
  },
  {
    name: "SIS",
    logo: "/SIS_Logo.png",
    description: "Student Information System for managing academic records and transport.",
    stack: "Flask, MySQL, HTML/CSS/JS",
    link: "/projects/sis"
  },
  {
    name: "GPA Calculator",
    logo: "/GPA_Logo.webp",
    description: "Simple GPA & CGPA calculator for students with responsive UI.",
    stack: "HTML, CSS, JS",
    link: "/projects/gpacalculator"
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-950 text-white px-6 py-24">
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-4">Projects</h1>
        <p className="text-gray-300 text-lg">
          Here are some of the projects I've built, combining creativity with functionality.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow hover:shadow-cyan-500/30 hover:scale-[1.02] transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <h2 className="text-xl font-bold text-cyan-300">{project.name}</h2>
                <p className="text-gray-400 text-sm">{project.stack}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <Link href={project.link}>
              <button className="text-sm font-medium text-cyan-300 border border-cyan-500 px-4 py-1.5 rounded-full hover:bg-cyan-600 hover:text-white transition">
                View Project →
              </button>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
