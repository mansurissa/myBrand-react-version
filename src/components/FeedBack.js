import React from 'react';

const Sucess = ({ type, text }) => {
  if (type === 'success') {
    return (
      <div className='success'>
        <p class='success'>
          <i class='fa fa-check' aria-hidden='true'></i>
          {text}
        </p>
      </div>
    );
  } else if (type === 'error') {
    return (
      <div>
        <p className='invalidMsg'>
          <i class='fa fa-times-circle' aria-hidden='true'></i> {text}
        </p>
        ;
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Sucess;
