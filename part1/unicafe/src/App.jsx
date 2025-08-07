import { useState } from 'react'

const Button = ({ name, onClick }) => 
  <button onClick={onClick}>{name}</button>

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.goodClicks}</p>
      <p>neutral {props.neutralClicks}</p>
      <p>bad {props.badClicks}</p>
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

      <Statistics goodClicks={good} neutralClicks={neutral} badClicks={bad} />
    </div>
  )
}

export default App