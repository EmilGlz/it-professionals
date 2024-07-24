'use client'
import { useState } from "react";

const faqData = [
  {
    question: "What services does your company provide?",
    answer: "Yes, we understand that each business has unique needs. We provide personalized IT solutions tailored to fit your specific requirements, ensuring that you get the most effective and efficient service.",
  },
  {
    question: "Do you offer customized IT solutions?",
    answer: "Yes, we understand that each business has unique needs. We provide personalized IT solutions tailored to fit your specific requirements, ensuring that you get the most effective and efficient service.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Yes, we understand that each business has unique needs. We provide personalized IT solutions tailored to fit your specific requirements, ensuring that you get the most effective and efficient service.",
  },
  {
    question: "Can you support remote work environments?",
    answer: "Yes, we understand that each business has unique needs. We provide personalized IT solutions tailored to fit your specific requirements, ensuring that you get the most effective and efficient service.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we understand that each business has unique needs. We provide personalized IT solutions tailored to fit your specific requirements, ensuring that you get the most effective and efficient service.",
  },
];

const FaqBlock = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-[194px] space-y-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-[1px] rounded-[40px] border-[#3E3D3D] cursor-pointer"
          onClick={() => toggleFaq(index)}
        >
          <div className="flex justify-between items-center py-[44px] px-[44px]">
            <h3 className="text-[32px] font-semibold">{item.question}</h3>
            <span
              className={`transition-transform transform text-[40px] ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="pb-[44px] px-[44px] text-[20px]">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqBlock;