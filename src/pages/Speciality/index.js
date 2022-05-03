import React from 'react'

export default function Speciality() {
  return (
    <section className="slide" id="speciality">
          <div className="md:w-4/5 md:mx-auto">
            <h1 className="text-5xl font-bold my-20 px-12 dark:text-white">Speciality</h1>
            <div className="flex flex-col justify-around text-center lg:flex-row">
              <div className="flex flex-col text-left">
                <h2 className="text-3xl font-bold my-5 px-12 dark:text-gray-200">
                  <span className=" text-cyan-600 font-bold">Frontend</span>{" "}
                  Developer
                </h2>
                <p className="px-12 text-left py-5 mb-5 dark:text-white">
                  My favorite pastime is frontend development. I make a website
                  of any complexity for you and adapt it. I write clear code
                  that is easy to work with in the future.
                </p>
              </div>
              <div className="flex flex-col text-left">
                <h2 className="text-3xl font-bold my-5 px-12 dark:text-gray-200">
                  <span className=" text-cyan-600 font-bold">Backend</span>{" "}
                  Developer
                </h2>
                <p className="px-12 text-left py-5 mb-5 dark:text-white">
                  Despite the fact I'm new to the backend it certainly is
                  another favorite thing of mine and I can do simple things that
                  are needed 90% of the time.
                </p>
              </div>
              <div className="flex flex-col text-left">
                <h2 className="text-3xl font-bold my-5 px-12 dark:text-gray-200">
                  <span className=" text-cyan-600 font-bold">UX/UI</span>{" "}
                  Designer
                </h2>
                <p className="px-12 text-left py-5 mb-5 dark:text-white">
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
