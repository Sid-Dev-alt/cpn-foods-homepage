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
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/sourcing-quality" element={<SourcingQuality />} />
            <Route path="/knowledge" element={<KnowledgeHub />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />

            {/* Products Dynamic Routing */}
            <Route path="/products" element={<ProductsIndex />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/products/:category/:subcategory" element={<ProductSubCategory />} />
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
