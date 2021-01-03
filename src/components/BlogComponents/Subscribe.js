/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import FeedBack from '../FeedBack';
const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState('none');
  const [textMsg, setTextMsg] = useState('');
  const [feedback, setFeedback] = useState('none');

  const style = {
    display,
  };

  const checkValidation = () => {
    if (email.length < 3) {
      return 'Please Enter a Valid Email';
    } else {
      return true;
    }
  };

  const subscribe = async () => {
    if (checkValidation() === true) {
      await fetch(
        'https://issa-portfolio-brand.herokuapp.com/blogs/subscribe',
        {
          method: 'post',
          headers: { 'content-Type': 'application/json' },
          body: JSON.stringify({
            email,
          }),
        },
      );
      setEmail('');
      setFeedback('success');
      setTextMsg('Thank you for Subscribing. Enjoy');
    } else {
      setFeedback('error');
      setTextMsg(checkValidation());
    }
    setTimeout(() => {
      setFeedback('none');
    }, 3000);
  };

  const popUp = () => {
    display === 'none' ? setDisplay('flex') : setDisplay('none');
  };

  return (
    <section class='subscribe-sec'>
      <div class='subscribe_header'>
        <FeedBack type={feedback} text={textMsg} />

        <h3>Subsribe To My Newsletter</h3>
        <p>You will not be spamed ever..</p>
        <button class='button special-link shadow-btn' onClick={() => popUp()}>
          <p id='subscribe_btn' class='special-link'>
            Subscribe
          </p>
        </button>
      </div>
      <div style={style} class='bg-modal ' id='bg-modal'>
        <div class='modal-contents'>
          <div class='close' onClick={() => popUp()}>
            +
          </div>
          <form class='white-input'>
            <input
              type='email'
              placeholder='Please enter your e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button class='button special-link shadow-btn'>
              <p
                class='sub-btn'
                onClick={(e) => {
                  e.preventDefault();
                  subscribe();
                }}
              >
                Subscribe
              </p>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
