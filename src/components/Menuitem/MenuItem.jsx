/* eslint-disable no-unused-vars */
import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menu-item">
    <div className="app__menu-item__header">
      <div className="app__menu-item__name">
        <p className="p__cormorant">{title}</p>
      </div>

      <div className="app__menu-item__dash" />

      <div className="app__menu-item__price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menu-item__tags">
      <p className="p__opensans">{tags}</p>
    </div>

  </div>
);

export default MenuItem;
