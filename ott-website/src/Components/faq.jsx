import React, { useState } from 'react';

import '../index.css';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'What is TNP Officer?',
      answer: 'TNP Officer is an initiative focused on enhancing the employability of youth by providing placement opportunities. It started as a blog in 2021 and has grown into a trusted partner in bridging the gap between education and employment.'
    },
    {
      question: 'What is the mission of TNP Officer?',
      answer: 'The mission of TNP Officer is to empower students to achieve their career aspirations by offering them placement opportunities and preparing them for the job market.'
    },
    {
      question: 'Who does TNP Officer specialize in helping?',
      answer: 'TNP Officer specializes in helping recent graduates and freshers to find internships and their first jobs.'
    },
    {
      question: 'Who does TNP Officer specialize in helping?',
      answer: 'TNP Officer specializes in helping recent graduates and freshers to find internships and their first jobs.'
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <div className="cta-content">
          <h3>FAQs</h3>
          <h6 className="text-gray">Got questions? We've got answers!</h6>
        </div>
        <button className="primary-btn">Ask a question</button>
      </div>

      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div className='faq' key={index}>
            <button
              className="faq-question"
              aria-expanded={expandedIndex === index}
              onClick={() => toggleFAQ(index)}
            >
              <h6>{item.question}</h6>
              <svg
                className={`faq-icon ${expandedIndex === index ? 'rotate' : ''}`}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="7" width="16" height="2" rx="1" />
                <rect y="7" width="16" height="2" rx="1" className="rotate-90" />
              </svg>
            </button>
            <div
              className={`faq-answer ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <div className="p-large text-gray">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
