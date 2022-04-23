import CoverPage from "./pages/CoverPage";
import About from "./pages/About";
import Speciality from "./pages/Speciality";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="outer-wrapper bg-gray-50">
      <div className="wrapper">
      <hr className=" w-full absolute bottom-10" />
        <CoverPage />
        <About />
        <Speciality />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
