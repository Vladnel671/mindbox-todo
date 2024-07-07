import React from 'react'
import { TodoItemProps } from '../types'

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => (
  <li className="todo-item-main-block">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
      className="form-checkbox rounded-checkbox min-h-6 min-w-6 text-green-500 rounded-full mr-4"
    />
    <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
  </li>
)

export default TodoItem
