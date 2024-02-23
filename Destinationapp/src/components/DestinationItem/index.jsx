// src/components/DestinationItem/index.js
import React from 'react';
import './index.css';

const DestinationItem = ({ destination }) => {
  return (
    <div className="destination-item">
      <img src={destination.imgUrl} alt={destination.name} className="destination-image" />
      <p className="destination-name">{destination.name}</p>
    </div>
  );
};

export default DestinationItem;
