import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ChilliDifference() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Difference Between Guntur, Kashmiri and Byadgi Chilli",
      "description": "A detailed comparison of Guntur, Kashmiri and Byadgi chillies based on heat level, colour, taste and culinary use.",
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
      "datePublished": "2026-01-01",
      "dateModified": "2026-01-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.cpnfoods.com/knowledge/difference-between-guntur-kashmiri-byadgi-chilli/"
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
      {/* Article Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="row mb-5 pb-4 border-bottom"
      >
        <div className="col-lg-10">
          <h6 className="text-danger text-uppercase fw-bold ls-2 mb-3">Knowledge Hub • Spice Guide</h6>
          <h1 className="display-4 fw-bold mb-4">The Great Chilli Debate: Guntur vs Kashmiri vs Byadgi</h1>
          <p className="lead text-muted lh-base">
            Indian cuisine is defined by its vibrant chillies. But not all red chillies are created equal. 
            Understanding the difference between the heat of Guntur, the colour of Kashmiri, and the aroma of Byadgi 
            can transform your cooking from ordinary to authentic.
          </p>
        </div>
      </motion.div>

      <div className="row g-5">
        <div className="col-lg-8">
          {/* Detailed Sections */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">1. Guntur Chilli (The Heat Master)</h2>
            <p className="text-muted lh-lg mb-4">
              Originating from the Guntur district of Andhra Pradesh, Guntur Sannam is the backbone of spicy Andhra cuisine. 
              It is globally famous for its <strong>intense heat</strong> and high pungency. If a recipe calls for a truly spicy kick, Guntur is the undisputed choice.
            </p>
            <ul className="text-muted lh-lg mb-4">
              <li><strong>Heat Level:</strong> High (30,000 – 40,000 SHU)</li>
              <li><strong>Appearance:</strong> Thin skin, bright red, elongated shape.</li>
              <li><strong>Best Used For:</strong> Spicy curries, non-veg preparations, and robust pickles.</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">2. Kashmiri Chilli (The Colour King)</h2>
            <p className="text-muted lh-lg mb-4">
              Kashmiri chillies are valued more for their <strong>deep, vibrant red colour</strong> than their heat. 
              They add a rich commercial look to dishes like Tandoori Chicken and Rogan Josh without making the food excessively spicy.
            </p>
            <ul className="text-muted lh-lg mb-4">
              <li><strong>Heat Level:</strong> Mild (1,000 – 2,000 SHU)</li>
              <li><strong>Appearance:</strong> Deep red, slightly wrinkled, medium-sized.</li>
              <li><strong>Best Used For:</strong> Tandoori dishes, gravies, and marinades where colour is priority.</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">3. Byadgi Chilli (The Aromatic Specialist)</h2>
            <p className="text-muted lh-lg mb-4">
              Named after the town of Byadgi in Karnataka, these chillies are famous for their <strong>unique crinkled texture</strong> and 
              highly oil-rich nature. They provide a beautiful deep red colour and a distinct, slightly earthy aroma.
            </p>
            <ul className="text-muted lh-lg mb-4">
              <li><strong>Heat Level:</strong> Low to Medium (8,000 – 15,000 SHU)</li>
              <li><strong>Appearance:</strong> Highly wrinkled, deep red to almost purplish-dark.</li>
              <li><strong>Best Used For:</strong> Sambhar, Bisi Bele Bath, and Udupi preparations.</li>
            </ul>
          </section>

          {/* Comparison Table */}
          <section className="mb-5 py-4 bg-light rounded-4 border px-4">
            <h2 className="fw-bold mb-4 text-center">At a Glance: The Comparison</h2>
            <div className="table-responsive">
              <table className="table table-bordered bg-white shadow-sm rounded-3 overflow-hidden">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Feature</th>
                    <th>Guntur</th>
                    <th>Kashmiri</th>
                    <th>Byadgi</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr>
                    <td className="fw-bold text-dark text-uppercase small">Pungency (Heat)</td>
                    <td className="text-danger fw-bold text-center">Very High</td>
                    <td className="text-success fw-bold text-center">Very Mild</td>
                    <td className="text-warning fw-bold text-center">Medium-Low</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark text-uppercase small">Colour Value</td>
                    <td className="text-center">Medium Red</td>
                    <td className="text-center">Vibrant Blood Red</td>
                    <td className="text-center">Deep Intense Red</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark text-uppercase small">Skin Texture</td>
                    <td className="text-center">Smooth / Thin</td>
                    <td className="text-center">Slightly Wrinkled</td>
                    <td className="text-center">Highly Wrinkled</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark text-uppercase small">Primary Use</td>
                    <td className="text-center">Heat & Spice</td>
                    <td className="text-center">Colour & Mildness</td>
                    <td className="text-center">Colour & Aroma</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">The Verdict</h2>
            <p className="text-muted lh-lg">
              For a perfectly balanced Indian curry, many chefs recommend a <strong>blend</strong> of these chillies. 
              The most common combination is a mix of Kashmiri for colour and Guntur for heat. 
              Understanding these nuances allows you to tailor your spice blend to your specific palate and dish requirements.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="p-4 bg-white border shadow-sm rounded-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-4">Key Takeaways</h4>
            <div className="mb-4">
              <span className="badge bg-danger mb-2">HOTTEST</span>
              <p className="small text-muted">Guntur chilli (Up to 40k SHU)</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-danger mb-2">VIBRANT COLOUR</span>
              <p className="small text-muted">Kashmiri chilli (Deep Red)</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-danger mb-2">AROMATIC</span>
              <p className="small text-muted">Byadgi chilli (Earthy Scent)</p>
            </div>
            <hr />
            <p className="text-muted small mb-0">
              Source: CPN Foods Quality Research Cell
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
