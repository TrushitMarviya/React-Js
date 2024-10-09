// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { myContext } from './Compo1'

export default function Compo3() {
    const count = useContext(myContext)
  return (
    <>
    <h1>Component-3</h1>
    <h2>{count}</h2>
    </>
  )
}
