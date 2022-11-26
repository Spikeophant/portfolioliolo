import React from 'react';


export default function Nav({ handlePageChange }) {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
      <a className='navbar-brand' href='/#about'>Dustin Davisson</a>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <a className='nav-link' href='/#' onClick={() => handlePageChange('About')}>About Me</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/#' onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/#' onClick={() => handlePageChange('Contact')}>Contact</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='https://www.linkedin.com/in/dustin-davisson-32349897/'>Resume</a>
        </li>
      </ul>
    </nav>
  )
}