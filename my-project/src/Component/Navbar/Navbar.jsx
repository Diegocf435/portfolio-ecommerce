import "./Navbar.css";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const NavbarTop = () => {
    return (
      <div className="navbar__top">
        <div className="navbar__top__container">
          <div className="navbar__top__left__container">
            <div className="navbar__top__left__item">
              <BsPhone />
              <span>+88012 3457 7894</span>
            </div>
            <div className="navbar__top__right__item">
              <AiOutlineMail />
              <span>Docortesf435@gmail.com</span>
            </div>
          </div>
          <div className="navbar__top__right__container">
            <span>Theme FAQS</span>
            <span> Need Helps</span>
            <div className="navbar__top__right__left__item">
              <LiaFlagUsaSolid />
              <span>EN</span>
            </div>

            <div className="navbar__top__right__right__item">
              <FaHandHoldingUsd />
              <span>USD</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const NavbarCenter = () => {
    return (
      <div className="navbar__center">
        <div className="navbar__center__container">
          <div className="navbar__center__logo__container">
            <span>YouMercado</span>
          </div>
          <div className="navbar__center__search__container">
            <AiOutlineSearch className="AiOutlineSearch" />

            <input type="text" placeholder="Search and hit enter..." />
            <button>All Category</button>
          </div>
          <div className="navbar__center__right__container">
            <div className="navbar__center__right__item__left">
              <FaUser className="user-icon" />
            </div>
            <div className="navbar__center__right__item__right">
              <FaShoppingCart className="cart-icon" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const NavbarBottom = () => {
    return <div>bottom</div>;
  };
  return (
    <div className="navbar">
      <NavbarTop />
      <NavbarCenter />
      <NavbarBottom />
    </div>
  );
};

export default Navbar;
