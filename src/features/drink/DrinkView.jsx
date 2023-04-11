import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './drinkBottle'

export const DrinkView = () => {
  const numOfDrinks = useSelector(state => state.drink.numofDrinks)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of drinks - {numOfDrinks}</h2>
      <button onClick={() => dispatch(ordered())}>Order drink</button>
      <button onClick={() => dispatch(restocked(5))}>Restock drinks</button>
    </div>
  )
}