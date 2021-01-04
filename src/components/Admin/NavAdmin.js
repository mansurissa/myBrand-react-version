import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../images/my-pic.png';

const NavAdmin = () => {
  const [state, setState] = useState('nav-links');

  const openNav = () => {
    state === 'nav-links open'
      ? setState('nav-links')
      : setState('nav-links open');
  };
  return (
    <nav class='nav'>
      <div class='links'>
        <h1 class='title'>My Brand</h1>
        <ul class={state}>
          <NavLink to='/dashboard'>
            <li class='nav-link' onClick={() => openNav()}>
              Dashboard
            </li>
          </NavLink>
          <NavLink to='/dashboard/newPost'>
            <li class='nav-link' onClick={() => openNav()}>
              New Post
            </li>
          </NavLink>
          <NavLink to='/dashboard/queries'>
            <li class='nav-link' onClick={() => openNav()}>
              Queries
            </li>
          </NavLink>

          <li class='nav-link profile-wrapper'>
            <img src={Avatar} class='avatar' alt='profile' />

            <div class='dd-menu'>
              <NavLink to='/editProfile' onClick={() => openNav()}>
                <p class='dd-link'>Profile</p>
              </NavLink>
              <NavLink to='#'>
                <p class='dd-link' onClick={() => openNav()}>
                  Logout
                </p>
              </NavLink>
            </div>
          </li>
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

export default NavAdmin;
