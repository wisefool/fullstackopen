import React from 'react'

const Total = (props) => {
  

  const numbers =  props.course.parts.map(part => part.exercises)

  const counter = (total, count) =>  {
    return total + count
  }
  
  console.log("this is numbers: ", numbers)
  
  return (
    <p>
      <strong>Total of { numbers.reduce(counter) } exercises.</strong>
    </p>
  )
}
  
export default Total