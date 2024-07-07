import React from 'react'
import { TodoItemProps } from '../types'

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li className="flex items-center mb-2 border-b py-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="form-checkbox rounded-checkbox h-6 w-6 text-green-500 rounded-full mr-4"
      />
      <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
    </li>
  )
}
export default TodoItem
