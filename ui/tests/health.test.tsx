import { render, screen } from '@testing-library/react'
import Health from '../pages/health/index'

describe('Health', () => {
    it('renders a message', () => {
        const message = { message: 'OK', version: '1.0.0', timestamp: '2021-01-01T00:00:00Z' }
        const result = render(<Health message={message} />)

        const heading = screen.getByRole('heading', {
            name: /Checking health of/i,
        })
        expect(heading).toBeInTheDocument()
    })
})
