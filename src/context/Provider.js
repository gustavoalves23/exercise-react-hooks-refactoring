// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {

  const [cars, changeCar] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const [signal, modifySignal] = useState({
    color: 'red',
  })

  const moveCar = (car, side) => {
    changeCar({
      ...cars,
      [car]: side,
    })
  };

  const changeSignal = (signalColor) => {
    modifySignal({
      ...signal,
      color: signalColor,
    })
  }

    const context = {
      cars,
      moveCar,
      signal,
      changeSignal,
    };

return (
  <CarsContext.Provider value={context}>
    {children}
  </CarsContext.Provider>
);

}

export default Provider;