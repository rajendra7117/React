import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    totalAmount: localStorage.getItem("totalAmount")
      ? JSON.parse(localStorage.getItem("totalAmount"))
      : 0,
  },
  reducers: {
    addToCart(state, action) {
    
      if (state.cartItems.length <= 0) {
        state.cartItems = [...state.cartItems, action.payload];

        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        let total;
        total = parseInt(action.payload.price * action.payload.amount);
        console.log(total);
        state.totalAmount = total;
        localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
        console.log(state.cartItems);
      } else {
        const existingCartItemIndex = state.cartItems.findIndex(
          (item) => item.idMeal === action.payload.idMeal
        );

        const items = current(state).cartItems;
        let existingCartItem = items[existingCartItemIndex];
        if (existingCartItem) {
          let updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + 1,
          };
       
          let updatedItems = [...items];
         
          updatedItems[existingCartItemIndex] = updatedItem;
          state.cartItems = updatedItems;
          let total = parseInt(state.totalAmount);
          total = total + parseInt(action.payload.price) ;
          state.totalAmount = total;
          console.log(state.totalAmount);
        } else {
          state.cartItems = [...state.cartItems, action.payload];

          let total = parseInt(state.totalAmount);
          total = total + action.payload.price ;
          state.totalAmount = total;
        }

        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      }
    },
    removeFromCart(state, action) {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.idMeal === action.payload.idMeal
      );

      const items = current(state).cartItems;
      let existingCartItem = items[existingCartItemIndex];

      if (existingCartItem.amount > 1) {
        let updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        let updatedItems = [...items];
         
          updatedItems[existingCartItemIndex] = updatedItem;
          state.cartItems = updatedItems;
          let total = parseInt(state.totalAmount);
          total = total - action.payload.price ;
          state.totalAmount = total;
          

      }
      else{
        let items = current(state).cartItems;
         items = items.filter((item) => item.idMeal!=action.payload.idMeal)
        state.cartItems = items
        let total = parseInt(state.totalAmount);
          total = total - action.payload.price ;
          state.totalAmount = total
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
      localStorage.setItem('totalAmount', JSON.stringify((state.totalAmount)))
    },

    clearCart(state, action){
      state.cartItems = []
      state.totalAmount = 0
    }
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
