import React from 'react'
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'


const Course = (props) => {

  return (
    <div>
      <Header text={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  )
  
}

export default Course