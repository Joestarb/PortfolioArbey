import React from "react";
import "./index.css";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {


  return (
    <div className=" -z-10 min-h-screen poppins-regular bg-gray-800  text-white">
      <div className=" flex-1 ">

        <Navbar />
        <div className=" mx-10">
          <Header />
          <div className=" fira-code">
            <AboutMe />
            <Skills />
            <Proyects />
            <Contact />
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
