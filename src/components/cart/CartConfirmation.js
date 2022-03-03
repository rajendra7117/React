import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import "./CartConfirmation.css";
import { modalActions } from "../../store/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { successActions } from "../../store/SuccessSlice";

import OrderSuccess from "../Success/OrderSuccess";

export default function CartConfirmation() {
  const success = useSelector((state) => state.success.showSuccess);
  const [successState, setSuccessState] = useState(false);
  const [hideCartModal, setHideCartModal] = useState(false);
  const dispatch = useDispatch();
  const toggleModal = (e) => {
    dispatch(modalActions.toggleModal());
  };
  const history = useHistory()

  const showSuccess = (e) => {
    dispatch(successActions.toggleSuccess());
    console.log('exc')
    setHideCartModal(true);
    setSuccessState(true)
    
  };

  return (
    <Modal>
      {!hideCartModal && (
        <div className="cart-confirm">
          <h3>Are You Sure</h3>
          <div className="modal-buttons">
            <button onClick={toggleModal}>Cancel</button>
            <button onClick={showSuccess}>Confirm</button>
          </div>
        </div>
      )}
      {successState && <OrderSuccess />}
    </Modal>
  );
}
