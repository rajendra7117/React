import { createSlice } from "@reduxjs/toolkit";

const successSlice = createSlice({
    name: 'successSlice',
    initialState: {showSuccess: false},
    reducers: {
        toggleSuccess(state, action){
            state.showSuccess = !state.showSuccess
        }
    }
})

export const successActions = successSlice.actions

export default successSlice;