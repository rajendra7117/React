import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

export default function () {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const [buttonClass, setButtonClass] = useState(false);


  useEffect((state) => {
    setButtonClass(true)
    setTimeout(() => {
      setButtonClass(false)
    }, 3000)
  }, [cartItems])

  return (
    <div className="main-header">
      <div className="navigation">
        <div className="logo">
          <h1>Food-Cart</h1>
        </div>
        <div className="nav-list">
          <NavLink to="/food"> Menu</NavLink>

          <NavLink to="/search">
            <FiSearch />
          </NavLink>

          <NavLink to="/cart"><button className={`cart-button ${buttonClass ? 'bump' : ''}`}> Your Cart <p>{cartItems.length} </p> </button></NavLink>
        </div>
      </div>
    </div>
  );
}
