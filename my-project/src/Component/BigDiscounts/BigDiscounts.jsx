import "./BigDiscounts.css";
import { FiGift } from "react-icons/fi";
import { BiSolidRightArrow } from "react-icons/bi";
import bigDisccount1 from "../../../images/discount/discount-1.png";
import bigDisccount2 from "../../../images/discount/discount-2.png";
import bigDisccount3 from "../../../images/discount/discount-3.png";
import bigDisccount4 from "../../../images/discount/discount-4.png";
import bigDisccount5 from "../../../images/discount/discount-5.png";
import bigDisccount6 from "../../../images/discount/discount-6.png";
import bigDisccount7 from "../../../images/discount/discount-7.png";
import bigDisccount8 from "../../../images/discount/discount-8.png";
import bigDisccount9 from "../../../images/discount/discount-9.png";
const BigDiscounts = () => {
  const bigDisccountArray = [
    {
      id: 1,
      name: "BenuX 2022",
      price: "250",
      image: bigDisccount1,
    },
    {
      id: 2,
      name: "Sony TV 1080p",
      price: "450",
      image: bigDisccount2,
    },
    {
      id: 3,
      name: "Sony PS4",
      price: "600",
      image: bigDisccount3,
    },
    {
      id: 4,
      name: "SetGear 2022",
      price: "100",
      image: bigDisccount4,
    },
    {
      id: 5,
      name: "Tony BGB",
      price: "150",
      image: bigDisccount5,
    },
    {
      id: 6,
      name: "RG products",
      price: "200",
      image: bigDisccount6,
    },
    {
      id: 7,
      name: "Tony BGB 201",
      price: "250",
      image: bigDisccount7,
    },
    {
      id: 8,
      name: "Usb Hub",
      price: "30",
      image: bigDisccount8,
    },
    {
      id: 9,
      name: "camera night vision",
      price: "60",
      image: bigDisccount9,
    },
  ];
  return (
    <div className="bigDiscounts">
      <div className="bigDiscounts__container">
        <div className="bigDiscounts__title__container">
          <div className="bigDiscounts__title__left__container">
            <FiGift />
            <h2>Big Discounts</h2>
          </div>
          <div className="bigDiscounts__title__right__container">
            <span>View all</span>
            <BiSolidRightArrow />
          </div>
        </div>
        <swiper-container
          // ref={swiperElRef}
          slides-per-view="5"
          navigation="true"
          pagination="false"
          speed="500"
          loop="true"
        >
          {bigDisccountArray.map((item) => (
            <swiper-slide key={item.id}>
              <div className="bigDiscounts__slide">
                <div className="bigDiscounts__image__container">
                  <img src={item.image} alt={item.name} />
                  <div className="bigDiscounts__description__container">
                    <span className="bigDiscounts__name">{item.name}</span>
                    <span className="bigDiscounts__price">${item.price}</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
};

export default BigDiscounts;
