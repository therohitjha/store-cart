import React from "react";
import Header from "./headerComponent/Header";
function ShoppingCart(props) {
  
  return (
    <div className="container-fluid mainContainer">
        <Header/>
       {props.body}
    </div>
  );
}

export default ShoppingCart;
