import React from "react";
import Navbar from "./components/navbar/Navbar";
import ScrollNavbar from "./components/navbar/ScrollNavbar";

const App: React.FC = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <div className="pt-20">
        <h1 className="text-3xl font-bold underline text-white">Hello World</h1>
      </div>
    </div>
  );
};

export default App;
