import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function TurmericGuide() {
  useEffect(() => {
    document.title = "Lakadong Turmeric Benefits | High Curcumin vs Regular Haldi";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore the incredible health benefits of Lakadong Turmeric. Learn why its high curcumin content makes it the gold standard of spices.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Golden Spice: Why Lakadong Turmeric is the Gold Standard",
      "description": "A comprehensive guide to Turmeric benefits, focusing on the superiority of Lakadong variety due to its high curcumin content.",
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
        "@id": "https://www.cpnfoods.com/knowledge-hub/the-golden-spice-lakadong-turmeric-benefits"
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
          <h6 className="text-warning text-uppercase fw-bold ls-2 mb-3">Knowledge Hub • Wellness Guide</h6>
          <h1 className="display-4 fw-bold mb-4">The Golden Spice: Why Lakadong Turmeric is the Gold Standard</h1>
          <p className="lead text-muted lh-base">
            Turmeric (Haldi) has been the cornerstone of Indian wellness for millennia. But not all turmeric is the same. 
            The secret lies in a compound called Curcumin, and Lakadong Turmeric from Meghalaya is nature's most potent source.
          </p>
        </div>
      </motion.div>

      <div className="row g-5">
        <div className="col-lg-8">
          <section className="mb-5">
            <h2 className="fw-bold mb-4">1. The Curcumin Difference</h2>
            <p className="text-muted lh-lg mb-4">
              Curcumin is the active ingredient that gives turmeric its powerful anti-inflammatory and antioxidant properties. 
              While regular commercial turmeric often contains only 2-3% curcumin, <strong>Lakadong Turmeric</strong> regularly tests between 
              <strong>7% to 12% curcumin</strong>. This makes it significantly more effective for health purposes.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">2. Why Source Matters</h2>
            <p className="text-muted lh-lg mb-4">
              Lakadong Turmeric is grown in the pristine hills of Jaintia, Meghalaya. The unique soil composition and 
              traditional organic farming methods ensure that the spice retains its maximum potency without chemical interference.
            </p>
            <ul className="text-muted lh-lg mb-4">
              <li><strong>Appearance:</strong> Deep orange-yellow hue (indication of high curcumin).</li>
              <li><strong>Aroma:</strong> Strong, earthy, and distinctly pungent.</li>
              <li><strong>Taste:</strong> Deeply flavorful with a slightly bitter, peppery finish.</li>
            </ul>
          </section>

          <section className="mb-5 py-4 bg-light rounded-4 border px-4">
            <h2 className="fw-bold mb-4 text-center">Lakadong vs. Regular Turmeric</h2>
            <div className="table-responsive">
              <table className="table table-bordered bg-white shadow-sm rounded-3 overflow-hidden">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Feature</th>
                    <th>Lakadong Haldi</th>
                    <th>Regular Haldi</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr>
                    <td className="fw-bold text-dark">Curcumin Content</td>
                    <td className="text-success fw-bold">7% - 12%</td>
                    <td className="text-danger fw-bold">2% - 3%</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Colour</td>
                    <td>Deep Chrome Orange</td>
                    <td>Light Yellow</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Potency</td>
                    <td>Extremely High</td>
                    <td>Moderate</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Cultivation</td>
                    <td>Hilly Rain-fed (Organic)</td>
                    <td>Mass Commercial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">How to Maximise Absorption</h2>
            <p className="text-muted lh-lg">
              To get the most out of your high-curcumin turmeric, always consume it with a pinch of <strong>Black Pepper</strong>. 
              Piperine in black pepper increases curcumin absorption by up to 2000%!
            </p>
          </section>
        </div>

        <div className="col-lg-4">
          <div className="p-4 bg-white border shadow-sm rounded-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-4">Key Benefits</h4>
            <div className="mb-4">
              <span className="badge bg-warning text-dark mb-2">ANTI-INFLAMMATORY</span>
              <p className="small text-muted">Helps manage joint pain and swelling.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-warning text-dark mb-2">IMMUNITY BOOSTER</span>
              <p className="small text-muted">Strengthens the body's natural defences.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-warning text-dark mb-2">ANTIOXIDANT</span>
              <p className="small text-muted">Fights free radicals to support skin health.</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
