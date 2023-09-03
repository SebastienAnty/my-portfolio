import "./App.css";
import { AiOutlineHome } from "react-icons/ai";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/Contact/ContactMe";

function App() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
      overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f34848]"
    >
      <Header />
      <section id="hero" style={{ scrollSnapAlign: "start" }}>
        <Hero />
      </section>
      <section id="about" style={{ scrollSnapAlign: "center" }}>
        <About />
      </section>
      <section id="experience" style={{ scrollSnapAlign: "center" }}>
        <Experience />
      </section>
      <section id="skills" style={{ scrollSnapAlign: "start" }}>
        <Skills />
      </section>
      <section id="projects" style={{ scrollSnapAlign: "start" }}>
        <Projects />
      </section>
      <section id="contact" style={{ scrollSnapAlign: "start" }}>
        <ContactMe />
      </section>

      {/* <a href="#hero">
        <footer className="footer_container">
          <div className="footer-icon_position">
            <AiOutlineHome className="footer_icon" />
          </div>
        </footer>
      </a> */}
    </div>
  );
}

export default App;
