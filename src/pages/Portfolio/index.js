import React from 'react'
import Card from "../../components/Card";

export default function Portfolio() {
  return (
    <section className="slide five" id="portfolio">
          <div className="w-4/5 mx-auto">
            <h1 className="text-5xl font-bold mt-20 px-12">Portfolio</h1>
            <div className="flex justify-around">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex justify-end">
            <button className="block mt-5 mr-10 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-cyan-600">
              See More in Github
            </button>
            </div>
          </div>
        </section>
  )
}
