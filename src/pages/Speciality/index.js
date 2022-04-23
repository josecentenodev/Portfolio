import React from 'react'

export default function Speciality() {
  return (
    <section className="slide three" id="speciality">
          <div className="w-4/5 mx-auto">
            <h1 className="text-5xl font-bold my-20 px-12">Speciality</h1>
            <div className="flex w-full justify-around text-center">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold my-5">
                  <span className=" text-cyan-600 font-bold">Frontend</span>{" "}
                  Developer
                </h2>
                <p className="p-5">
                  My favorite pastime is frontend development. I make a website
                  of any complexity for you and adapt it. I write clear code
                  that is easy to work with in the future.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold my-5">
                  <span className=" text-cyan-600 font-bold">Backend</span>{" "}
                  Developer
                </h2>
                <p className="p-5">
                  Despite the fact I'm new to the backend it certainly is
                  another favorite thing of mine and I can do simple things that
                  are needed 90% of the time.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold my-5">
                  <span className=" text-cyan-600 font-bold">UX/UI</span>{" "}
                  Designer
                </h2>
                <p className="p-5">
                  Actually I am studying UI & UX Design and I'm having a lot of
                  fun in this field. I'm always thinking how to improve my work
                  and overcome my skills and abilities.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}
