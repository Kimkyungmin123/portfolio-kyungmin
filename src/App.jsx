import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/work/Works";
import Education from "./components/education/Education";
import Certificate from "./components/certificate/Certificate";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="sections">
      <Intro/>
      <Portfolio/>
      {/* <Works/> */}
      <Skills/>
      {/* <Contact/> */}
      <Education/>
      <Certificate/>
      </div>
    </div>
  );
}

export default App;
