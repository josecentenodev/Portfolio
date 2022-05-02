import React from "react";
import ListOfSkills from "../../components/ListOfSkills";


export default function SectionSkills() {

  return (
    <section className="slide" id="skillsTools">
      <div className="md:w-4/5 md:mx-auto">
        <h1 className="text-5xl font-bold mt-20 px-12">Some
          <span className=" text-cyan-600 font-bold"> Skills</span> &{" "}
          <span className=" text-cyan-600 font-bold">Tools</span>
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 my-24">
          <ListOfSkills />
        </div>
      </div>
    </section>
  );
}
