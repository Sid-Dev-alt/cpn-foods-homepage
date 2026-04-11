import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TruthSection from '../components/TruthSection';
import DifferenceSection from '../components/DifferenceSection';
import ProductSection from '../components/ProductSection';
import TrustedSection from '../components/TrustedSection';
import ScanProofSection from '../components/ScanProofSection';
import StandBehindSection from '../components/StandBehindSection';
import ExperienceSection from '../components/ExperienceSection';
import ReliableSupplySection from '../components/ReliableSupplySection';
import StandardSection from '../components/StandardSection';

function Home() {
  return (
    <>
      <Hero />
      <TruthSection />
      <DifferenceSection />
      <ProductSection />
      <TrustedSection />
      {/* <ScanProofSection /> */}
      <StandBehindSection />
      <ExperienceSection />
      <ReliableSupplySection />
      <StandardSection />
    </>
  );
}

export default Home;
