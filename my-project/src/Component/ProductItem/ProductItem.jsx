import StarRating from "../StarRating/StarRating";
import "./ProductItem.css";
import { CgMathPlus } from "react-icons/cg";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";

const ProductItem = ({ item }) => {
  const { addToCart, cart } = useContext(cartContext);
  const handleAddToCart = (item) => {
    addToCart(item);
  };
  return (
    <div className="productItemCard">
      <div className="product__item__discount__container ">
        <span className="product__item__discount">25%</span>
      </div>
      <div className="productItem__image__container">
        <img src={item.image} alt="" />
      </div>
      <div className="productItem__content__container">
        <span>
          {item.title.length > 16 ? item.title.slice(0, 13) : item.title}
        </span>
        <StarRating rating={item.rating.rate} />
        <div className="productItem__content__bottom__container">
          <span>{item.price}</span>

          <CgMathPlus onClick={() => handleAddToCart(item)} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
