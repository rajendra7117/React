import React from 'react'
import './FoodItem.css'
import { cartAction } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';
export default function FoodItem(props) {
  const foodRates = [400, 300, 250 , 200, 190, 450 , 350 ,600, 500, 550, 540 ,390, 290, 450, 480]
  const itemPrice =  foodRates[Math.floor(Math.random()*foodRates.length)]
  const dispatch = useDispatch();
  const addToCart = e => {
    dispatch(cartAction.addToCart({...props.item, amount:1, price: itemPrice}))
  }
  return (
    <div className='item-card'>
        <img src={props.image}/>
        <h5>{props.itemName}</h5>
        <h4>{itemPrice}</h4>
        <button onClick={addToCart}>Add To Cart</button>
    </div>
  )
}
