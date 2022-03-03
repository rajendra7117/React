import React, { useEffect, useState } from "react";
import "./OrderSuccess.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/ModalSlice";
import { Audio } from "react-loader-spinner";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { cartAction } from "../../store/CartSlice";

export default function OrderSuccess() {
  const history = useHistory()

    const dispatch = useDispatch()
    const toggleModal =e=>{
        dispatch(modalActions.toggleModal())
        dispatch(cartAction.clearCart())
        history.push("/");
    }

    const [showSuccessMsg, setShowSuccessMsg] = useState(false)
    useEffect(() => {
       const timeOut = setTimeout(() => {
            setShowSuccessMsg(true)
        }, 3000)
        return () =>{
          clearTimeout(timeOut)
        }
    })
  return (
    <div className="order-success">
        {!showSuccessMsg ? (<div className="spinner">
          <Audio height="100" width="100" color="grey" ariaLabel="loading" />
        </div>) : ( <div className="order"><div> Order Successfull!! </div>
      <button onClick={toggleModal}>Continue</button> </div>)}
     
    </div>
  );
}
