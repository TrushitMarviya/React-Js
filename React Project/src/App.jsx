import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  )
}

export default App
