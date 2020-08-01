import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div>
      <NavLink to="/" activeStyle={activeStyle} exact>
        <h3 style={{ textAlign: "center" }}>
          Image Search And Download Image Application
        </h3>
      </NavLink>
    </div>
  );
};

export default Header;
