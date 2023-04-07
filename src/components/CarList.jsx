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
    // use for designing which care should be bold
    // if name in the search is present -- do the following
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
    return (
      // if bold -- apply css bold
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
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
