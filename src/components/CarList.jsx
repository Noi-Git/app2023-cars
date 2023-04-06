import { useSelector } from 'react-redux'

const CarList = () => {
  const cars = useSelector((state) => {
    // console.log('state.cars.cars', state.cars.cars)
    return state.cars.data
  })
  console.log(cars)

  const handleCarDelete = () => {}

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className='panel'>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className='button is-danger'
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList
