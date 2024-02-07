import React from 'react'

export default function Card({title,content}) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-blue-600">
    <div class="px-6 py-4 text-white">
      <div class="font-bold text-xl mb-2">{title}</div>
      <p class="text-white text-base">
        {content}
      </p>
    </div>
  </div>
  )
}
