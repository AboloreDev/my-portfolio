import About from "./sections/About";
import Contact from "./sections/Contacts";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

const Home = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />
      {/* HERO */}
      <Hero />
      {/* ABOUT */}
      <About />
      {/* PROJECTS */}
      <Projects />
      {/* EXPERIENCE */}
      <Experience />
      {/* CONTACT */}
      <Contact />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
