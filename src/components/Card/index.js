import React from 'react'

export default function Card(props) {
  return (
    <div className="mx-5 max-w-sm max-h-96 rounded overflow-hidden shadow-lg h-3/4 mt-14 bg-white">
        <img className=" w-36 h-36 mx-auto pt-6" src={props.src} alt={props.alt} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">{props.name}</div>
            <p className="text-gray-700 text-base">
                {props.description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        {props.tech.forEach(tech => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>)}
        </div>
    </div>
  )
}
