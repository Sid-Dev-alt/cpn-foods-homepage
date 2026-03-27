import React from 'react';
import cpnLogoRed from '../img/cpn_logo_red.png';
import sec5Img from '../img/sec5.png';

function StandBehindSection() {
  return (
    <section className="stand-behind-section py-5 bg-white border-top border-light">
      <div className="container py-5 my-3">
        <div className="row align-items-center position-relative">
          
          {/* Left Column: Text Content */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 pe-lg-5 position-relative z-2">
            <h2 className="display-5 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
              Not Satisfied?<br/>
              We <span className="text-white px-2 py-1 d-inline-block" style={{ backgroundColor: '#FF0000' }}>Stand</span> Behind Every Pack
            </h2>
            
            <p className="mb-5 lh-sm text-dark fw-normal" style={{ fontSize: '1.6rem', maxWidth: '500px' }}>
              If you believe our product does not meet the purity promise, contact us.
            </p>

            <div className="mt-5 pt-3">
              <p className="text-dark fw-bold mb-2" style={{ fontSize: '1.25rem' }}>We don't hide behind marketing claims.</p>
              <p className="text-dark fw-bold mb-0" style={{ fontSize: '1.25rem' }}>We stand behind our name - established 1943.</p>
            </div>
          </div>

          {/* Right Column: Pack Image Array */}
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 position-relative z-1 d-flex justify-content-end">
            <img src={sec5Img} alt="CPN Products Display" className="img-fluid img-mobile-reset" style={{ objectFit: 'contain', transform: 'scale(1.2) translateX(10%)' }} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default StandBehindSection;
