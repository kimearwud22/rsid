import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="/">
            {/* <img src='/rsid_logo.png' width={70} height={80} style={{marginTop: -10, marginRight: 10}}/> */}
            Rumah Sampah
          </a>
        </h1>
        <nav
          id="navbar"
          className={`navbar navbar-expand-lg navbar-light order-last order-lg-0 ${
            isMobileNavOpen ? 'mobile-nav-open' : ''
          }`}
        >
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileNav}
            aria-controls="navbarSupportedContent"
            aria-expanded={isMobileNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${isMobileNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#program">
                  <span>Services</span> <i className="bi bi-chevron-down" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#program">
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#layanan">
                      Program
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#departments">
                  Artikel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#doctors">
                  Pendiri
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <a href="#appointment" className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Pesan</span> Layanan
          </a>
      </div>
    </header>
  );
};

export default Navbar;
