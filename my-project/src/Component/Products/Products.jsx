import { useEffect, useState } from "react";
import "./Products.css";
import image1 from "../../../images/products__carousel/image1.webp";
import image2 from "../../../images/products__carousel/image2.webp";
import image3 from "../../../images/products__carousel/image3.webp";
import image4 from "../../../images/products__carousel/image4.webp";
import image5 from "../../../images/products__carousel/image5.webp";
import image6 from "../../../images/products__carousel/image6.webp";
import { UseFetch, Options } from "../../CustomHooks/UseFetch";
import ProductItem from "../ProductItem/ProductItem";

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
  const productsUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterPrice, setFilterPrice] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const categoryList = [
    {
      id: 1,
      category: "men's clothing",
    },
    {
      id: 2,
      category: "jewelery",
    },
    {
      id: 3,
      category: "electronics",
    },
    {
      id: 4,
      category: "women's clothing",
    },
  ];
  useEffect(() => {
    filteringProducts();
  }, [filters]);
  const filteringProducts = () => {
    const filteredProducts =
      filters.length === 0
        ? products
        : products.filter((item) => filters.includes(item.category));
    setFilteredProducts(filteredProducts);
  };
  async function fetchingProducts() {
    try {
      setIsLoading(true);
      const result = await UseFetch(productsUrl, Options);
      setProducts(result);
      setFilteredProducts(result);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
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
  const handleFilters = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setFilters([...filters, value]);
    } else {
      setFilters((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleFilterPrice = (e) => {
    const { value } = e.target;
    setFilterPrice(value);
    const filteredPriceProducts = products.filter(
      (item) => item.price > filterPrice
    );
    setFilteredProducts(filteredPriceProducts);
  };
  return (
    <div className={`products ${mostrar ? "visible" : ""}`}>
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
        <div className="products__left__container">
          <div className="products__filter__container">
            {/* TO DO FIX FILTER*/}
            <div className="products__filter__title__container">
              <h2 className="filters__title">Filters</h2>
              <div className="divider"></div>
            </div>
            <div className="products__filter__categories">
              <h3 className="filter__category__title">Filter by category</h3>
              <ul className="category__filter__list">
                <div className="category__filter__container">
                  <input type="checkbox" value="All" checked />
                  <label htmlFor="">All</label>
                </div>

                {categoryList.map((item) => (
                  <>
                    <div
                      className="category__filter__container"
                      key={item.id}
                      onClick={(e) => handleFilters(e)}
                    >
                      <input type="checkbox" value={item.category} />
                      <label htmlFor="">{item.category}</label>
                    </div>
                  </>
                ))}
              </ul>
              <h3>Filter by price</h3>
              <input
                type="range"
                min="0"
                max="600"
                value={filterPrice}
                onChange={(e) => handleFilterPrice(e)}
              />
            </div>
          </div>
        </div>
        <div className="products__right__container">
          <div className="products__title__container">
            <h2>All our products</h2>
          </div>
          <div className="products__wrapper">
            <ul className="products__list">
              {isLoading ? (
                <p>Loading products...</p>
              ) : (
                <>
                  {filteredProducts.map((item) => (
                    <ProductItem key={item.id} item={item} />
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
