export const metadata = {
  title: "Contact | Selva Krishnan",
  description: "Get in touch with Selva Krishnan. Whether you have a project in mind or just want to connect, feel free to reach out.",
  keywords: ["Contact Selva Krishnan", "Web Developer Contact", "Portfolio Contact", "React Developer"],
  openGraph: {
    title: "Contact | Selva Krishnan",
    description: "Reach out to Selva Krishnan for collaboration, hiring, or networking.",
    url: "https://www.selvakrishnan.in/contact",
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

import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
