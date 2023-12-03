import React from 'react';
import defaultImage from '../../images/default-car.jpg';
import {
  Card,
  Img,
  Title,
  TitleBox,
  InfoBox,
  ListInfo,
  Li,
} from './Car.style.js';

const Car = ({ car }) => {
  const imageSource = car.img || defaultImage;

  const addressValue = car.address;

  const splitAddress = addressValue.split(', ');
  const city = splitAddress[splitAddress.length - 2];
  const country = splitAddress[splitAddress.length - 1];

  return (
    <Card>
      <Img src={imageSource} alt="Car" />
      <div>
        <TitleBox>
          <Title>
            {car.make}
            <span> {car.model}</span>, {car.year}
          </Title>
          <p>{car.rentalPrice}</p>
        </TitleBox>
        <InfoBox>
          <ListInfo>
            <Li>{city}</Li>
            <Li>{country}</Li>
            <Li>{car.rentalCompany}</Li>
          </ListInfo>
          <ListInfo>
            <Li>{car.type}</Li>
            <Li>{car.model}</Li>
            <Li>{car.mileage}</Li>
          </ListInfo>
        </InfoBox>
        <button>Learn more</button>
      </div>
    </Card>
  );
};

export default Car;
