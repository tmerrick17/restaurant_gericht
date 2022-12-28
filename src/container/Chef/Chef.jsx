import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.scss';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper__img app__wrapper__img--reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper__info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef__content">
        <div className="app__chef__content__quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia</p>
        </div>
        <div className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ipsum! Nulla recusandae minima natus incidunt odit neque eum ipsam sunt?</div>
      </div>

      <div className="app__chef__sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>

    </div>
  </div>
);

export default Chef;
