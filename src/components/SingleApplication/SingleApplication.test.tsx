import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SingleApplication from './SingleApplication'

describe('SingleApplication', () => {
  it('renders application details', () => {
    const mockApplication = {
      id: 1,
      company: 'Test Company',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@test.com',
      loan_amount: '1000',
      date_created: '2021-01-01',
      expiry_date: '2021-12-31'
    }

    render(<SingleApplication application={mockApplication} />)
    expect(screen.getByText('Test Company')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@test.com')).toBeInTheDocument()
  })
})
