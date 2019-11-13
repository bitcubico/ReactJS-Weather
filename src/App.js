import React from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
  "Bogotá, CO",
  "Medellín, CO",
  "Cali, CO",
  "Barranquilla, CO",
  "Cartagena, CO",
  "Necoclí, CO",
];

function App() {
  return (
    <div className="App">
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
