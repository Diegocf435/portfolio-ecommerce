import BigDiscounts from "../BigDiscounts/BigDiscounts";
import FlashDeals from "../FlashDeals/FlashDeals";
import Hero from "../Hero/Hero";
import MobilePhones from "../MobilePhones/MobilePhones";
import NewArrivals from "../NewArrivals/NewArrivals";
import TopCategories from "../TopCategories/TopCategories";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Hero />
      <FlashDeals />
      <TopCategories />
      <NewArrivals />
      <BigDiscounts />
      <MobilePhones />
    </div>
  );
};

export default Home;
