import React from 'react'
import { act, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('increments the counter', async () => {
    render(<App />)

    const button = await screen.findByText('count is 0')

    act(() => {
      button.click()
    })

    expect(screen.getByText('count is 1')).toBeInTheDocument()
    expect(screen.queryByText('count is 0')).not.toBeInTheDocument()
  })
})
