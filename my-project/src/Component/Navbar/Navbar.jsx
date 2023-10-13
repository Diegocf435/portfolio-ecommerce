import "./Navbar.css";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBoxes } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  const categories = [
    {
      id: 0,
      name: "Categories",
      path: "/",
    },
    {
      id: 1,
      name: "Men",
      path: "/men",
    },
    {
      id: 2,
      name: "Women",
      path: "/women",
    },
    {
      id: 3,
      name: "Kids",
      path: "/kids",
    },
  ];
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Products",
      path: "/products",
    },
    {
      id: 3,
      name: "User Account",
      path: "/user-account",
    },
    {
      id: 4,
      name: "Vendor Account",
      path: "/vendor-account",
    },
    {
      id: 5,
      name: "Track My Order",
      path: "/track-my-order",
    },
    {
      id: 6,
      name: "Contact",
      path: "/contact",
    },
  ];
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
            <Link to="/">
              <span> YouMercado</span>
            </Link>
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
    return (
      <div className="navbar__bottom">
        <div className="navbar__bottom__container">
          <div className="navbar__bottom__left__container">
            <BsBoxes />
            <select name="" id="">
              {categories.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="navbar__bottom__right__container">
            <ul className="navbar__list">
              {navItems.map((item) => (
                <li className="navbar__item" key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
              <li className="navbar__item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
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
