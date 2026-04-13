import React, { useEffect } from 'react';
import haldiPowderImg from '../../img/haldi_powder.webp';

export default function HaldiPowder() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'haldi-powder-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Haldi Powder (Turmeric Powder)",
      "brand": {
        "@type": "Brand",
        "name": "CPN Foods"
      },
      "description": "Haldi powder made from Indian turmeric rhizomes, valued for colour, flavour, and traditional use in Indian cooking.",
      "category": "Spices",
      "countryOfOrigin": "IN",
      "manufacturer": {
        "@type": "Organization",
        "name": "CPN Foods"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('haldi-powder-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="container py-5 mt-4">
      {/* Header Section */}
      <div className="row mb-5 pb-4 border-bottom">
        <div className="col-12 col-md-8">
          <h1 className="fw-bold mb-3 display-5">Haldi Powder (Turmeric Powder) – Pure Indian Turmeric for Daily Use</h1>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          {/* What is Haldi Powder? */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">What is Haldi Powder?</h2>
            <p className="text-muted lh-lg mb-4">
              Haldi powder, also known as turmeric powder, is a natural spice made by drying and grinding the rhizomes of the turmeric plant. It is one of the <strong>most widely used spices in Indian kitchens</strong>, valued for its <strong>colour, flavour, and traditional health-supporting properties</strong>.
            </p>
            <p className="text-muted lh-lg mb-3">
              Haldi powder has been an essential part of:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Indian cooking</li>
              <li>Ayurveda & traditional practices</li>
              <li>Home remedies</li>
              <li>Food processing</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* Origin of Indian Turmeric */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Origin of Indian Turmeric</h2>
            <p className="text-muted lh-lg mb-4">
              India is the <strong>largest producer and exporter of turmeric in the world</strong>. Indian turmeric is globally preferred due to:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>High curcumin content</li>
              <li>Strong aroma</li>
              <li>Rich yellow colour</li>
              <li>Traditional cultivation methods</li>
            </ul>
            <p className="text-muted lh-lg">
              Turmeric grown in regions such as <strong>Telangana, Andhra Pradesh, and Tamil Nadu</strong> is especially known for quality.
            </p>
            <hr className="my-5" />
          </section>

          {/* How Haldi Powder is Made */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">How Haldi Powder is Made</h2>
            <p className="text-muted lh-lg mb-3">Quality haldi powder is produced through a careful process:</p>
            <ol className="text-muted lh-lg mb-4 ms-3">
              <li>Harvesting mature turmeric rhizomes</li>
              <li>Cleaning and boiling</li>
              <li>Sun-drying or controlled drying</li>
              <li>Polishing</li>
              <li>Grinding into fine powder</li>
              <li>Hygienic packing</li>
            </ol>
            <div className="p-3 bg-light border-start border-4 border-warning rounded mb-4">
              <p className="mb-0 text-muted">
                👉 Proper drying and grinding are essential to preserve <strong>colour and curcumin content</strong>.
              </p>
            </div>
            <hr className="my-5" />
          </section>

          {/* Curcumin Content & Colour Value */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Curcumin Content & Colour Value</h2>
            <p className="text-muted lh-lg mb-3">The quality of haldi powder is measured by:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li><strong>Curcumin percentage</strong> (active compound)</li>
              <li><strong>Colour intensity</strong> (bright yellow)</li>
              <li><strong>Aroma</strong></li>
            </ul>
            <p className="text-muted lh-lg">
              Higher curcumin content generally indicates better quality turmeric.
            </p>
            <hr className="my-5" />
          </section>

          {/* Culinary Uses of Haldi Powder */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Culinary Uses of Haldi Powder</h2>
            <p className="text-muted lh-lg mb-3">Haldi powder is used daily in:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Indian curries & gravies</li>
              <li>Rice dishes</li>
              <li>Vegetable preparations</li>
              <li>Pickles & spice blends</li>
              <li>Marinades</li>
            </ul>
            <p className="text-muted lh-lg italic">
              A small quantity is enough to add <strong>colour, flavour, and warmth</strong> to food.
            </p>
            <hr className="my-5" />
          </section>

          {/* Traditional Health Uses of Haldi Powder */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Traditional Health Uses of Haldi Powder</h2>
            <p className="text-muted lh-lg mb-3">Traditionally, haldi powder is used for:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Supporting immunity</li>
              <li>Digestive wellness</li>
              <li>General wellbeing</li>
              <li>Skin care applications</li>
            </ul>
            <div className="p-3 bg-light border-start border-4 border-danger rounded mb-4">
              <p className="mb-0 text-muted small">
                ⚠️ <strong>Note:</strong> Haldi powder is a food ingredient, not a medicine.
              </p>
            </div>
            <hr className="my-5" />
          </section>

          {/* How to Identify Pure Haldi Powder */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">How to Identify Pure Haldi Powder</h2>
            <p className="text-muted lh-lg mb-3">Pure haldi powder can be identified by:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Natural bright yellow colour (not neon)</li>
              <li>Earthy turmeric aroma</li>
              <li>Slight bitterness when tasted</li>
              <li>No added starch or artificial colour</li>
            </ul>
            <p className="text-muted lh-lg mb-3">Adulterated turmeric may appear:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Too bright</li>
              <li>Odourless</li>
              <li>Chalky in texture</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* CPN Foods Haldi Powder – Quality You Can Trust */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">CPN Foods Haldi Powder – Quality You Can Trust</h2>
            <p className="text-muted lh-lg mb-3">
              At <strong>CPN Foods</strong>, our haldi powder is produced using carefully sourced Indian turmeric and hygienic processing to ensure:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Natural colour</li>
              <li>Consistent curcumin levels</li>
              <li>Clean grinding</li>
              <li>No artificial additives</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* Packaging & Supply Options */}
          {/* <section className="mb-5">
            <h2 className="fw-bold mb-4">Packaging & Supply Options</h2>
            <p className="text-muted lh-lg mb-4">We offer a variety of packaging formats to meet diverse needs:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Retail packs</li>
              <li>Bulk supply</li>
              <li>Institutional buyers</li>
              <li>Export-grade packaging</li>
            </ul>
            <p className="text-muted lh-lg mb-0 text-success fw-bold">
              Custom packaging available on request.
            </p>
          </section> */}
        </div>

        {/* Sidebar / Additional Info */}
        <div className="col-lg-4">
          <div className="mb-4">
            <img 
              src={haldiPowderImg} 
              alt="Turmeric Powder" 
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="bg-light rounded p-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-3">Quick Facts</h4>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Origin</span>
              <span className="fw-bold">India</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Nature</span>
              <span className="fw-bold">100% Pure & Natural</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Usage</span>
              <span className="fw-bold text-warning">Essential / Medicinal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
