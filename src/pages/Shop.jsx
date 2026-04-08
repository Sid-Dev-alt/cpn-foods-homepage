import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { BiSearch, BiPlus, BiMinus } from 'react-icons/bi';
import { GrPowerReset } from 'react-icons/gr';
import { PiSunDimFill, PiMoonFill } from 'react-icons/pi';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { user, loginWithGoogle } = useAuth();
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!user) {
      loginWithGoogle();
      return;
    }
    if (!selectedVariant) return;
    addToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card border-0 shadow-sm rounded-3 mb-4 overflow-hidden position-relative"
      style={{ border: '2px solid #e7dfd1' }}
    >
      <div className="row g-0">
        {/* Product Image */}
        <div className="col-md-3 bg-light d-flex align-items-center justify-content-center p-3" style={{ minHeight: '220px' }}>
          <img src={product.imageUrl} alt={product.name} className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} />
        </div>

        {/* Product Details */}
        <div className="col-md-5 p-4 pb-md-4 pb-0">
          <h4 className="fw-bold text-dark mb-1">{product.name}</h4>
          <p className="text-muted small mb-3">{product.subtitle}</p>
          <p className="text-dark opacity-75 small mb-4">{product.description}</p>

          <h6 className="fw-bold mb-3" style={{ fontSize: '0.75rem' }}>IDEAL WITH</h6>
          <div className="d-flex gap-3">
            {product.idealWith?.some(i => i.mealType === 'BREAKFAST') && (
              <div className="d-flex align-items-center small">
                <span className="bg-success bg-opacity-25 rounded-circle p-1 me-2 d-flex"><PiSunDimFill /></span> Breakfast
              </div>
            )}
            {product.idealWith?.some(i => i.mealType === 'LUNCH_DINNER') && (
              <div className="d-flex align-items-center small">
                <span className="bg-info bg-opacity-25 rounded-circle p-1 me-2 d-flex"><PiMoonFill /></span> Lunch/Dinner
              </div>
            )}
          </div>
        </div>

        <div className="col-12 d-md-none px-4">
          <hr className="opacity-10 my-0"/>
        </div>

        {/* Add to Cart Options */}
        <div className="col-md-4 p-4 d-flex flex-column justify-content-center" style={{ borderLeft: '1px solid rgba(0,0,0,0.05)' }}>
          <p className="small mb-1 text-dark" style={{ opacity: 0.8 }}>Options</p>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {product.variants?.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVariant(v)}
                className={`btn btn-sm px-2 py-1 transition-all rounded-2 fw-medium ${selectedVariant?.id === v.id ? 'btn-variant-selected shadow-sm' : 'bg-white border-dashed-red'}`}
                style={{ fontSize: '0.85rem' }}
              >
                ₹{v.price}/{v.weightLabel}
              </button>
            ))}
          </div>

          <div className="d-flex align-items-center gap-4 mb-4">
            <div>
              <p className="small mb-2 fw-bold">Quantity</p>
              <div className="d-flex align-items-center justify-content-between border rounded-pill px-2 py-1" style={{ width: '100px' }}>
                <button className="btn btn-link p-0 text-dark" onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}><BiMinus /></button>
                <span className="fw-bold px-2">{quantity}</span>
                <button className="btn btn-link p-0 text-dark" onClick={() => setQuantity(q => q + 1)}><BiPlus /></button>
              </div>
            </div>
            <div className="flex-grow-1">
              <p className="small mb-2 fw-bold">Total Price</p>
              <p className="m-0 fw-bold text-danger fs-5">₹{selectedVariant ? selectedVariant.price * quantity : 0}</p>
            </div>
          </div>

          <button
            className={`btn ${added ? 'btn-dark' : 'btn-danger'} rounded-pill w-100 fw-bold py-2 shadow-sm transition-all`}
            onClick={handleAddToCart}
            disabled={!selectedVariant}
          >
            {added ? 'ADDED TO CART!' : 'ADD TO CART'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sweet, setSweet] = useState(5);
  const [sour, setSour] = useState(5);
  const [tangy, setTangy] = useState(5);
  const [spice, setSpice] = useState(5);

  const [idealWith, setIdealWith] = useState({
    BREAKFAST: false,
    LUNCH_DINNER: false,
    SNACK: false
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const activeMeals = Object.keys(idealWith).filter(k => idealWith[k]);
      let query = `?maxSweet=${sweet}&maxSour=${sour}&maxTangy=${tangy}&maxSpice=${spice}`;
      if (search) query += `&search=${search}`;
      if (activeMeals.length > 0) {
        query += `&idealWith=${activeMeals.join(',')}`;
      }

      const API_URL = import.meta.env.VITE_API_URL || 'https://cpn-backend-xmcl.onrender.com';
      const res = await axios.get(`${API_URL}/api/v1/masalas${query}`);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. The backend might be waking up or there is a network error.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchProducts();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search, sweet, sour, tangy, spice, idealWith]);

  const handleMealToggle = (meal) => {
    setIdealWith(prev => ({ ...prev, [meal]: !prev[meal] }));
  };

  return (
    <div className="shop-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#fffcf6' }}>

      {/* Brown Header */}
      <div className="w-100 d-flex align-items-center px-4 px-lg-5" style={{ backgroundColor: '#EA0000', height: '140px' }}>
        <h1 className="text-white fw-bold display-4 m-0" style={{ letterSpacing: '-1px' }}>Shop</h1>
      </div>

      <div className="container-fluid px-4 px-lg-5 py-4 py-lg-5">
        
        {/* Mobile Filter Toggle */}
        <div className="d-lg-none mb-4">
          <button 
            className="btn btn-outline-dark w-100 fw-bold d-flex align-items-center justify-content-center gap-2"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <BiSearch /> {isMobileFiltersOpen ? 'HIDE FILTERS' : 'FILTER & SEARCH PRODUCTS'}
          </button>
        </div>

        <div className="row">

          {/* LEFT SIDEBAR */}
          <div className={`col-lg-3 pe-lg-5 mb-5 mb-lg-0 ${isMobileFiltersOpen ? 'd-block' : 'd-none d-lg-block'}`}>
            {/* Search */}
            <div className="mb-5">
              <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>SEARCH WITHIN PRODUCTS</h6>
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control rounded-1 border-light shadow-sm"
                  placeholder="search by name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Filter by Taste */}
            <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="fw-bold text-dark m-0" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>FILTER BY TASTE</h6>
                <GrPowerReset className="text-muted cursor-pointer" role="button" onClick={() => { setSweet(5); setSour(5); setTangy(5); setSpice(5); }} />
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between small text-muted mb-1">
                  <span>SWEET</span><span>{sweet} or less</span>
                </div>
                <input type="range" className="form-range" min="0" max="5" value={sweet} onChange={(e) => setSweet(Number(e.target.value))} style={{ accentColor: '#EA0000' }} />
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between small text-muted mb-1">
                  <span>SOUR</span><span>{sour} or less</span>
                </div>
                <input type="range" className="form-range" min="0" max="5" value={sour} onChange={(e) => setSour(Number(e.target.value))} style={{ accentColor: '#EA0000' }} />
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between small text-muted mb-1">
                  <span>TANGY</span><span>{tangy} or less</span>
                </div>
                <input type="range" className="form-range" min="0" max="5" value={tangy} onChange={(e) => setTangy(Number(e.target.value))} style={{ accentColor: '#EA0000' }} />
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between small text-muted mb-1">
                  <span>SPICE</span><span>{spice} or less</span>
                </div>
                <input type="range" className="form-range" min="0" max="5" value={spice} onChange={(e) => setSpice(Number(e.target.value))} style={{ accentColor: '#EA0000' }} />
              </div>
            </div>

            {/* Ideal With */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="fw-bold text-dark m-0" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>IDEAL WITH</h6>
                <GrPowerReset className="text-muted cursor-pointer" role="button" onClick={() => setIdealWith({ BREAKFAST: false, LUNCH_DINNER: false, SNACK: false })} />
              </div>

              <div className="form-check mb-3 d-flex align-items-center">
                <input className="form-check-input me-3" type="checkbox" checked={idealWith.BREAKFAST} onChange={() => handleMealToggle('BREAKFAST')} style={{ transform: 'scale(1.2)', accentColor: '#EA0000' }} />
                <label className="form-check-label d-flex align-items-center text-dark text-sm">
                  <span className="bg-success bg-opacity-25 rounded-circle p-2 me-2 d-flex"><PiSunDimFill /></span> Breakfast
                </label>
              </div>

              <div className="form-check mb-3 d-flex align-items-center">
                <input className="form-check-input me-3" type="checkbox" checked={idealWith.LUNCH_DINNER} onChange={() => handleMealToggle('LUNCH_DINNER')} style={{ transform: 'scale(1.2)', accentColor: '#EA0000' }} />
                <label className="form-check-label d-flex align-items-center text-dark text-sm">
                  <span className="bg-info bg-opacity-25 rounded-circle p-2 me-2 d-flex"><PiMoonFill /></span> Lunch/Dinner
                </label>
              </div>

            </div>
          </div>

          {/* MAIN LISTINGS */}
          <div className="col-lg-9">
            <p className="text-muted small mb-4">SHOWING {products.length} OF {products.length} RESULTS</p>

            {isLoading && (
              <div className="text-center py-5">
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="text-muted mt-3 small">Loading products...</p>
              </div>
            )}

            {error && !isLoading && (
              <div className="alert alert-danger d-flex align-items-center justify-content-between" role="alert">
                <span>{error}</span>
                <button className="btn btn-danger btn-sm" onClick={() => { setIsLoading(true); fetchProducts(); }}>Retry</button>
              </div>
            )}

            {!isLoading && !error && products.length === 0 && (
              <div className="text-center py-5">
                <p className="text-muted">No products found matching your filters.</p>
                <button className="btn btn-outline-danger mt-2" onClick={() => {
                  setSearch('');
                  setSweet(5); setSour(5); setTangy(5); setSpice(5);
                  setIdealWith({ BREAKFAST: false, LUNCH_DINNER: false, SNACK: false });
                }}>Clear Filters</button>
              </div>
            )}

            {!isLoading && !error && (
              <AnimatePresence mode="popLayout">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
