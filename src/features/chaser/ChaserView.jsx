import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './chaser'

export const ChaserView = () => {
  const [value, setValue] = useState(1)
  const numOfChasers = useSelector((state) => state.chaser.numofChasers)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of chasers - {numOfChasers}</h2>
      <button onClick={() => dispatch(ordered())}>Order chaser</button>
      <input type='number' value={value} onChange={e=>setValue(parseInt(e.target.value))}/>
      <button onClick={() => dispatch(restocked(value))}>Restock chasers</button>
    </div>
  )
}