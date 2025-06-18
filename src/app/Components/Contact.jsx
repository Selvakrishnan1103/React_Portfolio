"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-950 text-white px-6 py-24">
      <section className="max-w-3xl mx-auto text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-cyan-400"
        >
          Contact Me
        </motion.h1>
        <p className="text-gray-300 text-lg">
          Want to connect or discuss a project? Just fill out the form below.
        </p>
      </section>

      <form
        action="https://formspree.io/f/xjkbgpaa"
        method="POST"
        onSubmit={() => setSubmitted(true)}
        className="max-w-xl mx-auto mt-12 bg-slate-800 border border-slate-700 p-8 rounded-xl shadow-md space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cyan-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-1 px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cyan-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-cyan-300">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full mt-1 px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600"
            placeholder="Type your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-md shadow hover:scale-105 transition duration-300"
        >
          Send Message
        </button>

        {submitted && (
          <p className="text-cyan-300 mt-4 text-sm text-center">
            ✅ Your message was sent successfully!
          </p>
        )}
      </form>

      <section className="text-center mt-12 text-gray-400 text-sm">
        Or reach me at: <span className="text-cyan-300">selvakrish601@gmail.com</span><br />
        GitHub: <a href="https://github.com/Selvakrishnan1103" className="underline text-cyan-300">selvakrishnan</a> | LinkedIn: <a href="https://www.linkedin.com/in/selva-krishnan-k-6b0459225" className="underline text-cyan-300">/in/selvakrishnan</a>
      </section>
    </main>
  );
}
