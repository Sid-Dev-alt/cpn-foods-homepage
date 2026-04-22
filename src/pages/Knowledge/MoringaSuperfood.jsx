import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function MoringaSuperfood() {
  useEffect(() => {
    document.title = "Moringa Leaf Powder Benefits | The Miracle Tree Superfood Guide";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover why Moringa is called the Miracle Tree. Learn about the nutritional benefits of Moringa Leaf Powder, including its high protein, iron, and vitamin content.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Moringa Leaf Powder: The Nutritional Powerhouse You Need",
      "description": "An in-depth look at the nutritional profile of Moringa Oleifera and how its leaf powder serves as a potent superfood supplement.",
      "author": {
        "@type": "Organization",
        "name": "CPN Foods"
      },
      "publisher": {
        "@type": "Organization",
        "name": "CPN Foods",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.cpnfoods.com/assets/logo.png"
        }
      },
      "datePublished": "2026-04-18",
      "dateModified": "2026-04-18",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.cpnfoods.com/knowledge-hub/moringa-leaf-powder-superfood-benefits"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('article-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="container py-5 mt-4">
      <Link to="/knowledge-hub" className="text-decoration-none text-danger fw-bold small d-inline-flex align-items-center mb-4 hover-translate-x-n3 transition-all">
        <HiArrowNarrowLeft className="me-2" /> BACK TO KNOWLEDGE HUB
      </Link>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="row mb-5 pb-4 border-bottom"
      >
        <div className="col-lg-10">
          <h6 className="text-success text-uppercase fw-bold ls-2 mb-3">Knowledge Hub • Superfood Guide</h6>
          <h1 className="display-4 fw-bold mb-4">Moringa: The "Miracle Tree" Nutritional Powerhouse</h1>
          <p className="lead text-muted lh-base">
            Used for centuries in Ayurveda, Moringa Oleifera is now gaining global recognition as one of the world's most 
            nutrient-dense plants. Just a few spoons of Moringa Leaf Powder can provide a massive boost to your daily intake 
            of essential vitamins and minerals.
          </p>
        </div>
      </motion.div>

      <div className="row g-5">
        <div className="col-lg-8">
          <section className="mb-5">
            <h2 className="fw-bold mb-4">1. Why It's Called a Superfood</h2>
            <p className="text-muted lh-lg mb-4">
              Moringa leaves are exceptionally rich in vitamins, minerals, and amino acids. Unlike many other supplements, 
              Moringa is a <strong>whole food</strong> source, meaning our bodies can absorb its nutrients more efficiently. 
              Gram for gram, dried moringa leaves contain:
            </p>
            <ul className="text-muted lh-lg mb-4">
              <li><strong>10x the Vitamin A</strong> of carrots</li>
              <li><strong>15x the Potassium</strong> of bananas</li>
              <li><strong>17x the Calcium</strong> of milk</li>
              <li><strong>25x the Iron</strong> of spinach</li>
              <li><strong>9x the Protein</strong> of yogurt</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">2. The Power of Antioxidants</h2>
            <p className="text-muted lh-lg mb-4">
              Moringa is loaded with antioxidants, including quercetin and chlorogenic acid. These compounds help combat 
              oxidative stress in the body, which is linked to chronic diseases and premature ageing. Regular consumption 
              can help lower blood sugar levels and reduce inflammation.
            </p>
          </section>

          <section className="mb-5 py-4 bg-light rounded-4 border px-4">
            <h2 className="fw-bold mb-4 text-center">Top Benefits of Moringa</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-3">
                  <h5 className="fw-bold text-success mb-2">Energy & Vitality</h5>
                  <p className="small text-muted mb-0">High iron and B-vitamin content helps reduce tiredness and fatigue naturally.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-3">
                  <h5 className="fw-bold text-success mb-2">Immune Support</h5>
                  <p className="small text-muted mb-0">Packed with Vitamin A and Iron which are essential for a healthy immune system.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-3">
                  <h5 className="fw-bold text-success mb-2">Skin & Hair Health</h5>
                  <p className="small text-muted mb-0">Natural antioxidants and vitamins promote glowing skin and strong hair.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-3">
                  <h5 className="fw-bold text-success mb-2">Vegan Protein</h5>
                  <p className="small text-muted mb-0">Contains all 9 essential amino acids, making it a rare complete plant protein.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">How to Use Moringa Powder</h2>
            <p className="text-muted lh-lg">
              Moringa leaf powder has a mild, earthy "green" taste similar to spinach or matcha. 
              The best way to consume it is by mixing 1-2 teaspoons into your daily smoothies, dal, soups, or even simple 
              warm water with lemon.
            </p>
          </section>
        </div>

        <div className="col-lg-4">
          <div className="p-4 bg-white border shadow-sm rounded-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-4">Why CPN Moringa?</h4>
            <div className="mb-4">
              <span className="badge bg-success mb-2">SHADE DRIED</span>
              <p className="small text-muted">Retains maximum chlorophyll and nutrients.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-success mb-2">FINE GRIND</span>
              <p className="small text-muted">Dissolves easily in drinks and gravies.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-success mb-2">100% PURE</span>
              <p className="small text-muted">No fillers, additives, or preservatives.</p>
            </div>
            <hr />
            <p className="text-muted small mb-0">
              Source: CPN Foods Wellness Research
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
