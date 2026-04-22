import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function JaggeryBenefits() {
  useEffect(() => {
    document.title = "Jaggery vs Sugar: Health Benefits & Nutritional Comparison";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Is jaggery better than sugar? Discover the health benefits of chemical-free jaggery, its mineral content, and why it's a superior sweetener for your family.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Jaggery vs Sugar: Making the Healthier Choice for Your Family",
      "description": "A detailed analysis comparing Jaggery and refined White Sugar, highlighting why natural jaggery is the healthier alternative.",
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
        "@id": "https://www.cpnfoods.com/knowledge-hub/jaggery-vs-sugar-health-benefits"
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
          <h6 className="text-success text-uppercase fw-bold ls-2 mb-3">Knowledge Hub • Nutrition Guide</h6>
          <h1 className="display-4 fw-bold mb-4">Jaggery vs Sugar: Making the Healthier Choice</h1>
          <p className="lead text-muted lh-base">
            Modern diets are often overloaded with refined white sugar, leading to numerous health concerns. 
            Traditional Indian Jaggery (Gur), specifically the chemical-free variety, offers a mineral-rich alternative 
            that does more than just sweeten your food.
          </p>
        </div>
      </motion.div>

      <div className="row g-5">
        <div className="col-lg-8">
          <section className="mb-5">
            <h2 className="fw-bold mb-4">1. Refined vs. Whole Sweeteners</h2>
            <p className="text-muted lh-lg mb-4">
              White sugar is essentially "empty calories." During processing, sugarcane juice is boiled and treated with 
              chemicals like sulphur dioxide to remove impurities and colour, stripping away all vitamins and minerals. 
              <strong>Jaggery</strong>, on the other hand, is produced by simply boiling sugarcane juice without such chemical treatments, 
              preserving its natural nutritional profile.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">2. The Mineral Factor</h2>
            <p className="text-muted lh-lg mb-4">
              Unlike white sugar, jaggery is a powerhouse of micronutrients. Because it is unrefined, it retains the minerals 
              originally present in sugarcane juice.
            </p>
            <ul className="text-muted lh-lg mb-4">
              <li><strong>Iron:</strong> Essential for preventing anaemia and improving haemoglobin levels.</li>
              <li><strong>Magnesium:</strong> Supports nervous system health and muscle relaxation.</li>
              <li><strong>Potassium:</strong> Helps maintain fluid balance and regulate blood pressure.</li>
              <li><strong>Antioxidants:</strong> Help cleanse the liver and flush out toxins from the body.</li>
            </ul>
          </section>

          <section className="mb-5 py-4 bg-light rounded-4 border px-4">
            <h2 className="fw-bold mb-4 text-center">Sugar vs. Jaggery Comparison</h2>
            <div className="table-responsive">
              <table className="table table-bordered bg-white shadow-sm rounded-3 overflow-hidden">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Feature</th>
                    <th>Refined Sugar</th>
                    <th>Natural Jaggery</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr>
                    <td className="fw-bold text-dark">Processing</td>
                    <td>Highly Chemically Refined</td>
                    <td className="text-success fw-bold">Minimal / Natural</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Mineral Content</td>
                    <td>None (Zero)</td>
                    <td className="text-success fw-bold">Rich (Iron, Mg, K)</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Digestion</td>
                    <td>Sudden Glucose Spike</td>
                    <td>Slower Absorption</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Health Impact</td>
                    <td>Acid-Forming</td>
                    <td>Alkalising Post-Digestion</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">A Natural Detoxifier</h2>
            <p className="text-muted lh-lg">
              In Ayurveda, jaggery is considered a natural cleanser. Consuming a small piece of jaggery after meals is a 
              common tradition in India because it acts as a digestive aid and helps in clearing the respiratory tract.
            </p>
          </section>
        </div>

        <div className="col-lg-4">
          <div className="p-4 bg-white border shadow-sm rounded-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-4">Why Choose Ours?</h4>
            <div className="mb-4">
              <span className="badge bg-success mb-2">CHEMICAL FREE</span>
              <p className="small text-muted">No sulphur or bleaching agents used.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-success mb-2">IRON RICH</span>
              <p className="small text-muted">Naturally high in vegetable iron.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-success mb-2">PURE CANE</span>
              <p className="small text-muted">100% natural sugarcane source.</p>
            </div>
            <hr />
            <p className="text-muted small mb-0">
              Source: CPN Foods Nutrition Cell
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
