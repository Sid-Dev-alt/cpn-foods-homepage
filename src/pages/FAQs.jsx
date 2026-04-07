import React, { useEffect } from 'react';

const faqCategories = [
  {
    id: 'chilli',
    title: 'CHILLI & CHILLI POWDER – FAQs',
    questions: [
      {
        q: 'What is Guntur chilli?',
        a: 'Guntur chilli is a famous red chilli variety grown in Guntur district of Andhra Pradesh, known for its very high pungency and strong heat.'
      },
      {
        q: 'Why is Guntur chilli so spicy?',
        a: 'Guntur chilli contains high capsaicin levels, which give it intense heat compared to most Indian chillies.'
      },
      {
        q: 'Is Guntur chilli powder very hot?',
        a: 'Yes. Guntur chilli powder is considered one of the spiciest chilli powders commonly used in Indian cooking.'
      },
      {
        q: 'What is the difference between Guntur chilli and Kashmiri chilli?',
        a: 'Guntur chilli is used mainly for heat, while Kashmiri chilli is valued for bright red colour with mild spiciness.'
      },
      {
        q: 'Which chilli powder is best for spicy food?',
        a: 'Guntur-based chilli powder is best for dishes that require strong heat and authentic spice flavour.'
      },
      {
        q: 'Can chilli powder be blended from different chillies?',
        a: 'Yes. Chilli powder is often blended using different chilli varieties to balance heat and colour.'
      }
    ]
  },
  {
    id: 'moringa',
    title: 'MORINGA POWDER – FAQs',
    questions: [
      {
        q: 'What is moringa powder?',
        a: 'Moringa powder is made by drying and grinding the leaves of the moringa plant, also known as the drumstick tree.'
      },
      {
        q: 'Is moringa powder safe for daily use?',
        a: 'Yes. Moringa powder can be consumed daily in moderate quantities as part of a balanced diet.'
      },
      {
        q: 'What are the benefits of moringa powder?',
        a: 'Moringa powder is traditionally used to support nutrition, immunity, energy levels, and digestion.'
      },
      {
        q: 'How much moringa powder should be consumed daily?',
        a: 'Typically, 1–2 teaspoons per day is commonly used.'
      },
      {
        q: 'What is the best time to consume moringa powder?',
        a: 'Many people prefer consuming moringa powder in the morning or before meals, but it can be taken anytime.'
      }
    ]
  },
  {
    id: 'haldi',
    title: 'HALDI (TURMERIC) POWDER – FAQs',
    questions: [
      {
        q: 'What is haldi powder?',
        a: 'Haldi powder, also known as turmeric powder, is made by drying and grinding turmeric rhizomes.'
      },
      {
        q: 'Is haldi powder and turmeric powder the same?',
        a: 'Yes. Haldi is the Indian name for turmeric.'
      },
      {
        q: 'Can haldi powder be used daily?',
        a: 'Yes. Haldi powder is commonly used daily in Indian cooking.'
      },
      {
        q: 'What makes good quality haldi powder?',
        a: 'Good quality haldi powder has natural yellow colour, strong aroma, and good curcumin content.'
      }
    ]
  },
  {
    id: 'jaggery-blocks',
    title: 'JAGGERY (BLOCKS) – FAQs',
    questions: [
      {
        q: 'What is jaggery?',
        a: 'Jaggery is a traditional natural sweetener made by concentrating sugarcane juice without chemical refining.'
      },
      {
        q: 'Is jaggery healthier than white sugar?',
        a: 'Jaggery is less processed than white sugar and retains natural minerals.'
      },
      {
        q: 'Can jaggery be used daily?',
        a: 'Yes, jaggery can be used daily in moderate quantities.'
      },
      {
        q: 'What are the common forms of jaggery?',
        a: 'Jaggery is commonly available as blocks, cubes, and powder.'
      }
    ]
  },
  {
    id: 'jaggery-powder',
    title: 'JAGGERY POWDER – FAQs',
    questions: [
      {
        q: 'What is jaggery powder?',
        a: 'Jaggery powder is a granulated form of jaggery made by drying and crushing traditionally prepared jaggery.'
      },
      {
        q: 'What are the types of jaggery powder?',
        a: 'Jaggery powder is available in three main types: Sugarcane jaggery powder, Coconut jaggery powder, and Palm jaggery powder.'
      },
      {
        q: 'What is sugarcane jaggery powder?',
        a: 'Sugarcane jaggery powder is made from concentrated sugarcane juice and has a rich, caramel-like sweetness.'
      },
      {
        q: 'What is coconut jaggery powder?',
        a: 'Coconut jaggery powder is made from the sap of coconut palm flowers and is known for mild sweetness.'
      },
      {
        q: 'What is palm jaggery powder?',
        a: 'Palm jaggery powder is made from palm tree sap and has a darker colour and stronger, earthy flavour.'
      },
      {
        q: 'Which jaggery powder is best for daily use?',
        a: 'Sugarcane jaggery powder is most commonly used for daily cooking, while coconut jaggery powder is preferred for lighter sweetness.'
      },
      {
        q: 'Is jaggery powder better than white sugar?',
        a: 'Jaggery powder is less processed and retains natural minerals compared to white sugar.'
      },
      {
        q: 'Is jaggery powder suitable for tea, coffee, and baking?',
        a: 'Yes. Jaggery powder dissolves easily and is suitable for beverages, cooking, and baking.'
      }
    ]
  },
  {
    id: 'supply-quality',
    title: 'SUPPLY & QUALITY – FAQs',
    questions: [
      {
        q: 'Does CPN Foods supply products in bulk?',
        a: 'Yes. CPN Foods supplies products in retail, bulk, institutional, and export quantities.'
      },
      {
        q: 'Are CPN Foods products free from artificial additives?',
        a: 'Yes. CPN Foods focuses on natural sourcing and avoids artificial colours and chemical additives.'
      },
      {
        q: 'How should these products be stored?',
        a: 'All products should be stored in a cool, dry place in airtight containers to maintain freshness.'
      }
    ]
  }
];

export default function FAQs() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Guntur chilli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Guntur chilli is a high-pungency red chilli variety grown in Andhra Pradesh, known for strong heat."
          }
        },
        {
          "@type": "Question",
          "name": "Is moringa powder safe for daily use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, moringa powder can be consumed daily in moderate quantities."
          }
        },
        {
          "@type": "Question",
          "name": "Is jaggery powder better than white sugar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jaggery powder is less processed and retains natural minerals compared to white sugar."
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('faq-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="container py-5 mt-4">
      {/* Header Section */}
      <div className="text-center mb-5 pb-4 border-bottom">
        <h6 className="text-danger text-uppercase fw-bold ls-2 mb-2">Help Center</h6>
        <h1 className="display-4 fw-bold mb-3">COMMON FAQ PAGE – CPN FOODS</h1>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>
          Find answers to frequently asked questions about our spices, superfoods, and natural sweeteners.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          {faqCategories.map((category, catIndex) => (
            <div key={category.id} className={catIndex !== 0 ? 'mt-5 pt-4' : ''}>
              <div className="d-flex align-items-center mb-4 pb-2 border-bottom">
                <span className="fs-2 me-3">{category.icon}</span>
                <h2 className="fw-bold mb-0 text-uppercase h4">{category.title}</h2>
              </div>

              <div className="row g-4">
                {category.questions.map((item, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <div className="p-4 bg-white border border-light shadow-sm rounded-4 h-100 hover-lift transition-all">
                      <h3 className="h6 fw-bold mb-3 text-dark d-flex gap-2">
                        <span className="text-danger">Q.</span> {item.q}
                      </h3>
                      <p className="text-muted small lh-lg mb-0">
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-5 pt-5 text-center">
        <div className="p-4 bg-light rounded-4 d-inline-block border">
          <p className="mb-0 text-muted">
            Still have questions? <a href="/contact" className="text-danger fw-bold text-decoration-none border-bottom border-danger">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
}
