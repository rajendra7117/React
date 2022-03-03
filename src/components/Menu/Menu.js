import React, { useEffect } from "react";
import "./Menu.css";
import chicken from "../../Images/chicken-leg.png";
import crab from "../../Images/crab.png";
import meat from "../../Images/meat.png";
import veg from "../../Images/vegetarian.png";
import dessert from "../../Images/dessert.png";
import { useDispatch } from "react-redux";
import { foodTypeActions } from "../../store/FoodTypeSlice";
import { motion } from "framer-motion";

import FoodItems from "../Food-items/FoodItems";

export default function Menu() {
  useEffect(() => {
    window.scrollTo(1, 1);
  }, []);
  const dispatch = useDispatch();
  const selectedchicken = (e) => {
    dispatch(foodTypeActions.onSelectFoodType("chicken"));
  };

  const selectedSeaFood = (e) => {
    dispatch(foodTypeActions.onSelectFoodType("seafood"));
  };

  const selectedVeg = (e) => {
    dispatch(foodTypeActions.onSelectFoodType("vegetarian"));
  };

  const selectedDessert = (e) => {
    dispatch(foodTypeActions.onSelectFoodType("dessert"));
  };

  const selectedMeat = (e) => {
    dispatch(foodTypeActions.onSelectFoodType("lamb"));
  };

  return (
    <motion.div
    initial={{x:-200}}
    animate={{x:0}}
    transition={{duration:.3}}
    exit={{x: "-100vw"}}
    >
      <div>
        <h1>Menu</h1>
      </div>
      <div className="menu-box">
        <div onClick={selectedchicken}>
          <img src={chicken} />
          <h5>Chicken</h5>
        </div>
        <div onClick={selectedSeaFood}>
          <img src={crab} />
          <h5>Sea Food</h5>
        </div>

        <div onClick={selectedVeg}>
          <img src={veg} />
          <h5>Vegetarian</h5>
        </div>
        <div onClick={selectedDessert}>
          <img src={dessert} />
          <h5>Dessert</h5>
        </div>
        <div onClick={selectedMeat}>
          <img src={meat} />
          <h5>Lamb</h5>
        </div>
      </div>
      <div className="foodItemsContainer">
        <FoodItems />
      </div>
    </motion.div>
  );
}
