import React, {useEffect, useState} from 'react';
import './Search.css';
import FoodItem from '../Food-items/FoodItem';

export default function Search() {

    const [meal, setMeal] = useState()
    const [items, setItems] = useState()

    const enteredMeal = e => {
        setMeal(e.target.value)
    }
 
    useEffect(() => {
         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
         .then((res) => {
             return res.json()
         })
         .then((data) => {
             setItems(data.meals)
         })
    }, [meal])

    let foodItems;
    if(items){
      foodItems = items.map((item) => <FoodItem image={item.strMealThumb} itemName={item.strMeal} key={item.idMeal} item={item}/>)
    }

  return (
    <div className='search-container'>
        <input type="text" onChange={enteredMeal} placeholder='search for food'/>
        {foodItems ? (<div className="items-grid">
                {foodItems}
        </div>) : <div style={{height: '30vh'}}> <h5>No Items found</h5></div>}
        
    </div>
  )
}
