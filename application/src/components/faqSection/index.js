import React, { useState } from "react";

const faqs = [
  {
    question: "How long does integrating systems like CRM or ERP usually take?",
    answer: (
      <>
        <strong>Standard integration:</strong> A few weeks up to 2 months. <br />
        <strong>Complex integrations:</strong> 3 to 6 months depending on tools involved.
      </>
    ),
  },
  {
    question: "What does pricing look like for integrations or web projects?",
    answer:
      "Pricing varies based on scope and customization. Contact us for a tailored quote.",
  },
  {
    question: "Is the team Saudi-based?",
    answer:
      "Yes. Lumra Labs is a Saudi-based company with an international team bringing global expertise while operating locally.",
  },
  {
    question: "Do you provide training and ongoing support after setup?",
    answer: (
      <>
        Team training sessions <br />
        Ongoing maintenance and updates <br />
        Feature development as your business evolves
      </>
    ),
  },
  {
    question: "How do you handle data security and privacy?",
    answer:
      "We follow strict security protocols, encryption standards, and compliance requirements to protect your sensitive information.",
  },
  {
    question: "Do you only work with large companies, or can smaller businesses benefit too?",
    answer:
      "We work with businesses of all sizes. Whether you’re a startup or an enterprise, we tailor solutions to your needs.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "4rem 0",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1rem",
              border: "1px solid #333",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#111",
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "1rem 1.5rem",
                background: "#111",
                color: "#fff",
                border: "none",
                fontSize: "1.1rem",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div
                style={{
                  padding: "1rem 1.5rem",
                  background: "#1a1a1a",
                  color: "#ddd",
                  borderTop: "1px solid #333",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
