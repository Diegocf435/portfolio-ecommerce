import "./Cart.css";
import { useContext, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import { RxCross2 } from "react-icons/rx";
import { SiShopee } from "react-icons/si";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import PaymentMethodModal from "../PaymentMethodModal/PaymentMethodModal";
const Cart = () => {
  const {
    toggleCart,
    cart,
    removeFromCart,
    totalInCart,
    substractFromCart,
    addQuantityToCart,
    togglePaymentModal,
    isPaymentModalOpen,
  } = useContext(cartContext);
  const handleToggleCart = () => {
    toggleCart();
  };
  const handleDeleteItem = (item) => {
    removeFromCart(item);
  };
  const handleOpenPaymentModal = () => {
    togglePaymentModal();
  };
  return (
    <div className="cart">
      <RxCross2
        className="close__cart__icon"
        onClick={() => handleToggleCart()}
      />
      <div className="cart__container">
        <div className="cart__title__container">
          <h2 className="cart__title">Shopping Cart</h2>
          <SiShopee className="shopping__cart__icon" />
        </div>
        {cart.length === 0 ? (
          <div className="cart__is__empty">Cart is Empty!</div>
        ) : (
          <div className="cart__wrapper">
            <ul className="cart__list">
              {cart.map((item) => (
                <li className="cart__list__item" key={item.id}>
                  <div className="cart__image__container">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart__content__container">
                    <div className="cart__content__top__container">
                      <span className="cart__item__title">{item.title}</span>

                      <div className="cart__prices__container">
                        <div>
                          <span className="cart__item__price">
                            ${item.price}
                          </span>
                        </div>
                        <div>
                          Total:{" "}
                          <span className="total__item__price">
                            ${item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="cart__quantity__container">
                        <div className="cart__quantity__left__container">
                          <div>
                            <AiOutlineMinus
                              className="substract__cart__icon"
                              onClick={() => substractFromCart(item)}
                            />
                          </div>
                          <div>{item.quantity}</div>
                          <div>
                            <BsPlusLg
                              className="add__cart__icon"
                              onClick={() => addQuantityToCart(item)}
                            />
                          </div>
                        </div>
                        <div
                          onClick={() => handleDeleteItem(item)}
                          className="cart__delete__item__button"
                        >
                          Eliminar
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="total__Cart__container">
        <div className="total__cart__price">
          Total: <span> ${totalInCart}</span>
        </div>
        <div>
          <button
            disabled={totalInCart === 0 ? true : false}
            onClick={(e) => handleOpenPaymentModal(e)}
          >
            Pagar
          </button>
        </div>
      </div>
      {isPaymentModalOpen && <PaymentMethodModal />}
    </div>
  );
};

export default Cart;
