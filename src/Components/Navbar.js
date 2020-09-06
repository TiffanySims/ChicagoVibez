import React from "react";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <span>Chicago</span>Vibez
      </div>
      <ul className='navbar__list'>
        <li className='navbar__list--item'>
          <a href='#listings'>Listings</a>
        </li>
        <li className='navbar__list--item'>
          <a href='#' className='btn'>
            Register
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
