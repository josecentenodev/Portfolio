import React from "react";
import ListOfProjects from "../../components/ListOfProjects";

export default function Portfolio() {
  return (
    <section className="slide" id="portfolio">
      <div className="md:w-4/5 md:mx-auto">
        <h1 className="inline-block mb-10 w-64 text-5xl font-bold mt-20 px-12">Portfolio</h1>
        <a href="https://github.com/josecentenodev" target='_blank' rel="noreferrer" className="inline-block mx-2 hover:scale-105 hover:rotate-6"><img src="./img/icons8-github-30.png" alt="" className="w-10"/></a>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <ListOfProjects />
        </div>
      </div>
    </section>
  );
}
