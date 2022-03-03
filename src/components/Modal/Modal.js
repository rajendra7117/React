import React from "react";
import './Modal.css'
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/ModalSlice";
import { successActions } from "../../store/SuccessSlice";
const Backdrop = (props) => {
    const dispatch = useDispatch();
    const toggleModal = e => {
        dispatch(modalActions.toggleModal())
        dispatch(successActions.toggleSuccess())
    }
    return(
        <div className="backdrop" onClick={toggleModal}>

        </div>
    )
}

const ModalOverlay = (props) => {
     return (
         <div className="modal">
             {props.children}
         </div>
     )
}
export default function Modal(props) {
    const Overlay = document.getElementById('overlay')
    
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop />, Overlay)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, Overlay)}
    </Fragment>
  );
}
