import "./NewArrivals.css";
import newArrivalsIcon from "../../../images/arrivals/icons8-new-color-96.png";
import { BiSolidRightArrow } from "react-icons/bi";
import arrival1 from "../../../images/arrivals/arrivals1.png";
import arrival2 from "../../../images/arrivals/arrivals2.png";
import arrival3 from "../../../images/arrivals/arrivals3.png";
import arrival4 from "../../../images/arrivals/arrivals4.png";
import arrival5 from "../../../images/arrivals/arrivals5.png";
import arrival6 from "../../../images/arrivals/arrivals6.png";
import ArrivalItem from "../ArrivalItem/ArrivalItem";
const NewArrivals = () => {
  const newArrivalsArray = [
    {
      id: 1,
      name: "Sunglass",
      price: 150,
      image: arrival1,
    },
    {
      id: 2,
      name: "Make Up",
      price: 250,
      image: arrival2,
    },
    {
      id: 3,
      name: "Smarth Watch",
      price: 350,
      image: arrival3,
    },
    {
      id: 4,
      name: "Lipstick",
      price: 450,
      image: arrival4,
    },
    {
      id: 5,
      name: "Green Plant",
      price: 550,
      image: arrival5,
    },
    {
      id: 6,
      name: "Bonsai tree",
      price: 500,
      image: arrival6,
    },
  ];
  return (
    <div className="newArrivals">
      <div className="newArrivals__container">
        <div className="newArrivals__title__container">
          <div className="newArrivals__title__left__container">
            <img src={newArrivalsIcon} alt="new Arrival icon" />
            <h2>New Arrivals</h2>
          </div>
          <div className="newArrivals__title__right__container">
            <span>view all</span>
            <BiSolidRightArrow className="arrow__icon" />
          </div>
        </div>
        <div className="newArrivals__products__container">
          <div className="newArrivals__products__wrapper">
            {newArrivalsArray.map((item) => (
              <ArrivalItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
