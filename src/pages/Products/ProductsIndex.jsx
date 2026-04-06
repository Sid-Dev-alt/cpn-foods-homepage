import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Guntur Chilli',
    category: 'Spices',
    path: '/products/spices/guntur-chilli',
    image: 'https://placehold.co/600x400',
    description: 'India’s hottest and most trusted red chilli, known for its deep pungency.'
  },
  {
    id: 2,
    name: 'Chilli Powder',
    category: 'Spices',
    path: '/products/spices/chilli-powder',
    image: 'https://placehold.co/600x400',
    description: 'Pure, authentic, and essential Indian spice for heat and flavour.'
  },
  {
    id: 3,
    name: 'Haldi Powder',
    category: 'Spices',
    path: '/products/spices/haldi-powder',
    image: 'https://placehold.co/600x400',
    description: 'Pure Indian turmeric powder known for its rich colour, strong aroma, and curcumin content.'
  },
  {
    id: 4,
    name: 'Jaggery',
    category: 'Natural Sweeteners',
    path: '/products/natural-sweeteners/jaggery',
    image: 'https://placehold.co/600x400',
    description: 'A traditional natural sweetener made from concentrated sugarcane juice, rich in minerals.'
  },
  {
    id: 5,
    name: 'Moringa Powder',
    category: 'Superfoods',
    path: '/products/superfoods/moringa-powder',
    image: 'https://placehold.co/600x400',
    description: 'A natural superfood from Indian Moringa leaves, rich in nutrients.'
  }
];

export default function ProductsIndex() {
  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h6 className="text-danger text-uppercase fw-bold ls-2 mb-2">Our Catalog</h6>
        <h1 className="display-4 fw-bold mb-3">All Products</h1>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>
          Explore our range of premium, pure, and authentic Indian spices and superfoods.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <Link to={product.path} className="text-decoration-none group">
              <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift transition-all">
                <div className="overflow-hidden rounded-top-4">
                  <img 
                    src={product.image} 
                    className="card-img-top transition-transform group-hover-scale" 
                    alt={product.name} 
                  />
                </div>
                <div className="card-body p-4">
                  <span className="badge bg-danger-subtle text-danger rounded-pill px-3 py-2 mb-3 fw-bold small">
                    {product.category}
                  </span>
                  <h3 className="card-title fw-bold text-dark mb-2 h4">{product.name}</h3>
                  <p className="card-text text-muted small lh-base mb-4">
                    {product.description}
                  </p>
                  <div className="d-flex align-items-center text-danger fw-bold gap-2">
                    View Details <span className="transition-transform group-hover-translate-x">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
