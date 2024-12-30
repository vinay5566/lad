import { Calendar, Truck, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Schedule Pickup",
    description: "Book your pickup online or call us",
  },
  {
    icon: Truck,
    title: "We Collect",
    description: "Our team picks up your clothes",
  },
  {
    icon: RefreshCw,
    title: "Processing",
    description: "Expert cleaning of your garments",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Clean clothes delivered to you",
  },
];

export const HowItWorks = () => {
  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Simple steps to get your clothes cleaned
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative text-center animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6 transition-transform duration-300 hover:scale-110">
                <step.icon className="w-8 h-8 text-white animate-bounce-in" style={{ animationDelay: `${(index + 1) * 200}ms` }} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};