import React, { useEffect } from 'react';
import moringaLeafImg from '../../img/moringa_leaf_powder.webp';

export default function MoringaLeafPowder() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'moringa-leaf-powder-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Moringa Leaf Powder",
      "brand": {
        "@type": "Brand",
        "name": "CPN Foods"
      },
      "description": "Moringa leaf powder made from dried moringa leaves, traditionally used for nutrition, immunity support and daily wellness.",
      "category": "Herbal Products",
      "countryOfOrigin": "IN",
      "manufacturer": {
        "@type": "Organization",
        "name": "CPN Foods"
      }
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('moringa-leaf-powder-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="container py-5 mt-4">
      {/* Header Section */}
      <div className="row mb-5 pb-4 border-bottom">
        <div className="col-12 col-md-8">
          <h1 className="fw-bold mb-3 display-5">Moringa Leaf Powder – Natural Superfood from Indian Moringa Leaves</h1>
        </div>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          {/* What is Moringa Leaf Powder? */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">What is Moringa Leaf Powder?</h2>
            <p className="text-muted lh-lg mb-3">
              Moringa Leaf Powder is a natural herbal powder made by drying and grinding the leaves of the <strong>Moringa oleifera</strong> plant. Widely known as the “<strong>drumstick tree</strong>”, moringa has been used in traditional Indian diets for centuries due to its <strong>nutritional richness and health-supporting properties</strong>.
            </p>
            <p className="text-muted lh-lg mb-3">
              Moringa Leaf Powder is valued for being:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>100% plant-based</li>
              <li>Nutrient-dense</li>
              <li>Suitable for daily consumption (in moderation)</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* Origin of Moringa Leaves in India */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Origin of Moringa Leaves in India</h2>
            <p className="text-muted lh-lg mb-3">
              Moringa trees grow abundantly across many parts of India, especially in regions with warm climate and well-drained soil. Indian moringa leaves are preferred globally due to:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Strong nutrient profile</li>
              <li>Natural growth conditions</li>
              <li>Traditional cultivation practices</li>
            </ul>
            <p className="text-muted lh-lg">
              India is one of the <strong>largest producers and exporters of moringa leaf powder</strong> worldwide.
            </p>
            <hr className="my-5" />
          </section>

          {/* How Moringa Leaf Powder is Made */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">How Moringa Leaf Powder is Made</h2>
            <p className="text-muted lh-lg mb-3">
              High-quality moringa leaf powder follows a careful process:
            </p>
            <ol className="text-muted lh-lg mb-4 ms-3">
              <li>Fresh moringa leaves are harvested</li>
              <li>Leaves are washed thoroughly</li>
              <li>Shade-dried at controlled temperatures</li>
              <li>Finely ground into powder</li>
              <li>Packed hygienically to preserve nutrients</li>
            </ol>
            <div className="p-3 bg-light border-start border-4 border-success rounded mb-4">
              <p className="mb-0 text-muted"> <strong>Low-temperature drying is critical</strong> to retain vitamins, minerals, and chlorophyll.</p>
            </div>
            <hr className="my-5" />
          </section>

          {/* Nutritional Profile of Moringa Leaf Powder */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Nutritional Profile of Moringa Leaf Powder</h2>
            <p className="text-muted lh-lg mb-3">Moringa leaf powder is naturally rich in:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Plant protein</li>
              <li>Dietary fibre</li>
              <li>Iron</li>
              <li>Calcium</li>
              <li>Potassium</li>
              <li>Antioxidants</li>
              <li>Vitamins A, C & E</li>
            </ul>
            <p className="text-muted lh-lg">
              This makes it a popular ingredient in <strong>health foods, supplements, smoothies, and traditional remedies</strong>.
            </p>
          </section>

          {/* Health Benefits of Moringa */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Health Benefits of Moringa Leaf Powder</h2>
            <p className="text-muted lh-lg mb-3">When consumed regularly in recommended quantities, moringa leaf powder may help with:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Supporting immunity
              </li>
              <li>Improving energy levels</li>
              <li>Supporting digestion</li>
              <li>Providing antioxidant protection</li>
              <li>Supporting overall nutritional balance</li>
            </ul>
            <div className="p-3 bg-light border-start border-4 border-success rounded mb-4">
              <p className="text-muted lh-lg">
                ⚠️ Note: Moringa leaf powder is a food supplement, not a medicine.
              </p>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="fw-bold mb-4">How to Consume Moringa Leaf Powder</h2>
            <p className="text-muted lh-lg mb-3">Common ways to use moringa leaf powder include:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Mixing with warm water</li>
              <li>Adding to smoothies or juices</li>
              <li>Sprinkling into soups or curries</li>
              <li>Mixing with honey or buttermilk</li>
            </ul>
            <p className="text-muted lh-lg mb-3">Typical consumption:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>1–2 teaspoons per day</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* How to Identify Pure Moringa Leaf Powder */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">How to Identify Pure Moringa Leaf Powder</h2>
            <p className="text-muted lh-lg mb-3">Pure moringa leaf powder can be identified by:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Natural green colour (not dull or brown)</li>
              <li>Mild leafy aroma</li>
              <li>Fine texture</li>
              <li>No artificial flavour or colour</li>
            </ul>
            <p className="text-muted lh-lg mb-3">Adulterated moringa leaf powder may appear:</p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Greyish or brown</li>
              <li>Odourless</li>
              <li>Excessively bitter</li>
            </ul>
            <hr className="my-5" />
          </section>

          {/* Moringa Leaf Powder vs Other Herbal Powders */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">Moringa Leaf Powder vs Other Herbal Powders</h2>
            <div className="table-responsive">
              <table className="table table-bordered text-muted shadow-sm">
                <thead className="bg-light">
                  <tr>
                    <th className="fw-bold">Feature</th>
                    <th className="fw-bold">Moringa Leaf Powder</th>
                    <th className="fw-bold">Wheatgrass Powder</th>
                    <th className="fw-bold">Spirulina</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-bold">Source</td>
                    <td>Leaf-based</td>
                    <td>Grass</td>
                    <td>Algae</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Taste</td>
                    <td>Mild, leafy</td>
                    <td>Strong grassy</td>
                    <td>Strong</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Daily Use</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Limited</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Nutrient Density</td>
                    <td>High</td>
                    <td>Medium</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="my-5" />

          {/* CPN Foods Quality Section */}
          <section className="mb-5">
            <h2 className="fw-bold mb-4">CPN Foods Moringa Leaf Powder – Quality You Can Trust</h2>
            <p className="text-muted lh-lg mb-3">
              At <strong>CPN Foods</strong>, our moringa leaf powder is produced using carefully selected leaves and hygienic processing methods to ensure:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Natural green colour</li>
              <li>Nutrient retention</li>
              <li>Clean, fine grinding</li>
              <li>Consistent quality</li>
            </ul>
            <p className="text-muted lh-lg mb-0">
              We focus on <strong>purity, traceability, and freshness</strong>.
            </p>
          </section>

          <hr className="my-5" />

          {/* Packaging & Supply Options Section */}
          {/* <section className="mb-5">
            <h2 className="fw-bold mb-4">Packaging & Supply Options</h2>
            <p className="text-muted lh-lg mb-3">
              CPN Foods moringa leaf powder is available in:
            </p>
            <ul className="text-muted lh-lg mb-4 ms-3">
              <li>Retail packs</li>
              <li>Bulk packaging</li>
              <li>Institutional supply</li>
              <li>Export-ready packaging</li>
            </ul>
            <p className="text-muted lh-lg mb-0 text-success fw-bold">
              Custom packing options are available on request.
            </p>
          </section> */}
        </div>

        {/* Sidebar / Additional Info */}
        <div className="col-lg-4">
          <div className="mb-4">
            <img 
              src={moringaLeafImg} 
              alt="Moringa Powder" 
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="bg-light rounded p-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-3">Quick Facts</h4>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Origin</span>
              <span className="fw-bold">India</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Source</span>
              <span className="fw-bold text-success">Moringa oleifera (Drumstick tree)</span>
            </div>
            <div className="mb-3">
              <span className="d-block text-muted small text-uppercase">Nature</span>
              <span className="fw-bold">100% Plant-based</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
