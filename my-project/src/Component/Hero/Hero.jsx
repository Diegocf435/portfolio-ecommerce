import "./Hero.css";
import { PiDressLight } from "react-icons/pi";
import { IoLogoElectron } from "react-icons/io5";
import { AiOutlineCar } from "react-icons/ai";
import { RiBearSmileLine } from "react-icons/ri";
import { AiOutlineGift } from "react-icons/ai";
import { BsFileEarmarkMusic } from "react-icons/bs";
import { GiHealthPotion } from "react-icons/gi";
import { LuDog } from "react-icons/lu";
import { LuBaby } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiBooksLight } from "react-icons/pi";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
import slide1 from "../../../images/SlideCard/slide-1.png";
import slide2 from "../../../images/SlideCard/slide-2.png";
import slide3 from "../../../images/SlideCard/slide-3.png";
import slide4 from "../../../images/SlideCard/slide-4.png";

const Hero = () => {
  const heroCategories = [
    {
      id: 1,
      name: "Fashion",
      path: "/Fashion",
      icon: <PiDressLight />,
    },
    {
      id: 2,
      name: "Electronics",
      path: "/Electronics",
      icon: <IoLogoElectron />,
    },
    {
      id: 3,
      name: "Cars",
      path: "/Cars",
      icon: <AiOutlineCar />,
    },
    {
      id: 4,
      name: "Home & Garden",
      path: "/Home-&-Garden",
      icon: <RiBearSmileLine />,
    },
    {
      id: 5,
      name: "Gifts",
      path: "/Gifts",
      icon: <AiOutlineGift />,
    },
    {
      id: 6,
      name: "Music",
      path: "/Music",
      icon: <BsFileEarmarkMusic />,
    },
    {
      id: 7,
      name: "Health & Beauty",
      path: "/Health-&-Beauty",
      icon: <GiHealthPotion />,
    },
    {
      id: 8,
      name: "Pets",
      path: "/Pets",
      icon: <LuDog />,
    },
    {
      id: 9,
      name: "Baby Toys",
      path: "/Baby-Toys",
      icon: <LuBaby />,
    },
    {
      id: 10,
      name: "Groceries",
      path: "/Groceries",
      icon: <IoFastFoodOutline />,
    },
    {
      id: 11,
      name: "Books",
      path: "/Books",
      icon: <PiBooksLight />,
    },
  ];
  const offerSlides = [
    {
      title: "50% Off For Your First Shopping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquy pariatur et",
      button: "Vist Collection",
      image: slide1,
    },
    {
      title: "50% Off For Your First Shopping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      button: "Vist Collection",
      image: slide2,
    },
    {
      title: "50% Off For Your First Shopping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      button: "Vist Collection",
      image: slide3,
    },
    {
      title: "50% Off For Your First Shopping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      button: "Vist Collection",
      image: slide4,
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
    <div className="hero">
      <div className="hero__container">
        <div className="hero__left__container">
          <ul className="hero__list">
            {heroCategories.map((item) => (
              <li key={item.id} className="hero__list__item">
                {item.icon}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__right__container">
          <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="true"
            pagination="true"
            speed="500"
            loop="true"
          >
            {offerSlides.map((item) => (
              <swiper-slide key={item.id}>
                <div className="hero__slide">
                  <div className="hero__description__container">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <span>View Collection</span>
                  </div>
                  <div className="hero__image__container">
                    <img src={item.image} alt={item.name} />
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

export default Hero;
