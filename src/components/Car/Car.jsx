import React from 'react';
import defaultImage from '../../images/default-car.jpg';

const Car = ({ imageUrl }) => {
  return (
    <li>
      <ing
        src={imageUrl}
        alt="Car"
        onError={e => {
          e.target.src = defaultImage; // Використання локального зображення як дефолтного
        }}
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
    </li>
  );
};

export default Car;
