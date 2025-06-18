"use client";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiSupabase, SiTailwindcss } from "react-icons/si";

export default function CricSelvaProject() {
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
              src="/CricSelva_Logo.png" // Replace with your actual CricSelva logo
              alt="CricSelva Logo"
              fill
              className="object-contain p-4"
            />
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold text-cyan-400">CricSelva</h1>
            <p className="text-lg text-gray-300">
              A complete cricket match management platform for organizing games, managing players, and tracking real-time player stats & rankings.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
                <a
                    href="https://cricselva.vercel.app"  // <-- your hosted live link here
                    target="_blank"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-2 rounded-full shadow hover:scale-105 transition duration-300"
                >
                    Visit Website
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
            <li>Create Matches & Manage Teams</li>
            <li>Player Registration and Assignment</li>
            <li>Real-Time Player Stats and Rankings</li>
            <li>Admin Panel for Match Organization</li>
            <li>Fully Responsive UI</li>
            <li>Simple & Fast Authentication</li>
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
            <SiReact title="React.js" />
            <SiNextdotjs title="Next.js" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiSupabase title="Supabase" />
          </div>
        </motion.div>

      </section>
    </main>
  );
}
