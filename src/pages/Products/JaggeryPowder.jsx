import React, { useEffect } from 'react';

export default function JaggeryPowder() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'jaggery-powder-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Jaggery Powder",
      "brand": {
        "@type": "Brand",
        "name": "CPN Foods"
      },
      "description": "Natural jaggery powder made from sugarcane, coconut palm sap, and palm tree sap, used as an unrefined sweetener.",
      "category": "Natural Sweeteners",
      "countryOfOrigin": "IN",
      "manufacturer": {
        "@type": "Organization",
        "name": "CPN Foods"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('jaggery-powder-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="container py-5 mt-4">
      {/* Header Section */}
      <div className="row mb-5 pb-4 border-bottom">
        <div className="col-12 col-md-10">
          <h1 className="fw-bold mb-3 display-5">Jaggery Powder – Natural Sweetener from Sugarcane, Coconut & Palm</h1>
          <p className="lead text-muted">A healthier, unrefined alternative to white sugar.</p>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          {/* What is Jaggery Powder? */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">What is Jaggery Powder?</h2>
            <p className="text-muted lh-lg mb-4">
              Jaggery powder is a natural, unrefined sweetener made by drying and granulating traditionally prepared jaggery. Unlike white sugar, jaggery powder is <strong>free from chemical refining</strong> and retains natural minerals and flavour.
            </p>
            <p className="text-muted lh-lg mb-3">
              At <strong>CPN Foods</strong>, jaggery powder is available in three natural variants:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Sugarcane jaggery powder</li>
              <li>Coconut jaggery powder</li>
              <li>Palm jaggery powder</li>
            </ul>
            <p className="text-muted lh-lg">
              Each type has its own taste profile, colour, and traditional use.
            </p>
            <hr className="my-5" />
          </section>

          {/* Types of Jaggery Powder */}
          <section className="mb-5">
            <h2 className="fw-bold mb-5">Types of Jaggery Powder</h2>

            {/* 1. Sugarcane Jaggery Powder */}
            <div className="mb-5">
              <h4 className="fw-bold d-flex align-items-center gap-2 mb-4">
                <span className="badge bg-danger rounded-circle p-2" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
                Sugarcane Jaggery Powder
              </h4>
              <div className="ps-4 ms-2 border-start border-2">
                <h5 className="fw-bold mb-3">What is Sugarcane Jaggery Powder?</h5>
                <p className="text-muted lh-lg mb-4">
                  Sugarcane jaggery powder is made from concentrated sugarcane juice using traditional boiling methods. It is the <strong>most commonly used jaggery powder</strong> in Indian households.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <h6 className="fw-bold text-dark mb-3">Key Characteristics:</h6>
                    <ul className="text-muted list-unstyled lh-lg">
                      <li><strong>Colour:</strong> Golden brown to dark brown</li>
                      <li><strong>Taste:</strong> Rich, caramel-like sweetness</li>
                      <li><strong>Aroma:</strong> Strong sugarcane aroma</li>
                      <li><strong>Texture:</strong> Free-flowing powder</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="fw-bold text-dark mb-3">Uses:</h6>
                    <ul className="text-muted list-unstyled lh-lg">
                      <li>Daily cooking</li>
                      <li>Tea and beverages</li>
                      <li>Traditional sweets</li>
                      <li>Desserts and baking</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted lh-lg small fst-italic">
                  Sugarcane jaggery powder is widely preferred as a natural alternative to white sugar.
                </p>
              </div>
            </div>

            {/* 2. Coconut Jaggery Powder */}
            <div className="mb-5">
              <h4 className="fw-bold d-flex align-items-center gap-2 mb-4">
                <span className="badge bg-danger rounded-circle p-2" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
                Coconut Jaggery Powder
              </h4>
              <div className="ps-4 ms-2 border-start border-2">
                <h5 className="fw-bold mb-3">What is Coconut Jaggery Powder?</h5>
                <p className="text-muted lh-lg mb-4">
                  Coconut jaggery powder is made from the <strong>sap of coconut palm flowers</strong>, not from coconuts themselves. The sap is boiled, dried, and powdered using traditional methods.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <h6 className="fw-bold text-dark mb-3">Key Characteristics:</h6>
                    <ul className="text-muted list-unstyled lh-lg">
                      <li><strong>Colour:</strong> Light to medium brown</li>
                      <li><strong>Taste:</strong> Mild sweetness with caramel notes</li>
                      <li><strong>Aroma:</strong> Pleasant and mild</li>
                      <li><strong>Glycemic impact:</strong> Lower compared to sugarcane jaggery</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="fw-bold text-dark mb-3">Uses:</h6>
                    <ul className="text-muted list-unstyled lh-lg">
                      <li>Health-conscious diets</li>
                      <li>Tea and coffee</li>
                      <li>Desserts</li>
                      <li>Traditional recipes</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted lh-lg small fst-italic">
                  Coconut jaggery powder is often chosen by people looking for a <strong>less intense sweetness</strong>.
                </p>
              </div>
            </div>

            {/* 3. Palm Jaggery Powder */}
            <div className="mb-5">
              <h4 className="fw-bold d-flex align-items-center gap-2 mb-4">
                <span className="badge bg-danger rounded-circle p-2" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
                Palm Jaggery Powder
              </h4>
              <div className="ps-4 ms-2 border-start border-2">
                <h5 className="fw-bold mb-3">What is Palm Jaggery Powder?</h5>
                <p className="text-muted lh-lg mb-4">
                  Palm jaggery powder is made from the sap of palm trees, traditionally processed without chemicals. It is known for its <strong>distinct taste and darker colour</strong>.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <h6 className="fw-bold text-dark mb-3">Key Characteristics:</h6>
                    <ul className="text-muted list-unstyled lh-lg">
                      <li><strong>Colour:</strong> Dark brown</li>
                      <li><strong>Taste:</strong> Strong, earthy sweetness</li>
                      <li><strong>Aroma:</strong> Deep and rich</li>
                      <li><strong>Mineral content:</strong> Naturally higher</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="fw-bold text-dark mb-3">Uses:</h6>
                    <ul className="text-muted list-unstyled lh-lg">
                      <li>Traditional sweets</li>
                      <li>Regional recipes</li>
                      <li>Herbal and Ayurvedic preparations</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted lh-lg small fst-italic">
                  Palm jaggery powder is valued for its <strong>robust flavour and traditional significance</strong>.
                </p>
              </div>
            </div>

            <hr className="my-5" />
          </section>

          {/* Comparison Table */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Comparison: Sugarcane vs Coconut vs Palm Jaggery Powder</h2>
            <div className="table-responsive">
              <table className="table table-bordered text-muted shadow-sm overflow-hidden rounded-3">
                <thead className="bg-light">
                  <tr>
                    <th className="fw-bold">Feature</th>
                    <th className="fw-bold">Sugarcane</th>
                    <th className="fw-bold">Coconut</th>
                    <th className="fw-bold">Palm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-bold text-dark">Source</td>
                    <td>Sugarcane juice</td>
                    <td>Coconut palm sap</td>
                    <td>Palm tree sap</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Sweetness</td>
                    <td>High</td>
                    <td>Mild–Medium</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Colour</td>
                    <td>Golden/Dark Brown</td>
                    <td>Light Brown</td>
                    <td>Dark Brown</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Taste Profile</td>
                    <td>Caramel-like</td>
                    <td>Mild, smooth</td>
                    <td>Strong, earthy</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Daily Use</td>
                    <td>Very common</td>
                    <td>Common</td>
                    <td>Moderate</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Health Preference</td>
                    <td>General use</td>
                    <td>Health-focused</td>
                    <td>Traditional use</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted lh-lg mt-4 text-center fst-italic">
              This clear differentiation helps users <strong>choose the right jaggery powder</strong> for their needs.
            </p>
            <hr className="my-5" />
          </section>

          {/* Jaggery Powder vs White Sugar */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Jaggery Powder vs White Sugar</h2>
            <div className="table-responsive">
              <table className="table table-bordered text-muted shadow-sm overflow-hidden rounded-3">
                <thead className="bg-light">
                  <tr>
                    <th className="fw-bold">Feature</th>
                    <th className="fw-bold">Jaggery Powder</th>
                    <th className="fw-bold">White Sugar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-bold text-dark">Processing</td>
                    <td>Natural</td>
                    <td>Highly refined</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Minerals</td>
                    <td>Retained</td>
                    <td>Removed</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Additives</td>
                    <td>None</td>
                    <td>Possible</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Taste</td>
                    <td>Rich & natural</td>
                    <td>Neutral</td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-dark">Nutritional Value</td>
                    <td>Higher</td>
                    <td>Lower</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted lh-lg mt-3">
              This makes jaggery powder a <strong>preferred natural sweetener</strong>.
            </p>
            <hr className="my-5" />
          </section>

          {/* How to Identify Pure Jaggery Powder */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">How to Identify Pure Jaggery Powder</h2>
            <p className="text-muted lh-lg mb-3">Pure jaggery powder can be identified by:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Natural brown colour (varies by type)</li>
              <li>Pleasant aroma</li>
              <li>Free-flowing texture</li>
              <li>No bitterness or chemical smell</li>
            </ul>
            <p className="text-muted lh-lg mb-3">Adulterated jaggery powder may:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Appear chalky</li>
              <li>Taste bitter</li>
              <li>Contain artificial agents</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* CPN Foods Jaggery Powder – Naturally Processed */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">CPN Foods Jaggery Powder – Naturally Processed</h2>
            <p className="text-muted lh-lg mb-3">
              At <strong>CPN Foods</strong>, all variants of jaggery powder are:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Traditionally processed</li>
              <li>Free from chemical additives</li>
              <li>Hygienically handled</li>
              <li>Consistently graded</li>
            </ul>
            <p className="text-muted lh-lg fw-bold text-dark">
              We ensure purity, traceability, and natural taste across all three types.
            </p>
            <hr className="my-5" />
          </section>

          {/* Packaging & Supply Options */}
          {/* <section className="mb-5">
            <h2 className="fw-bold mb-4">Packaging & Supply Options</h2>
            <p className="text-muted lh-lg mb-3">CPN Foods supplies jaggery powder in:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Retail packs</li>
              <li>Bulk packaging</li>
              <li>Institutional supply</li>
              <li>Export-grade packaging</li>
            </ul>
            <p className="text-muted lh-lg small text-success fw-bold">
              All three variants — sugarcane, coconut, and palm — are available based on requirement.
            </p>
          </section> */}
        </div>

        {/* Sidebar / Additional Info */}
        <div className="col-lg-4">
          <div className="mb-4">
            <img 
              src="https://placehold.co/600x400" 
              alt="Jaggery Powder" 
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
              <span className="d-block text-muted small text-uppercase">Extraction</span>
              <span className="fw-bold">Sugarcane, Coconut & Palm Saps</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Nature</span>
              <span className="fw-bold">100% Unrefined</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Usage</span>
              <span className="fw-bold text-success">Healthy Alternative to White Sugar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
