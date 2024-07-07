import React from 'react'
import { render } from '@testing-library/react'
import TodoList from '../components/TodoList'
import '@testing-library/jest-dom'

const todos = [
  { id: 1, text: 'Test Todo 1', completed: false },
  { id: 2, text: 'Test Todo 2', completed: true },
]

test('renders correct number of TodoItem components', () => {
  const { getAllByRole } = render(
    <TodoList todos={todos} toggleTodo={() => {}} />
  )
  const items = getAllByRole('listitem')

  expect(items.length).toBe(2)
})

test('displays empty message when todos list is empty', () => {
  const { getByText } = render(<TodoList todos={[]} toggleTodo={() => {}} />)
  expect(getByText('Your list is empty.')).toBeInTheDocument()
})
