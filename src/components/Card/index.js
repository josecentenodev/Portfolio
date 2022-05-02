import React from 'react'

export default function Card(props) {

  return (
    <a href={props.url} className="group flex flex-col justify-center items-center md:h-96 w-96 lg:h-80 mx-5 rounded overflow-hidden shadow-lg mt-14 bg-white hover:bg-cyan-600 hover:scale-105">
        <img className="w-36 h-36 mx-auto pt-6 md:w-20 md:h-auto" src={props.src} alt={props.alt} />
        <div className="px-6 py-4">
            <div className="group-hover:text-white font-bold text-xl mb-2 text-center">{props.name}</div>
            <p className="group-hover:text-white text-gray-700 text-base">
                {props.description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        {props.tech.map(tech => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tech}</span>)}
        </div>
    </a>
  )
}


// tech => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
