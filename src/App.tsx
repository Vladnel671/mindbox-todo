import React, { useState } from 'react'
import './index.css'
import { Filter, Todo } from './types'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoButtons from './components/TodoButtons'
import { initialTodos } from './constants'

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

  function getColorClass(type: string) {
    switch (type) {
      case 'block1':
        return filter === 'all'
          ? 'bg-green-500'
          : filter === 'active'
          ? 'bg-purple-700'
          : ' bg-blue-500'
      case 'block2':
        return filter === 'all'
          ? 'bg-purple-700'
          : filter === 'active'
          ? 'bg-blue-500'
          : 'bg-green-500'
      case 'block3':
        return filter === 'all'
          ? 'bg-blue-500'
          : filter === 'active'
          ? 'bg-green-500'
          : 'bg-purple-700'
      default:
        return ''
    }
  }

  const filteredTodos =
    filter === 'all'
      ? todos
      : filter === 'active'
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed)

  return (
    <>
      <p className="text-pink-400 text-2xl p-5">Todos</p>
      <div
        className={`flex flex-col pb-1.5 w-[580px] z-8 block-1 items-center rounded-md ${getColorClass(
          'block1'
        )}`}
      >
        <div
          className={`flex flex-col pb-2 w-[590px] block-2 z-9 items-center rounded-md ${getColorClass(
            'block2'
          )}`}
        >
          <div
            className={`flex overflow-y-auto p-5 overflow-x-hidden flex-col w-[600px] block-3 z-10 items-center rounded-md ${getColorClass(
              'block3'
            )}`}
          >
            <div className="w-[600px] h-[400px] p-5">
              <div className="p-4 flex flex-col justify-between">
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
