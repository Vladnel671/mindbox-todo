import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import TodoInput from '../components/TodoInput'

test('calls addTodo with input value and clears input on submit', () => {
  const addTodo = jest.fn()
  const toggleAccordion = jest.fn()
  const { getByPlaceholderText, getByRole } = render(
    <TodoInput addTodo={addTodo} toggleAccordion={toggleAccordion} />
  )

  const input = getByPlaceholderText(
    'What need to be done?'
  ) as HTMLInputElement
  const button = getByRole('button')

  fireEvent.change(input, { target: { value: 'Test Todo' } })
  fireEvent.submit(button)

  expect(addTodo).toHaveBeenCalledWith('Test Todo')
  expect(input.value).toBe('')
})

test('toggles accordion when button is clicked', () => {
  const toggleAccordion = jest.fn()
  const { getByRole } = render(
    <TodoInput addTodo={() => {}} toggleAccordion={toggleAccordion} />
  )

  const button = getByRole('button')
  fireEvent.click(button)

  expect(toggleAccordion).toHaveBeenCalled()
})
