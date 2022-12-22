import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar__logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar__links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contacts">Contacts</a></li>
      </ul>
      <div className="app__navbar__login">
        <a className="p__opensans" href="#login">Log In / Register</a>
        {/* <div /> */}
        <a className="p__opensans" href="/">Book a Table</a>
      </div>
      <div className="app__navbar__small-screen">
        <GiHamburgerMenu className="app__navbar__small-screen__hamburger" color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar__small-screen__overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu className="overlay__close" fontSize={27} onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar__small-screen__links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#menu">Menu</a></li>
              <li className="p__opensans"><a href="#awards">Awards</a></li>
              <li className="p__opensans"><a href="#contacts">Contacts</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
