import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PiPlantFill, PiCertificateFill, PiHandshakeFill } from 'react-icons/pi';

export default function AboutUs() {
  useEffect(() => {
    document.title = "Our Legacy Since 1943 | CPN Foods Story";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about CPN Foods' journey from Osman Gunj in 1943 to becoming a trusted name in pure, farm-direct spices. 83 years of trust and quality.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'about-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About CPN Foods",
      "description": "Information about CPN Foods' 83-year legacy and commitment to spice purity.",
      "mainEntity": {
        "@type": "Organization",
        "name": "CPN Foods",
        "foundingDate": "1943",
        "founder": {
          "@type": "Person",
          "name": "Chindam Pentaiah"
        },
        "slogan": "83 Years of Honest Spice Trade",
        "knowsAbout": [
          "Spice Manufacturing",
          "Adulteration-Free Spices",
          "Direct to Consumer (D2C)"
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('about-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="container-fluid p-0 mb-5">
      {/* Red Header */}
      <div className="w-100 d-flex align-items-center px-4 px-lg-5" style={{ backgroundColor: '#EA0000', height: '140px' }}>
        <h1 className="text-white fw-bold display-4 m-0" style={{ letterSpacing: '-1px' }}>About Us - CPN Foods</h1>
      </div>

      {/* Hero Section */}
      <section className="container py-5 my-md-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 pe-lg-5">
            <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: '-1px' }}>Rooted in Tradition.<br/>Driven by Purity.</h1>
            <p className="lead text-muted mb-4">
              <strong>CPN Foods</strong> carries forward a legacy of spice trading that began in <strong>1943</strong>, built on trust, quality, and deep market knowledge passed down through generations.
            </p>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://placehold.co/600x500" 
              alt="" 
              className="img-fluid rounded-4 shadow-sm w-100" 
              style={{ height: '500px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="container py-5 my-5">
        <div className="row align-items-center g-5 flex-lg-row-reverse">
          <div className="col-lg-6 ps-lg-5">
            <h2 className="display-6 fw-bold mb-4">Our Beginnings (1943)</h2>
            <p className="text-muted mb-4 lh-lg">
              The journey of CPN Foods traces back to <strong>1943</strong>, when <strong>Sri Chindam Pentaiah</strong> established a trading concern at <strong>Osman Gunj</strong>, one of the most prominent wholesale markets of that era, under the Nizam regime in <strong>Hyderabad</strong>.
            </p>
            <p className="text-muted mb-3 lh-lg">
              The business was focused on trading essential agricultural and spice commodities, including:
            </p>
            <ul className="list-unstyled text-muted mb-4 d-flex flex-column gap-2">
              <li className="d-flex align-items-center gap-2"><span className="text-danger fw-bold">•</span> Red chillies</li>
              <li className="d-flex align-items-center gap-2"><span className="text-danger fw-bold">•</span> Onions</li>
              <li className="d-flex align-items-center gap-2"><span className="text-danger fw-bold">•</span> Tamarind</li>
              <li className="d-flex align-items-center gap-2"><span className="text-danger fw-bold">•</span> Turmeric</li>
            </ul>
            <p className="text-muted mb-4 lh-lg">
              In a time when trade was driven purely by reputation and relationships, the firm earned the trust of farmers, traders, and buyers through honesty and consistent quality.
            </p>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://placehold.co/600x550" 
              alt="" 
              className="img-fluid rounded-4 shadow-sm w-100" 
              style={{ height: '550px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="container py-5 my-5">
        <div className="bg-light rounded-4 p-4 p-md-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 pe-lg-5">
              <h2 className="display-5 fw-bold mb-4">Becoming a Backbone of the Spice Industry</h2>
              <p className="text-muted mb-4 lh-lg">
                Over the decades, the business grew into <strong>one of the leading raw material providers for spice brands across South India</strong>.
              </p>
              <p className="text-muted mb-4 lh-lg">
                With deep expertise in sourcing and grading—especially <strong>Guntur chillies</strong>—the family became a dependable partner for spice manufacturers who valued <strong>purity, consistency, and authenticity</strong> in raw materials.
              </p>
              
              <div className="mt-5">
                <h4 className="fw-bold mb-3">Second Generation – Strengthening Quality & Supply</h4>
                <div className="bg-danger rounded-pill" style={{ width: '60px', height: '4px' }}></div>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://placehold.co/600x500" 
                alt="" 
                className="img-fluid rounded-4 shadow-sm w-100" 
                style={{ height: '500px', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="container py-5 my-5">
        <div className="row align-items-center g-5 flex-lg-row-reverse">
          <div className="col-lg-6 ps-lg-5">
            <h2 className="display-6 fw-bold mb-4">From Market Roots to Modern Homes</h2>
            <p className="text-muted mb-4 lh-lg">
              From the historic trading lanes of Osman Gunj to today’s modern supply chains, <strong>CPN Foods</strong> bridges traditional wisdom with contemporary quality expectations.
            </p>
            <p className="text-muted mb-5 lh-lg">
              Whether supplying raw materials to manufacturers or serving households through our own brand, our commitment remains unchanged.
            </p>

            <div className="p-4 border-start border-4 border-danger bg-light rounded-end">
              <h4 className="fw-bold text-dark mb-1">CPN Foods</h4>
              <p className="text-muted fst-italic mb-0">Serving Quality. Preserving Legacy. Since 1943.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://placehold.co/600x400" 
              alt="" 
              className="img-fluid rounded-4 shadow-sm w-100" 
              style={{ height: '400px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>
    </div>
  );
}