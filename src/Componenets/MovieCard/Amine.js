import React from 'react'
import { NavLink } from 'react-router-dom'
import './Description.css'
const Amine = ({id}) => {
  return (
    <div>
     
     <h1>{id} </h1>
      <NavLink to='/'><h2>home</h2></NavLink>
    </div>
  )
}

export default Amine