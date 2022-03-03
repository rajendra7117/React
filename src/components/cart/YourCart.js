import React from "react";
import "./YourCart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/ModalSlice";
import { motion } from "framer-motion";
import CartItem from "./CartItem";
export default function YourCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch()
  const toggleModal = e => {
      dispatch(modalActions.toggleModal())
  }
  const cart = cartItems.map((item) => (
    <CartItem
      image={item.strMealThumb}
      itemName={item.strMeal}
      key={item.idMeal}
      amount={item.amount}
      item={item}
      price={item.price}
    />
  ));
  return (
    <motion.div
    initial={{y:-500}}
    animate={{y:0}}
    transition={{duration:.3}}
    exit={{y:"-100vh"}}
    >
      {totalAmount ? (
        <div className="my-cart">
          <h2>Cart</h2>
          <div className="cartItems">{cart}</div>
          <div className="amount">
            <h4>Total</h4>
            <h5>RS.{totalAmount}</h5>
          </div>
          <button className="paymentBtn" onClick={toggleModal}>Payment</button>
        </div>
      ) : (
        <div style={{ height: "48vh" }}>
          {" "}
          <h4>Your Cart is Empty</h4>{" "}
        </div>
      )}
    </motion.div>
  );
}
