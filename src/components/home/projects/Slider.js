import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Slider = ({ projects }) => {
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % projects.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(projects.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };
  const style = {
    textAlign: 'center',
  };

  return (
    projects.length > 0 && (
      <>
        <div className='projects-container'>
          <div>{projects[index]}</div>
          <div className='prev' onClick={slideLeft}>
            &#10094;
          </div>
          <div className='next' onClick={slideRight}>
            &#10095;
          </div>
          <div style={style}>
            <span className='dot' onClick={slideRight}></span>
            <span className='dot' onClick={slideRight}></span>
            <span className='dot' onClick={slideRight}></span>
          </div>
          <Link to='https://github.com/mansurissa?tab=repositories'>
            <p className='special-link button more-btn'>More projects</p>
          </Link>
        </div>
      </>
    )
  );
};

export default Slider;
