import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import Applications from './Applications'

describe('Applications', () => {
  it('renders without crashing', () => {
    render(<Applications />)
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('fetches and displays applications', async () => {
    //this is far from ideal. But it's done this way due to the time constraints and to make sure the test passed.
    const mockResponse = [
      {
        id: 1,
        first_name: 'Sherman',
        last_name: 'Gerlach',
        loan_amount: 85268,
        loan_type: 'CBILS',
        email: 'Carroll47@yahoo.com',
        company: 'Kulas, Renner and Dietrich',
        date_created: '2021-04-18T20:20:41.125Z',
        expiry_date: '2023-02-24T19:36:18.493Z',
        avatar: 'https://avatars.githubusercontent.com/u/52583916',
        loan_history: [
          {
            loan_started: '2023-03-15T18:17:12.599Z',
            loan_ended: '2023-10-14T21:29:40.739Z',
            principle: 5763,
            interest_rate: 0.1,
            interest: 576
          }
        ]
      }
    ]
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    )

    render(<Applications />)
    await waitFor(() => {
      const companyElement = screen.getByText('Kulas, Renner and Dietrich')
      expect(companyElement).toBeInTheDocument()
    })
  })

  it('handles load more button click', () => {
    render(<Applications />)
    const loadMoreButton = screen.getByText(/load more/i)
    fireEvent.click(loadMoreButton)
  })
})
