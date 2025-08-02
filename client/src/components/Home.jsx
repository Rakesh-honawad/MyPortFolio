import Hero from "./Hero";
import AboutMe from "./Aboutme";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";
// import CylinderProjects from './components/CylinderProjects';
// import Testimonials from "./Testimonials";
// const App = () => {
//   const projectRef = useRef(null);
// }

const Home = () => {
  
  return (
    <main id="content" className="bg-[var(--background)] lg:px-[60px] py-0 sm:px-20 md:px-2">


      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      {/* <div ref={ProjectRef}> */}
        <Projects />
      {/* </div> */}
      <Achievements />
      <Contact />
      {/* <Testimonials/> */}
    </main>
  );
};

export default Home;