import "./TopCategories.css";
import { PiGridFourBold } from "react-icons/pi";
import { BiSolidRightArrow } from "react-icons/bi";
import shopImage1 from "../../../images/top/category-1.png";
import shopImage2 from "../../../images/top/category-2.png";
import shopImage3 from "../../../images/top/category-3.png";
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
const TopCategories = () => {
  const shopImagesArray = [
    {
      id: 1,
      category: "Headphones",
      orders: "3k orders this week",
      image: shopImage1,
    },
    {
      id: 2,
      category: "Watch",
      orders: "2k orders this week",
      image: shopImage2,
    },
    {
      id: 3,
      category: "Sunglass",
      orders: "8k orders this week",
      image: shopImage3,
    },
  ];
  register();
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  return (
    <div className="topCategories">
      <div className="topCategories__container">
        <div>
          <div className="top__categories__titles__container">
            <div className="top__categories__titles__left__container">
              <PiGridFourBold />
              <h2>Top Categories</h2>
            </div>
            <div className="top__categories__view__all__container">
              <span>View all</span>
              <BiSolidRightArrow className="arrow__icon" />
            </div>
          </div>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="3"
            navigation="true"
            pagination="true"
            speed="500"
            loop="true"
          >
            {shopImagesArray.map((item) => (
              <swiper-slide key={item.id}>
                <div className="topCategories__slide">
                  <div className="topCategories__image__container">
                    <img src={item.image} alt={item.name} />
                    <div className="topCategories__description__container">
                      <span className="topCatgories__category">
                        {item.category}
                      </span>
                      <span className="topCategories__orders">
                        {item.orders}
                      </span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
