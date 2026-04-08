import React, { useEffect } from 'react';

export default function GunturChilli() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guntur-chilli-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Guntur Chilli",
      "brand": {
        "@type": "Brand",
        "name": "CPN Foods"
      },
      "description": "Guntur chilli is a high-pungency red chilli variety from Andhra Pradesh, known for strong heat and used widely in Indian cooking and spice manufacturing.",
      "category": "Spices",
      "countryOfOrigin": "IN",
      "manufacturer": {
        "@type": "Organization",
        "name": "CPN Foods"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('guntur-chilli-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="container py-5 mt-4">
      {/* Header Section */}
      <div className="row mb-5 pb-4 border-bottom">
        <div className="col-12 col-md-8">
          <h1 className="fw-bold mb-3 display-5">Guntur Chilli – India’s Hottest & Most Trusted Red Chilli</h1>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          {/* What is Guntur Chilli? */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">What is Guntur Chilli?</h2>
            <p className="text-muted lh-lg mb-3">
              Guntur chilli is one of India’s most famous and pungent varieties of red chilli, cultivated primarily in and around <strong>Guntur</strong>. Known for its <strong>high heat level, bold flavour, and strong pungency</strong>, Guntur chilli is widely used in Indian households, food processing industries, and spice exports.
            </p>
            <p className="text-muted lh-lg">
              Because of its sharp spiciness and consistent quality, Guntur chilli has earned a reputation as the <strong>benchmark chilli variety for heat</strong> in Indian cooking.
            </p>
            <hr className="my-5" />
          </section>

          {/* Why is Guntur Chilli So Famous? */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Why is Guntur Chilli So Famous?</h2>
            <p className="text-muted lh-lg mb-3">
              Guntur chilli stands out due to a unique combination of factors:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Very high pungency compared to most Indian chillies</li>
              <li>Strong capsaicin content (responsible for heat)</li>
              <li>Thick skin and good shelf life</li>
              <li>Ideal for grinding into chilli powder</li>
              <li>Consistent quality year after year</li>
            </ul>
            <p className="text-muted lh-lg">
              The region’s <strong>climate, soil conditions, and traditional farming practices</strong> play a major role in developing these characteristics.
            </p>
            <hr className="my-5" />
          </section>

          {/* Heat Level */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Heat Level of Guntur Chilli (Scoville Scale)</h2>
            <p className="text-muted lh-lg mb-3">Guntur chillies typically measure between:</p>
            <h4 className="fw-bold text-danger mb-4">30,000 – 90,000 SHU (Scoville Heat Units)</h4>
            <p className="text-muted lh-lg mb-3">This makes them:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Much hotter than Kashmiri chilli</li>
              <li>Hotter than Byadgi chilli</li>
              <li>Ideal for people who prefer <strong>real spice</strong> rather than just colour</li>
            </ul>
            <p className="text-muted lh-lg">
              Because of this heat level, Guntur chilli is commonly blended with milder varieties to balance colour and pungency in commercial spice powders.
            </p>
            <hr className="my-5" />
          </section>

          {/* Colour, Pungency & Oil Content */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Colour, Pungency & Oil Content</h2>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li><strong>Colour:</strong> Deep red to dark red</li>
              <li><strong>Pungency:</strong> Very high</li>
              <li><strong>Oil content:</strong> Moderate to high</li>
              <li><strong>Aroma:</strong> Sharp, earthy, strong</li>
            </ul>
            <p className="text-muted lh-lg">
              Unlike Kashmiri chillies (which are valued mainly for colour), Guntur chillies are prized for <strong>flavour impact and heat intensity</strong>.
            </p>
            <hr className="my-5" />
          </section>

          {/* Culinary Uses */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Culinary Uses of Guntur Chilli</h2>
            <p className="text-muted lh-lg mb-3">Guntur chilli is widely used across India in:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Traditional Andhra cuisine</li>
              <li>Spicy curries and gravies</li>
              <li>Chutneys and pickles</li>
              <li>Masala blends</li>
              <li>Food processing & packaged foods</li>
              <li>Hotel, restaurant & catering (HoReCa) kitchens</li>
            </ul>
            <p className="text-muted lh-lg">
              It is especially preferred when <strong>strong heat and authentic spice flavour</strong> are required.
            </p>
            <hr className="my-5" />
          </section>

          {/* Comparison */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Guntur Chilli vs Kashmiri & Byadgi Chilli</h2>
            <div className="table-responsive mb-4">
              <table className="table table-bordered table-hover shadow-sm bg-white">
                <thead className="table-light">
                  <tr>
                    <th className="py-3">Feature</th>
                    <th className="py-3">Guntur Chilli</th>
                    <th className="py-3">Kashmiri Chilli</th>
                    <th className="py-3">Byadgi Chilli</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr>
                    <td className="fw-medium text-dark">Heat</td>
                    <td>Very High</td>
                    <td>Mild</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td className="fw-medium text-dark">Colour</td>
                    <td>Dark Red</td>
                    <td>Bright Red</td>
                    <td>Deep Red</td>
                  </tr>
                  <tr>
                    <td className="fw-medium text-dark">Main Use</td>
                    <td>Spiciness</td>
                    <td>Colour</td>
                    <td>Colour + mild heat</td>
                  </tr>
                  <tr>
                    <td className="fw-medium text-dark">SHU</td>
                    <td>30k–90k</td>
                    <td>1k–2k</td>
                    <td>15k–30k</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted lh-lg">
              This is why many spice manufacturers use <strong>Guntur chilli for heat</strong> and <strong>Kashmiri/Byadgi for colour</strong>.
            </p>
            <hr className="my-5" />
          </section>

          {/* Health Aspects */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Health Aspects of Guntur Chilli</h2>
            <p className="text-muted lh-lg mb-3">When consumed in moderation, Guntur chilli may help with:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Boosting metabolism</li>
              <li>Improving digestion</li>
              <li>Enhancing appetite</li>
              <li>Providing antioxidants</li>
            </ul>
            <div className="p-3 bg-light border-start border-4 border-warning rounded">
              <p className="mb-0 text-muted small"><strong>Note:</strong> People with sensitive digestion should consume very spicy chillies in controlled quantities.</p>
            </div>
            <hr className="my-5" />
          </section>

          {/* How to Identify */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">How to Identify Pure Guntur Chilli</h2>
            <p className="text-muted lh-lg mb-3">Pure Guntur chilli can be identified by:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Strong pungent aroma</li>
              <li>Sharp burning sensation on tasting</li>
              <li>Deep red, slightly dark colour</li>
              <li>No artificial colour or additives</li>
            </ul>
            <p className="text-muted lh-lg mb-3">In powder form, adulterated products often show:</p>
            <ul className="text-muted lh-lg ms-3">
              <li>Excessively bright red colour</li>
              <li>Mild heat despite strong colour</li>
              <li>Presence of artificial dyes</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* CPN Foods - Trusted Source */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">CPN Foods – Trusted Source for Guntur Chilli</h2>
            <p className="text-muted lh-lg mb-3">
              At <strong>CPN Foods</strong>, we source Guntur chillies directly from trusted farming regions in Andhra Pradesh. Our focus is on:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Authentic variety selection</li>
              <li>Careful drying and processing</li>
              <li>Clean grinding practices</li>
              <li>Consistent pungency and quality</li>
            </ul>
            <p className="text-muted lh-lg">
              We supply Guntur chilli in multiple forms to suit different customer needs.
            </p>
            <hr className="my-5" />
          </section>

          {/* Forms Available */}
          {/* <section className="mb-5">
            <h2 className="fw-bold mb-4">Forms Available at CPN Foods</h2>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Whole dry Guntur chillies</li>
              <li>Guntur chilli powder</li>
              <li>Crushed chilli (flakes)</li>
              <li>Custom spice blends (on request)</li>
            </ul>
            <p className="text-muted lh-lg mb-3">Packaging options are available for:</p>
            <ul className="text-muted lh-lg ms-3">
              <li>Retail</li>
              <li>Bulk</li>
              <li>Institutional buyers</li>
              <li>Export requirements</li>
            </ul>
          </section> */}
        </div>

        {/* Sidebar / Additional Info */}
        <div className="col-lg-4">
          <div className="mb-4">
            <img 
              src="https://placehold.co/600x400" 
              alt="" 
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="bg-light rounded p-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-3">Quick Facts</h4>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Origin</span>
              <span className="fw-bold">Guntur, Andhra Pradesh</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Heat Level</span>
              <span className="fw-bold text-danger">Very High</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">SHU</span>
              <span className="fw-bold">30,000 - 90,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
