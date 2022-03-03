import React from 'react'
import './CartItem.css'
import { cartAction } from '../../store/CartSlice'
import { useDispatch } from 'react-redux'

export default function CartItem(props) {
    const dispatch = useDispatch()

    const addToCart = e => {
        dispatch(cartAction.addToCart(props.item))
    }

    const removeFromCart = e => {
        dispatch(cartAction.removeFromCart(props.item))
    }

  return (
    <div className='cart-item'>
        <div className='imgDiv'>
        <img src={props.image}/>
        </div>
        <div className='itemName'>
         <h5> {props.itemName}</h5>
         RS.{props.price}
         </div>
         
         <div className='buttons'>
             <button onClick={removeFromCart}>-</button>
              {props.amount}
              <button onClick={addToCart}>+</button>
         </div>
    </div>
  )
}
