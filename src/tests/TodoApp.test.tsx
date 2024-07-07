import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'

describe('TodoApp Component', () => {
  it('renders TodoApp and allows adding a new task', () => {
    const { getByPlaceholderText, getByText } = render(<App />)

    const inputElement = getByPlaceholderText(/add a new task/i)
    const addButton = getByText(/add/i)

    fireEvent.change(inputElement, { target: { value: 'Test Task' } })
    fireEvent.click(addButton)

    expect(getByText(/test task/i)).toBeInTheDocument()
  })

  it('allows toggling a task completion', () => {
    const { getByPlaceholderText, getByText, getByRole } = render(<App />)

    const inputElement = getByPlaceholderText(/add a new task/i)
    const addButton = getByText(/add/i)

    fireEvent.change(inputElement, { target: { value: 'Test Task' } })
    fireEvent.click(addButton)

    const checkbox = getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })
})
