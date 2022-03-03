import React, { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import "./FoodItems.css";
import { useSelector } from "react-redux";

export default function FoodItems() {
    const foodType = useSelector((state) => state.foodType.selectedType)

  const [fooddata, setFoodData] = useState();

  const catergories = ['chicken', 'seafood', 'dessert', 'Vegetarian', 'Goat']
  
  useEffect(() => {
      if(foodType){

      
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodType}`).then(
      (res) => {
        return res.json();
      }
    )
    .then((data) => {
        setFoodData(data.meals)
    })
}
  }, [foodType]);

  let foodItemGrid;
  if(fooddata){
    foodItemGrid = fooddata.map((item) => <FoodItem id={item.idMeal} image={item.strMealThumb} itemName={item.strMeal} key={item.idMeal} item={item}/>)
  }

  

  return <div className="items-grid">

     {foodItemGrid ? foodItemGrid : 'no items available'}
  </div>;
}
