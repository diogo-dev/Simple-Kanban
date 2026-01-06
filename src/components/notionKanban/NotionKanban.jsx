import React from 'react'
import Board from '../board/Board'
import Header from '../header/Header'

const NotionKanban = () => {

  return (
    <div className='h-screen w-full bg-neutral-900 text-neutral-50'>
      <Header />
      <Board />
    </div>
  )
}

export default NotionKanban