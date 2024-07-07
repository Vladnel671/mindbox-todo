import React from 'react'
import { TodoButtonsProps } from '../types'

const TodoButtons: React.FC<TodoButtonsProps> = ({
  filter,
  setFilter,
  clearCompleted,
  remainingTasks,
}) => {
  return (
    <div className="my-4 text-sm flex border-t flex-row items-center justify-between w-full">
      <div className="">
        <span className="text-gray-700">{remainingTasks} Items left</span>
      </div>
      <button
        className={`mr-2 p-2 rounded ${
          filter === 'all' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'
        }`}
        onClick={() => setFilter('all')}
      >
        All Tasks
      </button>
      <button
        className={`mr-2 p-2 rounded ${
          filter === 'active'
            ? 'bg-green-700 text-white'
            : 'bg-green-500 text-white'
        }`}
        onClick={() => setFilter('active')}
      >
        Active Tasks
      </button>
      <button
        className={`p-2 rounded ${
          filter === 'completed'
            ? 'bg-gray-700 text-white'
            : 'bg-gray-500 text-white'
        }`}
        onClick={() => setFilter('completed')}
      >
        Completed Tasks
      </button>
      <div className="my-4">
        <button
          className="p-2 text-white"
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  )
}

export default TodoButtons
