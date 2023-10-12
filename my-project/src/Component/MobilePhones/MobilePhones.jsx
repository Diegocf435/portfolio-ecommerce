import "./MobilePhones.css";
import AppleIcon from "../../../images/brands/Apple.svg";
import OppoIcon from "../../../images/brands/Oppo.png";
import RedimiIcon from "../../../images/brands/Redimi.svg";
import SamsungIcon from "../../../images/brands/Samsung.svg";
import SonyIcon from "../../../images/brands/Sony.png";
import VivoIcon from "../../../images/brands/Vivo.svg";

//products
import product1 from "../../../images/shops/shops-1.png";
import product2 from "../../../images/shops/shops-2.png";
import product3 from "../../../images/shops/shops-3.png";
import product4 from "../../../images/shops/shops-4.png";
import product5 from "../../../images/shops/shops-5.png";
import product6 from "../../../images/shops/shops-6.png";
import product7 from "../../../images/shops/shops-7.png";
import product8 from "../../../images/shops/shops-8.png";
import producto9 from "../../../images/shops/shops-9.png";
import product10 from "../../../images/shops/shops-10.png";
import { LuPlus } from "react-icons/lu";
const MobilePhones = () => {
  const MobilePhonesArray = [
    {
      id: 1,
      name: "Apple",
      icon: AppleIcon,
    },
    {
      id: 2,
      name: "Samsung",
      icon: SamsungIcon,
    },
    {
      id: 3,
      name: "Oppo",
      icon: OppoIcon,
    },
    {
      id: 4,
      name: "Vivo",
      icon: VivoIcon,
    },
    {
      id: 5,
      name: "Redimi",
      icon: RedimiIcon,
    },
    {
      id: 6,
      name: "Sony",
      icon: SonyIcon,
    },
  ];
  const productsArray = [
    {
      id: 1,
      name: "Mapple Earphones",
      stars: 5,
      offer: "25% off",
      price: 180.0,
      image: product1,
    },
    {
      id: 2,
      name: "Vivo android one",
      stars: 5,
      offer: "10% off",
      price: 120.0,
      image: product2,
    },
    {
      id: 3,
      name: "Sony light",
      stars: 5,
      offer: "50% off",
      price: 20.0,
      image: product3,
    },
    {
      id: 4,
      name: "Iphone",
      stars: 4,
      offer: "10% off",
      price: 999.0,
      image: product4,
    },
    {
      id: 5,
      name: "Ceat wireless earphone",
      stars: 4,
      offer: "20% off",
      price: 80.0,
      image: product5,
    },
    {
      id: 6,
      name: "Redimi Phone",
      stars: 4,
      offer: "20% off",
      price: 400.0,
      image: product6,
    },
    {
      id: 7,
      name: "Xeats Bluetooth earphones",
      stars: 5,
      offer: "5% off",
      price: 80.0,
      image: product7,
    },
    {
      id: 8,
      name: "AirPod",
      stars: 5,
      offer: "10% off",
      price: 120.0,
      image: product8,
    },
    {
      id: 9,
      name: "Silver Cap",
      stars: 4,
      offer: "2% off",
      price: 5.0,
      image: producto9,
    },
  ];
  return (
    <div className="mobilePhones">
      <div className="mobilePhones__container">
        <div className="mobilePhones__container__left">
          <div className="mobilePhones__container__left__title">
            <div className="mobilePhones__container__left__title__text__one">
              <h3 className="mobilePhones__brand__text">Brands</h3>
              <div className="mobilePhones__divider"></div>
              <div className="mobilePhones__container__left__title__text__two"></div>
              <h3 className="mobilePhones__Shops__text">Shops</h3>
            </div>
          </div>
          {/*brands*/}
          <div className="mobilePhones__brands__wrapper">
            {MobilePhonesArray.map((item) => (
              <div key={item.id}>
                <img src={item.icon} alt={item.name} />
                <span> {item.name} </span>
              </div>
            ))}
          </div>
        </div>
        {/* right container*/}
        <div className="mobilePhones__container__right">
          <div className="mobilePhones__container__right__title">
            <span>Mobile Phones</span>
            <span>View all</span>
          </div>
          <div className="mobilePhones__container__right__images__wrapper">
            {productsArray.map((item) => (
              <div key={item.id} className="mobilePhones__card">
                <div className="mobilePhones__image__container">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="mobilePhones__card__info">
                  <span>{item.name}</span>
                  <span>{item.stars}</span>
                  <div className="mobilePhones__card__info__container">
                    <span>{item.price}</span>
                    <LuPlus />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePhones;
