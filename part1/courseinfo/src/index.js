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
  const part1 = {
    name: 'Fundamentals of React',
    exercises:  10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header course={course}/>
      <Content 
        part1_text={part1.name} part1_count={part1.exercises} 
        part2_text={part2.name} part2_count={part2.exercises} 
        part3_text={part3.name} part3_count={part3.exercises}
      />
      <Total total_count={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));


