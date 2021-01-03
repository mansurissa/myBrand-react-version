/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const subscribe = async () => {
    await fetch('https://issa-portfolio-brand.herokuapp.com/blogs/subscribe', {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    });
    setEmail('');
  };

  return (
    <section class='subscribe-sec'>
      <div class='subscribe_header'>
        <h3>Subsribe To My Newsletter</h3>
        <p>You will not be spamed ever..</p>
        <button class='button special-link shadow-btn'>
          <a href='#' id='subscribe_btn' class='special-link'>
            Subscribe
          </a>
        </button>
      </div>
      <div class='bg-modal' id='bg-modal'>
        <div class='modal-contents'>
          <div class='close'>+</div>
          <form class='white-input'>
            <input
              type='email'
              placeholder='Please enter your e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button class='button special-link shadow-btn'>
              <a
                href='#'
                class='sub-btn'
                onClick={(e) => {
                  e.preventDefault();
                  subscribe();
                }}
              >
                Subscribe
              </a>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
