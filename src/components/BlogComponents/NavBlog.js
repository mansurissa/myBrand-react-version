/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBlog = () => {
  const [state, setState] = useState('nav-links');

  const openNav = () =>
    state === 'nav-links open'
      ? setState('nav-links')
      : setState('nav-links open');

  return (
    <nav className='nav'>
      <div className='links'>
        <Link to='/blog'>
          <h1 className='title'>Super Blog</h1>
        </Link>
        <ul className={state}>
          <NavLink to='/#projects'>
            <li className='nav-link' onClick={() => openNav()}>
              Portfolio
            </li>
          </NavLink>
          <NavLink to='/#about'>
            <li className='nav-link' onClick={() => openNav()}>
              About
            </li>
          </NavLink>

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

export default NavBlog;
