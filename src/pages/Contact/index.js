import React from 'react'

export default function Contact() {
  return (
    <section className="slide six" id="contact">
          <div className="w-4/5 mx-auto">
            <h1 className="text-5xl font-bold my-20 px-12">
              Contact <span className=" text-cyan-600 font-bold">Me</span>
            </h1>
            <div className="flex">
              <div className="px-8 mx-10">
                <form action="#" className="flex flex-col">
                  <input type="text" className="my-5 border-b-slate-800 border-b-2 bg-gray-50 outline-none focus:border-b-cyan-600" />
                  <input type="text" className="my-5 border-b-slate-800 border-b-2 bg-gray-50 outline-none focus:border-b-cyan-600" />
                  <textarea name="" id="" cols="30" rows="10" className="border-b-slate-800 border-b-2 bg-gray-50 outline-none focus:border-b-cyan-600"></textarea>
                </form>
              </div>
              <div className="p-8 mx-10 flex flex-col">
                <p className="text-center">
                  I am always ready to consider your proposal. You just need to
                  write to me. If you are not comfortable doing this through a
                  website, then here are networks that can help you.
                </p>
                <div className="self-center flex mt-10">
                  <a href="#" className="mx-2"><img src="./img/icons8-github-30.png" alt="" className="w-10"/></a>
                  <a href="#" className="mx-2"><img src="./img/icons8-gmail-48.png" alt="" className="w-10"/></a>
                  <a href="#" className="mx-2"><img src="./img/icons8-linkedin-48.png" alt="" className="w-10"/></a>
                  <a href="#" className="mx-2"><img src="./img/icons8-instagram-48.png" alt="" className="w-10"/></a>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
