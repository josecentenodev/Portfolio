import React from 'react'

export default function Card() {
  return (
    <div className="mx-5 max-w-sm max-h-96 rounded overflow-hidden shadow-lg h-3/4 mt-14 bg-white">
        <img className=" w-36 h-36 mx-auto pt-6" src="./img/AppPisculeria.png" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Nombre Web</div>
            <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#css</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javascript</span>
        </div>
    </div>
  )
}
