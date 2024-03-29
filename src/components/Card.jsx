import React from 'react'

export default function Card({title,content}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-600">
    <div className="px-6 py-4 text-white">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-white text-base">
        {content}
      </p>
    </div>
  </div>
  )
}
