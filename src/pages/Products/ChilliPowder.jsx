import React, { useEffect } from 'react';
import chilliPowderImg from '../../img/chilli_powder.webp';

export default function ChilliPowder() {
  useEffect(() => {
    document.title = "Pure Chilli Powder | Authentic Guntur Spicy Red Chilli | CPN Foods";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Buy high-pungency, pure Guntur-based chilli powder. No artificial colours or fillers. Authentic Indian spice for heat and flavor. Wholesale available.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'chilli-powder-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Chilli Powder",
      "brand": {
        "@type": "Brand",
        "name": "CPN Foods"
      },
      "description": "Chilli powder made from selected Indian red chillies, offering authentic heat, colour, and flavour for Indian cooking.",
      "category": "Spices",
      "countryOfOrigin": "IN",
      "manufacturer": {
        "@type": "Organization",
        "name": "CPN Foods"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('chilli-powder-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="container py-5 mt-4">
      {/* Header Section */}
      <div className="row mb-5 pb-4 border-bottom">
        <div className="col-12 col-md-8">
          <h1 className="fw-bold mb-3 display-5">Chilli Powder – Pure, Authentic & Essential Indian Spice</h1>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          {/* What is Chilli Powder? */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">What is Chilli Powder?</h2>
            <p className="text-muted lh-lg mb-4">
              Chilli powder is a spice made by drying and finely grinding red chillies. It is one of the <strong>most essential ingredients in Indian cooking</strong>, valued for its ability to add <strong>heat, flavour, and depth</strong> to a wide variety of dishes.
            </p>
            <p className="text-muted lh-lg mb-3">
              Depending on the chilli variety used, chilli powder can range from:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Mild and bright red (colour-focused)</li>
              <li>Medium heat with aroma</li>
              <li>Highly pungent and spicy</li>
            </ul>
            <div className="p-3 bg-light border-start border-4 border-danger rounded mb-4">
              <p className="mb-0 text-muted">
                At <strong>CPN Foods</strong>, chilli powder is produced using carefully selected Indian chillies to ensure <strong>purity, consistency, and authentic taste</strong>.
              </p>
            </div>
            <hr className="my-5" />
          </section>

          {/* Types of Chilli Powder Used in India */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Types of Chilli Powder Used in India</h2>
            <p className="text-muted lh-lg mb-4">
              Indian chilli powder is not a single product — it varies based on the chilli variety used.
            </p>
            <h4 className="fw-bold mb-3">Common Types:</h4>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li className="mb-2"><strong>Guntur chilli powder</strong> – very high pungency</li>
              <li className="mb-2"><strong>Kashmiri chilli powder</strong> – mild heat, bright red colour</li>
              <li className="mb-2"><strong>Byadgi chilli powder</strong> – medium heat with good colour</li>
              <li className="mb-2"><strong>Blended chilli powder</strong> – balanced heat + colour</li>
            </ul>
            <p className="text-muted lh-lg italic">
              Each type serves a different culinary purpose.
            </p>
            <hr className="my-5" />
          </section>

          {/* Why Guntur Chilli is Preferred */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Why Guntur Chilli is Preferred for Spicy Chilli Powder</h2>
            <p className="text-muted lh-lg mb-3">Chilli powder made from <strong>Guntur</strong> chillies is widely preferred because of:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>High capsaicin content</li>
              <li>Strong, sharp heat</li>
              <li>Consistent pungency</li>
              <li>Ideal grinding characteristics</li>
            </ul>
            <p className="text-muted lh-lg">
              For customers who prefer <strong>real spiciness</strong>, Guntur-based chilli powder is the gold standard.
            </p>
            <hr className="my-5" />
          </section>

          {/* Heat Level & Colour */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Heat Level & Colour in Chilli Powder</h2>
            <p className="text-muted lh-lg mb-4">
              The quality of chilli powder is judged mainly by:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li><strong>Heat (pungency)</strong> – measured in SHU</li>
              <li><strong>Colour value</strong> – visual appeal</li>
              <li><strong>Aroma</strong> – freshness indicator</li>
            </ul>

            <div className="table-responsive mb-4">
              <table className="table table-bordered text-muted shadow-sm">
                <thead className="bg-light">
                  <tr>
                    <th className="fw-bold">Type</th>
                    <th className="fw-bold">Heat Level</th>
                    <th className="fw-bold">Colour</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-bold">Guntur-based</td>
                    <td>Very High</td>
                    <td>Dark Red</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Kashmiri-based</td>
                    <td>Mild</td>
                    <td>Bright Red</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Blended</td>
                    <td>Medium–High</td>
                    <td>Balanced</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted lh-lg italic">
              Professional spice manufacturers often blend varieties to achieve the desired result.
            </p>
            <hr className="my-5" />
          </section>

          {/* Culinary Uses */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Culinary Uses of Chilli Powder</h2>
            <p className="text-muted lh-lg mb-3">Chilli powder is used extensively in:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Indian curries & gravies</li>
              <li>Vegetable and meat preparations</li>
              <li>Pickles & chutneys</li>
              <li>Street food & snacks</li>
              <li>Food processing & packaged foods</li>
              <li>Hotels, restaurants & catering (HoReCa)</li>
            </ul>
            <p className="text-muted lh-lg">
              A small quantity is enough to enhance flavour and spice.
            </p>
            <hr className="my-5" />
          </section>

          {/* How Pure Chilli Powder is Made */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">How Pure Chilli Powder is Made</h2>
            <p className="text-muted lh-lg mb-3">High-quality chilli powder follows a hygienic process:</p>
            <ol className="text-muted lh-lg mb-4 ms-3">
              <li>Selection of good-quality dry red chillies</li>
              <li>Cleaning and removal of foreign matter</li>
              <li>Controlled grinding</li>
              <li>Sieving for uniform texture</li>
              <li>Hygienic packing</li>
            </ol>
            <div className="p-3 bg-light border-start border-4 border-warning rounded mb-4">
              <p className="mb-0 text-muted">👉 <strong>No artificial colours or fillers</strong> should be added.</p>
            </div>
            <hr className="my-5" />
          </section>

          {/* How to Identify Pure Chilli Powder */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">How to Identify Pure Chilli Powder</h2>
            <p className="text-muted lh-lg mb-3">Pure chilli powder can be identified by:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Natural red colour (not fluorescent)</li>
              <li>Strong spicy aroma</li>
              <li>Sharp heat when tasted</li>
              <li>No gritty or starchy texture</li>
            </ul>
            <p className="text-muted lh-lg mb-3">Signs of adulteration include:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Excessively bright colour</li>
              <li>Mild heat despite strong colour</li>
              <li>Presence of artificial dyes or fillers</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* Health Aspects of Chilli Powder */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Health Aspects of Chilli Powder</h2>
            <p className="text-muted lh-lg mb-3">When consumed in moderation, chilli powder may help with:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Improving digestion</li>
              <li>Stimulating appetite</li>
              <li>Boosting metabolism</li>
              <li>Providing antioxidants</li>
            </ul>
            <div className="p-3 bg-light border-start border-4 border-secondary rounded">
              <p className="mb-0 text-muted small"><strong>Note:</strong> Excessive consumption may cause irritation for sensitive individuals.</p>
            </div>
            <hr className="my-5" />
          </section>

          {/* CPN Foods Quality & Consistency */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">CPN Foods Chilli Powder – Quality & Consistency</h2>
            <p className="text-muted lh-lg mb-3">At <strong>CPN Foods</strong>, our chilli powder is known for:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Authentic Indian chilli varieties</li>
              <li>Controlled grinding process</li>
              <li>Consistent heat levels</li>
              <li>No artificial colours or additives</li>
            </ul>
            <p className="text-muted lh-lg mb-0 text-dark">
              We cater to both <strong>retail and bulk buyers</strong> with reliable supply standards.
            </p>
            <hr className="my-5" />
          </section>

          {/* Packaging & Supply Options */}
          {/* <section className="mb-5">
            <h2 className="fw-bold mb-4">Packaging & Supply Options</h2>
            <p className="text-muted lh-lg mb-3">CPN Foods offers chilli powder in:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Retail packs</li>
              <li>Bulk packs for wholesalers</li>
              <li>Institutional & HoReCa supply</li>
              <li>Export-grade packaging</li>
            </ul>
            <p className="text-muted lh-lg mb-0 text-success fw-bold">
              Custom specifications are available on request.
            </p>
          </section> */}
        </div>

        {/* Sidebar / Additional Info */}
        <div className="col-lg-4">
          <div className="mb-4">
            <img 
              src={chilliPowderImg} 
              alt="Chilli Powder" 
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
              <span className="fw-bold text-danger">Essential Spice</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
