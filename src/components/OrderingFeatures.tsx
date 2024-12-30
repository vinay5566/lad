import { Smartphone, Truck, Rocket } from "lucide-react";

export const OrderingFeatures = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Order with Ease",
      description: "Streamline your laundry process by placing orders online or via our Mobile App for a hassle-free experience."
    },
    {
      icon: Truck,
      title: "Convenient Pickup & Delivery",
      description: "Relax as we bring the laundry service to your doorstep! Our pickup service operates 7 days a week for your convenience."
    },
    {
      icon: Rocket,
      title: "Speedy Express Delivery",
      description: "Need it in a hurry? Opt for our express delivery for swift turnaround times. From dirty to clean in no time!"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-down">
          Effortless Ordering and Delivery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-up transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                <feature.icon className="w-8 h-8 text-primary animate-bounce-in" style={{ animationDelay: `${(index + 1) * 200}ms` }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};