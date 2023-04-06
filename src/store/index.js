import { configureStore } from '@reduxjs/toolkit'
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from './slices/carsSlice'
import { formReducer, changeName, changeCost } from './slices/formSlice'

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
})

// export store and all action creaters to use in other components
// so we don't need to import directly from the slice themselves
export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm }
