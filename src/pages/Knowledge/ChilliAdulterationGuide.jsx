import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { 
  FaShieldAlt, 
  FaFlask, 
  FaHeartbeat, 
  FaCheckCircle, 
  FaInfoCircle, 
  FaLeaf, 
  FaExclamationTriangle,
  FaSearch
} from 'react-icons/fa';

export default function ChilliAdulterationGuide() {
  useEffect(() => {
    // 1. Title
    document.title = "Chilli Powder Adulteration: Common Adulterants, Health Risks & Simple Detection Tests";

    // Helper to set/update meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      return element;
    };

    // 2. SEO Meta Tags
    setMetaTag('name', 'description', "Learn about common adulterants found in chilli powder including artificial colors, brick powder, starch, sawdust, and harmful chemicals. Discover simple home tests to identify adulteration and protect your family's health.");
    setMetaTag('name', 'keywords', "chilli powder adulteration, adulterants in chilli powder, synthetic colors in chilli powder, Sudan red, brick powder in spices, food adulteration, spice adulteration, how to identify adulterated chilli powder, pure chilli powder, food safety India");
    setMetaTag('name', 'author', "CPN Foods");
    setMetaTag('name', 'robots', "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMetaTag('name', 'language', "English");

    // 3. Open Graph / Social Sharing
    setMetaTag('property', 'og:title', "The Hidden Truth About Chilli Powder Adulteration");
    setMetaTag('property', 'og:description', "Discover the common adulterants found in chilli powder, their health risks, and simple home tests to identify adulteration.");
    setMetaTag('property', 'og:type', 'article');
    setMetaTag('property', 'og:site_name', 'CPN Foods');

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', "summary_large_image");
    setMetaTag('name', 'twitter:title', "The Hidden Truth About Chilli Powder Adulteration");
    setMetaTag('name', 'twitter:description', "Learn how to identify adulterated chilli powder using simple home tests and understand the risks of synthetic colors and fillers.");

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    let hadCanonical = !!canonical;
    let oldCanonicalHref = canonical ? canonical.getAttribute('href') : '';
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://www.example.com/chilli-powder-adulteration-guide");

    // 6. JSON-LD Structured Data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Hidden Truth About Chilli Powder: Common Adulterants Found in the Market",
      "description": "Detailed guide on common adulterants found in chilli powder, health risks, and simple methods to identify adulteration at home.",
      "author": {
        "@type": "Organization",
        "name": "CPN Foods"
      },
      "publisher": {
        "@type": "Organization",
        "name": "CPN Foods"
      },
      "articleSection": [
        "Food Safety",
        "Spices",
        "Health Awareness"
      ],
      "keywords": [
        "chilli powder adulteration",
        "food adulteration",
        "synthetic dyes",
        "Sudan red",
        "pure spices",
        "food safety"
      ],
      "inLanguage": "en",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.example.com/chilli-powder-adulteration-guide"
      }
    });
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const el = document.getElementById('article-schema');
      if (el) el.remove();

      if (hadCanonical) {
        canonical.setAttribute('href', oldCanonicalHref);
      } else {
        canonical.remove();
      }

      setMetaTag('name', 'description', "CPN Foods - A legacy of purity since 1943. Wholesale and retail suppliers of genuine Guntur chilli powder, turmeric powder, moringa leaf powder, and natural jaggery.");
      setMetaTag('name', 'keywords', "CPN Foods, Guntur chilli powder, pure spices India, turmeric powder wholesale, moringa leaf powder, natural jaggery Hyderabad, spicy Andhra spices");

      const elementsToRemove = [
        document.querySelector('meta[name="author"]'),
        document.querySelector('meta[name="robots"]'),
        document.querySelector('meta[name="language"]'),
        document.querySelector('meta[property="og:title"]'),
        document.querySelector('meta[property="og:description"]'),
        document.querySelector('meta[property="og:type"]'),
        document.querySelector('meta[property="og:site_name"]'),
        document.querySelector('meta[name="twitter:card"]'),
        document.querySelector('meta[name="twitter:title"]'),
        document.querySelector('meta[name="twitter:description"]')
      ];
      elementsToRemove.forEach(el => {
        if (el) el.remove();
      });
    };
  }, []);

  const adulterants = [
    {
      title: "1. Artificial Red Colors & Dyes",
      whyAdded: "To give chilli powder an attractive bright red color.",
      details: [
        { label: "Common Synthetic Dyes Used", value: "Sudan Red, Rhodamine B, and oil-soluble industrial dyes." }
      ],
      healthRisks: "These dyes are not food-grade and can be highly dangerous. Possible effects include liver damage, kidney problems, allergic reactions, and increased cancer risk with long-term consumption.",
      detection: "Add a spoon of chilli powder into a glass of water. Artificial color quickly spreads into the water, while natural chilli powder settles slowly without intense coloring.",
      color: "danger",
      icon: <FaFlask className="text-danger" />
    },
    {
      title: "2. Brick Powder",
      whyAdded: "To increase bulk and weight cheaply.",
      details: [
        { label: "Appearance", value: "Finely ground brick powder resembles chilli powder in texture and color." }
      ],
      healthRisks: "Stomach irritation, digestive issues, and potential contamination with dust and harmful particles.",
      detection: "Sprinkle chilli powder in water. Brick particles settle quickly at the bottom due to their heaviness.",
      color: "warning",
      icon: <FaExclamationTriangle className="text-warning" />
    },
    {
      title: "3. Sawdust or Rice Husk Powder",
      whyAdded: "Cheap filler material to increase quantity.",
      healthRisks: "Poor digestion, gastrointestinal discomfort, and reduced nutritional quality.",
      detection: "Add the powder to water. Sawdust or husk particles float on the surface.",
      color: "secondary",
      icon: <FaLeaf className="text-secondary" />
    },
    {
      title: "4. Salt Powder or Chalk Powder",
      whyAdded: "To increase weight and improve flow.",
      healthRisks: "Digestive discomfort, long-term mineral imbalance, and poor spice quality.",
      detection: "Mix with water. Chalk creates a cloudy white residue.",
      color: "info",
      icon: <FaInfoCircle className="text-info" />
    },
    {
      title: "5. Soapstone Powder / Talc",
      whyAdded: "To increase volume and improve smooth texture.",
      healthRisks: "Harmful for digestion and may contain unsafe mineral contaminants.",
      detection: "Rub between fingers. It feels unusually smooth and slippery.",
      color: "dark",
      icon: <FaSearch className="text-dark" />
    },
    {
      title: "6. Starch Powder",
      whyAdded: "To increase quantity at lower cost.",
      details: [
        { label: "Common Sources", value: "Corn starch, tapioca starch, and wheat flour." }
      ],
      healthRisks: "Mostly economic fraud, but lowers spice purity, flavor, and culinary quality.",
      detection: "Add a few drops of iodine solution. A blue-black color indicates starch presence.",
      color: "primary",
      icon: <FaFlask className="text-primary" />
    },
    {
      title: "7. Exhausted Chilli Powder",
      whyAdded: "Previously extracted chilli waste after removing oils and oleoresins mixed back into fresh powder.",
      healthRisks: "Poor flavor, low nutrition, reduced pungency, and often stale and contaminated recycled waste.",
      detection: "Lack of natural aroma, low pungency, and flat taste compared to authentic powder.",
      color: "danger",
      icon: <FaExclamationTriangle className="text-danger" />
    },
    {
      title: "8. Non-Permitted Preservatives or Chemicals",
      whyAdded: "Some manufacturers use unauthorized chemicals to extend shelf life or retain color.",
      healthRisks: "Toxicity, allergic reactions, and long-term organ damage.",
      detection: "Requires laboratory chemical testing for precise identification.",
      color: "warning",
      icon: <FaShieldAlt className="text-warning" />
    }
  ];

  return (
    <div className="container py-5 mt-4">
      <Link to="/knowledge-hub" className="text-decoration-none text-danger fw-bold small d-inline-flex align-items-center mb-4 hover-translate-x-n3 transition-all">
        <HiArrowNarrowLeft className="me-2" /> BACK TO KNOWLEDGE HUB
      </Link>

      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="row mb-5 pb-4 border-bottom"
      >
        <div className="col-lg-10">
          <h6 className="text-danger text-uppercase fw-bold ls-2 mb-3">Knowledge Hub • Food Safety</h6>
          <h1 className="display-4 fw-bold mb-4" style={{ color: '#2b2d42' }}>
            The Hidden Truth About Chilli Powder: Common Adulterants Found in the Market
          </h1>
          <h3 className="h4 text-muted mb-4">Why Chilli Powder Adulteration is a Serious Concern</h3>
          <p className="lead text-muted lh-base">
            Chilli powder is one of the most widely used spices in Indian kitchens. Its vibrant red color, pungent aroma, and spicy flavor make it essential in daily cooking. But unfortunately, the growing demand for bright-looking and low-cost chilli powder has led to widespread adulteration in the market.
          </p>
          <p className="text-muted lh-lg">
            Many commercially available chilli powders are mixed with harmful substances to increase weight, improve color, or reduce production costs. Some adulterants are harmless fillers, while others can seriously affect human health. Understanding these adulterants can help consumers make safer food choices.
          </p>
        </div>
      </motion.div>

      <div className="row g-5">
        
        <div className="col-lg-8">
          <section className="mb-5">
            <h2 className="fw-bold mb-4" style={{ color: '#2b2d42' }}>Common Adulterants Found in Chilli Powder</h2>
            
            <div className="row g-4">
              {adulterants.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="col-12"
                >
                  <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift transition-all p-4">
                    <div className="d-flex align-items-center mb-3">

                      <h4 className="fw-bold mb-0 text-dark">{item.title}</h4>
                    </div>
                    
                    <div className="mb-3">
                      <span className="badge bg-light text-dark text-uppercase small px-3 py-2">
                        Why Added: {item.whyAdded}
                      </span>
                    </div>

                    {item.details && item.details.map((detail, dIdx) => (
                      <p className="mb-2 text-muted" key={dIdx}>
                        <strong>{detail.label}:</strong> {detail.value}
                      </p>
                    ))}

                    <div className="row g-3 mt-2">
                      <div className="col-md-6">
                        <div className="p-3 rounded-3 bg-danger-subtle text-danger-emphasis h-100">
                          <h6 className="fw-bold mb-2 d-flex align-items-center">
                            <FaHeartbeat className="me-2" /> Health Risks
                          </h6>
                          <p className="small mb-0">{item.healthRisks}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-3 rounded-3 bg-success-subtle text-success-emphasis h-100">
                          <h6 className="fw-bold mb-2 d-flex align-items-center">
                            <FaCheckCircle className="me-2" /> Detection Test
                          </h6>
                          <p className="small mb-0">{item.detection}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

         
          <section className="mb-5 p-4 rounded-4 bg-light shadow-sm">
            <h3 className="fw-bold mb-3" style={{ color: '#2b2d42' }}>Why Adulteration Happens</h3>
            <p className="text-muted mb-3">
              The spice industry faces various commercial pressures that lead to compromised standards:
            </p>
            <ul className="text-muted lh-lg">
              <li><strong>Rising raw material prices:</strong> Raw chilli prices make production expensive, encouraging cutting agents.</li>
              <li><strong>Demand for low-cost products:</strong> Competitive pressure pushes manufacturers to offer unnaturally cheap spices.</li>
              <li><strong>Consumer preference for bright colors:</strong> The expectation that chilli powder must be fluorescent red encourages dye usage.</li>
              <li><strong>Poor quality control:</strong> Unorganized or unregulated markets lack strict safety oversight.</li>
            </ul>
          </section>

         
          <section className="mb-5 py-5 border-top border-bottom text-center">
            <h2 className="fw-bold mb-3 text-danger">The Importance of Pure Chilli Powder</h2>
            <p className="text-muted lead max-w-700 mx-auto">
              Pure chilli powder is not just about taste — it is about health, nutrition, and food safety.
            </p>
            <p className="text-muted max-w-700 mx-auto mt-3">
              Good-quality chilli powder is rich in natural antioxidants, Vitamin A, and capsaicin compounds that support wellness. Adulterated products compromise both health and culinary quality.
            </p>
          </section>

         
          <section className="mb-5">
            <h3 className="fw-bold mb-3 text-dark">Final Thoughts</h3>
            <p className="text-muted lh-lg">
              Chilli powder adulteration is more common than many consumers realize. From brick powder to dangerous synthetic dyes, several harmful substances may enter everyday food unnoticed.
            </p>
            <p className="text-muted lh-lg">
              Awareness is the first step toward safer eating. By understanding common adulterants and performing simple home tests, consumers can protect their families and encourage ethical food practices.
            </p>
            <p className="text-muted lh-lg fw-semibold">
              Choosing authentic, naturally processed chilli powder supports better health, honest farmers, sustainable food systems, and cleaner nutrition for future generations. Pure spices may cost slightly more — but the long-term benefits are priceless.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="p-4 bg-white border shadow-sm rounded-4 sticky-top mb-4" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-4" style={{ color: '#2b2d42' }}>How to Protect Yourself</h4>
            
            <div className="mb-4 d-flex align-items-start">
              <div className="bg-danger text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                <small>1</small>
              </div>
              <div>
                <h6 className="fw-bold text-dark mb-1">Buy from Trusted Brands</h6>
                <p className="small text-muted mb-0">Purchase from reliable brands with proper safety certifications like FSSAI.</p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-start">
              <div className="bg-danger text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                <small>2</small>
              </div>
              <div>
                <h6 className="fw-bold text-dark mb-1">Avoid Extremely Cheap Products</h6>
                <p className="small text-muted mb-0">Very low prices often indicate compromised quality or artificial fillers.</p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-start">
              <div className="bg-danger text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                <small>3</small>
              </div>
              <div>
                <h6 className="fw-bold text-dark mb-1">Observe Color Carefully</h6>
                <p className="small text-muted mb-0">Natural chilli powder is deep red but not unnaturally bright or fluorescent.</p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-start">
              <div className="bg-danger text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                <small>4</small>
              </div>
              <div>
                <h6 className="fw-bold text-dark mb-1">Smell and Taste</h6>
                <p className="small text-muted mb-0">Pure chilli powder has a fresh, pungent aroma and consistent spicy kick.</p>
              </div>
            </div>

            <div className="mb-0 d-flex align-items-start">
              <div className="bg-danger text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                <small>5</small>
              </div>
              <div>
                <h6 className="fw-bold text-dark mb-1">Prefer Farm-Sourced</h6>
                <p className="small text-muted mb-0">Direct sourcing from trusted farmers or small batches reduces adulteration risks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.08) !important;
        }
        .ls-2 { letter-spacing: 2px; }
        .max-w-700 { max-width: 700px; }
        .bg-danger-subtle { background-color: #f8d7da; }
        .text-danger-emphasis { color: #842029; }
        .bg-success-subtle { background-color: #d1e7dd; }
        .text-success-emphasis { color: #0f5132; }
      `}</style>
    </div>
  );
}
