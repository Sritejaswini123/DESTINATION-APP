// src/components/DestinationSearch/index.js
import React, { useState } from 'react';
import DestinationItem from '../DestinationItem';
import './index.css';

const DestinationSearch = ({ destinationsList }) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredDestinations = destinationsList.filter(destination =>
    destination.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="destination-search-container">
      <input
        type="text"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Search destination"
        className="search-input"
      />
      <div className="destinations-list">
        {filteredDestinations.map(destination => (
          <DestinationItem key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationSearch;
