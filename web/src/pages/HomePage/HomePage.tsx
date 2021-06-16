import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import styled from 'styled-components'
import WeatherResult from 'src/components/WeatherResult/WeatherResult'

const WeatherWrap = styled.div`
  width: 100%;
  text-align: center;
`

const TextFieldForm = styled(TextField)`
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border-radius: 0.4rem;
  border: solid 3px white;
  box-sizing: border-box;

  &:focus {
    border-color: #5bc1ef;
    outline: none;
  }
`

const SubmitForm = styled(Submit)`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border-radius: 0.4rem;
  border: none;
  background: #5bc1ef;
  font-weight: 600;
`
const Title = styled.h1`
  color: white;
  font-family: arial;
`

const ErrorMessage = styled.h1`
  color: red;
  font-size: 1rem;
  font-family: arial;
`

const HomePage = () => {
  const [weather, setWeather] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (data) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${data.zip},us&appid=${process.env.OWM_ID}`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        return setError(`${response.status} : ${response.statusText}`)
      })
      .then((json) => setWeather(json))
  }

  return (
    <WeatherWrap>
      <WeatherResult weather={weather} />
      <Title>Weather by Zipcode</Title>
      <ErrorMessage>{error}</ErrorMessage>
      <Form onSubmit={onSubmit}>
        <TextFieldForm
          name="zip"
          placeholder="Zip code"
          maxLength="5"
          validation={{ required: true, pattern: /^\d{5}$/ }}
        />
        <SubmitForm>Submit</SubmitForm>
      </Form>
    </WeatherWrap>
  )
}

export default HomePage
