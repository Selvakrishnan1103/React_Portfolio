import Head from "next/head";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Skills from "../Components/Skills";

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills | Selva Krishnan - Full Stack Developer</title>
        <meta
          name="description"
          content="Explore Selva Krishnan's technical skill set, including React, Next.js, Tailwind CSS, Flask, MySQL, MongoDB, and more."
        />
        <meta
          name="keywords"
          content="Selva Krishnan, Skills, React, Next.js, Tailwind CSS, JavaScript, Flask, MySQL, MongoDB, Full Stack Developer"
        />
        <meta name="author" content="Selva Krishnan" />
        <meta property="og:title" content="Skills | Selva Krishnan" />
        <meta
          property="og:description"
          content="Discover the web development technologies and tools used by Selva Krishnan in real-world projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/selva_Mar.JPG" />
        <meta property="og:url" content="https://www.selvakrishnan.in/skills" />
      </Head>

      <div>
        <Header />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
