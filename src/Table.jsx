import React, { useState } from 'react'
import Cell from './Cell'
import Turn from './Turn'

export default function Table() {
  
  const [table, setTable] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState('X')

  const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Horizontal
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Vertical
      [0, 4, 8],
      [2, 4, 6], // Diagonal
  ]

  const updateTable = (index) => {
    if (table[index]) return
    const newTable = [...table]
    newTable[index] = turn
    setTable(newTable)
    setTurn(turn === 'X' ? 'O' : 'X')
    const newWinner = checkWinner(newTable)
    if (newWinner) {
      window.my_modal_1.showModal()
      resetTable()
    }
  }

  const checkWinner = (checkTable) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i]
      if (checkTable[a] && checkTable[a] === checkTable[b] && checkTable[a] === checkTable[c]) {
        return checkTable[a]
      }
    }
    return null
  }

  const resetTable = () => {
    setTable(Array(9).fill(null))
    setTurn('X')
  }

  return (
    <div>
      <div className='grid gap-2 grid-cols-3 grid-rows-3'>
        {table.map((cell, i) => <Cell index={i} key={i} value={cell} updateTable={updateTable} />)}
      </div>
      <div className='flex gap-2 pt-4 items-center justify-center'>
        <Turn turn={turn} player='X' />
        <Turn turn={turn} player='O' />
      </div>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Player {turn} wins!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  )
}
