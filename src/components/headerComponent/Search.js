import React, { Fragment, useContext } from "react";
import { HeaderContext } from "./Header";
import {SearchContext} from '../Home'
export default function Search() {
  const [toggle,setToggle] = useContext(HeaderContext);
const {handleOnChange,search}=useContext(SearchContext)

  return (
    <Fragment>
      {toggle && (
        <input
          type="text"
          placeholder="Search..."
          className="search"
          defaultValue={search}
          onChange={(e)=>handleOnChange(e)}
        />
      )}
      <i className="fas fa-search" onClick={setToggle}></i>
    </Fragment>
  );
}
