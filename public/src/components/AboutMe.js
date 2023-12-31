import React from "react";

export default function AboutMe() {
    return (
        <section id="about">
             <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Courtney!
          </h1>
          <p className="mb-8 leading-relaxed">I am a student in the MSU coding bootcamp. Years ago I was enrolled in a Web Development program at Baker College, but they cancelled my program half way through and I then decided to change my career path. I am currently a CNA at a nursing and rehab center, and have been working in healthcare for 5 years. I recently injured my shoulder at work and felt that I cannot continue the heavy workload the rest of my life and wanted to get back into something that I enjoyed and could do from home, so here I am!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src=""
          />
          </div>
          </div>
        </section>
    )
};
