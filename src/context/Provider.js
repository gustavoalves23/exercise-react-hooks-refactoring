// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {

  const [cars, changeCar] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = (car, side) => {
    changeCar({
      ...cars,
      [car]: side,
    })
  };

    const context = {
      cars,
      moveCar,
    };

return (
  <CarsContext.Provider value={context}>
    {children}
  </CarsContext.Provider>
);

}

export default Provider;
