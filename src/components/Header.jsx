import React from 'react';
import cpnLogoRed from '../img/cpn_logo_red.png';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

function Header() {
  return (
    <header className="bg-white" style={{ borderBottom: '1px solid #f0f0f0' }}>
      <div className="container-fluid px-4 px-lg-5">
        <div className="d-flex justify-content-between align-items-center py-4">

          {/* Logo */}
          <div className="logo-container">
            <img src={cpnLogoRed} alt="CPN Foods" style={{ height: '40px' }} />
          </div>

          {/* Navigation Links */}
          <nav className="d-none d-lg-flex ml-auto justify-content-center flex-grow-1">
            <ul className="list-unstyled d-flex m-0 fw-bold" style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>
              <li className="mx-3"><a href="#" className="text-decoration-none text-cpn-red">HOME +</a></li>
              <li className="mx-3"><a href="#" className="text-decoration-none text-dark hover-red">ABOUT +</a></li>
              {/* <li className="mx-3"><a href="#" className="text-decoration-none text-dark hover-red">COURSES +</a></li>
              <li className="mx-3"><a href="#" className="text-decoration-none text-dark hover-red">PAGES +</a></li>
              <li className="mx-3"><a href="#" className="text-decoration-none text-dark hover-red">BLOG +</a></li> */}
              <li className="mx-3"><a href="#" className="text-decoration-none text-dark hover-red">CONTACT +</a></li>
            </ul>
          </nav>

          {/* Icons Context */}
          <div className="d-flex align-items-center">
            <a href="#" className="text-dark hover-red me-4 fs-4"><BiSearch /></a>
            <a href="#" className="text-dark hover-red fs-3"><HiOutlineMenuAlt4 /></a>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
