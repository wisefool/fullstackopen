import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  const notNeutral = good + bad
  const sum = good - bad
  const average = sum/notNeutral
  const percentage = (good/total)*100
  const percentageText = percentage + "%" 

  if (total < 1) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>  
    )
  }

  return (
    <div>
     <h2>Statistics</h2>
  
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="Total" value={total} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={percentageText} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = (props) => ( <tr><td>{props.text}</td><td>{props.value} </td></tr> )

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <p>
        <Button onClick={() => setGood(good + 1)} text="Good" />
        <Button onClick={() => setNeutral( neutral + 1)} text="Neutral" />
        <Button onClick={() => setBad( bad + 1 )} text="Bad" />
      </p>
      
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))