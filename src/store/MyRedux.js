import { configureStore } from "@reduxjs/toolkit";
import FoodTypeSlice from "./FoodTypeSlice";
import cartSlice from "./CartSlice";
import modalSlice from "./ModalSlice";
import successSlice from "./SuccessSlice";

const store = configureStore({
    reducer:{
        foodType: FoodTypeSlice.reducer,
        cart: cartSlice.reducer,
        modal: modalSlice.reducer,
        success: successSlice.reducer
    }
})

export default store;