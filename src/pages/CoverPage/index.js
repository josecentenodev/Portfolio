import React from 'react'

export default function CoverPage() {
  return (
    <section
          className="  slide one flex justify-center items-center"
          id="portada"
        >
          <div className="  flex flex-col justify-center items-center">
            <h1 className=" text-5xl font-bold">My name is José Centeno</h1>
            <h2 className=" text-4xl mt-2">
              <span className=" text-cyan-600 font-bold">I'm:</span> Web
              Developer & Web Designer
            </h2>
            <button className=" mt-5 mr-20 self-end inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-cyan-600">
              Contact Me
            </button>
          </div>
          <img src="./img/myself-removebg-preview.png" alt="Cover Page Image" />
        </section>
  )
}
