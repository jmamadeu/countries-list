import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import { CountryLabel } from '../components/country-label'


describe('Country Label', () => {
  test('should render 0 country message',async () => {
    render(<CountryLabel countryTotal={0} />)
    
    const text = screen.getByText('Total of 0 countries')

    expect(text).toBeInTheDocument()
  })
})