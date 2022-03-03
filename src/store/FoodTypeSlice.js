import { createSlice } from "@reduxjs/toolkit";

const foodTypeSlice = createSlice({
    name: 'foodType',
    initialState: {selectedType: localStorage.getItem('foodType') ? JSON.parse(localStorage.getItem('foodType')) : ''},
    reducers: {
        onSelectFoodType(state, action){
            state.selectedType = action.payload
            localStorage.setItem('foodType', JSON.stringify(state.selectedType))
        }
    }
})

export const foodTypeActions = foodTypeSlice.actions;

export default foodTypeSlice;