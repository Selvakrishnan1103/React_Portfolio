"use client";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

export default function GPACalculatorProject() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-950 text-white px-4 py-24">
      
      <section className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="relative w-72 h-72 rounded-xl overflow-hidden shadow-xl border-4 border-cyan-400">
            <Image
              src="/GPA_Logo.webp"  // Replace with your actual logo
              alt="GPA Calculator Logo"
              fill
              className="object-contain p-4"
            />
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold text-cyan-400">GPA Calculator</h1>
            <p className="text-lg text-gray-300">
              A lightweight GPA Calculator built purely using HTML, CSS, and JavaScript. Simple, fast, and easy to use for any student.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
                <a
                    href="/GPACalc.apk"  // <-- Replace with your actual APK link
                    target="_blank"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-2 rounded-full shadow hover:scale-105 transition duration-300"
                >
                    Download APK
                </a>
                <Link
                    href="/projects"
                    className="border border-cyan-500 hover:bg-cyan-600 hover:text-white text-cyan-400 font-medium px-6 py-2 rounded-full transition hover:scale-105"
                >
                    Back to Projects
                </Link>
            </div>

          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-700"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
            <li>Simple GPA and CGPA calculation</li>
            <li>Fully offline – no server or backend required</li>
            <li>Fast and lightweight performance</li>
            <li>Easy UI for adding multiple subjects</li>
            <li>Mobile-friendly design</li>
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-700"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-8 justify-center text-5xl text-cyan-400">
            <SiHtml5 title="HTML5" />
            <SiCss3 title="CSS3" />
            <SiJavascript title="JavaScript" />
          </div>
        </motion.div>

      </section>
    </main>
  );
}
