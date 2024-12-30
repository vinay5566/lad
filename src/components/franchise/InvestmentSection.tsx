import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const InvestmentSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Investment Overview</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Initial Investment</h3>
                  <p className="text-gray-600">₹1.2 Cr - ₹2.4 Cr</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Franchise Fee</h3>
                  <p className="text-gray-600">₹40 Lakhs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Royalty Fee</h3>
                  <p className="text-gray-600">6% of gross sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};