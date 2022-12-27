import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <div id="home" className="app__header app__wrapper section__padding">
    <div className="app__wrapper__info">
      <SubHeading  title="Chase the new flavour" />
      <h1>The Key to Fine Dining</h1>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate minus aliquid at magni. Sit doloremque iure repellat sed neque explicabo expedita minus inventore quam.</p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper__img">
      <img src={images.welcome} alt="cooked salmon " />
    </div>
  </div>
);

export default Header;
