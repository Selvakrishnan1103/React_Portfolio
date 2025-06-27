import "@/app/globals.css"
import Head from "next/head";
import Header from "../Components/Header";
import About from "../Components/About";
import Footer from "../Components/Footer";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | YourSiteName</title>
        <meta name="description" content="Learn more about our mission, vision, and the team behind YourSiteName." />
        <meta name="keywords" content="about, team, mission, vision, YourSiteName" />
        <meta name="author" content="Your Name or Team Name" />
      </Head>
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    </>
  );
}
