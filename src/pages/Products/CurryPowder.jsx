import React, { useEffect } from 'react';
import curryPowderImg from '../../img/sec7.png';

export default function CurryPowder() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'kura-karam-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Curry Powder (Kura Karam)",
      "brand": {
        "@type": "Brand",
        "name": "CPN Foods"
      },
      "description": "A powerful blend of 14 carefully selected spices, crafted to give your curry the perfect balance of taste, aroma, and spice.",
      "category": "Spices & Podis",
      "countryOfOrigin": "IN",
      "manufacturer": {
        "@type": "Organization",
        "name": "CPN Foods"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('kura-karam-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="container py-5 mt-4">
      {/* Header Section */}
      <div className="row mb-5 pb-4 border-bottom">
        <div className="col-12 col-md-8">
          <h6 className="text-danger fw-bold text-uppercase mb-2">Curry Powder (Kura Karam)</h6>
          <h1 className="fw-bold mb-3 display-5">Because great curry shouldn’t be complicated.</h1>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          {/* Introduction */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Introducing Curry Powder (Kura Karam)</h2>
            <p className="text-muted lh-lg mb-3">
              In today’s busy life, cooking a delicious curry often means using 5–8 different spices, getting the proportions right, and spending time grinding and mixing.
            </p>
            <p className="text-muted lh-lg mb-3 fw-bold text-dark h5">
              Not anymore.
            </p>
            <p className="text-muted lh-lg mb-3">
              <strong>Curry Powder (Kura Karam)</strong> is your complete curry solution. A powerful blend of <strong>14 carefully selected spices</strong>, crafted to give your curry the perfect balance of taste, aroma, and spice.
            </p>
            <hr className="my-5" />
          </section>

          {/* Why Choose Curry Powder (Kura Karam)? */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Why Choose Curry Powder (Kura Karam)?</h2>
            
            <div className="mb-4">
              <h5 className="fw-bold text-danger">✅ No More Multiple Masalas</h5>
              <p className="text-muted lh-lg">
                Skip the hassle of adding chilli powder, dhania, jeera, garam masala and more. Everything is already perfectly blended.
              </p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold text-danger">✅ Consistent Taste Every Time</h5>
              <p className="text-muted lh-lg">
                No guesswork. No trial and error. Every curry tastes rich, balanced, and delicious.
              </p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold text-danger">✅ Saves Time & Effort</h5>
              <p className="text-muted lh-lg">
                No grinding. No measuring. Perfect for busy professionals, bachelors, and young families.
              </p>
            </div>

            <hr className="my-5" />
          </section>

          {/* Works for Every Curry */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Works for Every Curry</h2>
            <p className="text-muted lh-lg mb-3">
              Whether you cook:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li><strong>Veg curries</strong></li>
              <li><strong>Paneer dishes</strong></li>
              <li><strong>Egg curries</strong></li>
              <li><strong>Chicken curries</strong></li>
            </ul>
            <p className="text-muted lh-lg fw-bold text-dark">
              One masala does it all.
            </p>
            <hr className="my-5" />
          </section>

          {/* Made with Premium Ingredients */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Made with Premium Ingredients</h2>
            <p className="text-muted lh-lg mb-3">
              Prepared using high-quality spices including <strong>Premium Guntur Chilli</strong>, known for its rich colour and bold flavour.
            </p>
            <hr className="my-5" />
          </section>

          {/* How to Use */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">How to Use</h2>
            <div className="row g-4 text-center">
              <div className="col-md-4">
                <div className="p-4 bg-light rounded-4 h-100">
                  <div className="h1 text-danger mb-3">1</div>
                  <p className="mb-0">Start your curry as usual (onion, tomato, etc.)</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 bg-light rounded-4 h-100">
                  <div className="h1 text-danger mb-3">2</div>
                  <p className="mb-0">Add 2 spoons of Curry Powder (Kura Karam)</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 bg-light rounded-4 h-100">
                  <div className="h1 text-danger mb-3">3</div>
                  <p className="mb-0">Mix well and cook</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-muted text-center fw-bold">That’s it. No extra masalas needed.</p>
            <hr className="my-5" />
          </section>

          {/* Perfect for Today’s Kitchen */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Perfect for Today’s Kitchen</h2>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Cooking after a long workday</li>
              <li>Living away from home</li>
              <li>Learning to cook</li>
              <li>Looking for consistent taste</li>
            </ul>
            <p className="text-muted lh-lg">
              Curry Powder (Kura Karam) makes cooking simple and satisfying.
            </p>
          </section>

          {/* Summary Box */}
          <section className="mb-5 bg-danger bg-opacity-10 p-4 rounded-4 text-center">
            <h3 className="fw-bold mb-2">CPN FOODS</h3>
            <p className="text-danger fw-bold mb-3">Purity Since 1943</p>
            <h2 className="fw-bold mb-4 text-dark italic">"One Spice. Endless Curries."</h2>
            <p className="mt-4 fw-bold text-dark h5">
              Just 2 spoons. Perfect curry.
            </p>
          </section>
        </div>

        {/* Sidebar / Additional Info */}
        <div className="col-lg-4">
          <div className="mb-4">
            <img
              src="https://placehold.co/600x400"
              alt="Curry Powder (Kura Karam)"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="bg-light rounded p-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-3">Quick Facts</h4>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Product</span>
              <span className="fw-bold">Curry Powder (Kura Karam)</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Spices Count</span>
              <span className="fw-bold text-danger">14 Carefully Selected Spices</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Primary Ingredient</span>
              <span className="fw-bold">Premium Guntur Chilli</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Usage</span>
              <span className="fw-bold text-success">Just 2 Spoons - No Additives</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
