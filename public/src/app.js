import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";

export default function App() {
    return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <GitHub />
        <AboutMe />
        <MyWork />
        <Contact />
      </main>
    );
  }