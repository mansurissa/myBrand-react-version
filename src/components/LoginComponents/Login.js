/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import FeedBack from '../FeedBack';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/authActions';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(loginAction(email, password)),
  };
};

const Login = ({ isLoggedIn, login }) => {
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('none');
  const [email, setEmail] = useState('');
  const [textMsg, setTextMsg] = useState('');

  const checkValidation = () => {
    if (email.length < 2) {
      return 'Email is not  Valid';
    } else if (password.length < 1) {
      return 'Please enter your password';
    } else {
      return true;
    }
  };

  const signIn = async () => {
    if (checkValidation() === true) {
      await login(email, password);
    } else {
      setFeedback('error');
      setTextMsg(checkValidation());
    }
    setTimeout(() => {
      setFeedback('none');
    }, 3000);
  };

  return (
    <div className='login'>
      <form className='login-page' method='POST'>
        <FeedBack type={feedback} text={textMsg} />

        <h1 className='title-login title-contact'>LOGIN</h1>
        <input
          type='email'
          name='email'
          placeholder='Please enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='Please enter your passwords'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='button special-link'
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          LOGIN
        </button>

        <ul className='social-login socials'>
          <li className='each-social'>
            <a href='#' onClick="oAuth2Login('google')">
              <i className='fa fa-google' aria-hidden='true'></i>
            </a>
          </li>
          <li className='each-social'>
            <a href='#' onClick="oAuth2Login('github')">
              <i className='fa fa-github' aria-hidden='true'></i>
            </a>
          </li>
          <li className='each-social'>
            <a href='#' onClick="oAuth2Login('fb')">
              <i className='fa fa-facebook' aria-hidden='true'></i>
            </a>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
