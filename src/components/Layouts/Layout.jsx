import Heder from 'components/Heder/Heder';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Heder />
      <Outlet />
    </>
  );
};

export default Layout;
