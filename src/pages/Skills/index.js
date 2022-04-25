import React from "react";

export default function Skills() {
  return (
    <section className="slide four" id="skillsTools">
      <div className="w-4/5 mx-auto">
        <h1 className="text-5xl font-bold mt-20 px-12">
          <span className=" text-cyan-600 font-bold">Skills</span> &{" "}
          <span className=" text-cyan-600 font-bold">Tools</span>
        </h1>
        <div className="grid grid-cols-6 gap-10 my-24">
          {/* <img src="./img/html.png" alt="Logo HTML" className=" w-20" />
          <img src="./img/css.png" alt="Logo CSS" className=" w-20" />
          <img
            src="./img/Tailwind_CSS_Logo.svg.png"
            alt="Logo TAILWIND"
            className=" w-20"
          />
          <img src="./img/javascript.png" alt="Logo JS" className=" w-20" />
          <img
            src="./img/pngfind.com-sass-logo-png-4521456.png"
            alt="Logo SASS"
            className=" w-20"
          />
          <img src="./img/mysql.png" alt="Logo MySQL" className=" w-20" />
          <img src="./img/pngwing.com.png" alt="Logo NPM" className=" w-20" />
          <img src="./img/logo.png" alt="Logo MUI" className=" w-20" />
          <img src="./img/XD.png.img.png" alt="Logo XD" className=" w-20" />
          <img
            src="./img/800px-Figma-logo.svg.png"
            alt="Logo FIGMA"
            className=" w-14 h-20"
          />
          <img src="./img/firebase.png" alt="Logo FIREBASE" className=" w-20" />
          <img src="./img/react.png" alt="Logo React" className=" w-20" /> */}
          <ListOfSkills skills={} />
        </div>
      </div>
    </section>
  );
}
