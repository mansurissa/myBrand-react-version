import { Link, NavLink } from 'react-router-dom';

const NavUser = () => {
  return (
    <nav className='nav'>
      <div className='links'>
        <Link to='/'>
          <h1 className='title'>My Brand</h1>
        </Link>
        <ul className='nav-links'>
          <NavLink to='#'>
            <li className='nav-link'>Home</li>
          </NavLink>
          <NavLink to='#about'>
            <li className='nav-link'>About</li>
          </NavLink>
          <NavLink to='#projects'>
            <li className='nav-link'>Projects</li>
          </NavLink>
          <NavLink to='/blog'>
            <li className='nav-link'>Blog</li>
          </NavLink>
          <NavLink to='#contacts'>
            <li className='nav-link'>Contacts</li>
          </NavLink>
          <NavLink to='/login'>
            <li className='nav-link special-link '>
              <span>
                <i className='fa fa-sign-in' aria-hidden='true'></i>
              </span>
              Login
            </li>
          </NavLink>
        </ul>
      </div>
      <div className='burger'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </nav>
  );
};

export default NavUser;
