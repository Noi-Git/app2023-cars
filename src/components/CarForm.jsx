import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCost } from '../store'

const CarForm = () => {
  const dispatch = useDispatch()
  const name = useSelector((state) => {
    return state.form.name
  })

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value))
  }

  const handleCostChange = (event) => {
    dispatch(changeCost(event.target.value))
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
