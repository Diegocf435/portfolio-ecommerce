import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalInCart, setTotalInCart] = useState(0);
  const [productAdded, setProductAdded] = useState(false);
  useEffect(() => {
    setTotalInCart(
      cart.reduce((acc, item) => {
        acc += item.price * item.quantity;
        return acc;
      }, 0)
    );
  }, [cart, productAdded]);
  function addToCart(product) {
    const productExists = cart.some((p) => p.id === product.id);

    if (!productExists) {
      product.quantity = 1;
      setCart([...cart, product]);
    } else {
      const productIndex = cart.findIndex((p) => p.id === product.id);
      cart[productIndex].quantity++;
      setCart(cart);
    }
    setProductAdded(!productAdded);
  }
  function removeFromCart(product) {
    setCart((prev) => prev.filter((item) => item.id !== product.id));

    setProductAdded(!productAdded);
  }
  function addQuantityToCart(product) {
    const productExists = cart.some((p) => p.id === product.id);

    if (!productExists) {
      product.quantity = 1;
      setCart([...cart, product]);
    } else {
      const productIndex = cart.findIndex((p) => p.id === product.id);
      cart[productIndex].quantity++;
      setCart(cart);
    }
    setProductAdded(!productAdded);
  }
  function substractFromCart(product) {
    let findProduct = cart.find((item) => item.id === product.id);
    if (findProduct.quantity === 1) {
      setCart((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      const productIndex = cart.findIndex((p) => p.id === product.id);
      cart[productIndex].quantity--;
      setCart(cart);
    }
    setProductAdded(!productAdded);
  }
  function totalProductsInCart() {
    return cart.length;
  }
  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalProductsInCart,
        isCartOpen,
        toggleCart,
        totalInCart,
        setTotalInCart,
        substractFromCart,
        addQuantityToCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartContext;
