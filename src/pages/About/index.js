import React from 'react'

export default function About() {
  return (
    <section className="slide" id="about">
          <div className="md:w-4/5 md:mx-auto">
            <h1 className="text-5xl font-bold my-20 px-12">
              About <span className=" text-cyan-600 font-bold">Me</span>
            </h1>
            <p className="py-8 px-12">
              Hey! my name is José and I am a front-end developer and web
              designer. I graduated from several courses at Udemy, FreeCodeCamp
              and EscuelaDevRock in the field of Web Development. At the moment
              I keep studying and diving deeper into these disciplines on my
              own.
            </p>
            <p className="py-8 px-12">
              I believe that the most important thing in life is to find
              yourself and what you like. I am very glad that I have chosen this
              path, which is a straight line to success if you put the necessary
              effort and never give up. This motivates me and so I move on.
            </p>
            <div className="flex justify-end">
              <em className="px-12 mt-12">
                Working with me: I give my best and also learn and adapt
                quickly!
              </em>
            </div>
          </div>
        </section>
  )
}
