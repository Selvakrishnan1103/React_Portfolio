import Head from "next/head";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Projects from "../Components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Selva Krishnan - Portfolio</title>
        <meta
          name="description"
          content="Explore Selva Krishnan's projects like EduHush, CGPA Calculator, Cricket App, and more — built using React, Next.js, Flask, and MySQL."
        />
        <meta
          name="keywords"
          content="Selva Krishnan Projects, EduHush, CGPA Calculator, Cricket App, Full Stack Projects, React, Next.js, Flask, MySQL"
        />
        <meta name="author" content="Selva Krishnan" />
        <meta property="og:title" content="Selva Krishnan | Projects" />
        <meta
          property="og:description"
          content="See the full-stack applications developed by Selva Krishnan including AI-based platforms and developer tools."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/selva_Mar.JPG" />
        <meta property="og:url" content="https://www.selvakrishnan.in/projects" />
      </Head>

      <div>
        <Header />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
