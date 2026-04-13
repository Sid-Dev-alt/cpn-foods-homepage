import React, { useEffect } from 'react';
import moringaKaramImg from '../../img/moringa_karam_podi.jpg';

export default function MoringaKaram() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'moringa-karam-poodi-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Moringa Karam Poodi",
      "brand": {
        "@type": "Brand",
        "name": "CPN Foods"
      },
      "description": "Authentic Andhra style Moringa Kaaram Podi, combining the health benefits of moringa leaves with traditional spices.",
      "category": "Spices & Podis",
      "countryOfOrigin": "IN",
      "manufacturer": {
        "@type": "Organization",
        "name": "CPN Foods"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('curry-powder-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="container py-5 mt-4">
      {/* Header Section */}
      <div className="row mb-5 pb-4 border-bottom">
        <div className="col-12 col-md-8">
          <h6 className="text-danger fw-bold text-uppercase mb-2">Moringa Karam Poodi</h6>
          <h1 className="fw-bold mb-3 display-5">Moringa Kaaram Podi – A Perfect Blend of Taste & Health</h1>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          {/* Introduction */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Moringa Kaaram Podi</h2>
            <p className="text-muted lh-lg mb-3">
              In today’s fast-paced lifestyle, we often compromise on nutrition while chasing convenience. What if your everyday meals could deliver both authentic taste and powerful nutrition—effortlessly?
            </p>
            <p className="text-muted lh-lg mb-3 fw-bold text-dark">
              Moringa Kaaram Podi brings you exactly that.
            </p>
            <hr className="my-5" />
          </section>

          {/* 🌿 The Power of Moringa */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">🌿 The Power of Moringa (Drumstick Leaves)</h2>
            <p className="text-muted lh-lg mb-3">
              Moringa is known as a superfood for a reason. Rich in essential nutrients, it supports:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li><strong>Strong immunity</strong></li>
              <li><strong>Better digestion</strong></li>
              <li><strong>Increased energy levels</strong></li>
              <li><strong>Overall wellness for your family</strong></li>
            </ul>
            <p className="text-muted lh-lg">
              By combining this powerhouse ingredient with traditional spices, we bring you a product that nourishes as it delights.
            </p>
            <hr className="my-5" />
          </section>

          {/* 🌶️ Authentic Andhra Flavour */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">🌶️ Authentic Andhra Flavour, Reinvented</h2>
            <p className="text-muted lh-lg mb-3">
              Rooted in traditional recipes, Moringa Kaaram Podi delivers:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>The bold, spicy kick of classic Andhra karam</li>
              <li>A perfectly balanced blend of spices</li>
              <li>A homely taste that pairs with every meal</li>
            </ul>
            <div className="p-3 bg-light border-start border-4 border-danger rounded mb-4">
              <p className="mb-0 text-muted">Whether it’s hot rice with ghee, idli, dosa, or even snacks—this podi adds instant flavor.</p>
            </div>
            <hr className="my-5" />
          </section>

          {/* ⚡ Healthy Eating Made Effortless */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">⚡ Healthy Eating Made Effortless</h2>
            <p className="text-muted lh-lg mb-3">
              No more complicated recipes or time-consuming cooking. Just add <strong>2 spoons</strong> to your meal and enjoy:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Instant taste enhancement</li>
              <li>Nutritional boost without extra effort</li>
              <li>A quick, satisfying meal solution</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* 🛡️ Purity You Can Trust */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">🛡️ Purity You Can Trust</h2>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Made with carefully selected ingredients</li>
              <li>No artificial colors or preservatives</li>
              <li>Hygienically prepared to maintain quality and freshness</li>
            </ul>
            <p className="text-muted lh-lg">
              Every pack reflects our commitment to purity and tradition.
            </p>
            <hr className="my-5" />
          </section>

          {/* 👨‍👩‍👧‍👦 Perfect for Every Home */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">👨‍👩‍👧‍👦 Perfect for Every Home</h2>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Ideal for busy professionals</li>
              <li>Great for children’s nutrition</li>
              <li>A smart addition for health-conscious families</li>
            </ul>
          </section>

          {/* WHY CHOOSE MORINGA KAARAM PODI? */}
          <section className="mb-5 bg-danger bg-opacity-10 p-4 rounded-4">
            <h2 className="fw-bold mb-4 text-danger">WHY CHOOSE MORINGA KAARAM PODI?</h2>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="text-success">✔</span> <span>Combines health + taste in one product</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-success">✔</span> <span>Adds nutrition to everyday meals effortlessly</span>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="text-success">✔</span> <span>Inspired by traditional recipes</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-success">✔</span> <span>A simple way to make your daily food better</span>
                </div>
              </div>
            </div>
            <p className="mt-4 fw-bold text-center text-dark h5">
              Just 2 spoons… and your meal transforms into a nutritious delight!
            </p>
          </section>
        </div>

        {/* Sidebar / Additional Info */}
        <div className="col-lg-4">
          <div className="mb-4">
            <img
              src={moringaKaramImg}
              alt="Moringa Karam Poodi"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="bg-light rounded p-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-3">Quick Facts</h4>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Origin</span>
              <span className="fw-bold">India (Andhra Style)</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Main Ingredients</span>
              <span className="fw-bold text-danger">Moringa Leaves, Traditional Spices</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Recommended Serving</span>
              <span className="fw-bold">2 Spoons per Meal</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Benefit</span>
              <span className="fw-bold text-success">Immunity & Digestion Boost</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
