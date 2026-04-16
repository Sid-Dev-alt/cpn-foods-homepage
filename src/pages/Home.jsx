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
  useEffect(() => {
    document.title = "CPN Foods | Authentic Guntur Chilli & Pure Indian Spices Since 1943";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover the 83-year legacy of CPN Foods. Sourcing pure, unadulterated Guntur chillies, turmeric, and moringa leaf powder directly from farmers.");
    }
  }, []);

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
