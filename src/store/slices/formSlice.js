import { createSlice } from '@reduxjs/toolkit'
import { addCar } from './carsSlice' // addCar = action creator

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload
    },

    changeCost(state, action) {
      state.cost = action.payload
    },
  },
  extraReducers(builder) {
    //addCar is the same as 'cars/addCar' -- we are saying that we are going to watch for addCar action type
    builder.addCase(addCar, (state, action) => {
      state.name = ''
      state.cost = 0
    })
  },
})

export const { changeName, changeCost } = formSlice.actions
export const formReducer = formSlice.reducer
