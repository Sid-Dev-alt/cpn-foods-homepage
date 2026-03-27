import React from 'react';
import cpnLogoWhite from '../img/cpn_logo_white.png';

function Hero() {
  return (
    <section className="hero-section" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <div className="container-fluid p-0">
        <div className="row g-0">

          {/* Left Side: Image and Headline */}
          <div className="col-lg-6 bg-white position-relative d-flex flex-column align-items-center pt-5" style={{ minHeight: '80vh', overflow: 'hidden' }}>

            {/* Headline */}
            <div className="w-100 px-5 mt-4" style={{ maxWidth: '600px', zIndex: 2 }}>
              <h1 className="fw-bold text-dark lh-sm" style={{ fontSize: '3.5rem', letterSpacing: '-1px' }}>
                <span className="text-white px-2 py-1 d-inline-block shadow-sm" style={{ backgroundColor: '#FF0000' }}>Stop</span> <span style={{ borderBottom: '4px solid #ea0000', paddingBottom: '2px' }}>Buying</span> Artificially<br />
                Colored Spices
              </h1>
            </div>

            {/* Spices Image Area */}
            <div className="w-100 position-relative mt-auto d-flex justify-content-center align-items-end" style={{ height: '55vh', zIndex: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
                alt="Colorful spices with magnifying glass"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          {/* Right Side: Red Background and Call to Action */}
          <div className="col-lg-6 d-flex flex-column justify-content-center p-5 bg-cpn-red" style={{ minHeight: '80vh' }}>
            <div className="px-md-5 mx-md-4" style={{ maxWidth: '550px' }}>

              <h2 className="fw-bold mb-4 lh-1 text-white" style={{ fontSize: '4.5rem', letterSpacing: '-1px' }}>
                <span className="d-block">Choose</span>
                <span className="d-block">What's Pure.</span>
              </h2>

              <div className="d-flex align-items-center mb-4 text-dark">
                <img src={cpnLogoWhite} alt="CPN Foods" style={{ height: '40px' }} className="me-3" />
                <h3 className="fw-bold m-0 fs-2 text-dark">Since 1943.</h3>
              </div>

              <p className="mb-5 fs-5 fw-medium text-dark lh-sm pe-4">
                For 83 years, CPN has protected farmers<br />from being cheated. Now we protect families<br />from adulterated spice.
              </p>

              <div className="row mb-5 text-dark fw-bold fs-5">
                <div className="col-6 mb-3 d-flex align-items-center">
                  <div className="bg-white rounded-circle me-2 shadow-sm" style={{ width: '10px', height: '10px' }}></div>
                  Lab Tested
                </div>
                <div className="col-6 mb-3 d-flex align-items-center">
                  <div className="bg-white rounded-circle me-2 shadow-sm" style={{ width: '10px', height: '10px' }}></div>
                  No Artificial Enhancers
                </div>
                <div className="col-6 d-flex align-items-center">
                  <div className="bg-white rounded-circle me-2 shadow-sm" style={{ width: '10px', height: '10px' }}></div>
                  Farmer Direct Sourcing
                </div>
                <div className="col-6 d-flex align-items-center">
                  <div className="bg-white rounded-circle me-2 shadow-sm" style={{ width: '10px', height: '10px' }}></div>
                  Batch Traceable
                </div>
              </div>

              <div className="d-flex flex-wrap gap-4">
                <button
                  className="btn bg-white text-danger fw-bold rounded-0 px-4 py-2 border-0"
                  style={{ boxShadow: '0 8px 15px rgba(0,0,0,0.2)', fontSize: '1.1rem' }}>
                  Shop Pure Spices Now
                </button>
                <button
                  className="btn bg-white text-danger fw-bold rounded-0 px-4 py-2 border-0"
                  style={{ boxShadow: '0 8px 15px rgba(0,0,0,0.2)', fontSize: '1.1rem' }}>
                  Verify Our Purity
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
