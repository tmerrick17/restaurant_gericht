/* eslint-disable react/prop-types */

import React from 'react';
import { images } from '../../constants';
import './SubHeading.scss'

const SubHeading = ({ title }) => (
  <div className="app__sub-header">
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
