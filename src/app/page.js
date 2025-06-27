import Head from "next/head";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Main";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Selva Krishnan | React & Next.js Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to Selva Krishnan's developer portfolio. Explore modern web apps built with React, Next.js, and Tailwind CSS."
        />
        <meta
          name="keywords"
          content="Selva Krishnan, React Developer, Next.js, Portfolio, Tailwind CSS, Full Stack Developer, EduHush"
        />
        <meta name="author" content="Selva Krishnan" />
        <meta property="og:title" content="Selva Krishnan Portfolio" />
        <meta
          property="og:description"
          content="Showcasing full-stack projects like EduHush and CGPA Calculator using modern web technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/selva_Mar.JPG" />
        <meta property="og:url" content="https://www.selvakrishnan.in" />
      </Head>

      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}
