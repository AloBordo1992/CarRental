import React from 'react';
import defaultImage from '../../images/default-car.jpg';
import { Card } from './Car.style.js';

const Car = ({ imageUrl }) => {
  return (
    <Card>
      <ing
        src={defaultImage}
        // src={imageUrl}
        alt="Car"
        // onError={e => {
        //   e.target.src = defaultImage;
        // }}
      />
      <div>
        <div>
          <h3>марка автомобіля</h3>
          <p>ціна</p>
        </div>
        <div>
          <p>пармеири</p>
          <p>параметри</p>
        </div>
        <button>Learn more</button>
      </div>
    </Card>
  );
};

export default Car;
