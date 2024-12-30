import { Shirt, Footprints, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Shirt,
    title: "LAUNDRY",
    description: "We meticulously clean your clothes, ensuring they come back fresh and ready to wear.",
    link: "/services/wash-and-fold"
  },
  {
    icon: Footprints,
    title: "SHOES CLEANING",
    description: "From sneakers to dress shoes, we'll restore your footwear to its former glory.",
    link: "/services"
  },
  {
    icon: Sparkles,
    title: "IRONING",
    description: "Our expert ironing service ensures your clothes are perfectly pressed, so you can make a lasting impression.",
    link: "/services/wash-and-steam-iron"
  }
];

export const ServiceCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive cleaning solutions for all your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition-shadow bg-white"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to={service.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};