import React from 'react';
import { Store, DollarSign, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Store,
    title: "Proven Business Model",
    description: "Join a successful franchise with years of experience and proven systems",
  },
  {
    icon: DollarSign,
    title: "High ROI Potential",
    description: "Benefit from multiple revenue streams and high-profit margins",
  },
  {
    icon: Users,
    title: "Comprehensive Training",
    description: "Get thorough training and ongoing support for your success",
  },
  {
    icon: TrendingUp,
    title: "Growing Industry",
    description: "Enter a recession-resistant industry with consistent demand",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Franchise?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <benefit.icon className="w-12 h-12 text-brandPurple mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};