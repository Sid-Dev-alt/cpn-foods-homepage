import React from 'react';
import sec7Img from '../img/sec7.png';

function StandardSection() {
  return (
    <section className="standard-section py-5 bg-white border-top border-light position-relative overflow-hidden">
      
      <div className="container py-5 my-4 z-1 position-relative">
        <div className="row align-items-center position-relative">
          
          {/* Left Column: Text content */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 pe-lg-5 position-relative z-2">
            <h2 className="display-5 fw-bold mb-5 text-dark" style={{ letterSpacing: '-1px' }}>
              83 Years. One Standard
            </h2>
            <p className="text-dark fw-normal lh-sm mb-5" style={{ fontSize: '1.8rem', maxWidth: '500px' }}>
              When farmers came to us in 1943,<br />
              we protected them from unfair trade.
            </p>

            <div className="mt-5 pt-3">
              <p className="text-dark fw-bold mb-2" style={{ fontSize: '1.25rem' }}>Today, we protect consumers from adulteration.</p>
              <p className="text-dark fw-bold mb-2" style={{ fontSize: '1.25rem' }}>The market may have changed.</p>
              <p className="text-dark fw-bold mb-0" style={{ fontSize: '1.25rem' }}>Our principles have not.</p>
            </div>
          </div>

          {/* Right Column: sec7.png Image */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-center justify-content-lg-end align-items-center mt-5 mt-lg-0 position-relative z-1">
             <img src={sec7Img} alt="CPN Pure Since 1943" className="img-fluid img-mobile-reset" style={{ objectFit: 'contain', transform: 'scale(1.2) translateX(5%)' }} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default StandardSection;
