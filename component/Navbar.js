import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div>
        {/* Header */}
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <a href="#">
                {/* <img src='/rsid_logo.png' width={70} height={80} style={{marginTop: -10, marginRight: 10}}/> */}
                Rumah Sampah
              </a>
            </h1>
            {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a className="nav-link scrollto active" href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#about">
                    About
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#program">
                    <span>Services</span> <i className="bi bi-chevron-down" />
                  </a>
                  <ul>
                    <li>
                      <a href="#program">Layanan</a>
                    </li>
                    <li>
                      <a href="#layanan">Prograam</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#departments">
                    Artikel
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#doctors">
                    Pendiri
                  </a>
                </li>
                {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
      <ul>
        <li><a href="#">Drop Down 1</a></li>
        <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
          <ul>
            <li><a href="#">Deep Drop Down 1</a></li>
            <li><a href="#">Deep Drop Down 2</a></li>
            <li><a href="#">Deep Drop Down 3</a></li>
            <li><a href="#">Deep Drop Down 4</a></li>
            <li><a href="#">Deep Drop Down 5</a></li>
          </ul> 
        </li>
        <li><a href="#">Drop Down 2</a></li>
        <li><a href="#">Drop Down 3</a></li>
        <li><a href="#">Drop Down 4</a></li>
      </ul>
    </li> */}
                <li>
                  <a className="nav-link scrollto" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            {/* .navbar */}
            <a href="#appointment" className="appointment-btn scrollto">
              <span className="d-none d-md-inline">Pesan</span> Layanan
            </a>
          </div>
        </header>
        {/* End Header */}
      </div>
    </div>
  )
}

export default Navbar
