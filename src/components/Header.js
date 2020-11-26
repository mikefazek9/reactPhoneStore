import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
const Header = ({titleName}) => {
  return (
    <header>
      <h1 className="logo-name">{titleName}</h1>
      <nav className="navbar">
        <a href="./">Products</a>
        <a href="./">About</a>
        <a href="./">Contact Us</a>
      </nav>
      <div className="shop-icon">
        <ShoppingCartIcon style={{cursor:"pointer", color:"white"}}/>
      </div>
    </header>
  );
};

export default Header;
