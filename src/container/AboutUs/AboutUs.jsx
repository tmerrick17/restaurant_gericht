import React from 'react';
import { images } from '../../constants';
import './AboutUs.scss';

const AboutUs = () => (
  <div id="about" className="app__about-us app__bg flex__center section__padding">
    <div className="app__about-us__overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__about-us__content flex__center">
      <div className="app__about-us__content__about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img className="app__about-us__content__about__spoon" src={images.spoon} alt="about_spoon" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum vel suscipit eveniet, aperiam vero ratione asperiores accusantium eligendi ipsa illum eum officiis voluptates doloremque unde.</p>
        <button className="custom__button" type="button">Know More</button>
      </div>

      <div className="app__about-us__content__knife flex__center">
        <img src={images.knife} alt="big knife" />
      </div>

      <div className="app__about-us__content__history">
        <h1 className="headtext__cormorant">About History</h1>
        <img className="app__about-us__content__about__spoon" src={images.spoon} alt="about_spoon" />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt ipsam molestiae explicabo fugit omnis voluptas suscipit vero velit, cumque consequuntur nostrum aut magnam assumenda!</p>
        <button className="custom__button" type="button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
