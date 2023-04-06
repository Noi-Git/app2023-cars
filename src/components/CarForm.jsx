import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCost } from '../store'

const CarForm = () => {
  const dispatch = useDispatch()

  // modify useSlector to return object when we want to get access to more than one value in the state
  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost }
  })

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value))
  }

  const handleCostChange = (event) => {
    // || 0 is to prevent NaN --- when user put the invalid number
    const carCost = parseInt(event.target.value) || 0
    dispatch(changeCost(carCost))
  }

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input
              type='text'
              className='input is-expanded'
              // === is suppose to be name state coming out of redux store
              // we need to access store - reach out to current name piece of state
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='field'>
            <label className='label'>Cost</label>
            <input
              type='number'
              className='input is-expanded'
              value={cost}
              onChange={handleCostChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CarForm
