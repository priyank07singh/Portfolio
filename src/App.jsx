import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Certificates from "./components/Cetificates";
import Infographic from "./components/Infographic";
import Blog from "./components/Blog";
import BlogView from "./components/BlogvView";

const App = () => {
  const [isblog, setisblog] = useState(false);

  return (
    <>
      {isblog ? (
        <div>
          <Navbar setisblog={setisblog} isblog={isblog} />
          <Blog />
        </div>
      ) : (
        <div>
          <Navbar setisblog={setisblog} isblog={isblog} />
          {/* <Bot /> */}
          <Hero />
          <About />
          <Skills />
          <Project />
          <Certificates />
          <Infographic />
          <BlogView setisblog={setisblog} />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
