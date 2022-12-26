/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.scss';

const SpecialMenu = () => (
  <div id="menu" className="app__special-menu flex__center section__padding">
    <div className="app__special-menu__title">
      <SubHeading title="Menu that fits your palette" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__special-menu__menu">
      <div className="app__special-menu__menu__wine flex__center">
        <p className="app__special-menu__menu__header">Wine & Beer</p>
        <div className="app__special-menu__menu__items">
          {data.wines.map((wine, index, price, tags) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__special-menu__menu__img">
        <img src={images.menu} alt="menu image" />
      </div>


      <div className="app__special-menu__menu__cocktail flex__center">
        <p className="app__special-menu__menu__header">Cocktails</p>
        <div className="app__special-menu__menu__items">
          {data.cocktails.map((cocktail, index, price, tags) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="custom__button__wrapper">
      <button className="custom__button">View More</button>
    </div>

  </div>
);

export default SpecialMenu;
