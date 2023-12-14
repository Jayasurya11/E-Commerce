import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>JS SHOP</p>
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/E-Commerce">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="E-Commerce/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="E-Commerce/womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="E-Commerce/kids">
            Kid
          </Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="E-Commerce/login">
          <button>Login</button>
        </Link>
        <Link to="E-Commerce/cart">
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
