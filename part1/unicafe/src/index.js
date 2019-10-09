import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
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
      <h2>Statistics</h2>
      <p>Good: {good}<br />
      Neutral: {neutral}<br />
      Bad: {bad}</p>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))