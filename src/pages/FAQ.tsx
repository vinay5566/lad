import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does dry cleaning take?",
      answer: "Our standard dry cleaning service takes 2-3 business days. We also offer express service with same-day or next-day delivery for an additional fee.",
    },
    {
      question: "Do you offer pickup and delivery?",
      answer: "Yes, we offer free pickup and delivery services within our service area. You can schedule a pickup through our website or by calling us.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payments through our secure payment system.",
    },
    {
      question: "How do you handle delicate garments?",
      answer: "Our experienced staff carefully inspects each garment and uses appropriate cleaning methods based on the fabric type and care instructions.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We have a 100% satisfaction guarantee. If you're not completely satisfied with our service, we'll re-clean your garments at no additional cost.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find answers to common questions about our services.
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;