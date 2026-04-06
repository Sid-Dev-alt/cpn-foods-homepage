import React from 'react';
import { motion } from 'framer-motion';

export default function SourcingQuality() {
  return (
    <div className="container-fluid p-0 mb-5">
      {/* Red Header */}
      <div className="w-100 d-flex align-items-center px-4 px-lg-5" style={{ backgroundColor: '#EA0000', height: '140px' }}>
        <h1 className="text-white fw-bold display-4 m-0" style={{ letterSpacing: '-1px' }}>Sourcing & Quality</h1>
      </div>

      {/* Hero Section */}
      <section className="container py-5 my-md-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 pe-lg-5">
            <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: '-1px' }}>h</h1>
            <p className="lead text-muted mb-4">para</p>

          </div>
          <div className="col-lg-6">
            <div className="bg-light rounded-4 shadow-sm w-100" style={{ height: '500px', objectFit: 'cover' }}></div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 (Image Left, Text Right) */}
      <section className="container py-5 my-5">
        <div className="row align-items-center g-5 flex-lg-row-reverse">
          <div className="col-lg-6 ps-lg-5">
            <h2 className="display-6 fw-bold mb-4">h</h2>
            <ul className="list-unstyled text-muted mb-4 d-flex flex-column gap-2">
              <li className="d-flex align-items-center gap-2"><span className="text-secondary">-</span> para</li>
              <li className="d-flex align-items-center gap-2"><span className="text-secondary">-</span> para</li>
              <li className="d-flex align-items-center gap-2"><span className="text-secondary">-</span> para</li>
              <li className="d-flex align-items-center gap-2"><span className="text-secondary">-</span> para</li>
            </ul>

          </div>
          <div className="col-lg-6">
            <div className="bg-light rounded-4 shadow-sm w-100" style={{ height: '450px' }}></div>
          </div>
        </div>
      </section>

      {/* Logos Strip */}
      <section className="container py-5 text-center my-md-4">
        <h3 className="fw-bold mb-5">h</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5 opacity-50">
          <h5 className="m-0 fw-bold">h</h5>
          <h5 className="m-0 fw-bold">h</h5>
          <h5 className="m-0 fw-bold">h</h5>
          <h5 className="m-0 fw-bold">h</h5>
          <h5 className="m-0 fw-bold">h</h5>
        </div>
      </section>

      {/* Testimonial / Highlight Section */}
      <section className="container py-5 my-5">
        <div className="bg-light rounded-4 p-4 p-md-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 pe-lg-5">
              <h2 className="display-5 fw-bold mb-4">h</h2>
              <p className="text-muted fst-italic mb-4 lh-lg">para</p>
              <div className="mt-4">
                <p className="fw-bold mb-1 small">h</p>
                <h4 className="fw-bold">h</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-secondary rounded-4 shadow-sm w-100 position-relative" style={{ height: '450px' }}>
                <span className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-dark bg-opacity-50 text-white rounded-pill small fw-bold">
                  Play video
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 (Text Right, Image Left but different sizing) */}
      <section className="container py-5 my-5">
        <div className="row align-items-center g-5 flex-lg-row-reverse">
          <div className="col-lg-6 ps-lg-5">
            <h2 className="display-6 fw-bold mb-4">h</h2>
            <p className="text-muted mb-4 lh-lg">para</p>

          </div>
          <div className="col-lg-6">
            <div className="bg-light rounded-4 shadow-sm w-100" style={{ height: '450px' }}></div>
          </div>
        </div>
      </section>

    </div>
  );
}
