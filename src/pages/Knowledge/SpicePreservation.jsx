import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function SpicePreservation() {
  useEffect(() => {
    document.title = "How to Store Spices | Keep Spices Fresh & Potent for Longer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert tips on how to store spices to preserve their aroma, flavor, and medicinal properties. Learn the 4 enemies of spice freshness and best practices for storage.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Store Spices: Keeping the Aroma and Flavour Alive",
      "description": "A guide to maintaining the quality and shelf-life of Indian spices by understanding proper storage techniques.",
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
        "@id": "https://www.cpnfoods.com/knowledge-hub/how-to-store-spices-for-freshness"
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
          <h6 className="text-danger text-uppercase fw-bold ls-2 mb-3">Knowledge Hub • Storage Guide</h6>
          <h1 className="display-4 fw-bold mb-4">How to Store Spices: Keeping the Aroma Alive</h1>
          <p className="lead text-muted lh-base">
            You've invested in the purest spices, but how you store them determines how long they remain effective. 
            Improper storage can lead to the loss of volatile oils, making your spices lose their flavour, colour, and 
            medicinal benefits.
          </p>
        </div>
      </motion.div>

      <div className="row g-5">
        <div className="col-lg-8">
          <section className="mb-5">
            <h2 className="fw-bold mb-4">The Four Enemies of Spice Freshness</h2>
            <p className="text-muted lh-lg mb-4">
              To keep your spices at their peak, you must protect them from these four environmental factors:
            </p>
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="p-3 border rounded-3 bg-light">
                  <h5 className="fw-bold mb-2">1. Heat</h5>
                  <p className="small text-muted mb-0">Never store spices near the stove or oven. Heat causes the oils to evaporate quickly.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded-3 bg-light">
                  <h5 className="fw-bold mb-2">2. Light</h5>
                  <p className="small text-muted mb-0">Sunlight bleaches the colour and degrades the potency of spices like Turmeric and Chilli.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded-3 bg-light">
                  <h5 className="fw-bold mb-2">3. Moisture</h5>
                  <p className="small text-muted mb-0">Humidity causes clumping and, more dangerously, the growth of mould or bacteria.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded-3 bg-light">
                  <h5 className="fw-bold mb-2">4. Air</h5>
                  <p className="small text-muted mb-0">Oxygen leads to oxidation, which takes away the sharp aroma and taste of ground masalas.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">Best Practices for Storage</h2>
            <p className="text-muted lh-lg mb-4">
              Follow these expert tips to ensure your spices remain fresh for up to a year:
            </p>
            <ul className="text-muted lh-lg mb-4">
              <li><strong>Use Glass Containers:</strong> Glass is non-porous and won't absorb the scents of the spices. Ensure they have an airtight seal.</li>
              <li><strong>Dark & Cool:</strong> A dark pantry or a dedicated spice drawer away from heat sources is ideal.</li>
              <li><strong>Avoid the Spoon Habit:</strong> Never dip a wet or used spoon into your spice jar. This introduces moisture and bacteria.</li>
              <li><strong>Buy Smaller Quantities:</strong> Ground spices lose flavour faster than whole spices. Buy what you can use within 6-12 months.</li>
            </ul>
          </section>

          <section className="mb-5 py-4 bg-light rounded-4 border px-4 text-center">
            <h2 className="fw-bold mb-4">Is My Spice Still Fresh?</h2>
            <p className="text-muted mb-4">Use the <strong>"Crush and Sniff"</strong> test.</p>
            <p className="lh-lg">
              Take a small amount of the spice in your palm and rub it with your thumb. 
              If the aroma is weak or non-existent, the volatile oils have evaporated. 
              While the spice may still be safe to eat, it won't provide the flavour or health benefits you're looking for.
            </p>
          </section>
        </div>

        <div className="col-lg-4">
          <div className="p-4 bg-white border shadow-sm rounded-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-4">Pro Tips</h4>
            <div className="mb-4">
              <span className="badge bg-danger mb-2">WHOLE SPICES</span>
              <p className="small text-muted">Stay fresh for 2-3 years if stored properly.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-danger mb-2">GROUND SPICES</span>
              <p className="small text-muted">Best used within 6-12 months for peak flavor.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-danger mb-2">COLOUR CHECK</span>
              <p className="small text-muted">Dull colour often means the oils have dried up.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
