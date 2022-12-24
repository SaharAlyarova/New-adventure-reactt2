import React from "react";
import { NavLink } from "react-router-dom";
// import "./index.scss";
import "./headercs.scss";

const Header = () => {
  return (
    <div id="header" >
          {/* <Link to={"/"}>Supla</Link> */}

      <ul style={{display:"flex", columnGap:"15px", rowGap:"10px",textDecoration:"none",listStyle:"none"}}>
        <li>
          <NavLink to={"/suplacom"}>Supla</NavLink>
        </li>
        <li>
          <NavLink to={"/ordercom"}>Order</NavLink>
        </li>
        <li>
          <NavLink to={"/customercom"}>Customer</NavLink>
        </li>
        <li><NavLink to={"/prodiedcom"}>Prodied</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;
