import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/img/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Empowering Students Through Quality Education</h1>
        <p>
          Our institute is dedicated to providing world-class education with a focus on innovation, practical learning, and career growth. We aim to prepare students to excel in academics, industry, and beyond.
        </p>
        <button className='btn'>
          Explore More <img src={dark_arrow} alt="Arrow Icon" />
        </button>
      </div>
    </div>
  )
}

export default Hero