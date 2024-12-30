import { Shirt, WashingMachine, Timer, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Shirt,
    name: "Dry Cleaning",
    description: "Professional dry cleaning for your delicate garments and formal wear.",
    link: "/services/clothing-dry-cleaning",
  },
  {
    icon: WashingMachine,
    name: "Wash & Fold",
    description: "Regular laundry service with expert folding and packaging.",
    link: "/services/wash-and-fold",
  },
  {
    icon: Timer,
    name: "Express Service",
    description: "Same-day service for urgent cleaning needs.",
    link: "/services/premium-laundry",
  },
  {
    icon: Droplet,
    name: "Stain Removal",
    description: "Specialized treatment for tough stains and spots.",
    link: "/services/premium-laundry",
  },
];

export const Services = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Quality cleaning services for all your garment care needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 hover:shadow-lg transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button asChild className="w-full">
                <Link to={service.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};