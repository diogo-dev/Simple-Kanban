import React, { useState } from 'react'
import Column from '../column/Column'
import DeleteBarrel from '../deleteBarrel/DeleteBarrel'

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className='flex h-full w-full gap-3 overflow-scroll p-12'>
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <DeleteBarrel setCards={setCards} />
    </div>
  )
}

const DEFAULT_CARDS = [
  { id: 1, title: "Task 1", column: "backlog" },
  { id: 2, title: "Task 2", column: "backlog" },
  { id: 3, title: "Task 3", column: "backlog" },
  { id: 4, title: "Task 4", column: "backlog" },

  { id: 6, title: "Task 6", column: "todo" },
  { id: 7, title: "Task 7", column: "todo" },
  { id: 8, title: "Task 8", column: "todo" },
  { id: 9, title: "Task 9", column: "todo" },
  { id: 10, title: "Task 10", column: "todo" },

  { id: 11, title: "Task 11", column: "doing" },
  { id: 12, title: "Task 12", column: "doing" },
  { id: 14, title: "Task 14", column: "doing" },
  { id: 15, title: "Task 15", column: "doing" },

  { id: 16, title: "Task 16", column: "done" },
  { id: 17, title: "Task 17", column: "done" },
  { id: 18, title: "Task 18", column: "done" },
]

export default Board