import { useEffect, useState } from "react";
import "./Products.css";
import image1 from "../../../images/products__carousel/image1.webp";
import image2 from "../../../images/products__carousel/image2.webp";
import image3 from "../../../images/products__carousel/image3.webp";
import image4 from "../../../images/products__carousel/image4.webp";
import image5 from "../../../images/products__carousel/image5.webp";
import image6 from "../../../images/products__carousel/image6.webp";
import { UseFetch, Options } from "../../CustomHooks/UseFetch";

const Products = () => {
  const offerSlides = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
    {
      id: 5,
      image: image5,
    },
    {
      id: 6,
      image: image6,
    },
  ];
  const productsUrl =
    "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list";
  const [products, setProducts] = useState([]);
  const [mostrar, setMostrar] = useState(false);
  async function fetchingProducts() {
    try {
      const result = await UseFetch(productsUrl, Options);
      setProducts(result);
    } catch (e) {
      console.log(e);
    }
  }
  console.log(products);
  useEffect(() => {
    fetchingProducts();
  }, []);
  useEffect(() => {
    // Simulamos un retraso de medio segundo antes de mostrar el componente
    const timer = setTimeout(() => {
      setMostrar(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`products ${mostrar ? 'visible' : ''}`}>
      <div className="products__offers__carousel">
        <swiper-container
          className="mySwiper"
          pagination="true"
          pagination-clickable="true"
          navigation="true"
          space-between="30"
          centered-slides="true"
          autoplay-delay="2500"
          autoplay-disable-on-interaction="false"
        >
          {offerSlides.map((item) => (
            <swiper-slide key={item.id}>
              <div className="products__image__container">
                <img src={item.image} alt="image" />
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>

      <div className="products__container">
        <div className="products__left__container">left</div>
        <div className="products__right__container">
          <div className="products__wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default Products;
