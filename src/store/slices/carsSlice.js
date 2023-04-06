import { createSlice, nanoid } from '@reduxjs/toolkit'

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: [], // change the key to data -- to prevent confusion when access it in the component using useSelector()
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },

    addCar(state, action) {
      state.data.push({
        // Assumption: action.payload === {name: 'ab', cost: 140} --- from formSlice
        name: action.payload.name, // manually reach out to the name from formSlice
        cost: action.payload.cost,
        id: nanoid(),
      })
    },

    removeCar(state, action) {
      // Assumption: action.payload === the id of the car we want to remove
      const updated = state.data.filter((car) => {
        return car.id !== action.payload
      })
      state.data = updated
    },
  },
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions
export const carsReducer = carsSlice.reducer
