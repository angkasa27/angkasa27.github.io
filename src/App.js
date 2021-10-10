import React, { useState, useEffect } from "react";
import "./tailwind.css";
import Main from "./section/main";
import Navbar from "./elements/Navbar";
import Project from "./section/project";
import Contact from "./section/contact";
import { Logo } from "./assets/SVG";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadingClass, setLoadingClass] = useState(" ");
  const [mainClass, setMainClass] = useState(" hidden");

  useEffect(() => {
    if (!loading) {
      setLoadingClass(" animate-out");
      setMainClass(" ");
      setTimeout(() => {
        setLoadingClass(" hidden");
      }, 200);
    }
  }, [loading]);

  return (
    <div className="bg-white  font-nunito text-gray-800 dark:bg-gray-800 dark:text-white">
      <div className={mainClass}>
        <Navbar />
        <Main setLoading={setLoading} />
        <Project />
        <Contact />
        <div className="bg-gray-800 dark:bg-gray-900 text-white flex justify-center py-5 text-sm tracking-wider">
          {"Hi! im a Footer :)"}
        </div>
      </div>
      <div
        className={
          "w-screen h-screen bg-gray-800 text-white z-50 flex items-center justify-center fixed top-0 " +
          loadingClass
        }
      >
        <Logo className="w-12 h-12 animate-bounce" />
      </div>
    </div>
  );
}
