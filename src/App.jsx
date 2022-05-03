import CoverPage from "./pages/CoverPage";
import About from "./pages/About";
import Speciality from "./pages/Speciality";
import SectionSkills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="outer-wrapper bg-gray-50 dark:bg-slate-700">
      <div className="wrapper">
      <hr className=" w-full absolute bottom-10 dark:bg-slate-600" />
        <CoverPage />
        <About />
        <Speciality />
        <SectionSkills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
