import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function ChilliAdulteration() {
  useEffect(() => {
    document.title = "Adulteration in Chilli Powder | How to Identify Pure Chilli Powder";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about the common adulterants in chilli powder, health risks, and simple home tests to identify pure, unadulterated chilli powder.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Hidden Danger in Your Kitchen: Adulteration in Chilli Powder",
      "description": "Chilli powder adulteration is a common practice. Learn how to identify harmful substances like synthetic dyes, brick powder, and sawdust.",
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
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.cpnfoods.com/knowledge-hub/adulteration-in-chilli-powder-hidden-danger"
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
      
      {/* Article Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="row mb-5 pb-4 border-bottom"
      >
        <div className="col-lg-10">
          <h6 className="text-danger text-uppercase fw-bold ls-2 mb-3">Knowledge Hub • Food Safety</h6>
          <h1 className="display-4 fw-bold mb-4">The Hidden Danger in Your Kitchen: Adulteration in Chilli Powder</h1>
          <h3 className="h4 text-muted mb-4">That Bright Red Colour May Not Be Pure Chilli</h3>
          <p className="lead text-muted lh-base">
            Chilli powder is one of the most commonly used ingredients in Indian kitchens. From curries and pickles to chutneys and snacks, it adds colour, flavour, and heat to everyday food. But behind that vibrant red appearance, many commercially available chilli powders hide a disturbing truth — adulteration.
          </p>
        </div>
      </motion.div>

      <div className="row g-5">
        <div className="col-lg-8">
          <section className="mb-5">
            <p className="text-muted lh-lg">
              In the race to reduce costs and increase profits, some manufacturers mix harmful substances into chilli powder. These adulterants not only reduce quality but may also pose serious health risks to consumers.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">What is Adulteration in Chilli Powder?</h2>
            <p className="text-muted lh-lg mb-4">
              Adulteration means mixing inferior, artificial, or harmful substances into food products to increase quantity, improve appearance, or cut production costs.
            </p>
            <h4 className="fw-bold mb-4">Common Adulteration Practices:</h4>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="p-5 rounded-5 h-100 shadow-sm border-0" style={{ backgroundColor: '#f8f9fb' }}>
                  <h4 className="fw-bold mb-3" style={{ color: '#dc3545' }}>1. Artificial Colours</h4>
                  <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                    Synthetic dyes like Sudan Red or Rhodamine B are added to make the powder appear brighter. 
                    These are industrial dyes not meant for consumption.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-5 rounded-5 h-100 shadow-sm border-0" style={{ backgroundColor: '#f8f9fb' }}>
                  <h4 className="fw-bold mb-3" style={{ color: '#dc3545' }}>2. Brick Powder & Red Soil</h4>
                  <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                    Finely ground brick powder, red soil, or sand are used to increase weight and volume, 
                    which can harm digestion.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-5 rounded-5 h-100 shadow-sm border-0" style={{ backgroundColor: '#f8f9fb' }}>
                  <h4 className="fw-bold mb-3" style={{ color: '#dc3545' }}>3. Sawdust & Starch</h4>
                  <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                    Cheap fillers such as sawdust, rice bran, or starch are sometimes added to bulk up the product.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-5 rounded-5 h-100 shadow-sm border-0" style={{ backgroundColor: '#f8f9fb' }}>
                  <h4 className="fw-bold mb-3" style={{ color: '#dc3545' }}>4. Oil Extracted Waste</h4>
                  <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                    Leftover waste after extracting chilli oil is dried and powdered. 
                    This residue lacks flavour, aroma, and nutrition.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">Why This Matters: Health Risks</h2>
            <div className="p-4 border-start border-danger border-4 bg-light rounded-end-4">
              <p className="text-muted lh-lg mb-0">
                Adulterated chilli powder may cause:
              </p>
              <ul className="text-muted mt-3 mb-0">
                <li>Acidity</li>
                <li>Stomach irritation</li>
                <li>Allergies</li>
                <li>Digestive issues</li>
                <li>Long-term health complications due to chemical dyes</li>
              </ul>
              <p className="small text-danger fw-bold mt-3 mb-0">Children and elderly family members are particularly vulnerable.</p>
            </div>
          </section>

          <section className="mb-5 p-4 bg-light rounded-4 border-start border-danger border-4">
            <h3 className="fw-bold mb-3">How Can You Test Chilli Powder at Home?</h3>
            <p className="text-muted mb-3">
              You don't always need a laboratory to detect poor-quality chilli powder. There are several simple home tests and observations that can help identify possible adulteration, such as the Water Test or Palm Rub Test.
            </p>
            <Link to="/knowledge-hub/how-to-identify-adulteration-at-home" className="btn btn-danger rounded-pill px-4">
              Learn Simple Home Tests
            </Link>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">Why Quality Sourcing Matters</h2>
            <p className="text-muted lh-lg mb-4">
              The purity of chilli powder starts at the farm level. High-quality brands focus on:
            </p>
            <div className="row g-3">
              {[
                "Carefully selected chillies",
                "Hygienic drying methods",
                "Proper cleaning and grading",
                "Low-temperature grinding",
                "No artificial colours or fillers"
              ].map((item, idx) => (
                <div key={idx} className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white border rounded-3">
                    <div className="flex-shrink-0 bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                      <small>✓</small>
                    </div>
                    <div className="ms-3 text-muted">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">How to Buy Better Chilli Powder</h2>
            <p className="text-muted lh-lg">
              To reduce the risk of adulteration:
            </p>
            <ul className="text-muted lh-lg">
              <li>Buy from trusted brands</li>
              <li>Check for FSSAI certification</li>
              <li>Prefer products with transparent sourcing</li>
              <li>Avoid extremely cheap products</li>
              <li>Look for “No Artificial Colours” labels</li>
              <li>Choose freshly packed products</li>
            </ul>
            <p className="text-muted fw-bold">Sometimes spending a little more on genuine spices can protect your family’s health in the long run.</p>
          </section>

          <section className="mb-5 py-5 border-top border-bottom text-center">
            <h2 className="fw-bold mb-3">Pure Spices Mean Safer Food</h2>
            <p className="text-muted lead mb-0">
              Food should nourish the body, not expose it to harmful chemicals and fillers.
            </p>
          </section>

          <section className="mb-5">
            <p className="text-muted lh-lg">
              By learning a few simple checks, every consumer can become more aware and make safer choices for their family. Pure chilli powder not only delivers better taste and aroma — it also protects health and preserves the authenticity of traditional cooking.
            </p>
            <p className="text-muted lh-lg">
              A little awareness in the kitchen can go a long way toward healthier living.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="p-4 bg-white border shadow-sm rounded-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-4">At a Glance</h4>
            <div className="mb-4">
              <span className="badge bg-danger mb-2">COMMON ADULTERANTS</span>
              <p className="small text-muted">Brick powder, Sudan Red dye, Sawdust.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-warning text-dark mb-2">HEALTH RISKS</span>
              <p className="small text-muted">Stomach ulcers, Liver stress, Toxicity.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-success mb-2">QUICK TEST</span>
              <p className="small text-muted">Water test: Pure powder settles slowly.</p>
            </div>
            <hr />
            <div className="mt-4">
              <h5 className="fw-bold mb-3">CPN Purity Promise</h5>
              <p className="small text-muted">We ensure 100% pure chilli powder directly from farms with no added colours or fillers.</p>
              <Link to="/sourcing-quality" className="btn btn-outline-danger btn-sm w-100 rounded-pill">Learn About Our Quality</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
