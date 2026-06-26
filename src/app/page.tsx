import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Certications from "@/components/certifications";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Certications />
      <Contact />
      <Footer />
    </>
  );
}