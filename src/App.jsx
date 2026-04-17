import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUs';
import SourcingQuality from './pages/SourcingQuality';
import KnowledgeHub from './pages/KnowledgeHub';
import ChilliDifference from './pages/Knowledge/ChilliDifference';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import ProductsIndex from './pages/Products/ProductsIndex';
import ProductCategory from './pages/Products/ProductCategory';
import ProductSubCategory from './pages/Products/ProductSubCategory';
import GunturChilli from './pages/Products/GunturChilli';
import ChilliPowder from './pages/Products/ChilliPowder';
import MoringaPowder from './pages/Products/MoringaLeafPowder';
import HaldiPowder from './pages/Products/HaldiPowder';
import Jaggery from './pages/Products/Jaggery';
import JaggeryPowder from './pages/Products/JaggeryPowder';
import MoringaKaram from './pages/Products/MoringaKaram';
import CurryPowder from './pages/Products/CurryPowder';
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
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<CartPage />} />
            
            {/* Legacy & Entity Authority */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-legacy" element={<AboutUs />} />
            <Route path="/founders" element={<AboutUs />} />
            
            {/* Purity & Standards */}
            <Route path="/sourcing-quality" element={<SourcingQuality />} />
            <Route path="/purity-promise" element={<SourcingQuality />} />
            <Route path="/lab-reports" element={<SourcingQuality />} />
            
            {/* Knowledge Hub */}
            <Route path="/knowledge" element={<KnowledgeHub />} />
            <Route path="/knowledge-hub" element={<KnowledgeHub />} />
            <Route path="/knowledge-hub/how-to-detect-fake-chilli-powder" element={<ChilliDifference />} />
            <Route path="/knowledge-hub/why-natural-chilli-powder-is-not-bright-red" element={<ChilliDifference />} />
            
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />

            {/* Farmer Network & B2B (Placeholders mapping to Home) */}
            <Route path="/farmer-network" element={<Home />} />
            <Route path="/b2b" element={<Home />} />
            <Route path="/export" element={<Home />} />

            {/* Products Dynamic Routing */}
            <Route path="/products" element={<ProductsIndex />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/products/:category/:subcategory" element={<ProductSubCategory />} />
            
            {/* Flagship Products Matching Sitemap */}
            <Route path="/products/guntur-super-hot-chilli-powder" element={<GunturChilli />} />
            <Route path="/products/turmeric-powder" element={<HaldiPowder />} />
            <Route path="/products/moringa-powder" element={<MoringaPowder />} />
            <Route path="/products/curry-powder" element={<CurryPowder />} />

            {/* Existing Legacy Routes (Keep for compatibility) */}
            <Route path="/guntur-chilli" element={<GunturChilli />} />
            <Route path="/chilli-powder" element={<ChilliPowder />} />
            <Route path="/moringa-leaf-powder" element={<MoringaPowder />} />
            <Route path="/haldi-powder" element={<HaldiPowder />} />
            <Route path="/jaggery" element={<Jaggery />} />
            <Route path="/jaggery-powder" element={<JaggeryPowder />} />
            <Route path="/moringa-karam-poodi" element={<MoringaKaram />} />
            <Route path="/kura-karam" element={<CurryPowder />} />
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
