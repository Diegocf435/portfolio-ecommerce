import "./FlashDeals.css";
import flashImage1 from "../../../images/flash/flash-1.png";
import flashImage2 from "../../../images/flash/flash-2.png";
import flashImage3 from "../../../images/flash/flash-3.png";
import flashImage4 from "../../../images/flash/flash-4.png";
import flashImage5 from "../../../images/flash/flash-5.png";
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import StarRating from "../StarRating/StarRating";
import { FiStar } from "react-icons/fi";
const FlashDeals = () => {
  const flashDealsArray = [
    {
      id: 1,
      name: "Shoes",
      discount: "50% off",
      price: "$40",
      stars: 5,
      image: flashImage1,
    },
    {
      id: 2,
      name: "Watch",
      discount: "40% off",
      price: "$500",
      stars: 4,
      image: flashImage2,
    },
    {
      id: 3,
      name: "Smart Mobile Black",
      discount: "30% off",
      price: "$1200",
      stars: 4.5,
      image: flashImage3,
    },
    {
      id: 4,
      name: "Smart Watch Black",
      discount: "60% off",
      price: "$900",
      stars: 4.5,
      image: flashImage4,
    },
    {
      id: 5,
      name: "Black Oklay Glasses",
      discount: "10% off",
      price: "$200",
      stars: 5,
      image: flashImage5,
    },
  ];
  // register Swiper custom elements
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
    <div className="flashDeals">
      <div className="flashDeals__container">
        <div className="flashDeals__title__container">
          <BsFillLightningChargeFill />
          <h2>Flash Deals</h2>
        </div>

        <swiper-container
          ref={swiperElRef}
          slides-per-view="4"
          navigation="true"
          pagination="true"
          speed="500"
          loop="true"
        >
          {flashDealsArray.map((item) => (
            <swiper-slide key={item.id}>
              <div className="flash__slide">
                <div className="flash__image__container">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="flash__description__container">
                  <span className="flash__name">{item.name}</span>
                  <div className="flash__stars__container">
                    {/* stars */}
                    <StarRating rating={item.stars} />
                  </div>
                  <p className="flash__price">{item.price}</p>
                </div>
                <span className="discount">{item.discount}</span>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
};

export default FlashDeals;
