import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store'

const CarList = () => {
  const dispatch = useDispatch()

  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    // we are going to do matching update here
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return {
      cars: filteredCars,
      name: form.name,
    }
  })
  console.log(cars)

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id))
  }

  const renderedCars = cars.map((car) => {
    // the matching cars will be bold when we rendered the car
    // we need to know the car's name -- and the current name user is typing -- state.form.name
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
