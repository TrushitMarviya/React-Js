// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

export default function Counter() {
    const[count , setCount]=useState(0)
    const increase = () =>{
        setCount(count + 1)
    } 
    const decrease = () =>{
        setCount(count - 1)
    }
    const reset = () =>{
        setCount(0)
    }
  return (
    <div className='container'>
    <section className="cd-intro">
		<h1 className="cd-headline push">
			<span style={{color:"#ebebeb"}}>Counter </span>
			<span className="cd-words-wrapper">
				<b className="is-visible" style={{color:"#dfb252"}}>App</b>
				<b style={{color:"#dfb252"}}>Project</b>
			</span>
		</h1>
	</section> 
  <div className="con2">
  <p className="counter">{count}</p>
    <button className="increase" onClick={increase} >+</button>
    <button className="decrease" onClick={decrease}>-</button>
    <button className="reset" onClick={reset}>0</button>

  </div>
    </div>
  )
}
