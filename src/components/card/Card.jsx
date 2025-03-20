import React from 'react'
import DropIndicator from '../dropIndicator/DropIndicator'

const Card = ({title, id, column, handleDragStart}) => {

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <div
        draggable={true}
        onDragStart={(e) => handleDragStart(e, {title, id, column})}
        className='cursor-grab rounded border border-neutral-700 
      bg-neutral-800 p-5 active:cursor-grabbing'>
        <p className='text-sm text-neutral-100'>
          {title}
        </p>
      </div>
    </>
  )
}

export default Card