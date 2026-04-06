import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cpnLogoRed from '../img/cpn_logo_red.png';
import { BiSearch, BiCart, BiUser } from 'react-icons/bi';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';
import { BiChevronDown } from 'react-icons/bi';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const { user, loginWithGoogle, logout } = useAuth();
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  return (
    <header className="bg-white sticky-top shadow-sm" style={{ borderBottom: '1px solid #f0f0f0' }}>
      <div className="container-fluid px-4 px-lg-5">
        <div className="d-flex justify-content-between align-items-center py-4">

          {/* Logo */}
          <Link to="/" className="logo-container">
            <img src={cpnLogoRed} alt="CPN Foods" style={{ height: '40px' }} />
          </Link>

          {/* Navigation Links */}
          <nav className="d-none d-lg-flex ml-auto justify-content-center flex-grow-1">
            <ul className="list-unstyled d-flex m-0 fw-bold" style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>
              <li className="mx-3"><Link to="/" className="text-decoration-none text-cpn-red">HOME</Link></li>
              <li 
                className="mx-3 position-relative"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                <Link to="/products" className="text-decoration-none text-dark hover-red d-flex align-items-center gap-1" style={{ paddingBottom: '20px', marginBottom: '-20px' }}>
                  PRODUCTS <BiChevronDown />
                </Link>
                <AnimatePresence>
                  {isProductsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="dropdown-menu show shadow border-0 position-absolute rounded-3 mt-2"
                      style={{ top: '100%', left: '-10px', minWidth: '180px' }}
                    >
                      <Link to="/products/spices/guntur-chilli" className="dropdown-item py-2 fw-medium text-dark hover-red">Guntur Chilli</Link>
                      <Link to="/products/spices/chilli-powder" className="dropdown-item py-2 fw-medium text-dark hover-red">Chilli Powder</Link>
                      <Link to="/products/spices/haldi-powder" className="dropdown-item py-2 fw-medium text-dark hover-red">Haldi Powder</Link>
                      <Link to="/products/natural-sweeteners/jaggery" className="dropdown-item py-2 fw-medium text-dark hover-red">Jaggery</Link>
                      <Link to="/products/superfoods/moringa-powder" className="dropdown-item py-2 fw-medium text-dark hover-red">Moringa Powder</Link>
                      <Link to="/products" className="dropdown-item py-2 fw-medium text-dark hover-red border-top border-light">All Products</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li className="mx-3"><Link to="/masalas" className="text-decoration-none text-dark hover-red">MASALAS</Link></li>
              <li className="mx-3"><Link to="/about-us" className="text-decoration-none text-dark hover-red">ABOUT</Link></li>
              <li className="mx-3"><Link to="/faqs" className="text-decoration-none text-dark hover-red">FAQs</Link></li>
            </ul>
          </nav>

          {/* Icons Context */}
          <div className="d-flex align-items-center">
            <a href="#" className="text-dark hover-red me-4 fs-4"><BiSearch /></a>

            {/* Cart Icon */}
            <Link to="/cart" className="text-dark hover-red me-4 fs-4 position-relative">
              <BiCart />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger" style={{ fontSize: '0.6rem' }}>
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth Section */}
            {user ? (
              <div className="dropdown">
                <button className="btn p-0 border-0 d-flex align-items-center" id="userDropdown" data-bs-toggle="dropdown">
                  <img src={user.photoURL} alt={user.displayName} className="rounded-circle" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2 p-2">
                  <li className="px-3 py-2 border-bottom mb-2">
                    <p className="m-0 fw-bold small">{user.displayName}</p>
                    <p className="m-0 text-muted extra-small" style={{ fontSize: '0.7rem' }}>{user.email}</p>
                  </li>
                  <li><button className="dropdown-item text-danger small py-2 rounded" onClick={logout}>Logout</button></li>
                </ul>
              </div>
            ) : (
              <button
                onClick={loginWithGoogle}
                className="btn btn-outline-dark d-flex align-items-center gap-2 rounded-pill px-3 py-1 fw-bold"
                style={{ fontSize: '0.8rem' }}
              >
                <BiUser /> LOGIN
              </button>
            )}

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="btn btn-link text-dark hover-red ms-4 fs-3 p-0 d-lg-none" style={{ textDecoration: 'none' }}>
              {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt4 />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="d-lg-none bg-white border-top overflow-hidden shadow-sm"
          >
            <div className="container-fluid px-4 py-3">
              <ul className="list-unstyled m-0 fw-bold d-flex flex-column gap-3" style={{ fontSize: '1rem' }}>
                <li><Link to="/" className="text-decoration-none text-cpn-red d-block py-2" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link></li>
                <li>
                  <div className="d-flex flex-column gap-2 mb-1">
                    <span className="text-dark py-2">PRODUCTS</span>
                    <ul className="list-unstyled ms-3 d-flex flex-column gap-2 fw-medium border-start border-2 ps-3 border-danger">
                      <li><Link to="/products/spices/guntur-chilli" className="text-decoration-none text-muted" onClick={() => setIsMobileMenuOpen(false)}>Guntur Chilli</Link></li>
                      <li><Link to="/products/spices/chilli-powder" className="text-decoration-none text-muted" onClick={() => setIsMobileMenuOpen(false)}>Chilli Powder</Link></li>
                      <li><Link to="/products/spices/haldi-powder" className="text-decoration-none text-muted" onClick={() => setIsMobileMenuOpen(false)}>Haldi Powder</Link></li>
                      <li><Link to="/products/natural-sweeteners/jaggery" className="text-decoration-none text-muted" onClick={() => setIsMobileMenuOpen(false)}>Jaggery</Link></li>
                      <li><Link to="/products/superfoods/moringa-powder" className="text-decoration-none text-muted" onClick={() => setIsMobileMenuOpen(false)}>Moringa Powder</Link></li>
                      <li><Link to="/products" className="text-decoration-none text-muted" onClick={() => setIsMobileMenuOpen(false)}>All Products</Link></li>
                    </ul>
                  </div>
                </li>
                <li><Link to="/masalas" className="text-decoration-none text-dark d-block py-2" onClick={() => setIsMobileMenuOpen(false)}>MASALAS</Link></li>
                <li><Link to="/about-us" className="text-decoration-none text-dark d-block py-2" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link></li>
                <li><Link to="/faqs" className="text-decoration-none text-dark d-block py-2" onClick={() => setIsMobileMenuOpen(false)}>FAQs</Link></li>
                <li className="pt-2 border-top">
                  {user ? (
                    <button className="btn btn-outline-danger w-100" onClick={() => { logout(); setIsMobileMenuOpen(false); }}>Logout All Devices</button>
                  ) : (
                    <button onClick={() => { loginWithGoogle(); setIsMobileMenuOpen(false); }} className="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2 py-2">
                      <BiUser /> LOGIN / REGISTER
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
