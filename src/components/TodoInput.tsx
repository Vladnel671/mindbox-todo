import { useState } from 'react'
import { InputProps } from '../types'

const TodoInput: React.FC<InputProps> = ({ addTodo }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What need to be done?"
        className='w-full p-3 mb-5'
      />
    </form>
  )
}

export default TodoInput
