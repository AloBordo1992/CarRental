import React from 'react';
import CarForm from '..//..//components/CarForm/CarForm';
import { Conteainer } from '..//..//style/container.style';
import { CatalogContainer } from './Catalog.style';

const Catalog = () => {
  return (
    <Conteainer>
      <CatalogContainer>
        <CarForm />
      </CatalogContainer>
    </Conteainer>
  );
};

export default Catalog;
