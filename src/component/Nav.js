import React from 'react';


export default function Nav({ currentPage, handlePageChange }) {
  return(
    <nav className="navbar navbar-expand-lg">
      <a className='navbar-brand' href='#about'>Dustin Davisson</a>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <a className='nav-link' href='#about' onClick={() => handlePageChange('About')}>About Me</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#portfolio' onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#contact' onClick={() => handlePageChange('Contact')}>Contact</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='https://www.linkedin.com/in/dustin-davisson-32349897/'>Resume</a>
        </li>
      </ul>
    </nav>
  )
}