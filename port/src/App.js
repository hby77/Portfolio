import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
