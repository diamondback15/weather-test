import styled from 'styled-components'

const ResultBox = styled.div`
  background: linear-gradient(15turn, #3a7df2, #5bc1ef);
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 2rem 10rem;
  font-family: arial;
  text-align: center;
  width: auto;
  display: inline-block;
  box-shadow: 4px 4px 0 #1e4074;

  @media screen and (max-width: 500px) {
    width: 80%;
    padding: 2rem 0;
  }
`

const Temperature = styled.div`
  color: white;
  font-size: 3rem;
  font-family: arial;
  font-weight: 600;
`

const Condition = styled.div`
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
`

const CurrentDate = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
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
const WeatherResult = ({ weather }) => {
  if (!weather) {
    return null
  }

  if (weather?.cod === '404') {
    return <ErrorMessage>Error: {weather?.message}</ErrorMessage>
  }

  const today = new Date()
  const date = `${today.getFullYear()}/${today.getDate()}/${today.getMonth()}`

  const temp = () => Math.round(((weather?.main.temp - 273.15) * 9) / 5 + 32)
  const condition = () => weather?.weather[0].main
  const icon = () => {
    return `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  }

  return (
    <section>
      <Title>Weather in {weather?.name}</Title>
      <ResultBox>
        <img src={icon()} alt="" />
        <Temperature>{temp()}°F</Temperature>
        <Condition>{condition()}</Condition>
        <CurrentDate>{date}</CurrentDate>
      </ResultBox>
    </section>
  )
}

export default WeatherResult
