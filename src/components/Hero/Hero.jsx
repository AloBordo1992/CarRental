import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="container">
      <div className="hero-wrapper">
        <h1 className="hero-title">
          Learn to Cook <span> Tasty Treats'</span> Customizable Masterclass
        </h1>
        <p className="description">
          TastyTreats - Customize Your Meal with Ingredient Options and
          Step-by-Step Video Guides.
        </p>
        <button className="btn btn-hero">Order now</button>
      </div>
    </section>
  );
};

export default Hero;
