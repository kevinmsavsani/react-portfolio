import React from "react";
import ProfileNavbar from "./components/navbar/ProfileNavbar";
import Home from "./container/home";
import About from "./container/about";
import Technologies from "./container/technologies";
import Experience from "./container/experience";
import Projects from "./container/projects";
import Contact from "./container/contact";

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 w-full h-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <ProfileNavbar />
        <Home />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
