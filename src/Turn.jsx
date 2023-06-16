import React from 'react'

export default function Turn({turn, player}) {
  
  const turnStyle = turn === player ? 'bg-cyan-600' : 'bg-stone-600'
  
  return (
    <div className={'flex h-24 w-24 items-center justify-center text-6xl rounded-xl ' + turnStyle}>
      {player}
    </div>
  )
}
