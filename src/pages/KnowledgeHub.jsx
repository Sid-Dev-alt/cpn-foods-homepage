import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBookOpen, FaLightbulb, FaLeaf, FaShieldAlt } from 'react-icons/fa';

const articles = [
  {
    title: "The Hidden Truth About Chilli Powder: Common Adulterants Found in the Market",
    excerpt: "Discover the common adulterants found in chilli powder, their health risks, and simple home tests to identify adulteration.",
    link: "/knowledge-hub/chilli-powder-adulteration-guide",
    category: "Food Safety",
    icon: <FaShieldAlt className="text-danger" />
  },
  {
    title: "Simple Ways to Identify Adulteration in Chilli Powder at Home",
    excerpt: "Learn simple home tests to identify adulteration in chilli powder like the water test, palm rub test, and more.",
    link: "/knowledge-hub/how-to-identify-adulteration-at-home",
    category: "Food Safety",
    icon: <FaShieldAlt className="text-danger" />
  },
  {
    title: "The Hidden Danger: Adulteration in Chilli Powder",
    excerpt: "Learn how to identify pure chilli powder and protect your family from harmful synthetic dyes and fillers.",
    link: "/knowledge-hub/adulteration-in-chilli-powder-hidden-danger",
    category: "Food Safety",
    icon: <FaShieldAlt className="text-danger" />
  },
  {
    title: "The Great Chilli Debate: Guntur vs Kashmiri vs Byadgi",
    excerpt: "Understanding the difference between the heat of Guntur, the colour of Kashmiri, and the aroma of Byadgi.",
    link: "/knowledge-hub/difference-between-guntur-kashmiri-byadgi-chilli",
    category: "Spice Guide",
    icon: <FaLightbulb className="text-danger" />
  },
  {
    title: "The Golden Spice: Why Lakadong Turmeric is the Gold Standard",
    excerpt: "Discover why high curcumin content makes Lakadong Turmeric nature's most potent source of wellness.",
    link: "/knowledge-hub/the-golden-spice-lakadong-turmeric-benefits",
    category: "Wellness",
    icon: <FaLightbulb className="text-warning" />
  },
  {
    title: "Jaggery vs Sugar: Making the Healthier Choice",
    excerpt: "Why chemical-free natural jaggery is a superior, mineral-rich alternative to refined white sugar.",
    link: "/knowledge-hub/jaggery-vs-sugar-health-benefits",
    category: "Nutrition",
    icon: <FaLeaf className="text-success" />
  },
  {
    title: "Moringa Leaf Powder: The Nutritional Powerhouse",
    excerpt: "Gram for gram, dried moringa leaves contain more vitamins and minerals than almost any other food.",
    link: "/knowledge-hub/moringa-leaf-powder-superfood-benefits",
    category: "Superfood",
    icon: <FaLeaf className="text-success" />
  }
];

export default function KnowledgeHub() {
  return (
    <div className="container py-5 mt-5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-5"
      >
        <h1 className="display-4 fw-bold mb-3">Knowledge Hub</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Deep dives into the science, history, and health benefits of authentic Indian spices and natural products.
        </p>
      </motion.div>

      <div className="row g-4">
        {articles.map((article, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="col-lg-4 col-md-6"
          >
            <Link to={article.link} className="text-decoration-none">
              <div className="card h-100 border-0 shadow-sm hover-lift transition-all rounded-4 p-4">
                <div className="mb-3 fs-3">
                  {article.icon}
                </div>
                <div className="mb-2">
                  <span className="badge bg-light text-dark text-uppercase small ls-1 px-3 py-2">
                    {article.category}
                  </span>
                </div>
                <h4 className="fw-bold text-dark mb-3">
                  {article.title}
                </h4>
                <p className="text-muted small mb-4">
                  {article.excerpt}
                </p>
                <div className="mt-auto pt-3 border-top d-flex align-items-center text-danger fw-bold small">
                  READ MORE <span className="ms-2">→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .ls-1 { letter-spacing: 1px; }
      `}</style>
    </div>
  );
}
