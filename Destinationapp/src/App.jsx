// src/App.js
import React from 'react';
import DestinationSearch from './components/DestinationSearch';
import './App.css';

const App = () => {
  const destinationsList = [
    { id: 1, name: ' delhi', imgUrl: 'https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg' },
    { id: 2, name: 'KOREA', imgUrl:     'https://a.cdn-hotels.com/gdcs/production118/d358/db3d06c8-bb89-4c36-bb3c-08530a2af74d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium '},
    { id: 5, name: 'PARIS', imgUrl: ' https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg' },
    { id: 6, name: 'SINGAPORE', imgUrl: 'https://img.veenaworld.com/wp-content/uploads/2022/04/julien-de-salaberry-viwdmfrbXfI-unsplash.jpg' },
    
  ];

  return (
    <div className="app-container">
      <h1>Welcome to the Destination App</h1>
      <DestinationSearch destinationsList={destinationsList} />
    </div>
  );
};

export default App;
