import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I book a travel package with Wondera?",
      answer: "Simply fill out the contact form on our website or reach out to us directly. Our travel experts will discuss your preferences, budget, and requirements to create a customized package just for you."
    },
    {
      question: "Can I customize my travel package?",
      answer: "Absolutely! We specialize in creating personalized travel experiences. Every package can be tailored to match your specific interests, budget, and schedule. Just let us know your preferences and we'll craft the perfect itinerary."
    },
    {
      question: "What's included in your travel packages?",
      answer: "Our packages typically include accommodations, guided tours, select meals, airport transfers, and 24/7 support. Specific inclusions vary by package and can be customized to your needs."
    },
    {
      question: "Do you offer corporate travel services?",
      answer: "Yes! We provide comprehensive corporate travel solutions including team retreats, business trips, conference organization, and incentive programs. We handle all logistics so you can focus on your business objectives."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, bank transfers, and can arrange installment payment plans for larger bookings. A deposit is typically required to confirm your reservation, with the balance due before departure."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellation policies vary by package and destination. Generally, cancellations made 60+ days before departure receive a full refund minus a small processing fee. We recommend purchasing travel insurance for added protection."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "While we don't directly provide insurance, we highly recommend and can help you arrange comprehensive travel insurance through our trusted partners to protect your investment."
    },
    {
      question: "What kind of support do you provide during the trip?",
      answer: "We provide 24/7 support throughout your journey. You'll have direct access to our travel team for any assistance, questions, or unexpected situations that may arise during your trip."
    }
  ];

  return (
    <section id="faqs" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Everything you need to know about traveling with Wondera
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg text-gray-900 pr-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
