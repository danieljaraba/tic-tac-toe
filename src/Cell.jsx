import React, { useState } from 'react'

export default function Cell({index, value, updateTable}) {

  const handleClick = () => {
    updateTable(index)
  }

  return (
    <div className='flex bg-slate-800 h-24 w-24 md:h-32 md:w-32 rounded-lg items-center justify-center hover:bg-slate-700' onClick={handleClick}>
      <span className='text-6xl md:text-8xl'>
        {value}
      </span>
    </div>
  )
}
