import React, { useEffect } from 'react';

export default function Jaggery() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'jaggery-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Jaggery",
      "brand": {
        "@type": "Brand",
        "name": "CPN Foods"
      },
      "description": "Traditional natural sweetener made from sugarcane juice without chemical refining.",
      "category": "Natural Sweeteners",
      "countryOfOrigin": "IN",
      "manufacturer": {
        "@type": "Organization",
        "name": "CPN Foods"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('jaggery-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="container py-5 mt-4">
      {/* Header Section */}
      <div className="row mb-5 pb-4 border-bottom">
        <div className="col-12 col-md-8">
          <h1 className="fw-bold mb-3 display-5">Jaggery – Natural Sweetener Made from Sugarcane</h1>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          {/* What is Jaggery? */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">What is Jaggery?</h2>
            <p className="text-muted lh-lg mb-4">
              Jaggery is a traditional natural sweetener made by concentrating sugarcane juice without the use of chemicals or refining processes. Unlike white sugar, jaggery retains <strong>natural minerals and nutrients</strong>, making it a preferred sweetener in many Indian households.
            </p>
            <p className="text-muted lh-lg mb-3">
              Jaggery is commonly available as:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Solid blocks</li>
              <li>Cubes</li>
              <li>Powder</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* Origin of Jaggery in India */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Origin of Jaggery in India</h2>
            <p className="text-muted lh-lg mb-4">
              India is one of the <strong>largest producers of jaggery</strong>, thanks to widespread sugarcane cultivation. Traditional jaggery-making regions include parts of:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Maharashtra</li>
              <li>Karnataka</li>
              <li>Andhra Pradesh</li>
            </ul>
            <p className="text-muted lh-lg">
              Indian jaggery is valued for its <strong>rich taste, aroma, and natural processing</strong>.
            </p>
            <hr className="my-5" />
          </section>

          {/* How Jaggery is Made */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">How Jaggery is Made</h2>
            <p className="text-muted lh-lg mb-3">Traditional jaggery production involves:</p>
            <ol className="text-muted lh-lg mb-4 ms-3">
              <li>Crushing fresh sugarcane</li>
              <li>Extracting juice</li>
              <li>Boiling the juice in open pans</li>
              <li>Removing impurities naturally</li>
              <li>Concentrating to required consistency</li>
              <li>Moulding into blocks or powder</li>
            </ol>
            <div className="p-3 bg-light border-start border-4 border-warning rounded mb-4">
              <p className="mb-0 text-muted">
                👉 <strong>No chemical refining</strong> is involved in traditional jaggery.
              </p>
            </div>
            <hr className="my-5" />
          </section>

          {/* Jaggery vs White Sugar */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Jaggery vs White Sugar</h2>
            <div className="table-responsive mb-4">
              <table className="table table-bordered text-muted shadow-sm overflow-hidden rounded-3">
                <thead className="bg-light">
                  <tr>
                    <th className="fw-bold">Feature</th>
                    <th className="fw-bold">Jaggery</th>
                    <th className="fw-bold">White Sugar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-bold">Processing</td>
                    <td>Natural</td>
                    <td>Highly refined</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Minerals</td>
                    <td>Retained</td>
                    <td>Removed</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Taste</td>
                    <td>Rich, caramel-like</td>
                    <td>Neutral</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Glycemic Impact</td>
                    <td>Lower</td>
                    <td>Higher</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted lh-lg">
              This is why jaggery is often considered a <strong>better alternative to refined sugar</strong>.
            </p>
            <hr className="my-5" />
          </section>

          {/* Uses of Jaggery */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Uses of Jaggery</h2>
            <p className="text-muted lh-lg mb-3">Jaggery is widely used in:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Indian sweets</li>
              <li>Traditional desserts</li>
              <li>Beverages</li>
              <li>Daily cooking</li>
              <li>Ayurvedic preparations</li>
            </ul>
            <p className="text-muted lh-lg">
              Jaggery powder is especially popular for <strong>easy daily use</strong>.
            </p>
            <hr className="my-5" />
          </section>

          {/* Health Aspects of Jaggery */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Health Aspects of Jaggery</h2>
            <p className="text-muted lh-lg mb-3">Traditionally, jaggery is believed to:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Aid digestion</li>
              <li>Provide quick energy</li>
              <li>Support mineral intake</li>
            </ul>
            <div className="p-3 bg-light border-start border-4 border-danger rounded mb-4">
              <p className="mb-0 text-muted small">
                ⚠️ <strong>Note:</strong> Jaggery is still a form of sugar and should be consumed in moderation.
              </p>
            </div>
            <hr className="my-5" />
          </section>

          {/* How to Identify Pure Jaggery */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">How to Identify Pure Jaggery</h2>
            <p className="text-muted lh-lg mb-3">Pure jaggery can be identified by:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Natural brown or golden colour</li>
              <li>Rich aroma</li>
              <li>No bitter aftertaste</li>
              <li>Slight softness (not rock hard)</li>
            </ul>
            <p className="text-muted lh-lg mb-3">Adulterated jaggery may:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Be too dark or too pale</li>
              <li>Contain chemicals</li>
              <li>Taste bitter</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* CPN Foods Jaggery – Naturally Processed */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">CPN Foods Jaggery – Naturally Processed</h2>
            <p className="text-muted lh-lg mb-3">
              At <strong>CPN Foods</strong>, our jaggery is sourced from trusted producers and processed using traditional methods to ensure:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Natural sweetness</li>
              <li>Clean taste</li>
              <li>No chemical additives</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* Packaging & Supply Options */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Packaging & Supply Options</h2>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Jaggery blocks</li>
              <li>Jaggery cubes</li>
              <li>Jaggery powder</li>
              <li>Retail & bulk packaging</li>
            </ul>
          </section>
        </div>

        {/* Sidebar / Additional Info */}
        <div className="col-lg-4">
          <div className="mb-4">
            <img 
              src="https://placehold.co/600x400" 
              alt="Jaggery" 
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
              <span className="fw-bold">100% Natural</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Usage</span>
              <span className="fw-bold text-success">Healthy Sweetener</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
