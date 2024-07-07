import React, { useState } from 'react'
import './index.css'
import { Filter, Todo } from './types'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoButtons from './components/TodoButtons'
import { initialTodos } from './constants'
import { getColorClass } from './utils'

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [accordionOpen, setAccordionOpen] = useState(true)
  const [filter, setFilter] = useState<Filter>('all')

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const remainingTasks = todos.filter((todo) => !todo.completed).length

  const filteredTodos =
    filter === 'all'
      ? todos
      : filter === 'active'
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed)

  return (
    <>
      <p className="text-pink-400 text-2xl p-5">Todos</p>
      <div className={`first-block block-1 ${getColorClass(filter, 'block1')}`}>
        <div
          className={`second-block block-2 ${getColorClass(filter, 'block2')}`}
        >
          <div
            className={`third-block block-3 ${getColorClass(filter, 'block3')}`}
          >
            <div className="w-[600px] h-[fit]">
              <div className="flex flex-col justify-between">
                <TodoInput
                  toggleAccordion={() => setAccordionOpen((prev) => !prev)}
                  addTodo={addTodo}
                />
                <div className={`accordion ${accordionOpen ? 'open' : ''}`}>
                  {accordionOpen && (
                    <>
                      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
                      <TodoButtons
                        filter={filter}
                        setFilter={setFilter}
                        clearCompleted={clearCompleted}
                        remainingTasks={remainingTasks}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
