import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function IdentifyAdulteration() {
  useEffect(() => {
    document.title = "Simple Ways to Identify Adulteration in Chilli Powder at Home";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn simple home tests to identify adulteration in chilli powder like the water test, palm rub test, and more.");
    }
  }, []);

  return (
    <div className="container py-5 mt-4">
      <Link to="/knowledge-hub" className="text-decoration-none text-danger fw-bold small d-inline-flex align-items-center mb-4 hover-translate-x-n3 transition-all">
        <HiArrowNarrowLeft className="me-2" /> BACK TO KNOWLEDGE HUB
      </Link>

      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="row mb-5 pb-4 border-bottom"
      >
        <div className="col-lg-10">
          <h6 className="text-danger text-uppercase fw-bold ls-2 mb-3">Knowledge Hub • Food Safety</h6>
          <h1 className="display-4 fw-bold mb-4">Simple Ways to Identify Adulteration in Chilli Powder at Home</h1>
          <h3 className="h4 text-muted mb-4">Is Your Chilli Powder Really Pure?</h3>
          <p className="lead text-muted lh-base">
            Chilli powder is a daily essential in Indian cooking. But many low-quality products in the market are adulterated with artificial colours, brick powder, starch, and other fillers to increase profits.
          </p>
          <p className="lead text-muted lh-base">
            The good news is — you can identify many forms of adulteration using simple checks at home.
          </p>
        </div>
      </motion.div>

      <div className="row g-5">
        <div className="col-lg-8">
          <section className="mb-5">
            <div className="row g-4">
              {/* 1. Water Test */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="card-header bg-danger text-white py-3 px-4">
                    <h5 className="fw-bold mb-0">1. Water Test</h5>
                  </div>
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-md-4 border-end">
                        <h6 className="fw-bold text-dark mb-3">How to Do It</h6>
                        <p className="small text-muted">Add one spoon of chilli powder to a glass of water and observe carefully.</p>
                      </div>
                      <div className="col-md-4 border-end">
                        <h6 className="fw-bold text-success mb-3">Pure Chilli Powder</h6>
                        <ul className="small text-muted ps-3">
                          <li>Settles slowly</li>
                          <li>Natural colour spreads gradually</li>
                          <li>Water does not turn bright red instantly</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6 className="fw-bold text-danger mb-3">Adulterated Chilli Powder</h6>
                        <ul className="small text-muted ps-3">
                          <li>Artificial colour spreads immediately</li>
                          <li>Water becomes unnaturally red</li>
                          <li>Heavy particles settle quickly</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Palm Rub Test */}
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="card-header bg-danger text-white py-3 px-4">
                    <h5 className="fw-bold mb-0">2. Palm Rub Test</h5>
                  </div>
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-md-4 border-end">
                        <h6 className="fw-bold text-dark mb-3">How to Do It</h6>
                        <p className="small text-muted">Rub a small quantity of chilli powder between your fingers or on your palm.</p>
                      </div>
                      <div className="col-md-4 border-end">
                        <h6 className="fw-bold text-success mb-3">Signs of Pure Chilli Powder</h6>
                        <ul className="small text-muted ps-3">
                          <li>Mild natural staining</li>
                          <li>Smooth texture</li>
                          <li>Natural chilli aroma</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6 className="fw-bold text-danger mb-3">Signs of Adulteration</h6>
                        <ul className="small text-muted ps-3">
                          <li>Excessively bright red stain</li>
                          <li>Gritty particles</li>
                          <li>Dusty or chemical smell</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Tissue Paper Test */}
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="card-header bg-dark text-white py-3 px-4">
                    <h5 className="fw-bold mb-0">3. Tissue Paper Test for Artificial Colours</h5>
                  </div>
                  <div className="card-body p-4">
                    <h6 className="fw-bold text-dark mb-2">How to Do It</h6>
                    <p className="small text-muted mb-3">Sprinkle chilli powder on a wet tissue paper or cotton cloth.</p>
                    <div className="p-3 bg-light rounded-3 mb-2">
                      <strong className="small text-success d-block mb-1">Pure Chilli Powder:</strong>
                      <p className="small text-muted mb-0">Releases light natural orange-red colour slowly.</p>
                    </div>
                    <div className="p-3 bg-light rounded-3">
                      <strong className="small text-danger d-block mb-1">Adulterated Powder:</strong>
                      <p className="small text-muted mb-0">Produces dark chemical-like stains quickly. Artificial dye spreads aggressively.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Brick Powder or Sand Test */}
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="card-header bg-dark text-white py-3 px-4">
                    <h5 className="fw-bold mb-0">4. Check for Brick Powder or Sand</h5>
                  </div>
                  <div className="card-body p-4">
                    <h6 className="fw-bold text-dark mb-2">How to Do It</h6>
                    <p className="small text-muted mb-3">Mix chilli powder in water thoroughly and let it settle.</p>
                    <div className="p-3 bg-light rounded-3 mb-2">
                      <strong className="small text-success d-block mb-1">Pure Chilli Powder:</strong>
                      <p className="small text-muted mb-0">Fine particles stay suspended for some time.</p>
                    </div>
                    <div className="p-3 bg-light rounded-3">
                      <strong className="small text-danger d-block mb-1">Adulterated Powder:</strong>
                      <p className="small text-muted mb-0">Heavy sand or brick particles settle at the bottom quickly.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Observe the Colour Carefully */}
              <div className="col-12">
                <div className="p-4 bg-white border rounded-4 shadow-sm">
                  <h5 className="fw-bold mb-3">5. Observe the Colour Carefully</h5>
                  <p className="small text-muted mb-3">Consumers often mistake bright red colour for quality.</p>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="d-flex mb-2">
                        <span className="badge bg-success-subtle text-success me-2">PURE CHILLI POWDER</span>
                      </div>
                      <ul className="small text-muted">
                        <li>Natural deep red or reddish-brown tone</li>
                        <li>Slight variation in colour</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex mb-2">
                        <span className="badge bg-danger-subtle text-danger me-2">SUSPICIOUS CHILLI POWDER</span>
                      </div>
                      <ul className="small text-muted">
                        <li>Extremely bright shiny red</li>
                        <li>Artificial-looking uniform colour</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">Common Adulterants Found in Chilli Powder</h2>
            <p className="text-muted lh-lg mb-4">
              Some common adulterants include:
            </p>
            <div className="row g-3">
              {[
                "Artificial dyes",
                "Brick powder",
                "Red soil",
                "Sawdust",
                "Starch",
                "Oil-extracted chilli waste"
              ].map((item, idx) => (
                <div key={idx} className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-white border rounded-3 shadow-sm transition-all">
                    <div className="flex-shrink-0 bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                      <small>!</small>
                    </div>
                    <div className="ms-3 fw-medium text-dark">{item}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted mt-4">These substances reduce quality and may cause health problems over time.</p>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">Health Risks of Adulterated Chilli Powder</h2>
            <div className="p-4 border-start border-danger border-4 bg-light rounded-end-4 shadow-sm">
              <p className="text-muted lh-lg mb-0">
                Regular consumption of adulterated spices may lead to:
              </p>
              <ul className="text-muted mt-3 mb-0 lh-lg">
                <li>Acidity</li>
                <li>Stomach irritation</li>
                <li>Allergic reactions</li>
                <li>Digestive disorders</li>
                <li>Long-term toxicity from synthetic colours</li>
              </ul>
              <div className="mt-3 p-3 bg-white rounded-3 border-start border-warning border-4">
                <p className="small text-dark fw-bold mb-0">Children and elderly people are more vulnerable to harmful food additives.</p>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">Tips to Buy Pure Chilli Powder</h2>
            <div className="row g-3">
              {[
                "Buy from trusted brands",
                "Check FSSAI certification",
                "Avoid unnaturally bright products",
                "Prefer “No Artificial Colours” labels",
                "Choose fresh and hygienically packed spices"
              ].map((item, idx) => (
                <div key={idx} className="col-md-12">
                  <div className="d-flex align-items-center p-3 bg-white border rounded-3 shadow-sm transition-all">
                    <div className="flex-shrink-0 bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                      <small>✓</small>
                    </div>
                    <div className="ms-3 fw-medium text-dark">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-5 py-5 border-top text-center">
            <h2 className="fw-bold mb-3">Pure Spices Mean Safer Food</h2>
            <p className="text-muted lead mb-4">
              A simple kitchen ingredient should never become a hidden health risk.
            </p>
            <p className="text-muted lh-lg">
              With a few easy home tests, consumers can identify suspicious chilli powder and make safer choices for their family. Pure chilli powder not only enhances taste and aroma — it preserves health, authenticity, and trust in everyday cooking.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="p-4 bg-white border shadow-sm rounded-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-4">Quick Guide</h4>
            <div className="mb-4">
              <span className="badge bg-success mb-2">QUICK TEST</span>
              <p className="small text-muted">Water test: Pure powder settles slowly.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-danger mb-2">COMMON ADULTERANTS</span>
              <p className="small text-muted">Brick powder, Artificial Dyes, Sawdust.</p>
            </div>
            <div className="mb-4">
              <span className="badge bg-warning text-dark mb-2">HEALTH RISKS</span>
              <p className="small text-muted">Stomach irritation, Toxicity, Digestive issues.</p>
            </div>
            <hr />
            <div className="mt-4">
              <h5 className="fw-bold mb-3">CPN Purity Promise</h5>
              <p className="small text-muted">We ensure 100% pure chilli powder directly from farms with no added colours or fillers.</p>
              <Link to="/sourcing-quality" className="btn btn-outline-danger btn-sm w-100 rounded-pill">Learn About Our Quality</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
