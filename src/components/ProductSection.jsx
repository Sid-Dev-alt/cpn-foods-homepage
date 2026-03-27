import React from 'react';
import sec3Img from '../img/sec3.jpg';

function ProductSection() {
  return (
    <section className="product-section py-5 bg-white border-top border-light overflow-hidden">
      <div className="container py-5 my-4">
        
        {/* Top Header Row */}
        <div className="row mb-5">
          <div className="col-12 text-md-start text-center">
            <h2 className="display-6 fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
              CPN Guntur <span className="text-white px-2 py-1 d-inline-block" style={{ backgroundColor: '#FF0000' }}>Super Hot</span> Chilli Powder
            </h2>
            <p className="fs-4 text-dark mb-0">
              Authentic heat. Natural red tone. Zero artificial color.
            </p>
          </div>
        </div>

        <div className="row align-items-center position-relative">

          {/* Left Column: Why Switch */}
          <div className="col-lg-5 pe-lg-5 mb-5 mb-lg-0">
            <p className="fw-medium mb-3 fs-5" style={{ color: '#FF0000' }}>Why customers switch to CPN:</p>
            <ul className="list-unstyled mb-5">
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-5">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> Stronger natural heat
              </li>
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-5">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> Clean aroma
              </li>
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-5">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> No throat irritation from dyes
              </li>
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-5">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> Consistent batch quality
              </li>
            </ul>

            <div className="p-4 rounded-0 mb-4" style={{ backgroundColor: '#e8e8e8' }}>
              <p className="text-dark fw-medium fst-italic mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>
                If your chilli powder stains unnaturally bright<br />
                or leaves residue - it's not pure.
              </p>
            </div>
          </div>

          {/* Right Columns Container: Quote and Image */}
          <div className="col-lg-7 col-md-12 mt-4 mt-lg-0">
            <div className="row align-items-center h-100 position-relative">
              
              <div className="col-md-7 z-2 position-relative px-lg-4 text-center text-md-start mb-5 mb-md-0">
                <h3 className="display-6 fw-bold mb-4 position-relative" style={{ lineHeight: '1.2' }}>
                  <span style={{ color: '#FF0000', fontSize: '1.3em', verticalAlign: '-0.1em', marginRight: '4px' }}>“</span>
                  Experience the<br />
                  difference real Guntur<br />
                  chilli makes.<span style={{ color: '#FF0000', fontSize: '1.3em', verticalAlign: '-0.1em', marginLeft: '4px' }}>”</span>
                </h3>
                <div className="d-flex gap-4 mt-5 justify-content-center justify-content-md-start">
                  <button className="btn rounded-0 text-white fw-medium fs-6 px-4 py-2" style={{ backgroundColor: '#FF0000', boxShadow: '0px 8px 15px rgba(255, 0, 0, 0.3)' }}>Buy Now</button>
                  <button className="btn rounded-0 text-white fw-medium fs-6 px-4 py-2" style={{ backgroundColor: '#FF0000', boxShadow: '0px 8px 15px rgba(255, 0, 0, 0.3)' }}>View Lab Report</button>
                </div>
              </div>

              <div className="col-md-5 z-1 position-relative d-flex justify-content-end">
                <img src={sec3Img} alt="CPN Chilli Bowl" className="img-fluid img-mobile-reset" style={{ objectFit: 'contain', transform: 'scale(1.5) translateX(10%)' }} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductSection;
