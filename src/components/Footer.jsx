import React from 'react';
import { Link } from 'react-router-dom';
import cpnLogoRed from '../img/cpn_logo_red.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-5 pb-4 mt-auto" style={{ borderTop: '1px solid #f0f0f0' }}>
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Brand & Description */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-inline-block mb-4">
              <img src={cpnLogoRed} alt="CPN Foods" style={{ height: '35px' }} />
            </Link>
            <p className="text-muted small lh-lg pe-lg-5 mb-4">
              
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted hover-red fs-5 transition-all"><FaFacebookF /></a>
              <a href="#" className="text-muted hover-red fs-5 transition-all"><FaTwitter /></a>
              <a href="#" className="text-muted hover-red fs-5 transition-all"><FaInstagram /></a>
              {/* <a href="#" className="text-muted hover-red fs-5 transition-all"><FaLinkedinIn /></a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-uppercase mb-4" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li><Link to="/" className="text-decoration-none text-muted small hover-red">Home</Link></li>
              <li><Link to="/products" className="text-decoration-none text-muted small hover-red">Products</Link></li>
              <li><Link to="/shop" className="text-decoration-none text-muted small hover-red">Shop</Link></li>
              <li><Link to="/about-us" className="text-decoration-none text-muted small hover-red">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-uppercase mb-4" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>Support</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li><Link to="/faqs" className="text-decoration-none text-muted small hover-red">FAQs</Link></li>
              {/* <li><Link to="/contact" className="text-decoration-none text-muted small hover-red">Contact Us</Link></li> */}
              {/* <li><a href="#" className="text-decoration-none text-muted small hover-red">Shipping Policy</a></li> */}
              {/* <li><a href="#" className="text-decoration-none text-muted small hover-red">Privacy Policy</a></li> */}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="col-lg-4 col-md-6">
            {/* <h6 className="fw-bold text-uppercase mb-4" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>Contact Details</h6> */}
            {/* <div className="text-muted small lh-lg">
              <p className="mb-2"><span className="fw-bold text-dark">Address:</span> </p>
              <p className="mb-2"><span className="fw-bold text-dark">Email:</span></p>
              <p className="mb-0"><span className="fw-bold text-dark">Phone:</span> </p>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="pt-4 border-top text-center">
          <p className="text-muted extra-small mb-0" style={{ fontSize: '0.75rem' }}>
            © {currentYear} CPN FOODS. All rights reserved. | Purity Since 1943.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
