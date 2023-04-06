import { useSelector } from 'react-redux'

const CarList = () => {
  const cars = useSelector((state) => {
    // console.log('state.cars', state.cars)
    // console.log('state.cars.cars', state.cars.cars)
    return state.cars.data
  })
  console.log(cars)

  return <div>CarList</div>
}

export default CarList
