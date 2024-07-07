import { useState } from 'react'
import { InputProps } from '../types'

const TodoInput: React.FC<InputProps> = ({ addTodo, toggleAccordion }) => {
  const [text, setText] = useState('')
  const [isRotated, setIsRotated] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text)
      setText('')
    }
  }

  const handleToggleAccordion = () => {
    toggleAccordion()
    setIsRotated((prev) => !prev)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-row">
        <button
          type="button"
          className="pr-4 rounded-md mb-2"
          onClick={handleToggleAccordion}
        >
          <svg
            className={`w-6 h-6 ${isRotated ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What need to be done?"
          className="w-full p-3 mb-5 border border-gray-300 rounded-md"
        />
      </div>
    </form>
  )
}

export default TodoInput
