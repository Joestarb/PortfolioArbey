import React from "react";
import Navbar from "./Components/Navbar";
import "./index.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className=" -z-10 min-h-screen poppins-regular  bg-[#282C33] text-white">
      <div className=" flex-1 ">
          
        <Navbar  />
        <div className=" mx-10">
          <Header />
          <div className=" fira-code">
            <AboutMe />
            <Skills />
            <Proyects/>
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
