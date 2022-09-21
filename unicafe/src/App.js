import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
    <tr>
      <td>{props.grade}</td>
      <td>{props.amount}</td>
    </tr>
)

const StatisticLine = (props) => {

  if (props.allClicks === 0) {
    return "No feedback given"
  }
  return (
    <>
      <Statistics grade={props.grade} amount={props.amount} />
    </>
  )
}

// define the function for the average score (good: 1, neutral: 0, bad: -1)
function calculateAverage(array) {
  let i = 0
  let sum = 0
  let len = array.length

  while (i < len) {
    sum = sum + array[i++]
  }

  let goodMinusBad = array[0] - array[2]
  let result = goodMinusBad / sum
  return result
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
  }

  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }

  const setToBad = () => {
    setBad(bad + 1)
  }

  // define the function for percentage of positive feedback
  function percentageOfPositive() {
    let result = (good / (good + neutral + bad)) * 100
    return result
  }

  // define the function for the display of average's props.amount value of Statistics component
  const avrg = () => {
    if (good === 0 && bad === 0) {
      return 0
    } else {
      return calculateAverage([good, neutral, bad])
    }
  }

  // define the function for the display of positive's props.amount value of Statistics component
  const positive = () => {
    if (good === 0 && bad === 0) {
      return 0
    } else {
      return percentageOfPositive() + " %"
    }
  }

  return (
    <div>
      <h3>Give Feedback</h3>
      <Button handleClick={() => setToGood()} text="good" />
      <Button handleClick={() => setToNeutral()} text="neutral" />
      <Button handleClick={() => setToBad()} text="bad" />
      <h3>Statistics</h3>
      {good+neutral+bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <StatisticLine grade="good" amount={good} />
          <StatisticLine grade="neutral" amount={neutral} />
          <StatisticLine grade="bad" amount={bad} />
          <StatisticLine grade="all" amount={good + neutral + bad} />
          <StatisticLine grade="average" amount={avrg()} />
          <StatisticLine grade="positive" amount={positive()} />
        </table>
      )}
    </div>
  )
}

export default App
