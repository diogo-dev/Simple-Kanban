import React from 'react'
import DropIndicator from '../dropIndicator/DropIndicator'

const Card = ({title, id, column}) => {

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <div
        draggable={true}
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