import React from 'react';

export const HeroSection = () => {
  return (
    <section className="bg-brand-gradient text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-down">
            Own a FreshPress Franchise
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-up">
            Join the fastest-growing laundry and dry cleaning franchise in the industry
          </p>
        </div>
      </div>
    </section>
  );
};