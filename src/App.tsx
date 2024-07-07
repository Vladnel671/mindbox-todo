import { useState } from 'react'
import './index.css'
import { Filter, Todo } from './types'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoButtons from './components/TodoButtons'
import { initialTodos } from './constants'

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [accordionOpen, setAccordionOpen] = useState(false)
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
    <div className=" bg-blue-500 pb-1.5 rounded-md mt-4 z-8">
      <div className=" bg-red-500 pb-1 rounded-md mt-4 z-9">
        <div className="flex flex-col z-10 items-center bg-slate-800 rounded-md">
          <p className="text-pink-400 text-2xl p-10">Todos</p>
          <div className="w-[600px] h-[400px] ">
            <div className="p-4 flex flex-col justify-between h-full">
              <TodoInput
                toggleAccordion={() => setAccordionOpen((prev) => !prev)}
                addTodo={addTodo}
              />
              <div
                className={`accordion ${
                  accordionOpen ? 'open' : ''
                }`}
              >
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
  )
}

export default App
