import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <ul style={{display:'flex', justifyContent :'space-around'}}>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Blog</li>
        <li>{props.name}</li>
      </ul>
    </div>
  )
}
