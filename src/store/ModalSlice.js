import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: {showModal: false},
    reducers: {
        toggleModal(state, action){
            state.showModal = !state.showModal
        }
    }

})

export const modalActions = modalSlice.actions

export default modalSlice;