import React from 'react';
import cpnLogoRed from '../img/cpn_logo_red.png';
import sec2Img from '../img/sec2.png';

function DifferenceSection() {
  return (
    <section className="difference-section py-5 bg-white overflow-hidden">
      <div className="container py-5 mt-4 mb-4">
        <div className="row">

          {/* Left Column: What Makes CPN Different */}
          <div className="col-lg-5 col-md-12 pe-lg-5 mb-5 mb-lg-0 position-relative">
            <h2 className="display-5 fw-bold mb-4">
              What Makes <span className="text-white px-2 d-inline-block" style={{ backgroundColor: '#FF0000' }}>CPN</span> Different?
            </h2>
            <h4 className="fw-normal lh-base mb-4 text-dark">
              We don't trade in illusion.<br />
              We trade in integrity.
            </h4>

            <p className="text-secondary small mb-5 lh-lg pe-lg-5" style={{ fontSize: '0.95rem' }}>
              For three generations, our family has operated in the
              heart of agricultural markets - grading, evaluating, and
              sourcing produce at the mandi level.
            </p>

            <div className="mt-5 border-start border-danger border-4 ps-3">
              <p className="text-danger fw-bold mb-1" style={{ letterSpacing: '0.2px' }}>We know how quality looks.</p>
              <p className="text-danger fw-bold mb-1" style={{ letterSpacing: '0.2px' }}>We know how adulteration happens.</p>
              <p className="text-danger fw-bold mb-0" style={{ letterSpacing: '0.2px' }}>And we refuse it.</p>
            </div>
          </div>

          {/* Right Columns Container: Quote and Image */}
          <div className="col-lg-7 col-md-12">
            <div className="row align-items-center h-100 position-relative">
              
              <div className="col-md-6 z-2 position-relative px-lg-4 text-center text-md-start mb-5 mb-md-0">
                <h3 className="display-6 fw-bold mb-4 position-relative" style={{ lineHeight: '1.2' }}>
                  <span style={{ color: '#FF0000', fontSize: '1.3em', verticalAlign: '-0.1em', marginRight: '2px' }}>“</span>
                  That expertise now<br />
                  goes directly into<br />
                  every pack.<span style={{ color: '#FF0000', fontSize: '1.3em', verticalAlign: '-0.1em', marginLeft: '2px' }}>”</span>
                </h3>
                <div className="mt-5">
                  <button className="btn rounded-0 text-white fw-bold fs-6 px-4 py-2" style={{ backgroundColor: '#FF0000', boxShadow: '0px 10px 20px rgba(255, 0, 0, 0.3)' }}>
                    Explore Our Collection
                  </button>
                </div>
              </div>

              <div className="col-md-6 z-1 position-relative d-flex justify-content-end">
                <img src={sec2Img} alt="CPN Collection" className="img-fluid img-mobile-reset" style={{ objectFit: 'contain', transform: 'scale(1.3) translateX(10%)' }} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DifferenceSection;
