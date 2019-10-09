import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  const notNeutral = good + bad
  const sum = good - bad
  const average = sum/notNeutral
  const percentage = (good/total)*100

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
  
      <p>
        Good Test: {good}<br />
        Neutral: {neutral}<br />
        Bad: {bad}<br />
        Total: {total}<br />
        Average: {average}<br />
        Positive: {percentage + "%"} 
      </p>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <p>
        <button onClick={() => setGood( good + 1)}>Good</button>
        <button onClick={() => setNeutral( neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </p>
      
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))