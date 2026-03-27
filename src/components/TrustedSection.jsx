import React from 'react';

function TrustedSection() {
  return (
    <section className="trusted-section py-5 bg-white border-top border-light position-relative">
      <div className="container py-5 my-4">
        <div className="row align-items-center">

          {/* Left Column */}
          <div className="col-md-6 mb-5 mb-md-0 pe-md-5">
            <h2 className="display-6 fw-bold mb-5">
              <span className="text-white px-2 py-1 d-inline-block me-2" style={{ backgroundColor: '#FF0000' }}>Trusted</span> Across Generations
            </h2>

            <ul className="list-unstyled mb-5">
              <li className="mb-4 d-flex fw-medium fs-5 align-items-center text-dark">
                <span className="bg-danger rounded-circle d-inline-block me-3" style={{ width: '6px', height: '6px' }}></span> Farmers <strong className="text-danger mx-1">trust</strong> our grading
              </li>
              <li className="mb-4 d-flex fw-medium fs-5 align-items-center text-dark">
                <span className="bg-danger rounded-circle d-inline-block me-3" style={{ width: '6px', height: '6px' }}></span> Families <strong className="text-danger mx-1">trust</strong> our purity
              </li>
              <li className="mb-4 d-flex fw-medium fs-5 align-items-center text-dark">
                <span className="bg-danger rounded-circle d-inline-block me-3" style={{ width: '6px', height: '6px' }}></span> Businesses <strong className="text-danger mx-1">trust</strong> our consistency
              </li>
            </ul>

            <div className="d-flex gap-4">
              <div className="text-center">
                <div className="bg-light rounded-circle shadow-sm mx-auto mb-2 border border-2 border-white mb-3" style={{ width: '70px', height: '70px' }}></div>
                <div className="text-white p-2 shadow-sm rounded-bottom mx-auto" style={{ backgroundColor: '#FF0000', width: '85px', fontSize: '0.65rem', lineHeight: '1.4', fontWeight: '600' }}>Finally found<br />chilli powderr<br />that tastes real</div>
              </div>
              <div className="text-center">
                <div className="bg-light rounded-circle shadow-sm mx-auto mb-2 border border-2 border-white mb-3" style={{ width: '70px', height: '70px' }}></div>
                <div className="text-white p-2 shadow-sm rounded-bottom mx-auto" style={{ backgroundColor: '#FF0000', width: '85px', fontSize: '0.65rem', lineHeight: '1.4', fontWeight: '600' }}>Color is natural <br />- not artificially <br />bright</div>
              </div>
              <div className="text-center">
                <div className="bg-light rounded-circle shadow-sm mx-auto mb-2 border border-2 border-white mb-3" style={{ width: '70px', height: '70px' }}></div>
                <div className="text-white p-2 shadow-sm rounded-bottom mx-auto" style={{ backgroundColor: '#FF0000', width: '85px', fontSize: '0.65rem', lineHeight: '1.4', fontWeight: '600' }}>Consistent<br />heat,<br />every batch</div>
              </div>
            </div>
          </div>

          {/* Right Column: Review */}
          <div className="col-md-6 d-flex justify-content-center align-items-center ps-md-5">
            <div className="p-4 bg-white rounded-3 position-relative" style={{ maxWidth: '420px' }}>
              <div className="d-flex align-items-start mb-3">
                {/* <div className="bg-light rounded-circle me-4 flex-shrink-0 shadow-sm" style={{width: '65px', height: '65px', backgroundImage: 'url("https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div> */}
                <div className="position-relative">
                  <span className="text-danger fs-3 position-absolute" style={{ top: '-10px', left: '-20px' }}>"</span>
                  <p className="fw-medium text-dark mb-0 position-relative z-1" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                    As a modern homemaker I love CPN Red Chilli Powder! It gives real authentic red color and consistent freshness every time.
                    <span className="text-danger fs-3 position-absolute ms-1" style={{ bottom: '-25px' }}>"</span>
                  </p>
                  <div className="d-flex text-danger fs-5 mt-3 pt-2">
                    ★★★★
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TrustedSection;
