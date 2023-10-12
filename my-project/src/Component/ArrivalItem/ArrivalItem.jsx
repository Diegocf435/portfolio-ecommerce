import "./ArrivalItem.css";

const ArrivalItem = ({ item }) => {
  return (
    <div className="arrivalItem">
      <div className="arrivalItem__container">
        <div className="arrivalItem__image__container">
          <img src={item.image} alt={item.name} />
        </div>
      </div>
      <div className="arrivalItem__description">
        <span className="arrivalItem__name">{item.name}</span>
        <span className="arrivalItem__price">${item.price} </span>
      </div>
    </div>
  );
};

export default ArrivalItem;
