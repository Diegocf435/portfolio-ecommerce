import "./PaymentMethodModal.css";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import { UseFetch, PostOptions } from "../../CustomHooks/UseFetch";
import { useNavigate } from "react-router-dom";
const PaymentMethodModal = () => {
  const { togglePaymentModal, cart } = useContext(cartContext);
  const navigate = useNavigate();
  const handleModalClose = () => {
    togglePaymentModal();
  };
  async function fetchingStripePaymentMethod() {
    try {
      const result = await UseFetch(
        "http://localhost:3000/api/v1/payment/create-checkout-session",
        PostOptions(cart)
      );
      window.location.href = result.url;
    } catch (e) {
      console.log(e);
    }
  }
  function handleStripePayment() {
    fetchingStripePaymentMethod();
  }
  return (
    <div className="paymentMethodModal">
      <RxCross1
        className="paymentMethod__close__icon"
        onClick={(e) => handleModalClose(e)}
      />
      <div className="paymentMethodModal__container">
        <h2 className="paymentMethod__title">Escoja el metodo de pago</h2>
        <div className="divider"></div>
        <div className="buttons__container">
          <button
            className="stripe__button"
            onClick={() => handleStripePayment()}
          >
            Stripe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodModal;
