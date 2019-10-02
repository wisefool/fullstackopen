import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.title} {props.exercise_count}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title={props.part1_text} exercise_count={props.part1_count}/>
      <Part title={props.part2_text} exercise_count={props.part2_count}/>
      <Part title={props.part3_text} exercise_count={props.part3_count}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total_count}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course}/>
      <Content 
        part1_text={part1} part1_count={exercises1} 
        part2_text={part2} part2_count={exercises2} 
        part3_text={part3} part3_count={exercises3}
      />
      <Total total_count={exercises1 + exercises2 + exercises3} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));


