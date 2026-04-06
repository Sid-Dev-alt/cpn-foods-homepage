import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MasalasPage from './pages/MasalasPage';
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUs';
import SourcingQuality from './pages/SourcingQuality';
import KnowledgeHub from './pages/KnowledgeHub';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import ProductsIndex from './pages/Products/ProductsIndex';
import ProductCategory from './pages/Products/ProductCategory';
import ProductSubCategory from './pages/Products/ProductSubCategory';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/masalas" element={<MasalasPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/sourcing-quality" element={<SourcingQuality />} />
            <Route path="/knowledge" element={<KnowledgeHub />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Products Dynamic Routing */}
            <Route path="/products" element={<ProductsIndex />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/products/:category/:subcategory" element={<ProductSubCategory />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
