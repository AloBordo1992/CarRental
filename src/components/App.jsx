import { Routes, Route } from 'react-router-dom';
import Home from './../Pages/Home/Home';
import Favorites from './../Pages/Favorites/Favorites';
import Layout from '././/Layouts/Layout';
import Catalog from './../Pages/Catalog/Catalog';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
