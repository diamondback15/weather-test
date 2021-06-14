import { render } from '@redwoodjs/testing'

import WeatherResult from './WeatherResult'

describe('WeatherResult', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WeatherResult weather={null} />)
    }).not.toThrow()
  })
})
