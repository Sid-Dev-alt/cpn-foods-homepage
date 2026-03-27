import React from 'react';
import sec6Img from '../img/sec6.png';

function ReliableSupplySection() {
  return (
    <section className="reliable-supply-section py-5 bg-white border-top border-light overflow-hidden">
      <div className="container py-5 my-4">
        <div className="row align-items-center position-relative">
          
          {/* Left Column */}
          <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5 position-relative z-2">
            <h2 className="display-5 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
              <span className="text-white px-2 py-1 d-inline-block me-2" style={{ backgroundColor: '#FF0000' }}>Reliable</span> Supply for Serious Kitchens
            </h2>
            <p className="mb-5 lh-sm text-dark fw-normal" style={{ fontSize: '1.8rem', maxWidth: '500px' }}>
              Restaurants. Manufacturers. Exporters.
            </p>

            <ul className="list-unstyled mb-5 mt-5">
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-4">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> Bulk availability
              </li>
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-4">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> Quality consistency
              </li>
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-4">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> Direct sourcing advantage
              </li>
              <li className="mb-3 d-flex text-dark fw-bold align-items-center fs-4">
                <span className="rounded-circle d-inline-block me-3" style={{ width: '5px', height: '5px', backgroundColor: '#FF0000' }}></span> Decades of mandi expertise
              </li>
            </ul>

            <div className="text-start text-lg-end w-100 pe-3 pe-lg-0 mt-5 pt-4">
               <button className="btn rounded-0 text-white fw-bold fs-5 px-4 py-3" style={{ backgroundColor: '#FF0000', boxShadow: '0px 10px 20px rgba(255, 0, 0, 0.3)' }}>
                 Request Bulk Pricing
               </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-6 position-relative z-1 d-flex justify-content-end align-items-center">
            <img src={sec6Img} alt="CPN Warehouse Pallets" className="img-fluid img-mobile-reset" style={{ objectFit: 'contain', transform: 'scale(1.15) translateX(5%)' }} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ReliableSupplySection;
