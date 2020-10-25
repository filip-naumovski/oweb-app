import './style.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
  return(
      <nav>
          <h3 className="header-text">OWEB Test App</h3>
          <ul className='nav-links'>
                <Link to='/'>
                    <li><button className='button'>Home</button></li>
                </Link>
                <Link to='/favorites'>
                    <li><button className='button'>Favorites</button></li>
                </Link>
                <Link to='/gallery'>
                    <li><button className='button'>Gallery</button></li>
                </Link>
          </ul>
      </nav>
  )
}

    export default Nav;
