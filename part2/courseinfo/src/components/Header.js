import React from 'react'

const Header = (props) => {
  console.log("header props: ", props)
  return (
    <h1>{props.text.name}</h1>
  )
}

export default Header