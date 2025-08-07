import { useState } from 'react'

const Button = ({ name, onClick }) => 
  <button onClick={onClick}>{name}</button>

const StatisticLine = ({ text, value }) =>
  <p>{text} {value}</p>

const Statistics = (props) => {
  const nClicks = props.goodClicks + props.neutralClicks + props.badClicks

  if (nClicks === 0) {
    return <p>No feedback given</p>
  }

  const average = (props.goodClicks - props.badClicks) / nClicks
  const positive = (props.goodClicks / nClicks) * 100

  return (
    <div>
      <StatisticLine text={'good'} value={props.goodClicks} />
      <StatisticLine text={'neutral'} value={props.neutralClicks} />
      <StatisticLine text={'bad'} value={props.badClicks} />
      <StatisticLine text={'all'} value={nClicks} />
      <StatisticLine text={'average'} value={average} />
      <StatisticLine text={'positive'} value={positive + '%'} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button name={'good'} onClick={handleGoodClick} />
      <Button name={'neutral'} onClick={handleNeutralClick} />
      <Button name={'bad'} onClick={handleBadClick} />

      <h1>statistics</h1>
      <Statistics goodClicks={good} neutralClicks={neutral} badClicks={bad} />
    </div>
  )
}

export default App