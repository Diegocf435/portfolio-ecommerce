import { useEffect, useState } from "react";
import BigDiscounts from "../BigDiscounts/BigDiscounts";
import FlashDeals from "../FlashDeals/FlashDeals";
import Hero from "../Hero/Hero";
import MobilePhones from "../MobilePhones/MobilePhones";
import NewArrivals from "../NewArrivals/NewArrivals";
import TopCategories from "../TopCategories/TopCategories";
import "./Home.css";
const Home = () => {
  const [mostrar, setMostrar] = useState(false);
  useEffect(() => {
    // Simulamos un retraso de medio segundo antes de mostrar el componente
    const timer = setTimeout(() => {
      setMostrar(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`home ${mostrar ? 'visible' : ''}`}>
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
