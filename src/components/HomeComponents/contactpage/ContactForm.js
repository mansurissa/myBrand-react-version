import React, { useState } from 'react';
import firebase from '../../firebase/firebase';
import FeedBack from '../../FeedBack';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('none');
  const [textMsg, setTextMsg] = useState('');

  const ref = firebase.firestore().collection('Queries');

  const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const checkValidation = () => {
    if (!email.match(validEmail)) {
      return 'Email is not  Valid';
    } else if (name.length < 3) {
      return 'Name is not  Valid';
    } else if (message.length < 10) {
      return 'Message must be atleast 10 characters';
    } else {
      setFeedback('none');
      return true;
    }
  };

  const send = () => {
    if (checkValidation() === true) {
      ref
        .doc()
        .set({
          name,
          email,
          message,
          time: Date.now(),
        })
        .then(() => {
          setName('');
          setEmail('');
          setMessage('');
          setFeedback('success');
          setTextMsg('Successfully sent. Thanks');
        })
        .catch(console.log);
    } else {
      setFeedback('error');
      setTextMsg(checkValidation());
    }
    setTimeout(() => {
      setFeedback('none');
    }, 5000);
  };

  return (
    <form className='contact-form white-input' method='POST'>
      <h2 className='title-main title-contact'>CONTACT ME</h2>
      <FeedBack type={feedback} text={textMsg} />
      <input
        type='text'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='name'
        placeholder='Please Enter your Name...'
      />
      <input
        type='text'
        className='email'
        name='email'
        value={email}
        placeholder='Please Enter your Email...'
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        name='message'
        value={message}
        placeholder='Your Valuable Message'
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        className='submit button special-link'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          send();
        }}
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
