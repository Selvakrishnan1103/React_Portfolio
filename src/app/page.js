
export const metadata = {
  title: "Selva Krishnan | Full Stack Developer Portfolio",
  description:
    "Welcome to the official portfolio of Selva Krishnan — a passionate full-stack developer building modern web apps with React, Next.js, Flask, and Tailwind CSS.",
  keywords: [
    "Selva Krishnan",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Flask",
    "Tailwind CSS",
    "Web Developer in India"
  ],
  openGraph: {
    title: "Selva Krishnan | Full Stack Developer Portfolio",
    description:
      "Explore Selva Krishnan's projects, skills, and contact information. Built with Next.js and Tailwind CSS.",
    url: "https://www.selvakrishnan.in",
    images: [
      {
        url: "/selva_Mar.JPG",
        width: 800,
        height: 600,
        alt: "Selva Krishnan",
      },
    ],
    type: "website",
  },
};

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Main";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
