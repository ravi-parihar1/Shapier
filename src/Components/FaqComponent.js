import React, { useState } from 'react';
import '../css/FaqComponent.css';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question-container" onClick={toggleAnswer}>
        <span className="faq-question">{question}</span>
        <span className="faq-icon">{isOpen ? '+' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FaqComponent = () => {
  const faqData = [
    {
      question: "How much does installation cost?",
      answer: "The cost of installation varies based on the material, size, and complexity of the installation. Contact us for a detailed quote."
    },
    {
      question: "What’s included in this service?",
      answer: "Our service includes measurement, fabrication, and installation of your new countertops, ensuring a perfect fit and finish."
    },
    {
      question: "What is a free countertop consultation like?",
      answer: "During a free countertop consultation, our expert will visit your home to discuss your needs, take measurements, and provide material and design recommendations."
    },
    {
      question: "How long does it take to install new countertops?",
      answer: "The installation process typically takes 1-2 days, depending on the size and complexity of the project."
    },
    {
      question: "How does Shapier screen for quality installers?",
      answer: "Shapier screens installers through a rigorous process that includes background checks, reference checks, and verification of experience and skills."
    }
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {/* <div className="faq-menu">
        <ul className="faq-menu-list">
          <li>
            <a className="faq-menu-link active" href="#">
              Our Countertop Installation Service
            </a>
          </li>
          <li>
            <a className="faq-menu-link" href="#">
              Our Countertop Installation Products
            </a>
          </li>
        </ul>
      </div> */}
      <div className="faq-items">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
