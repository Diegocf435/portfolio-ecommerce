import FlashDeals from "../FlashDeals/FlashDeals";
import Hero from "../Hero/Hero";
import MobilePhones from "../MobilePhones/MobilePhones";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Hero />
      <FlashDeals />
      <MobilePhones />
    </div>
  );
};

export default Home;
