import React from 'react';
import cpnLogoRed from '../img/cpn_logo_red.png';
import sec1Img from '../img/sec1.png';

function TruthSection() {
  return (
    <section className="truth-section py-5 bg-white border-bottom border-light">
      <div className="container py-5">
        <div className="row align-items-center">

          {/* Left Column: The Truth */}
          <div className="col-md-6 pe-md-5 mb-5 mb-md-0">
            <h2 className="display-6 fw-bold mb-4">
              The <span className="text-white px-2 py-1 d-inline-block" style={{ backgroundColor: '#FF0000' }}>Truth</span> about<br />
              Adulterated Chilli Powder
            </h2>
            <p className="text-danger fw-bold mb-3 small text-uppercase letter-spacing-1">Many brands:</p>
            <ul className="list-unstyled mb-4">
              <li className="mb-3 d-flex text-dark fw-medium align-items-center">
                <span className="bg-danger rounded-circle d-inline-block me-3" style={{ width: '6px', height: '6px' }}></span> Add synthetic red dyes
                for brighter color
              </li>
              <li className="mb-3 d-flex text-dark fw-medium align-items-center">
                <span className="bg-danger rounded-circle d-inline-block me-3" style={{ width: '6px', height: '6px' }}></span> Blend lower-grade chillies
              </li>
              <li className="mb-3 d-flex text-dark fw-medium align-items-center">
                <span className="bg-danger rounded-circle d-inline-block me-3" style={{ width: '6px', height: '6px' }}></span> Increase volume with fillers
              </li>
              <li className="mb-3 d-flex text-dark fw-medium align-items-center">
                <span className="bg-danger rounded-circle d-inline-block me-3" style={{ width: '6px', height: '6px' }}></span> Prioritize appearance over purity
              </li>

            </ul>
            <p className="fs-5 text-danger fst-italic fw-medium">
              That’s why some chilli powders look <br />
              <span className="fw-bold">unnaturally bright</span>
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6 ps-md-5 d-flex flex-column align-items-center justify-content-center text-center">
            <div className="w-100 d-flex justify-content-center">
              <img src={sec1Img} alt="Chilli Quality" className="img-fluid" style={{ maxWidth: '100%', objectFit: 'contain' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TruthSection;
