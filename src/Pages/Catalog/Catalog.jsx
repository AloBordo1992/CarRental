import React from 'react';
import CarForm from '../../components/CarForm/CarForm';
import CarsList from '../../components/CarsList/CarsList';
import { Conteainer } from '../../style/container.style';
import { CatalogContainer } from './Catalog.style';

const Catalog = () => {
  return (
    <Conteainer>
      <CatalogContainer>
        <CarForm />
        <CarsList />
      </CatalogContainer>
    </Conteainer>
  );
};

export default Catalog;
