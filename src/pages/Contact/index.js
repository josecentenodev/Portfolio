import React from 'react'
import Form from '../../components/Form'

export default function Contact() {
  return (
    <section className="slide" id="contact">
          <div className="md:w-4/5 md:mx-auto">
            <h1 className="text-5xl font-bold my-20 px-12">
              Contact <span className=" text-cyan-600 font-bold">Me</span>
            </h1>
            <div className="flex flex-col lg:flex-row">
              <div className="mx-auto md:px-8 md:mx-10 lg:w-96">
                <Form />
              </div>
              <div className="px-12 mt-10 flex flex-col">
                <p className="text-left">
                  I am always ready to consider your proposal. You just need to
                  write to me. If you are not comfortable doing this through a
                  website, then here are networks that can help you.
                </p>
                <div className="self-center flex mt-5 pb-5">
                  <a href="mailto:jocecito182@gmail.com" target='_blank' rel="noreferrer" className="mx-2 hover:scale-105"><img src="./img/icons8-gmail-48.png" alt="" className="w-10"/></a>
                  <a href="https://www.linkedin.com/in/josecentenodev/" target='_blank' rel="noreferrer" className="mx-2 hover:scale-105"><img src="./img/icons8-linkedin-48.png" alt="" className="w-10"/></a>
                  <a href="https://www.instagram.com/josecentenodev/" target='_blank' rel="noreferrer" className="mx-2 hover:scale-105"><img src="./img/icons8-instagram-48.png" alt="" className="w-10"/></a>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
