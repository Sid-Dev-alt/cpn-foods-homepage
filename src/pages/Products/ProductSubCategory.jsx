import React from 'react';
import { useParams } from 'react-router-dom';
import GunturChilli from './GunturChilli';
import MoringaLeafPowder from './MoringaLeafPowder';
import ChilliPowder from './ChilliPowder';
import HaldiPowder from './HaldiPowder';
import Jaggery from './Jaggery';
import MoringaKaram from './MoringaKaram';
import CurryPowder from './CurryPowder';

export default function ProductSubCategory() {
  const { category, subcategory } = useParams();

  // If the subcategory is exactly 'guntur-chilli', render the dedicated component
  if (subcategory === 'guntur-chilli') {
    return <GunturChilli />;
  }

  // If the subcategory is exactly 'moringa-leaf-powder', render the dedicated component
  if (subcategory === 'moringa-leaf-powder') {
    return <MoringaLeafPowder />;
  }

  // If the subcategory is exactly 'chilli-powder', render the dedicated component
  if (subcategory === 'chilli-powder') {
    return <ChilliPowder />;
  }

  // If the subcategory is exactly 'haldi-powder', render the dedicated component
  if (subcategory === 'haldi-powder') {
    return <HaldiPowder />;
  }

  // If the subcategory is exactly 'jaggery', render the dedicated component
  if (subcategory === 'jaggery') {
    return <Jaggery />;
  }

  // If the subcategory is exactly 'moringa-karam-poodi', render the dedicated component
  if (subcategory === 'moringa-karam-poodi') {
    return <MoringaKaram />;
  }

  // If the subcategory is exactly 'kura-karam', render the dedicated component
  if (subcategory === 'kura-karam') {
    return <CurryPowder />;
  }

  const formattedSub = subcategory ? subcategory.replace(/-/g, ' ') : 'Subcategory';
  const formattedCat = category ? category.replace(/-/g, ' ') : 'Category';

  return (
    <div className="container py-5 text-center mt-5" style={{ minHeight: '60vh' }}>
      <h6 className="text-danger text-uppercase fw-bold text-capitalize">{formattedCat}</h6>
      <h1 className="text-capitalize fw-bold mb-3">{formattedSub}</h1>

    </div>
  );
}
