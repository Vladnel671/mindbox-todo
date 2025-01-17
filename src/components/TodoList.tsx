import React from 'react'
import { TodoListProps } from '../types'
import TodoItem from './TodoItem'

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <>
    {todos.length === 0 ? (
      <p className="text-white text-center min-h-[200px] flex items-center justify-center">
        Your list is empty.
      </p>
    ) : (
      <ul className="overflow-y-auto h-[250px]">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    )}
  </>
)

export default TodoList
