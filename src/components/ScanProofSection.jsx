import React from 'react';
import sec4Img from '../img/sec4.png';

function ScanProofSection() {
  return (
    <section className="scan-proof-section py-5 overflow-hidden" style={{ backgroundColor: '#fcfcfc' }}>
      <div className="container py-5 my-4">
        <div className="row align-items-center">
          
          {/* Left Column */}
          <div className="col-lg-5 col-md-12 mb-5 mb-lg-0 pe-lg-5">
            <h2 className="display-5 fw-bold mb-4">
              Scan Your Pack. See the <span className="text-white px-2 py-1 d-inline-block" style={{ backgroundColor: '#FF0000' }}>Proof</span>
            </h2>
            
            <p className="fs-4 mb-4 lh-base text-dark">
              Every CPN pack comes with<br/>
              a QR code that reveals
            </p>

            <ul className="list-unstyled mb-5 mt-4">
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-5">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> Origin region
              </li>
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-5">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> Harvest period
              </li>
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-5">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> Processing date
              </li>
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-5">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> Lab purity confirmation
              </li>
            </ul>
          </div>

          {/* Right Columns Container */}
          <div className="col-lg-7 col-md-12 mt-4 mt-lg-0">
            <div className="row align-items-center h-100 position-relative">
              
              <div className="col-md-5 z-2 position-relative px-lg-4 text-center text-md-start mb-5 mb-md-0">
                <p className="fs-5 text-dark mb-2">No blind trust required</p>
                <h3 className="display-6 fw-bold mb-4 position-relative" style={{ lineHeight: '1.2' }}>
                  <span style={{ color: '#FF0000', fontSize: '1.3em', verticalAlign: '-0.1em', marginRight: '4px' }}>“</span>
                  Transparency<br />
                  builds loyalty<span style={{ color: '#FF0000', fontSize: '1.3em', verticalAlign: '-0.1em', marginLeft: '4px' }}>”</span>
                </h3>
                <div className="mt-4">
                  <button className="btn rounded-0 text-white fw-bold fs-6 px-4 py-2" style={{ backgroundColor: '#FF0000', boxShadow: '0px 10px 20px rgba(255, 0, 0, 0.3)' }}>
                    Learn How It Works
                  </button>
                </div>
              </div>

              <div className="col-md-7 z-1 position-relative d-flex justify-content-end">
                <img src={sec4Img} alt="Scan QR Code" className="img-fluid img-mobile-reset" style={{ objectFit: 'contain', transform: 'scale(1.3) translateX(10%)' }} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ScanProofSection;
