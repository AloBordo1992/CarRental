import React, { useState } from 'react';
import {
  Forma,
  Label,
  SelectBrand,
  SelectPrise,
  Mileage,
  MileageL,
  MileageR,
  ButtonForm,
} from './CarForm.styled';

const CarForm = () => {
  const [carBrand, setCarBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleCarBrandChange = event => {
    setCarBrand(event.target.value);
  };

  const handlePriceChange = event => {
    setPrice(event.target.value);
  };

  const handleMileageFromChange = event => {
    setMileageFrom(event.target.value);
  };

  const handleMileageToChange = event => {
    setMileageTo(event.target.value);
  };

  const handleSearch = () => {
    // Додайте код для обробки пошуку
    console.log('Searching...');
    console.log('Car Brand:', carBrand);
    console.log('Price:', price);
    console.log('Mileage From:', mileageFrom);
    console.log('Mileage To:', mileageTo);
  };
  const optionsBrandArray = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];
  const optionsPrise = [];
  const maxPrise = 100;
  for (let i = 10; i <= maxPrise; i += 10) {
    optionsPrise.push(
      <option key={i} value={i}>
        To {i}$
      </option>
    );
  }
  return (
    <Forma autocomplete="on" novalidate>
      <div>
        <Label htmlFor="carBrand">Car Brand</Label>
        <SelectBrand
          id="carBrand"
          value={carBrand}
          onChange={handleCarBrandChange}
        >
          <option value="" disabled selected hidden>
            Enter the text
          </option>
          {optionsBrandArray.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </SelectBrand>
      </div>
      <div>
        <Label htmlFor="price">Price/ 1 hour</Label>
        <SelectPrise
          type="text"
          id="price"
          value={price}
          onChange={handlePriceChange}
        >
          <option value="" disabled selected hidden>
            To $
          </option>
          {optionsPrise}
        </SelectPrise>
      </div>
      <div>
        <Label htmlFor="mileageFrom">Car Mileage / km</Label>
        <Mileage>
          <MileageL
            type="text"
            id="mileageFrom"
            value={mileageFrom}
            placeholder="From"
            onChange={handleMileageFromChange}
          />
          <MileageR
            type="text"
            id="mileageTo"
            value={mileageTo}
            placeholder="To"
            onChange={handleMileageToChange}
          />
        </Mileage>
      </div>
      <ButtonForm type="button" onClick={handleSearch}>
        Search
      </ButtonForm>
    </Forma>
  );
};

export default CarForm;
