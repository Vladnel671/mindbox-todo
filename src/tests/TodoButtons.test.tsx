import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import TodoButtons from '../components/TodoButtons'

test('calls setFilter with correct value when filter buttons are clicked', () => {
  const setFilter = jest.fn()
  const clearCompleted = jest.fn()

  const { getByText } = render(
    <TodoButtons
      filter="all"
      setFilter={setFilter}
      clearCompleted={clearCompleted}
      remainingTasks={3}
    />
  )

  fireEvent.click(getByText('All Tasks'))
  expect(setFilter).toHaveBeenCalledWith('all')

  fireEvent.click(getByText('Active Tasks'))
  expect(setFilter).toHaveBeenCalledWith('active')

  fireEvent.click(getByText('Completed Tasks'))
  expect(setFilter).toHaveBeenCalledWith('completed')
})

test('calls clearCompleted when Clear Completed button is clicked', () => {
  const clearCompleted = jest.fn()

  const { getByText } = render(
    <TodoButtons
      filter="all"
      setFilter={() => {}}
      clearCompleted={clearCompleted}
      remainingTasks={3}
    />
  )

  fireEvent.click(getByText('Clear Completed'))
  expect(clearCompleted).toHaveBeenCalled()
})
