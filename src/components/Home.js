import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { API } from "./data/cart";

export const ShoppingContext = createContext();
export const CartContext = createContext();
export const SortingContext = createContext();
export const FilterContext = createContext();
export const SearchContext = createContext();

export default function Home() {
  const [productList, setProductList] = useState();
  const [cartList, setCartList] = useState([]);
  const [state, setState] = useState(1);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sorting, setSorting] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filterData = new Promise((res, rej) => {
      API ? res(setProductList(API)) : rej("please try again");
    });

    filterData
      .then(() => {
        search &&
          setProductList(
            productList.filter((data) =>
              data.name.toLowerCase().includes(search.toLowerCase())
            )
          );
      })
      .catch(console.log());
  }, [search]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const applyFilter = () => {
    const filterData = [...productList];
    if (sorting === "reset") {
      setProductList(filterData.sort((a, b) => a.id - b.id));
    } else if (sorting === "high") {
      setProductList(
        filterData.sort((a, b) => b.price.display - a.price.display)
      );
    } else if (sorting === "low") {
      setProductList(
        filterData.sort((a, b) => a.price.display - b.price.display)
      );
    } else if (sorting === "discount") {
      setProductList(filterData.sort((a, b) => b.discount - a.discount));
    }
  };

  const addToCart = (data) => {
    if (cartList.length <= 0) {
      setPrice(0);
      setDiscount(0);
      setState(1);
      setTotalPrice(0);
    }

    const itemExist = cartList.some((_) => {
      return _.id === data.id;
    });
    if (itemExist) {
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, { data }]);
      setPrice((prevData) => prevData + data.price.display);
      setDiscount(
        (prevDiscount) =>
          prevDiscount + (data.price.display - data.price.actual)
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice + data.price.actual);
    }
  };

  const removeFromCart = (id) => {
    if (cartList.length > 0) {
      const data = cartList.filter((_) => _.data.id !== id);
      const updatePrice = cartList.filter(
        (_) => _.data.id === id && _.data.price.display
      );
      setCartList(data);
      setPrice((prevPrice) => prevPrice - updatePrice[0].data.price.display);
      setDiscount((prevDiscount) => {
        return (
          prevDiscount -
          (updatePrice[0].data.price.display -
            (updatePrice[0].data.price.display -
              (updatePrice[0].data.price.display / 100) *
                updatePrice[0].data.discount))
        );
      });
      setTotalPrice(
        (prevTotalPrice) =>
          prevTotalPrice -
          (updatePrice[0].data.price.display -
            (updatePrice[0].data.price.display / 100) *
              updatePrice[0].data.discount)
      );
    }
  };

  const increaseQty = (oldPrice,newPrice, itemDiscount) => {
    setState((prevState) => prevState + 1);
    setPrice((prevPrice) => prevPrice + oldPrice);
    setDiscount((prevDiscount) => prevDiscount+(oldPrice-newPrice));
    setTotalPrice((prevTotalPrice) => prevTotalPrice + (oldPrice-itemDiscount));
  };

  const decreaseQty = (oldPrice,newPrice, itemDiscount) => {
    if (state <= 0) {
      setTotalPrice(0)
      setState(0);
    } else {
      setState((prevState) => prevState - 1);
      setPrice((prevPrice) => prevPrice - oldPrice);
      setDiscount((prevDiscount) => prevDiscount -(oldPrice-newPrice) );
      setTotalPrice((prevTotalPrice) =>prevTotalPrice - (oldPrice-itemDiscount));
    }
  };

  return (
    <Router>
      <Switch>
        <ShoppingContext.Provider value={[addToCart, productList]}>
          <CartContext.Provider
            value={[
              cartList,
              removeFromCart,
              state,
              increaseQty,
              decreaseQty,
              price,
              discount,
              totalPrice,
            ]}
          >
            <SortingContext.Provider value={[sorting, setSorting, applyFilter]}>
              <SearchContext.Provider value={{ handleOnChange, search }}>
                <Route
                  exact
                  path="/"
                  render={() => <ShoppingCart body={<ProductList />} />}
                />
                <Route
                  exact
                  path="/cart"
                  render={() => <ShoppingCart body={<Cart />} />}
                />
              </SearchContext.Provider>
            </SortingContext.Provider>
          </CartContext.Provider>
        </ShoppingContext.Provider>
      </Switch>
    </Router>
  );
}
