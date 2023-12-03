import React from 'react';
import defaultImage from '../../images/default-car.jpg';
import { Card, Img } from './Car.style.js';

const Car = ({ imageUrl }) => {
  const imageSource = imageUrl || defaultImage;
  // -----
  const marca = 'GMC,';
  const model = 'FXT';
  const year = '200';
  const price = '45';
  const city = 'Dnipro';
  const country = 'Ukraine';
  const typeClass = 'class';
  const type = 'Suv';
  const completeSset = 'Yukon Denali';
  const mileage = '9597';
  const other = 'Sound system';
  // -------
  return (
    <Card>
      <Img src={imageSource} alt="Car" />
      <div>
        <div>
          <h3>
            {marca} <span>{model}</span> {year}
          </h3>
          <p>${price}</p>
        </div>
        <div>
          <p>
            {city} | {country} | {typeClass} |{' '}
          </p>
          <p>параметри</p>
        </div>
        <button>Learn more</button>
      </div>
    </Card>
  );
};

export default Car;
