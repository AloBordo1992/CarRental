import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Car from '../Car/Car';

import { CarList, ListBox } from './CarsList.style';

const CarsList = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://64f0e3a38a8b66ecf77a372c.mockapi.io/cars/car'
        );
        const data = response.data;
        setCarData(data);
      } catch (error) {
        console.error('Помилка запиту:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ListBox>
      <CarList>
        {carData.map(car => (
          <Car key={car.id} car={car} />
        ))}
      </CarList>
    </ListBox>
  );
};

export default CarsList;
