import React, { useState, createContext, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { API } from "./data/cart";

export const CartContext = createContext();

export default function Home() {
  const [productList, setProductList] = useState();
  const [cartList, setCartList] = useState([]);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sorting, setSorting] = useState("");
  const [search, setSearch] = useState("");
  const [totalItem, setTotalItem] = useState(0);
  const [filter, setFilter] = useState({
    min: 7999,
    max: 84999,
    priceFilter: 7999,
  });

  useEffect(() => {
    const filterData = new Promise((res, rej) => {
      API ? res(setProductList(API)) : rej("Something went Wrong...");
    });

    filterData
      .then(() => {
        search &&
          setProductList((prevData) =>
            prevData.filter((data) =>
              data.name.toLowerCase().includes(search.toLowerCase())
            )
          );
      })
      .catch(console.log());

    setProductList((prevData) =>
      prevData.filter((item) => item.price.actual >= filter.priceFilter)
    );
  }, [search, filter.priceFilter]);

  useEffect(() => {
    let total = 0;
    let totalItem = 0;
    let discount = 0;
    let mrp = 0;
    cartList.forEach((item) => {
      total += item.total;
      totalItem += item.count;
      discount += item.mrp - item.total;
      mrp += item.mrp;
    });
    setTotalItem(totalItem);
    setTotalPrice(total);
    setDiscount(discount);
    setPrice(mrp);
  }, [cartList, totalItem, totalPrice, discount]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilter((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleProductSorting = () => {
    const filterData = [...productList];
    if (sorting === "reset") {
      setProductList(filterData.sort((a, b) => a.id - b.id));
    } else if (sorting === "high") {
      setProductList(
        filterData.sort((a, b) => b.price.actual - a.price.actual)
      );
    } else if (sorting === "low") {
      setProductList(
        filterData.sort((a, b) => a.price.actual - b.price.actual)
      );
    } else if (sorting === "discount") {
      setProductList(filterData.sort((a, b) => b.discount - a.discount));
    }
  };

  const addToCart = (data) => {
    let tempCart = [...cartList];
    let tempProduct = [...productList];
    let tempItem = tempCart.find((item) => item.id === data.id);
    if (!tempItem) {
      tempItem = tempProduct.find((item) => item.id === data.id);
      let total = tempItem.price.actual;
      let mrp = tempItem.price.display;
      let cartItem = { ...tempItem, count: 1, total, mrp };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price.actual * tempItem.count;
      tempItem.mrp = tempItem.price.display * tempItem.count;
    }
    setCartList(tempCart);
    setPrice(tempItem.mrp);
  };

  const removeFromCart = (id) => {
    if (cartList.length > 0) {
      let tempCart = cartList.filter((_) => _.id !== id);
      setCartList([...tempCart]);
    }
  };

  const increaseQty = (productData) => {
    if (productData) {
      let tempCart = [...cartList];
      let tempItem = tempCart.find((item) => item.id === productData.id);
      tempItem.count++;
      tempItem.total = tempItem.price.actual * tempItem.count;
      tempItem.mrp = tempItem.price.display * tempItem.count;
      setCartList(tempCart);
    }
  };

  const decreaseQty = (productData) => {
    if (productData.count>0) {
      let tempCart = [...cartList];
      let tempItem = tempCart.find((item) => item.id === productData.id);
      tempItem.count--;
      tempItem.total = tempItem.price.actual * tempItem.count;
      tempItem.mrp = tempItem.price.display * tempItem.count;
      setCartList(tempCart);
    }
  };

  return (
    <HashRouter basename="/">
      <Switch>
        <CartContext.Provider
          value={{
            cartList,
            removeFromCart,
            increaseQty,
            decreaseQty,
            price,
            discount,
            totalPrice,
            totalItem,
            addToCart,
            productList,
            sorting,
            setSorting,
            handleProductSorting,
            handleOnChange,
            search,
            handleFilter,
            filter,
          }}
        >
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
        </CartContext.Provider>
      </Switch>
    </HashRouter>
  );
}
