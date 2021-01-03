/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavUser = () => {
  const [state, setState] = useState('nav-links');

  const openNav = () => {
    state === 'nav-links open'
      ? setState('nav-links')
      : setState('nav-links open');
  };

  return (
    <nav className='nav'>
      <div className='links'>
        <Link to='/'>
          <h1 className='title'>My Brand</h1>
        </Link>
        <ul className={state}>
          <a href='#'>
            <li className='nav-link' onClick={() => openNav()}>
              Home
            </li>
          </a>
          <a href='#about'>
            <li className='nav-link' onClick={() => openNav()}>
              About
            </li>
          </a>
          <a href='#projects'>
            <li className='nav-link' onClick={() => openNav()}>
              Projects
            </li>
          </a>
          <NavLink to='/blog'>
            <li className='nav-link' onClick={() => openNav()}>
              Blog
            </li>
          </NavLink>
          <a href='#contacts'>
            <li className='nav-link' onClick={() => openNav()}>
              Contacts
            </li>
          </a>
          <NavLink to='/login'>
            <li className='nav-link special-link ' onClick={() => openNav()}>
              <span>
                <i className='fa fa-sign-in' aria-hidden='true'></i>
              </span>
              Login
            </li>
          </NavLink>
        </ul>
      </div>
      <div className='burger' onClick={() => openNav()}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </nav>
  );
};

export default NavUser;
