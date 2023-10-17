import { FiStar } from "react-icons/fi";
const StarRating = ({ rating }) => {
  const stars = Array(5).fill(null);
  for (let i = 0; i < rating; i++) {
    stars[i] = <FiStar key={i} size={20} color="gold" />;
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
