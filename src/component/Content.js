import React, { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Nav from './Nav';

export default function Content() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About/>;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
  };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <header className="row" id="header-container">
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
        <section className="row" id='content'>
          {renderPage()}
        </section>
    </div>
    );
}