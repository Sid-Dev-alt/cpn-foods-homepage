import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductCategory() {
  const { category } = useParams();
  const formattedCategory = category ? category.replace(/-/g, ' ') : 'Category';

  return (
    <div className="container py-5 text-center mt-5" style={{ minHeight: '60vh' }}>
      <h1 className="text-capitalize fw-bold">{formattedCategory}</h1>
      <p className="text-muted">Explore our {formattedCategory} category.</p>
    </div>
  );
}
