import React from 'react'
import Part from './Part.js'





const Content = (props) => {
  console.log(props)
  
  const output = () => props.course.parts.map(part => 
    <Part 
      key={part.id} 
      title={part.name} 
      exercise_count={part.exercises}
    />
  )  
  
  return (
    <div>
      {output()}      
    </div>
  )
}

export default Content