import React from "react";

export default function CoverPage() {
  return (
    <section
      className="slide flex flex-col justify-center items-center md:flex-row"
      id="portada"
    >
      <div className="flex flex-col justify-center items-center md:text-center">
        <h1 className="text-center font-bold text-7xl p-5 mb-3 md:text-5xl md:m-0 md:p-0">
          My name is José Centeno
        </h1>
        <h2 className="text-center mb-5 text-3xl md:text-4xl mt-2">
          <span className=" text-cyan-600 font-bold">I'm:</span> Web Developer &
          Web Designer
        </h2>
        <div className="mb-5 mt-12 md:mb-0">
          <a
            href="./assets/CentenoJCV.pdf"
            download
            className="mr-5 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-slate-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      <img src="./img/myself-removebg-preview.png" alt="Cover Page" />
    </section>
  );
}
