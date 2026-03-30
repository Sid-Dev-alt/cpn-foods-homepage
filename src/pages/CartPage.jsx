import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { BiTrash, BiPlus, BiMinus, BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const { user, loginWithGoogle } = useAuth();

  const handleCheckout = () => {
    if (!user) {
      loginWithGoogle();
      return;
    }
    alert("Coming Soon...");
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 mt-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-5"
        >
          <div className="mb-4 display-1 text-muted opacity-25">
            🛒
          </div>
          <h2 className="fw-bold mb-3">Your cart is empty</h2>
          <p className="text-muted mb-5">Looks like you haven't added any masalas yet.</p>
          <Link to="/masalas" className="btn btn-danger rounded-pill px-5 py-3 fw-bold shadow-sm">
            BROWSE MASALAS
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="cart-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#fffcf6' }}>
      {/* Header */}
      <div className="w-100 d-flex align-items-center px-4 px-lg-5" style={{ backgroundColor: '#EA0000', height: '140px' }}>
        <h1 className="text-white fw-bold display-4 m-0" style={{ letterSpacing: '-1px' }}>Your Cart</h1>
      </div>

      <div className="container-fluid px-4 px-lg-5 py-5">
        <div className="row g-5">
          {/* Cart Items */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold m-0 text-dark">{cartItems.length} ITEMS</h5>
              <button className="btn btn-link text-muted small p-0 text-decoration-none" onClick={clearCart}>CLEAR ALL</button>
            </div>

            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={`${item.id}-${item.variant.id}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="card border-0 shadow-sm rounded-3 mb-3 p-3"
                >
                  <div className="d-flex align-items-center gap-4">
                    {/* Item Image */}
                    <div className="bg-light rounded p-2" style={{ width: '100px', height: '100px' }}>
                      <img src={item.imageUrl} alt={item.name} className="w-100 h-100" style={{ objectFit: 'contain' }} />
                    </div>

                    {/* Item Info */}
                    <div className="flex-grow-1">
                      <h6 className="fw-bold m-0">{item.name}</h6>
                      <p className="text-muted small m-0">{item.variant.weightLabel}</p>
                      <p className="text-danger fw-bold m-0 mt-2">₹{item.variant.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="d-flex align-items-center border rounded-pill px-2 py-1" style={{ width: '100px' }}>
                      <button className="btn btn-link btn-sm p-0 text-dark" onClick={() => updateQuantity(item.id, item.variant.id, item.quantity - 1)}><BiMinus /></button>
                      <span className="fw-bold px-2 small">{item.quantity}</span>
                      <button className="btn btn-link btn-sm p-0 text-dark" onClick={() => updateQuantity(item.id, item.variant.id, item.quantity + 1)}><BiPlus /></button>
                    </div>

                    {/* Total & Remove */}
                    <div className="text-end" style={{ width: '120px' }}>
                      <p className="fw-bold m-0">₹{item.variant.price * item.quantity}</p>
                      <button className="btn btn-link text-muted p-0 mt-1" onClick={() => removeFromCart(item.id, item.variant.id)}>
                        <BiTrash />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <Link to="/masalas" className="btn btn-outline-dark rounded-pill mt-4 px-4 py-2 small fw-bold d-inline-flex align-items-center gap-2">
              <BiArrowBack /> CONTINUE SHOPPING
            </Link>
          </div>

          {/* Summary */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-3 p-4 bg-white sticky-top" style={{ top: '120px' }}>
              <h5 className="fw-bold mb-4">Order Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal</span>
                <span className="fw-bold">₹{cartTotal}</span>
              </div>
              {/* <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Shipping</span>
                <span className="text-success small fw-bold">FREE</span>
              </div> */}

              <hr className="my-4 opacity-10" />

              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold fs-5">Total</span>
                <span className="fw-bold fs-5 text-danger">₹{cartTotal}</span>
              </div>

              {!user && (
                <div className="alert alert-warning small border-0 py-2 mb-4">
                  Please log in with Google to proceed with checkout.
                </div>
              )}

              <button
                className="btn btn-danger w-100 rounded-pill py-3 fw-bold shadow-sm"
                onClick={handleCheckout}
              >
                {user ? 'CHECKOUT NOW' : 'LOGIN TO CHECKOUT'}
              </button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
