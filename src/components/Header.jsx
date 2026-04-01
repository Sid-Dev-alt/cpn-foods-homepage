import React from 'react';
import { Link } from 'react-router-dom';
import cpnLogoRed from '../img/cpn_logo_red.png';
import { BiSearch, BiCart, BiUser } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Header() {
  const { user, loginWithGoogle, logout } = useAuth();
  const { cartCount } = useCart();

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
              <li className="mx-3"><Link to="/masalas" className="text-decoration-none text-dark hover-red">MASALAS</Link></li>
              <li className="mx-3"><a href="#" className="text-decoration-none text-dark hover-red">CONTACT</a></li>
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

            <a href="#" className="text-dark hover-red ms-4 fs-3 d-lg-none"><HiOutlineMenuAlt4 /></a>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
