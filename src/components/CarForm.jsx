import React from 'react'

const CarForm = () => {
  const handleNameChange = () => {}

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
              // value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CarForm
