import React from 'react'
import { TodoListProps } from '../types'
import TodoItem from './TodoItem'

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  if (todos.length === 0) {
    return <p className="text-gray-500 text-center">Your list is empty.</p>
  }
  return (
    <ul className="overflow-y-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  )
}

export default TodoList
