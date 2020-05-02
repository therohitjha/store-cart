import React, { useContext } from "react";
import { CartContext } from "./Home";
export default function Cart() {
  const {
    cartList,
    removeFromCart,
    increaseQty,
    decreaseQty,
    price,
    discount,
    totalPrice,
    totalItem,
  } = useContext(CartContext);

  return (
    <div className="cartContainer">
      <div className="row">
        <div className="col-lg-8 col-xs-12">
          {cartList.length > 0 &&
            cartList.map((_) => {
              return (
                <div key={_.id}>
                  <div className="card">
                    <div className="card-body" style={{ display: "flex" }}>
                      <div className="cartImgContainer">
                        <img src={_.img_url} className="card-img-top" alt="..." />
                      </div>
                      <div style={{ width: "100%" }}>
                        <h6 className="card-title">{_.name}</h6>
                        <div className="cartBody4Web">
                          <div className="priceContainer">
                            <p className="card-text">₹{_.price.actual}</p>
                            <p className="card-text oldPrice">
                              ₹{_.price.display}
                            </p>
                            <p className="card-text discountColor">
                              {_.discount}% OFF
                            </p>
                          </div>
                          <div>
                            <button
                              className="qty"
                              onClick={() => decreaseQty(_)}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={_.count}
                              className="qtyInput"
                            />
                            <button
                              className="qty"
                              onClick={() => increaseQty(_)}
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="cartRemoveBtn"
                            onClick={() => removeFromCart(_.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col-lg-4 col-xs-12">
          {cartList.length > 0 && (
            <div className="card mb-3">
              <div className="card-header">Product Details</div>
              <div className="card-body">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Price (Item {totalItem}) : </span>
                  <span>₹{price}</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>
                    Discount<span style={{ marginLeft: "49px" }}>:</span>
                  </span>
                  <span>₹{discount}</span>
                </div>
              </div>
              <div
              className="card-footer"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>Total Payable</div>
                <div>₹{totalPrice}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
