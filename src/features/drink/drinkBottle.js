import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numofDrinks: 10
}
const drinkBottle = createSlice({
    name: 'drink',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numofDrinks--
        },
        restocked: (state, action) => {
            state.numofDrinks += action.payload
        },
    },
})

export default drinkBottle.reducer
export const {ordered, restocked } = drinkBottle.actions