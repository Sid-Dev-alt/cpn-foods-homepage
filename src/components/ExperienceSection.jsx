import React from 'react';

function ExperienceSection() {
  return (
    <section className="experience-section py-5 bg-white border-top border-light">
      <div className="container py-5 my-4">
        <div className="row align-items-center">
          
          <div className="col-md-6 mb-5 mb-md-0 pe-md-5">
            <h2 className="display-6 fw-bold mb-3">
              Experience the <span className="text-white px-2 py-1 d-inline-block" style={{ backgroundColor: '#FF0000' }}>Difference</span> Today
            </h2>
            <p className="text-dark fs-5 fw-medium mb-5 pt-2">Switch to clean spice.</p>

            <ul className="list-unstyled mb-0">
              <li className="mb-4 d-flex text-dark fw-bold fs-5 align-items-center">
                <span className="bg-danger rounded-circle d-inline-block me-3" style={{width: '6px', height: '6px'}}></span> First Order Benefit
              </li>
              <li className="mb-4 d-flex text-dark fw-bold fs-5 align-items-center">
                <span className="bg-danger rounded-circle d-inline-block me-3" style={{width: '6px', height: '6px'}}></span> Free Shipping Above ₹
              </li>
              <li className="mb-4 d-flex text-dark fw-bold fs-5 align-items-center">
                <span className="bg-danger rounded-circle d-inline-block me-3" style={{width: '6px', height: '6px'}}></span> Subscribe & Save 5%
              </li>
            </ul>
          </div>

          <div className="col-md-6 text-center text-md-start ps-md-5">
             <div className="d-flex flex-column align-items-center align-items-md-start pe-md-4">
               <div className="position-relative mb-5 w-100 ps-4">
                  <h3 className="display-5 fw-bold lh-base text-start position-relative z-1" style={{ maxWidth: '400px' }}>
                    <span style={{ color: '#FF0000', fontSize: '1.3em', verticalAlign: '-0.1em', marginLeft: '-0.5em', marginRight: '2px' }}>“</span>
                    Pure spice should not be a luxury - it should be a standard<span style={{ color: '#FF0000', fontSize: '1.3em', verticalAlign: '-0.1em', marginLeft: '2px' }}>”</span>
                  </h3>
               </div>
               <div className="mt-2 ps-4 text-start w-100">
                 <button className="btn rounded-0 text-white fw-bold fs-6 px-4 py-2" style={{ backgroundColor: '#FF0000', boxShadow: '0px 10px 20px rgba(255, 0, 0, 0.3)' }}>Shop Now</button>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
