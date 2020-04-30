import React, { useState, createContext } from "react";
import HeaderUI from "./HeaderUI";
export const HeaderContext = createContext();

export default function Header() {
  const [toggle, setToggle] = useState(false);



  return (
    <HeaderContext.Provider
      value={[
        toggle,
        () => setToggle(!toggle),
      ]}
    >
      <HeaderUI />
    </HeaderContext.Provider>
  );
}
