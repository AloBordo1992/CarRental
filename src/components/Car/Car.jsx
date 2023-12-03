import React from 'react';
import defaultImage from '../../images/default-car.jpg';
import { Card, Img } from './Car.style.js';

const Car = ({ imageUrl }) => {
  const imageSource = imageUrl || defaultImage;

  return (
    <Card>
      <Img src={imageSource} alt="Car" />
      <div>
        <div>
          <h3>
            marca <span>model</span>
          </h3>
          <p>price</p>
        </div>
        <div>
          <p>city | country | typeClass |</p>
          <p>параметри</p>
        </div>
        <button>Learn more</button>
      </div>
    </Card>
  );
};

export default Car;
