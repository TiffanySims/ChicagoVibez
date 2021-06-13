import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalProvider";
import Navbar from "./Navbar";

function Header() {
  const { state, change } = useContext(GlobalContext);

  return (
    <>
      <Navbar />

      <div className='hero'>
        <div className='hero__heading'>
          <h1>Home has never been more important</h1>
        </div>
        <div className='hero__search'>
          <select
            name='city'
            text='search'
            value={state.city}
            onChange={change}
            placeholder='Search'
          >
            <option></option>
            <option>Chicago</option>
            <option>Aurora</option>
            <option>Naperville</option>
            <option>Joliet</option>
            <option>Springfield</option>
          </select>
          <a href='#listings'>Search</a>
        </div>
      </div>
    </>
  );
}

export default Header;
