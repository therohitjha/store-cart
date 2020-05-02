import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Home";
export default function HeaderCart() {
  const {totalItem} = useContext(CartContext);

  return (
    <div>
      <NavLink to="/cart">
        <i className="fas fa-shopping-cart"></i>
      </NavLink>
      {totalItem>0 && (
        <div className="cartLabel">{totalItem}</div>
      )}
    </div>
  );
}
