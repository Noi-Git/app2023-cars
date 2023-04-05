import { createSlice, nanoid } from '@reduxjs/toolkit'

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },

    addCar(state, action) {
      state.cars.push({
        // Assumption: action.payload === {name: 'ab', cost: 140} --- from formSlice
        name: action.payload.name, // manually reach out to the name from formSlice
        cost: action.payload.cost,
        id: nanoid(),
      })
    },

    removeCar(state, action) {
      // Assumption: action.payload === the id of the car we want to remove
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload
      })
      state.cars = updated
    },
  },
})
