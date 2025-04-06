import { useState } from 'react';

function QueriesSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is this Meteor Mind about?",
      answer: "The Meteor Mind is a space quiz web-application that test your knowledge about the cosmos, planets, stars, and the mysteries of space in a fun and interactive way."
    },
    {
      question: "How do I start the quiz?",
      answer: "To start the quiz, click the 'Start Quiz' button on the homepage and follow the on-screen instructions."
    },
    {
      question: "Can I retake the quiz?",
      answer: "Yes, you can retake the quiz as many times as you like to improve your score."
    },
    {
      question: "Is it suitable for all ages?",
      answer: "Absolutely! Our quiz is designed to be enjoyed by space enthusiasts of all ages."
    },
    {
      question: "What if I get stuck?",
      answer: "If you get stuck, don't worry! You can skip a question or refer to our helpful hints section."
    }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10">Meteor Mind Queries</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full p-4 text-left font-semibold flex justify-between items-center text-primary"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="text-xl">{openFaq === index ? '−' : '+'}</span>
              </button>
              
              {openFaq === index && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QueriesSection;