import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  return (
    <>
      <Link className="logo-header" to="/" end>
        tasty<span className="logo-color">treats.</span>
      </Link>
    </>
  );
};

export default Logo;
